
/* 
  Utility functions
*/

import { Age } from "../FhirTsLib/Age";
import { CodeableConcept } from "../FhirTsLib/CodeableConcept";
import { Coding } from "../FhirTsLib/Coding";
import { Condition } from "../FhirTsLib/Condition";
import { ContactPoint } from "../FhirTsLib/ContactPoint";
import { HumanName } from "../FhirTsLib/HumanName";
import { Patient } from "../FhirTsLib/Patient";
import { Period } from "../FhirTsLib/Period";
import { Range } from "../FhirTsLib/Range";
import { ContactPointSystem_list_ValidValues, ContactPointUse_list_ValidValues } from "./Fhir_ValidValues";
import { DateActualEstimatedType_list_ValidValues } from "./Fhir_ValidValuesExtra";


/*
  returns true if the value is in the valid values array. The compare is case sensitive.
*/
export function isValidString(validValues: string[], value: string | undefined): boolean {
    return getValidValueIdx(validValues, value) >= 0;
}

/*
  returns the index of the string value, or -1 if not found.
*/
export function getValidValueIdx(validValues: string[], value: string | undefined) {
    if (typeof (value) !== 'undefined') {
        for (let idx = 0; idx < validValues.length; idx++) {
            if (validValues[idx].localeCompare(value) === 0) {
                return idx;
            }
        }
    }
    return -1;
}

/*
*  gets the patient based on the patient id
*
*  returns:  the patient with data or null
*/
export function getPatientById(patients: Patient[], id: string): Patient | null {
    for (let patient of patients) {
        const strId = patient.getId();
        if (strId && id.localeCompare(strId) === 0) {
            return patient;
        }
    }
    return null;
}

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
    try {
      patient.setGender(newGender);
    } catch (e) {

    }
    patient.setBirthDate(dateToStringDate(newBirthDate));

    patient.addTelecom(createContactPointEmail(email));
    
    return patient;
}

/*
*
*/
export function createHumanName(given: string, family: string, prefix = undefined, suffix = undefined ) {
  const name = new HumanName();
  name.addGiven(given);
  name.setFamily(family); 
  if (prefix) {
    name.addPrefix(prefix);
  }
  if (suffix) {
    name.addSuffix(suffix);
  }
  return name;
}


export function validateCodeableConcept(validValues: string[], value: any | string, factory: Function): any {
    if (typeof value === "string") {
        const strValue = value;
        value = factory();
        if (isValidString(validValues, value)) {
            value.setCode(strValue);
        } else {
            value.setText("Error: Invalid value");
        }

    } else {
        if (!isValidString(validValues, value.getCode())) {
            value.setText("Error: Invalid value");
        }
    }
    return value;
}

export function dateToStringDate(curDate : Date) {
    if (curDate) {
        const month = curDate.getMonth();
        const monthStr = month < 10 ? "0" + month.toString() : month.toString();
        const day = curDate.getDay();
        const dayStr = day < 10 ? "0" + day.toString() : day.toString();
    
        return curDate.getFullYear().toString() + monthStr + dayStr;

    } else {
        return "";
    }

}

/*
* Converts a Date to YYYY-MM-DD
* reference:  https://build.fhir.org/datatypes.html#date
*/
export function dateToStringFhirDate(curDate : Date) {
  if (curDate) {
      const month = curDate.getMonth();
      const monthStr = month < 10 ? "0" + month.toString() : month.toString();
      const day = curDate.getDay();
      const dayStr = day < 10 ? "0" + day.toString() : day.toString();
  
      return curDate.getFullYear().toString() + "-" + monthStr + "-" + dayStr;

  } else {
      return "";
  }
}

/*
* converts a string in the format of YYYY, YYYY-MM or YYYY-MM-DD, YYYYMM, or YYYYMMDD to a date.  If null,
* then creates new date at current date.
* refence: https://build.fhir.org/datatypes.html#date
*/
export function fhirDateToDate(curDate : string | undefined) : Date {
  if (!curDate) {
    return new Date();
  }

  // get the correct format out of the way first with dashes - YYYY-MM-DD
  if (curDate.length === 10) {
    return new Date(curDate);
  }

  switch (curDate.length) {
    case 8:
      // year, month, day without dashes - YYYYMMDD
      curDate = curDate.substring(0, 4) + "-" + curDate.substring(4,6) + "-" + curDate.substring(6,8);
      break;

    case 4:
      // year only - YYYY
      curDate += "-01-01";
      break;

    case 6:
      // year month - YYYYMM without dashes
      curDate = curDate.substring(0, 4) + "-" + curDate.substring(4,6) + "-01";
      break;

    case 7:
      // year month with dash - YYYY-MM
      curDate += "-01";
      break;
  }

  return new Date(curDate);
}

