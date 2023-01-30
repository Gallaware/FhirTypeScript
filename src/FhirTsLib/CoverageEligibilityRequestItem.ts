import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, CoverageEligibilityRequestDiagnosis, Element, Extension, Money, Quantity, Reference } from './index';



/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer
 * for them to respond, in the form of an CoverageEligibilityResponse, with information regarding
 * whether the stated coverage is valid and in-force and optionally to provide the insurance details
 * of the policy.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/CoverageEligibilityRequest_Item
 */
export class CoverageEligibilityRequestItem {
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
   * Exceptions, special conditions and supporting information applicable for this service or product
   * line.
   * Field access restricted because there are specific valid values.
   */
  protected supportingInfoSequence?: number[];

  /**
   * Extensions for supportingInfoSequence
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _supportingInfoSequence?: Element[];

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   category?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   productOrService?: CodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for the product or service.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected modifier?: CodeableConcept[];

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   provider?: Reference;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   quantity?: Quantity;

  /**
   * An amount of economic utility in some recognized currency.
   */
  @Type(() => Money)
   unitPrice?: Money;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   facility?: Reference;

  /**
   * Patient diagnosis for which care is sought.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CoverageEligibilityRequestDiagnosis)
  protected diagnosis?: CoverageEligibilityRequestDiagnosis[];

  /**
   * The plan/proposal/order describing the proposed service in detail.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected detail?: Reference[];


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

  public addSupportingInfoSequence(newValue: number) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.supportingInfoSequence) !== 'undefined') {
         delete this.supportingInfoSequence;
      }
      return;
    }
    
    if (typeof(this.supportingInfoSequence) === 'undefined') {
      this.supportingInfoSequence =  [];
    }
    this.supportingInfoSequence.push(newValue);
  }
  /**
  * Removes all elements from the array supportingInfoSequence, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteSupportingInfoSequenceAll(): number[] {
    if (typeof(this.supportingInfoSequence) !== 'undefined') {
       const oldArray = this.supportingInfoSequence;
       delete this.supportingInfoSequence;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array supportingInfoSequence, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteSupportingInfoSequenceBySplice(start: number, deleteCount?: number): number[] {
    if (typeof(this.supportingInfoSequence) !== 'undefined') {
       return this.supportingInfoSequence.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field supportingInfoSequence.
  * @returns the value  or undefined
  */
  public getSupportingInfoSequence(): number[] | undefined {
      return this.supportingInfoSequence;
  }

  /**
  * Gets the current value of field supportingInfoSequence if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getSupportingInfoSequenceOrElse(defaultValue: number[]): number[] {
      if (this.supportingInfoSequence == undefined || this.supportingInfoSequence == null ) { return defaultValue; }
      return this.supportingInfoSequence;
  }

  public add_supportingInfoSequence(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._supportingInfoSequence) !== 'undefined') {
         delete this._supportingInfoSequence;
      }
      return;
    }
    
    if (typeof(this._supportingInfoSequence) === 'undefined') {
      this._supportingInfoSequence =  [];
    }
    this._supportingInfoSequence.push(newValue);
  }
  /**
  * Removes all elements from the array _supportingInfoSequence, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public delete_supportingInfoSequenceAll(): Element[] {
    if (typeof(this._supportingInfoSequence) !== 'undefined') {
       const oldArray = this._supportingInfoSequence;
       delete this._supportingInfoSequence;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array _supportingInfoSequence, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public delete_supportingInfoSequenceBySplice(start: number, deleteCount?: number): Element[] {
    if (typeof(this._supportingInfoSequence) !== 'undefined') {
       return this._supportingInfoSequence.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field _supportingInfoSequence.
  * @returns the value  or undefined
  */
  public get_supportingInfoSequence(): Element[] | undefined {
      return this._supportingInfoSequence;
  }

  /**
  * Gets the current value of field _supportingInfoSequence if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public get_supportingInfoSequenceOrElse(defaultValue: Element[]): Element[] {
      if (this._supportingInfoSequence == undefined || this._supportingInfoSequence == null ) { return defaultValue; }
      return this._supportingInfoSequence;
  }

  public addModifier(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.modifier) !== 'undefined') {
         delete this.modifier;
      }
      return;
    }
    
    if (typeof(this.modifier) === 'undefined') {
      this.modifier =  [];
    }
    this.modifier.push(newValue);
  }
  /**
  * Removes all elements from the array modifier, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteModifierAll(): CodeableConcept[] {
    if (typeof(this.modifier) !== 'undefined') {
       const oldArray = this.modifier;
       delete this.modifier;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array modifier, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteModifierBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.modifier) !== 'undefined') {
       return this.modifier.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field modifier.
  * @returns the value  or undefined
  */
  public getModifier(): CodeableConcept[] | undefined {
      return this.modifier;
  }

  /**
  * Gets the current value of field modifier if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getModifierOrElse(defaultValue: CodeableConcept[]): CodeableConcept[] {
      if (this.modifier == undefined || this.modifier == null ) { return defaultValue; }
      return this.modifier;
  }

  public addDiagnosis(newValue: CoverageEligibilityRequestDiagnosis) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.diagnosis) !== 'undefined') {
         delete this.diagnosis;
      }
      return;
    }
    
    if (typeof(this.diagnosis) === 'undefined') {
      this.diagnosis =  [];
    }
    this.diagnosis.push(newValue);
  }
  /**
  * Removes all elements from the array diagnosis, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteDiagnosisAll(): CoverageEligibilityRequestDiagnosis[] {
    if (typeof(this.diagnosis) !== 'undefined') {
       const oldArray = this.diagnosis;
       delete this.diagnosis;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array diagnosis, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteDiagnosisBySplice(start: number, deleteCount?: number): CoverageEligibilityRequestDiagnosis[] {
    if (typeof(this.diagnosis) !== 'undefined') {
       return this.diagnosis.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field diagnosis.
  * @returns the value  or undefined
  */
  public getDiagnosis(): CoverageEligibilityRequestDiagnosis[] | undefined {
      return this.diagnosis;
  }

  /**
  * Gets the current value of field diagnosis if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getDiagnosisOrElse(defaultValue: CoverageEligibilityRequestDiagnosis[]): CoverageEligibilityRequestDiagnosis[] {
      if (this.diagnosis == undefined || this.diagnosis == null ) { return defaultValue; }
      return this.diagnosis;
  }

  public addDetail(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.detail) !== 'undefined') {
         delete this.detail;
      }
      return;
    }
    
    if (typeof(this.detail) === 'undefined') {
      this.detail =  [];
    }
    this.detail.push(newValue);
  }
  /**
  * Removes all elements from the array detail, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteDetailAll(): Reference[] {
    if (typeof(this.detail) !== 'undefined') {
       const oldArray = this.detail;
       delete this.detail;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array detail, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteDetailBySplice(start: number, deleteCount?: number): Reference[] {
    if (typeof(this.detail) !== 'undefined') {
       return this.detail.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field detail.
  * @returns the value  or undefined
  */
  public getDetail(): Reference[] | undefined {
      return this.detail;
  }

  /**
  * Gets the current value of field detail if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getDetailOrElse(defaultValue: Reference[]): Reference[] {
      if (this.detail == undefined || this.detail == null ) { return defaultValue; }
      return this.detail;
  }


}


