import 'reflect-metadata';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Patient } from '../../src/FhirTsLib/Patient';
import { Address } from '../../src/FhirTsLib/Address';
import { plainToFhir } from '../../src/FhirTsLibJson/FhirConverter';


test('Patient test 1', () => {
    let myPatient: Patient;
  
    myPatient = new Patient();
    myPatient.setId('2.16.840.1.113883.4.642.3.531');
    myPatient.setBirthDate("1963-01-01");
    myPatient.setGender('female');
    myPatient.setImplicitRules("aaaaa");

    let myAddress: Address;

    myAddress = new Address();
    myAddress.addLine('1234 Main Street');
    myAddress.setCity('Somewhere');
    myAddress.setState('CO');
    myAddress.setPostalCode('80135');
    myPatient.addAddress(myAddress);    
  
    let objectJson = instanceToPlain(myPatient);
  
    console.log('Patient JSON = "' + JSON.stringify(objectJson) + '"');
  
  
    expect(JSON.stringify(objectJson)).toBe(
      '{"resourceType":"Patient","id":"2.16.840.1.113883.4.642.3.531"'
      + ',"birthDate":"1963-01-01","gender":"female","implicitRules":"aaaaa"'
      + ',"address":[{"line":["1234 Main Street"]'
      + ',"city":"Somewhere"'
      + ',"state":"CO"'
      + ',"postalCode":"80135"'
      + '}]'
      + '}');
  
  
      let myConvertedObj = plainToInstance(Patient, objectJson);
  
      expect('Somewhere').toBe(myConvertedObj.getAddress()[0].getCity());
      expect('2.16.840.1.113883.4.642.3.531').toBe(myConvertedObj.getId());
  
  })
  