/*
*  Gets the patient id which can be a real string or an empty string.
*/
export function getPatientId(patient: Patient) : string {
    let tmpId = "";
    let tid = patient.getId();
    if (tid) {
      tmpId = tid;
    }
    return tmpId;

}

export function getPatientFirstName(patient : Patient) : string{
    const familyNames = patient.getName();
    if (familyNames) {
      // just get the first one
      let name = familyNames[0].getGiven();
      if (name) {
          return name[0];
      }
    }
    return "";
}

export function getPatientFullName(patient : Patient) : string {
    let fullName = "";
    const familyNames = patient.getName();

    if (familyNames) {
      // just get the first one
      let name = familyNames[0].getGiven();
      if (name) {
          fullName = name[0];
      }
      let familyName = familyNames[0].getFamily();
      if (familyName) {
          if (fullName.length > 0) {
              fullName += " ";
          }
          fullName += familyName;
      }

    }
    return fullName;
}

/*
* creates the contact point
*
* value - telephone number or email
* system - part of the valid values ContactPointSystem_list_ValidValues
*/
export function createContactPoint(value: string, system: string) {
  const contact = new ContactPoint();
  contact.setValue(value);
  contact.setSystem(system);

  return contact;
}

/*
 * convenience method for creating a phone number 
 */
export function createContactPointPhone(value: string) {
  return createContactPoint(value, ContactPointSystem_list_ValidValues[0]);
}

/*
* convenience method for creating an email
*/
export function createContactPointEmail(value: string) {
  return createContactPoint(value, ContactPointSystem_list_ValidValues[2]);
}

/*
* Gets the email contact point
* TODO: Make this an array return some day 
*/
export function getEmail(patient: Patient): string | undefined {
  let telecoms = patient.getTelecom();

  if (telecoms) {
    // this should be an array of items.  Look for system being "email"
    for (const telecom of telecoms) {
      let system = telecom.getSystem();
      if (system && ContactPointSystem_list_ValidValues[2] === system) {
        let value = telecom.getValue();
        if (value) {
          return value;
        }
      }
    }
  }
  return undefined;
}

export class SimpleAddress {
  public line: string = "";
  public city: string = "";
  public state: string = "";
  public postalCode: string = "";
}

export function getSimpleAddress(patient: Patient): SimpleAddress  {
  const simpleAddress = new SimpleAddress();
  let addresses = patient.getAddress();
  if (addresses) {
    // just get the first one now
    const curAddress = addresses[0];
    let lines = curAddress.getLine();
    if (lines) {
      for (const line of lines) {
        if (line) {
          if (simpleAddress.line.length > 2) {
            simpleAddress.line += ", ";
          }
          simpleAddress.line += line;
        }
      }
    }
    let tmpStr = curAddress.getCity();
    if (tmpStr) {
      simpleAddress.city = tmpStr;
    }
    tmpStr = curAddress.getState();
    if (tmpStr) {
      simpleAddress.state = tmpStr;
    }
    tmpStr = curAddress.getPostalCode();
    if (tmpStr) {
      simpleAddress.postalCode = tmpStr;
    }
  }

  return simpleAddress;
}

/*
* creates a basic code with a default system of ICD-10
* reference: https://build.fhir.org/terminologies.html#system
* reference: https://build.fhir.org/icd.html
*/
export function createCodeableConcept(value : string, system: string = "http://hl7.org/fhir/sid/icd-10") : CodeableConcept {
  const code = new CodeableConcept();
  const coding = new Coding();
  coding.setCode(value);
  if (system.length > 1) {
    coding.setSystem(system);
  }
  code.addCoding(coding);

  return code;

}

/*
* Condition onset Methods
* per the JSON definition, the following 5 elements are mutually exclusive, i.e. only one active at a time:
*   dateTime, age, period, range and stringDate
* The following methods help ensure this "one of" condition
* reference: https://build.fhir.org/condition.html
*/

