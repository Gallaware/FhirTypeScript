import 'reflect-metadata';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Patient } from '../../src/FhirTsLib/Patient';
import { Address } from '../../src/FhirTsLib/Address';
import { plainToFhir } from '../../src/FhirTsLibJson/FhirConverter';

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