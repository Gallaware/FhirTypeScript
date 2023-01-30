import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Extension, Identifier, Reference } from './index';



/**
 * An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare
 * service(s) or assessing the health status of a patient.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Encounter_Hospitalization
 */
export class EncounterHospitalization {
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
   * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for
   * business identifiers.
   */
  @Type(() => Identifier)
   preAdmissionIdentifier?: Identifier;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   origin?: Reference;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   admitSource?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   reAdmission?: CodeableConcept;

  /**
   * Diet preferences reported by the patient.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected dietPreference?: CodeableConcept[];

  /**
   * Special courtesies (VIP, board member).
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected specialCourtesy?: CodeableConcept[];

  /**
   * Any special requests that have been made for this hospitalization encounter, such as the provision
   * of specific equipment or other things.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected specialArrangement?: CodeableConcept[];

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   destination?: Reference;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   dischargeDisposition?: CodeableConcept;


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
  
  /**
  * Gets the current value of field id.
  * @returns the value  or undefined
  */
  public getId(): string | undefined {
      return this.id;
  }

  /**
  * Gets the current value of field id if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getIdOrElse(defaultValue: string): string {
      if (this.id == undefined || this.id == null ) { return defaultValue; }
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
  /**
  * Removes all elements from the array extension, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteExtensionAll(): Extension[] {
    if (typeof(this.extension) !== 'undefined') {
       const oldArray = this.extension;
       delete this.extension;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array extension, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteExtensionBySplice(start: number, deleteCount?: number): Extension[] {
    if (typeof(this.extension) !== 'undefined') {
       return this.extension.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field extension.
  * @returns the value  or undefined
  */
  public getExtension(): Extension[] | undefined {
      return this.extension;
  }

  /**
  * Gets the current value of field extension if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getExtensionOrElse(defaultValue: Extension[]): Extension[] {
      if (this.extension == undefined || this.extension == null ) { return defaultValue; }
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
  /**
  * Removes all elements from the array modifierExtension, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteModifierExtensionAll(): Extension[] {
    if (typeof(this.modifierExtension) !== 'undefined') {
       const oldArray = this.modifierExtension;
       delete this.modifierExtension;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array modifierExtension, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteModifierExtensionBySplice(start: number, deleteCount?: number): Extension[] {
    if (typeof(this.modifierExtension) !== 'undefined') {
       return this.modifierExtension.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field modifierExtension.
  * @returns the value  or undefined
  */
  public getModifierExtension(): Extension[] | undefined {
      return this.modifierExtension;
  }

  /**
  * Gets the current value of field modifierExtension if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getModifierExtensionOrElse(defaultValue: Extension[]): Extension[] {
      if (this.modifierExtension == undefined || this.modifierExtension == null ) { return defaultValue; }
      return this.modifierExtension;
  }

  public addDietPreference(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.dietPreference) !== 'undefined') {
         delete this.dietPreference;
      }
      return;
    }
    
    if (typeof(this.dietPreference) === 'undefined') {
      this.dietPreference =  [];
    }
    this.dietPreference.push(newValue);
  }
  /**
  * Removes all elements from the array dietPreference, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteDietPreferenceAll(): CodeableConcept[] {
    if (typeof(this.dietPreference) !== 'undefined') {
       const oldArray = this.dietPreference;
       delete this.dietPreference;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array dietPreference, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteDietPreferenceBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.dietPreference) !== 'undefined') {
       return this.dietPreference.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field dietPreference.
  * @returns the value  or undefined
  */
  public getDietPreference(): CodeableConcept[] | undefined {
      return this.dietPreference;
  }

  /**
  * Gets the current value of field dietPreference if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getDietPreferenceOrElse(defaultValue: CodeableConcept[]): CodeableConcept[] {
      if (this.dietPreference == undefined || this.dietPreference == null ) { return defaultValue; }
      return this.dietPreference;
  }

  public addSpecialCourtesy(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.specialCourtesy) !== 'undefined') {
         delete this.specialCourtesy;
      }
      return;
    }
    
    if (typeof(this.specialCourtesy) === 'undefined') {
      this.specialCourtesy =  [];
    }
    this.specialCourtesy.push(newValue);
  }
  /**
  * Removes all elements from the array specialCourtesy, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteSpecialCourtesyAll(): CodeableConcept[] {
    if (typeof(this.specialCourtesy) !== 'undefined') {
       const oldArray = this.specialCourtesy;
       delete this.specialCourtesy;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array specialCourtesy, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteSpecialCourtesyBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.specialCourtesy) !== 'undefined') {
       return this.specialCourtesy.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field specialCourtesy.
  * @returns the value  or undefined
  */
  public getSpecialCourtesy(): CodeableConcept[] | undefined {
      return this.specialCourtesy;
  }

  /**
  * Gets the current value of field specialCourtesy if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getSpecialCourtesyOrElse(defaultValue: CodeableConcept[]): CodeableConcept[] {
      if (this.specialCourtesy == undefined || this.specialCourtesy == null ) { return defaultValue; }
      return this.specialCourtesy;
  }

  public addSpecialArrangement(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.specialArrangement) !== 'undefined') {
         delete this.specialArrangement;
      }
      return;
    }
    
    if (typeof(this.specialArrangement) === 'undefined') {
      this.specialArrangement =  [];
    }
    this.specialArrangement.push(newValue);
  }
  /**
  * Removes all elements from the array specialArrangement, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteSpecialArrangementAll(): CodeableConcept[] {
    if (typeof(this.specialArrangement) !== 'undefined') {
       const oldArray = this.specialArrangement;
       delete this.specialArrangement;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array specialArrangement, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteSpecialArrangementBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.specialArrangement) !== 'undefined') {
       return this.specialArrangement.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field specialArrangement.
  * @returns the value  or undefined
  */
  public getSpecialArrangement(): CodeableConcept[] | undefined {
      return this.specialArrangement;
  }

  /**
  * Gets the current value of field specialArrangement if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getSpecialArrangementOrElse(defaultValue: CodeableConcept[]): CodeableConcept[] {
      if (this.specialArrangement == undefined || this.specialArrangement == null ) { return defaultValue; }
      return this.specialArrangement;
  }


}


