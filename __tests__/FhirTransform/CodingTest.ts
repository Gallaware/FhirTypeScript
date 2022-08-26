import 'reflect-metadata';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Identifier } from '../../src/FhirTsLib/Identifier';
import { Coding } from '../../src/FhirTsLib/Coding';

// test('Coding creation', () => {
//   let myObject;

//   myObject = new Coding();
//   myObject.id = '2.16.840.1.113883.4.642.3.531';
//   myObject.system = 'http://hl7.org/fhir/ValueSet/icd-10';
//   myObject.version = '4.6.0';
//   myObject.code = 'A001';
//   myObject.display = 'Hello, FHIR';
//   myObject.userSelected = true;
  
//  let objectJson = instanceToPlain(myObject);

//   expect(JSON.stringify(objectJson)).toBe('{"id":"2.16.840.1.113883.4.642.3.531"'
//     + ',"system":"http://hl7.org/fhir/ValueSet/icd-10"'
//     + ',"version":"4.6.0"'
//     + ',"code":"A001"'
//     + ',"display":"Hello, FHIR"'
//     + ',"userSelected":true'
//     + '}');


//     let myConvertedObj = plainToInstance(Coding, objectJson);

//     expect('A001').toBe(myConvertedObj.getCode());

// })