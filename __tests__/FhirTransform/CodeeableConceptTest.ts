import 'reflect-metadata';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Coding } from '../../src/FhirTsLib/Coding';
import { CodeableConcept } from '../../src/FhirTsLib/CodeableConcept';

// test('CodeableConcept test', () => {
//   let myCoding;

//   myCoding = new Coding();
//   myCoding.id = '2.16.840.1.113883.4.642.3.531';
//   myCoding.system = 'http://hl7.org/fhir/ValueSet/icd-10';
//   myCoding.version = '4.6.0';
//   myCoding.code = 'A001';
//   myCoding.display = 'Hello, FHIR';
//   myCoding.userSelected = true;
  
//   let myCodeableConcept = new CodeableConcept();
//   myCodeableConcept.setId('Codeable_ID');
//   myCodeableConcept.addCoding(myCoding);

//   let objectJson = instanceToPlain(myCodeableConcept);

//   console.log('CodeableConcept JSON = "' + JSON.stringify(objectJson) + '"');


//   expect(JSON.stringify(objectJson)).toBe(
//     '{"id":"Codeable_ID"'
//     + ',"coding":[{"id":"2.16.840.1.113883.4.642.3.531"'
//     + ',"system":"http://hl7.org/fhir/ValueSet/icd-10"'
//     + ',"version":"4.6.0"'
//     + ',"code":"A001"'
//     + ',"display":"Hello, FHIR"'
//     + ',"userSelected":true'
//     + '}]'
//     + '}');


//     let myConvertedObj = plainToInstance(CodeableConcept, objectJson);

//     expect('A001').toBe(myConvertedObj.getCoding()[0].getCode());
//     expect('Codeable_ID').toBe(myConvertedObj.getId());

// })