import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Extension, MeasureReportStratum } from './index';



/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a
 * reference to the resources involved in that calculation.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/MeasureReport_Stratifier
 */
export class MeasureReportStratifier {
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
   * The meaning of this stratifier, as defined in the measure definition.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected code?: CodeableConcept[];

  /**
   * This element contains the results for a single stratum within the stratifier. For example, when
   * stratifying on administrative gender, there will be four strata, one for each possible gender
   * value.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => MeasureReportStratum)
  protected stratum?: MeasureReportStratum[];


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

  public addCode(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.code) !== 'undefined') {
         delete this.code;
      }
      return;
    }
    
    if (typeof(this.code) === 'undefined') {
      this.code =  [];
    }
    this.code.push(newValue);
  }
  /**
  * Removes all elements from the array code, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteCodeAll(): CodeableConcept[] {
    if (typeof(this.code) !== 'undefined') {
       const oldArray = this.code;
       delete this.code;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array code, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteCodeBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.code) !== 'undefined') {
       return this.code.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field code.
  * @returns the value  or undefined
  */
  public getCode(): CodeableConcept[] | undefined {
      return this.code;
  }

  /**
  * Gets the current value of field code if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getCodeOrElse(defaultValue: CodeableConcept[]): CodeableConcept[] {
      if (this.code == undefined || this.code == null ) { return defaultValue; }
      return this.code;
  }

  public addStratum(newValue: MeasureReportStratum) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.stratum) !== 'undefined') {
         delete this.stratum;
      }
      return;
    }
    
    if (typeof(this.stratum) === 'undefined') {
      this.stratum =  [];
    }
    this.stratum.push(newValue);
  }
  /**
  * Removes all elements from the array stratum, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteStratumAll(): MeasureReportStratum[] {
    if (typeof(this.stratum) !== 'undefined') {
       const oldArray = this.stratum;
       delete this.stratum;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array stratum, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteStratumBySplice(start: number, deleteCount?: number): MeasureReportStratum[] {
    if (typeof(this.stratum) !== 'undefined') {
       return this.stratum.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field stratum.
  * @returns the value  or undefined
  */
  public getStratum(): MeasureReportStratum[] | undefined {
      return this.stratum;
  }

  /**
  * Gets the current value of field stratum if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getStratumOrElse(defaultValue: MeasureReportStratum[]): MeasureReportStratum[] {
      if (this.stratum == undefined || this.stratum == null ) { return defaultValue; }
      return this.stratum;
  }


}


