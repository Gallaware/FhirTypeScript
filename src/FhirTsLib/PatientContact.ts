import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { Address, CodeableConcept, ContactPoint, Element, Extension, HumanName, Period, Reference } from './index';
import { PatientContactGender_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * Demographics and other administrative information about an individual or animal receiving care or
 * other health-related services.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Patient_Contact
 */
export class PatientContact {
  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected id?: string;

  /**
   * May be used to represent additional information that is not part of the basic definition of the
   * element. To make the use of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any implementer can define an extension,
   * there is a set of requirements that SHALL be met as part of the definition of the extension.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Extension)
  protected extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of the basic definition of the
   * element and that modifies the understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually modifier elements provide negation
   * or qualification. To make the use of extensions safe and manageable, there is a strict set of
   * governance applied to the definition and use of extensions. Though any implementer can define an
   * extension, there is a set of requirements that SHALL be met as part of the definition of the
   * extension. Applications processing a resource are required to check for modifier extensions.
   * 
   * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource
   * (including cannot change the meaning of modifierExtension itself).
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Extension)
  protected modifierExtension?: Extension[];

  /**
   * The nature of the relationship between the patient and the contact person.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected relationship?: CodeableConcept[];

  /**
   * A human's name with the ability to identify parts and usage.
   */
  @Type(() => HumanName)
   name?: HumanName;

  /**
   * A contact detail for the person, e.g. a telephone number or an email address.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ContactPoint)
  protected telecom?: ContactPoint[];

  /**
   * An address expressed using postal conventions (as opposed to GPS or other location definition
   * formats).  This data type may be used to convey addresses for use in delivering mail as well as
   * for visiting locations which might not be valid for mail delivery.  There are a variety of postal
   * address formats defined around the world.
   */
  @Type(() => Address)
   address?: Address;

  /**
   * Administrative Gender - the gender that the contact person is considered to have for administration
   * and record keeping purposes.
   * Field access restricted because there are specific valid values.
   */
  protected gender?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _gender?: Element;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   organization?: Reference;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   period?: Period;


  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.id) !== 'undefined') {
         delete this.id;
      }
      return;
    }
    
    if (REGEX_ID.test(newValue)) {
      this.id = newValue
    } else {
      throw new Error("Invalid value pattern for id of " + newValue);
    }
  }
  
  public getIdPattern(): string {
    return REGEX_ID.source;
  }
  

  public getId(): string | undefined {
      return this.id;
  }

  public addExtension(newValue: Extension) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.extension) !== 'undefined') {
         delete this.extension;
      }
      return;
    }
    
    if (typeof(this.extension) === 'undefined') {
      this.extension =  [];
    }
    this.extension.push(newValue);
  }

  public getExtension(): Extension[] | undefined {
      return this.extension;
  }

  public addModifierExtension(newValue: Extension) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.modifierExtension) !== 'undefined') {
         delete this.modifierExtension;
      }
      return;
    }
    
    if (typeof(this.modifierExtension) === 'undefined') {
      this.modifierExtension =  [];
    }
    this.modifierExtension.push(newValue);
  }

  public getModifierExtension(): Extension[] | undefined {
      return this.modifierExtension;
  }

  public addRelationship(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.relationship) !== 'undefined') {
         delete this.relationship;
      }
      return;
    }
    
    if (typeof(this.relationship) === 'undefined') {
      this.relationship =  [];
    }
    this.relationship.push(newValue);
  }

  public getRelationship(): CodeableConcept[] | undefined {
      return this.relationship;
  }

  public addTelecom(newValue: ContactPoint) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.telecom) !== 'undefined') {
         delete this.telecom;
      }
      return;
    }
    
    if (typeof(this.telecom) === 'undefined') {
      this.telecom =  [];
    }
    this.telecom.push(newValue);
  }

  public getTelecom(): ContactPoint[] | undefined {
      return this.telecom;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setGender(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.gender) !== 'undefined') {
         delete this.gender;
      }
      return;
    }
    
    const idx = getValidValueIdx(PatientContactGender_list_ValidValues, newValue);
    if (idx >= 0) {
      this.gender = PatientContactGender_list_ValidValues[idx];
    } else {
      throw new Error("Unknown gender of " + newValue);
    }
  }
  
  public getPatientContactGenderValidValues(): string[] {
    return PatientContactGender_list_ValidValues;
  }
  

  public getGender(): string | undefined {
      return this.gender;
  }


}


