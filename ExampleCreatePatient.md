# Example Create a Patient

## Overview

This example shows how to create a new Patient within a UI, send the data to a server and then get it back.  The UI, Patient information and server are all fictional.

One of the reasons the data structures have undefined elements is because the FHIR data is large and complicated.  Keeping the data that is going
back and forth with a server to a minimum it important for performance when transferring. The undefined ensures that unused/unneccessary data is
not tranferred.


## Referencing the data structures

You can use the import as in the following example that imports 3 classes and two utility functions:

```
import { Patient, Annotation, Condition, createCodeableConcept, createPatient } from "fhirtypescript";
```


## Creating the Patient object

The /FhirTsLibValidation/FhirUtils makes using the FHIR structures a little easier. The FHIR data is not that all easy to use and there are lots of structure, and hierarchy of data as well as references to other structures that make it cumbersome.  The Utility class will help simplify this.

As this utility evolves, it may be split into other classes to deliniate functionality.

Please start with the method, createPatient() which demonstrates walking through part of the hierachy to make the Patient structure that will be sent
across to the database.  Here is it for reference:

```
/*
  Creates a Patient with partial, general info, applying the proper structure 
*/
export function createPatient(newId: string, isActive: boolean,
        givenName: string, familyName: string,
        newGender: string, newBirthDate: Date,
        addressLine: string, newCity: string, newState: string, zip: string,
        phoneNumber: string,
        email: string): Patient {

    const patient = new Patient();
    patient.setId(newId);

    const name = new HumanName();
    name.setFamily(familyName);
    name.addGiven(givenName);
    patient.addName(name);
    patient.setGender(newGender);
    patient.setBirthDate(dateToStringDate(newBirthDate));

    patient.addTelecom(createContactPointEmail(email));
    
    return patient;
}
```

Notice how it creates a new patient with a supplied ID. Normally, these ids would be identified by the storage system when you are pulling data from 
a server, say an insurance company or hospital.  However, tn this case, we are creating the ID with the Clara PHR app and sending it to a [Solid PODs](https://solidproject.org/) which is an online user owned data storage mechanism developed by [Tim Burners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee), you know, the guy who invented
the World Wide Web.  Of course, the web which we often call the Internet which is really the backbone of the web and originally develped by the US Government's [ARPANET](https://en.wikipedia.org/wiki/ARPANET) - but that's another story which you can read on Wikipedia.

When generating an ID you can do with the built in Javascript crypto, unless you are relying on a service to generate it for you.  You should only set this ID once, and hopefully never change it for that Patient.

## Converting it for transport

Before sending the data to the data server (Solid PODs in this case), the data should first be converted to JSON. This library uses
[class-transformer](https://github.com/typestack/class-transformer) library to annotate/decorate the classes and allow the library to 
convert between JSON and Object using reflection.

Be sure to import the class-transformer library.

```
import { serialize, deserializeArray, deserialize, Type } from "class-transformer";
```

and then translate the object to plain JSON.

```
    let patientJson = serialize(patient);
```

or if you need to do something like convert to a JSON object and then to the JSON string after some other manipulation or logging, then
you can do it in two steps:

````
    let objectJson = instanceToPlain(patient);

    // do some logging here
    // ...

    let patientJson = JSON.stringify(objectJson);
```

The send the JSON object across the wire to the data server.

```
    const baseUrl = 'http://dataserver:8080/api'
    const http = new HttpClient();
    const observer = http.post(baseUrl + '/addPatient', patient);

    const response = await fetch(baseUrl + '/addPatient', 
        {
            method: 'POST',
            body: objectJson,
            headers: {'Content-Type': 'application/json; charset=UTF-8'} 
        }
    );

    if (!response.ok) { /* Handle */ }

    // If you care about a response:
    if (response.body !== null) {
        // body is ReadableStream<Uint8Array>
        // parse as needed, e.g. reading directly, or
        const asString = new TextDecoder("utf-8").decode(response.body);
        // and further:
        const asJSON = JSON.parse(asString);  // implicitly 'any'
    }
```

## Converting it from transport

To get data from the server it would do a similar thing. In this case, you make a request to a resource, such as a Patient by
Patient ID and hopefully the back end has made its service such that this request is a URL

```
    const response = await fetch(baseUrl + '/patient/PatientsUUID-blah-blah-blah', 
        {
            method: 'GET',
            headers: {'Accept': 'application/json; charset=UTF-8'} 
        }
    );

    if (!response.ok) { /* Handle */ }

    // If you care about a response:
    if (response.body !== null) {
        // body is ReadableStream<Uint8Array>
        // parse as needed, e.g. reading directly, or
        const asString = new TextDecoder("utf-8").decode(response.body);
        const patient: Patient = deserialize(Patient, asString);
    }
```
or do the last part in two steps, again, mayb for some logging:

```
        // and further:
        const asJSON = JSON.parse(asString);  // implicitly 'any'.
        const patient = plainToClass(Patient, asJSON)

```

If you did not do the deserialize()/plainToClass() then you could gain direct access to patient.name because the JSON would
be a plain JSON object.  However this would not be a real object, but instead just the plain JSON object and would lose all
the functionality for data validation and organization.  By adding using the class-transformer function, you get a real Patient
object.