export function getDateTime_Condition(condition : Condition): Date | undefined {
  let strDate =  condition.getOnsetDateTime();
  if (strDate) {
    return fhirDateToDate(strDate);
  } else {
    return undefined;
  }
}

export function setDateTime_Condition(condition: Condition, dateTime: Date) {
  condition.setOnsetDateTime(dateToStringDate(dateTime));
  condition.onsetAge = undefined;
  condition.onsetPeriod = undefined;
  condition.onsetRange = undefined;
  condition.setOnsetString(undefined);
}

export function isDateTimeSet_Condition(condition: Condition): boolean {
  return (condition.getOnsetDateTime() ? true : false);
}

export function getAge_Condition(condition: Condition): Age | undefined {
  return condition.onsetAge;
}

export function setAge_Condition(condition: Condition, age: number) {
  condition.setOnsetDateTime("");
  condition.onsetAge = new Age();
  condition.onsetAge.setCode(age.toFixed().toString());
  condition.onsetPeriod = undefined;
  condition.onsetRange = undefined;
  condition.setOnsetString(undefined);
}

export function isAgeSet_Condition(condition: Condition): boolean {
  return (condition.onsetAge ? true : false);
}

export function getPeriod_Condition(condition: Condition): Period | undefined {
  return condition.onsetPeriod;
}

export function setPeriod_Condition(condition: Condition, period: Period) {
  condition.setOnsetDateTime("");
  condition.onsetAge = undefined;
  condition.onsetPeriod = period;
  condition.onsetRange = undefined;
  condition.setOnsetString(undefined);
}

export function isPeriodSet_Condition(condition: Condition): boolean {
  return (condition.onsetPeriod ? true : false);
}

export function getRange_Condition(condition: Condition): Range | undefined {
  return condition.onsetRange;
}

export function setRange_Condition(condition: Condition, range: Range) {
  condition.setOnsetDateTime("");
  condition.onsetAge = undefined;
  condition.onsetPeriod = undefined;
  condition.onsetRange = range;
  condition.setOnsetString(undefined);
}

export function isRangeSet_Condition(condition: Condition): boolean {
  return (condition.onsetRange ? true : false);
}

export function getStringDate_Condition(condition: Condition): string {
  const val = condition.getOnsetString();
  return (val ? val : "");
}

export function setStringDate_Condition(condition: Condition, stringDate: string) {
  condition.setOnsetDateTime("");
  condition.onsetAge = undefined;
  condition.onsetPeriod = undefined;
  condition.onsetRange = undefined;
  condition.setOnsetString(stringDate);
}

export function isStringDateSet_Condition(condition: Condition): boolean {
  return (condition.getOnsetString() ? true : false);
}


export function getType_Condition(condition: Condition): string {
  if (isDateTimeSet_Condition(condition)) {
      return DateActualEstimatedType_list_ValidValues[1];
  }
  if (isAgeSet_Condition(condition)) {
      return DateActualEstimatedType_list_ValidValues[2];
  }
  if (isPeriodSet_Condition(condition)) {
      return DateActualEstimatedType_list_ValidValues[3];
  }
  if (isRangeSet_Condition(condition)) {
      return DateActualEstimatedType_list_ValidValues[4];
  }
  if (isStringDateSet_Condition(condition)) {
      return DateActualEstimatedType_list_ValidValues[5];
  }
  return DateActualEstimatedType_list_ValidValues[0];
}

export function toString_ConditionOnset(condition: Condition): string {
  let onset = condition.getOnsetDateTime();
  if (onset) {
      return onset.toLocaleString();
  }
  onset = condition.getOnsetString();
  if (onset) {
      return onset;
  }
  return "";
}

// returns true if any date type is set.
export function isAnySet_ConditionOnset(condition: Condition): boolean {
  let onsetDate = condition.getOnsetDateTime();
  let onsetStr = condition.getOnsetString()
  if (onsetDate) {
    return true;
  } else if (onsetStr) {
    return true;
  }
  return false;
}

export function clear() {
  this.dateTime = undefined;
  this.age = undefined;
  this.period = undefined;
  this.range = undefined;
  this.stringDate = undefined;
}