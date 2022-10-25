import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_SERIES, REGEX_DOSENUMBERSTRING, REGEX_SERIESDOSESSTRING } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Reference } from './index';



/**
 * Describes the event of a patient being administered a vaccine or a record of an immunization as
 * reported by a patient, a clinician or another party.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Immunization_ProtocolApplied
 */
export class ImmunizationProtocolApplied {
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
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected series?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _series?: Element;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   authority?: Reference;

  /**
   * The vaccine preventable disease the dose is being administered against.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected targetDisease?: CodeableConcept[];

  /**
   * Nominal position in a series.
   */
   doseNumberPositiveInt?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _doseNumberPositiveInt?: Element;

  /**
   * Nominal position in a series.
   * Field access restricted because there are specific valid values.
   */
  protected doseNumberString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _doseNumberString?: Element;

  /**
   * The recommended number of doses to achieve immunity.
   */
   seriesDosesPositiveInt?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _seriesDosesPositiveInt?: Element;

  /**
   * The recommended number of doses to achieve immunity.
   * Field access restricted because there are specific valid values.
   */
  protected seriesDosesString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _seriesDosesString?: Element;


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

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setSeries(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.series) !== 'undefined') {
         delete this.series;
      }
      return;
    }
    
    if (REGEX_SERIES.test(newValue)) {
      this.series = newValue
    } else {
      throw new Error("Invalid value pattern for series of " + newValue);
    }
  }
  
  public getSeriesPattern(): string {
    return REGEX_SERIES.source;
  }
  
  /**
  * Gets the current value of field series.
  * @returns the value  or undefined
  */
  public getSeries(): string | undefined {
      return this.series;
  }

  public addTargetDisease(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.targetDisease) !== 'undefined') {
         delete this.targetDisease;
      }
      return;
    }
    
    if (typeof(this.targetDisease) === 'undefined') {
      this.targetDisease =  [];
    }
    this.targetDisease.push(newValue);
  }
  /**
  * Removes all elements from the array targetDisease, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteTargetDiseaseAll(): CodeableConcept[] {
    if (typeof(this.targetDisease) !== 'undefined') {
       const oldArray = this.targetDisease;
       delete this.targetDisease;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array targetDisease, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteTargetDiseaseBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.targetDisease) !== 'undefined') {
       return this.targetDisease.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field targetDisease.
  * @returns the value  or undefined
  */
  public getTargetDisease(): CodeableConcept[] | undefined {
      return this.targetDisease;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDoseNumberString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.doseNumberString) !== 'undefined') {
         delete this.doseNumberString;
      }
      return;
    }
    
    if (REGEX_DOSENUMBERSTRING.test(newValue)) {
      this.doseNumberString = newValue
    } else {
      throw new Error("Invalid value pattern for doseNumberString of " + newValue);
    }
  }
  
  public getDoseNumberStringPattern(): string {
    return REGEX_DOSENUMBERSTRING.source;
  }
  
  /**
  * Gets the current value of field doseNumberString.
  * @returns the value  or undefined
  */
  public getDoseNumberString(): string | undefined {
      return this.doseNumberString;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setSeriesDosesString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.seriesDosesString) !== 'undefined') {
         delete this.seriesDosesString;
      }
      return;
    }
    
    if (REGEX_SERIESDOSESSTRING.test(newValue)) {
      this.seriesDosesString = newValue
    } else {
      throw new Error("Invalid value pattern for seriesDosesString of " + newValue);
    }
  }
  
  public getSeriesDosesStringPattern(): string {
    return REGEX_SERIESDOSESSTRING.source;
  }
  
  /**
  * Gets the current value of field seriesDosesString.
  * @returns the value  or undefined
  */
  public getSeriesDosesString(): string | undefined {
      return this.seriesDosesString;
  }


}


