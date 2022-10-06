import 'reflect-metadata';
import { Patient } from '../../src/FhirTsLib/Patient';

test('Patient test - bad gender', () => {
    let myPatient: Patient;
  
    myPatient = new Patient();
    myPatient.active = true;
  
    try {
      myPatient.setGender('mail');
    } catch (error) {
      expect(error.message).toBe("Unknown gender of mail");
    }
  
    
  })  

  test('Patient test - bad Date', () => {
    let myPatient: Patient;
  
    myPatient = new Patient();
    try {
      myPatient.setBirthDate('19630101');
    } catch (error) {
      expect(error.message).toBe("Invalid value pattern for birthDate of 19630101");
    }
  
    
  }) 
  
