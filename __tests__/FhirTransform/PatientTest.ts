import 'reflect-metadata';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Patient } from '../../src/FhirTsLib/Patient';
import { Address } from '../../src/FhirTsLib/Address';
import { plainToFhir } from '../../src/FhirTsLibJson/FhirConverter';


// test('Patient test 1', () => {
//     let myPatient: Patient;
  
//     myPatient = new Patient();
//     myPatient.setId('2.16.840.1.113883.4.642.3.531');
//     myPatient.setBirthDate("1963-01-01");
//     myPatient.setGender('female');
//     myPatient.setImplicitRules("aaaaa");

//     let myAddress: Address;

//     myAddress = new Address();
//     myAddress.addLine('1234 Main Street');
//     myAddress.setCity('Somewhere');
//     myAddress.setState('CO');
//     myAddress.setPostalCode('80135');
//     myPatient.addAddress(myAddress);    
  
//     let objectJson = instanceToPlain(myPatient);
  
//     console.log('Patient JSON = "' + JSON.stringify(objectJson) + '"');
  
  
//     expect(JSON.stringify(objectJson)).toBe(
//       '{"resourceType":"Patient","id":"2.16.840.1.113883.4.642.3.531"'
//       + ',"birthDate":"1963-01-01","gender":"female","implicitRules":"aaaaa"'
//       + ',"address":[{"line":["1234 Main Street"]'
//       + ',"city":"Somewhere"'
//       + ',"state":"CO"'
//       + ',"postalCode":"80135"'
//       + '}]'
//       + '}');
  
  
//       let myConvertedObj = plainToInstance(Patient, objectJson);
  
//       expect('Somewhere').toBe(myConvertedObj.getAddress()[0].getCity());
//       expect('2.16.840.1.113883.4.642.3.531').toBe(myConvertedObj.getId());
  
//   })

  // test('Patient test 2', () => {
  //   let myPatient: Patient;
  
  //   myPatient = new Patient();
  //   myPatient.setId('2.16.840.1.113883.4.642.3.531');
  //   myPatient.setBirthDate("1963-01-01");
  //   myPatient.setGender('male');
  //   myPatient.setImplicitRules("aaaaa");

  //   let myAddress: Address;

  //   myAddress = new Address();
  //   myAddress.addLine('1234 Main Street');
  //   myAddress.setCity('Somewhere');
  //   myAddress.setState('CO');
  //   myAddress.setPostalCode('80135');
  //   myPatient.addAddress(myAddress);    
  
  //   let objectJson = instanceToPlain(myPatient);
  
  //   console.log('Patient JSON = "' + JSON.stringify(objectJson) + '"');
  
  
  //   expect(JSON.stringify(objectJson)).toBe(
  //     '{"resourceType":"Patient","id":"2.16.840.1.113883.4.642.3.531"'
  //     + ',"birthDate":"1963-01-01","gender":"male","implicitRules":"aaaaa"'
  //     + ',"address":[{"line":["1234 Main Street"]'
  //     + ',"city":"Somewhere"'
  //     + ',"state":"CO"'
  //     + ',"postalCode":"80135"'
  //     + '}]'
  //     + '}');
  
  
  //     let myConvertedObj = plainToInstance(Patient, objectJson);
  
  //     expect('Somewhere').toBe(myConvertedObj.getAddress()[0].getCity());
  //     expect('2.16.840.1.113883.4.642.3.531').toBe(myConvertedObj.getId());
  
  // })  


  // test('Patient test - bad gender', () => {
  //   let myPatient: Patient;
  
  //   myPatient = new Patient();
  //   myPatient.active = true;
  
  //   try {
  //     myPatient.setGender('mail');
  //   } catch (error) {
  //     expect(error.message).toBe("Unknown gender of mail");
  //   }
  
    
  // })  

  // test('Patient test - bad Date', () => {
  //   let myPatient: Patient;
  
  //   myPatient = new Patient();
  //   try {
  //     myPatient.setBirthDate('19630101');
  //   } catch (error) {
  //     expect(error.message).toBe("Invalid value pattern for birthDate of 19630101");
  //   }
  
    
  // }) 
  
  
  test('Patient from JSON 1', () => {
    const jsonStr = '{"resourceType":"Patient","id":"2.16.840.1.113883.4.642.3.531"'
    + ',"birthDate":"1963-01-01","gender":"female","implicitRules":"aaaaa"'
    + ',"address":[{"line":["1234 Main Street"]'
    + ',"city":"Somewhere"'
    + ',"state":"CO"'
    + ',"postalCode":"80135"'
    + '}]'
    + '}';

    let patient: Patient = plainToFhir(jsonStr);
    console.log("Patient: " + JSON.stringify(patient));
   expect(patient.getGender()).toBe("female");
  })