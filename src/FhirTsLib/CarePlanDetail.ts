import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_KIND, REGEX_SCHEDULEDSTRING, REGEX_DESCRIPTION } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Period, Quantity, Reference, Timing } from './index';
import { CarePlanDetailStatus_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular
 * patient, group or community for a period of time, possibly limited to care for a specific
 * condition or set of conditions.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/CarePlan_Detail
 */
export class CarePlanDetail {
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
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected kind?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _kind?: Element;

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is
   * adhered to in whole or in part by this CarePlan activity.
   * Field access restricted because there are specific valid values.
   */
  protected instantiatesCanonical?: string[];

  /**
   * The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition
   * that is adhered to in whole or in part by this CarePlan activity.
   * Field access restricted because there are specific valid values.
   */
  protected instantiatesUri?: string[];

  /**
   * Extensions for instantiatesUri
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _instantiatesUri?: Element[];

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   code?: CodeableConcept;

  /**
   * Provides the rationale that drove the inclusion of this particular activity as part of the plan or
   * the reason why the activity was prohibited.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected reasonCode?: CodeableConcept[];

  /**
   * Indicates another resource, such as the health condition(s), whose existence justifies this request
   * and drove the inclusion of this particular activity as part of the plan.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected reasonReference?: Reference[];

  /**
   * Internal reference that identifies the goals that this activity is intended to contribute towards
   * meeting.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected goal?: Reference[];

  /**
   * Identifies what progress is being made for the specific activity.
   * Field access restricted because there are specific valid values.
   */
  protected status?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _status?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   statusReason?: CodeableConcept;

  /**
   * Value of "true" or "false"
   */
   doNotPerform?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _doNotPerform?: Element;

  /**
   * Specifies an event that may occur multiple times. Timing schedules are used to record when things
   * are planned, expected or requested to occur. The most common usage is in dosage instructions for
   * medications. They are also used when planning care of various kinds, and may be used for reporting
   * the schedule to which past regular activities were carried out.
   */
  @Type(() => Timing)
   scheduledTiming?: Timing;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   scheduledPeriod?: Period;

  /**
   * The period, timing or frequency upon which the described activity is to occur.
   * Field access restricted because there are specific valid values.
   */
  protected scheduledString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _scheduledString?: Element;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   location?: Reference;

  /**
   * Identifies who's expected to be involved in the activity.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected performer?: Reference[];

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   productCodeableConcept?: CodeableConcept;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   productReference?: Reference;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   dailyAmount?: Quantity;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   quantity?: Quantity;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected description?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _description?: Element;


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
  public setKind(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.kind) !== 'undefined') {
         delete this.kind;
      }
      return;
    }
    
    if (REGEX_KIND.test(newValue)) {
      this.kind = newValue
    } else {
      throw new Error("Invalid value pattern for kind of " + newValue);
    }
  }
  
  public getKindPattern(): string {
    return REGEX_KIND.source;
  }
  
  /**
  * Gets the current value of field kind.
  * @returns the value  or undefined
  */
  public getKind(): string | undefined {
      return this.kind;
  }

  public addInstantiatesCanonical(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.instantiatesCanonical) !== 'undefined') {
         delete this.instantiatesCanonical;
      }
      return;
    }
    
    if (typeof(this.instantiatesCanonical) === 'undefined') {
      this.instantiatesCanonical =  [];
    }
    this.instantiatesCanonical.push(newValue);
  }
  /**
  * Removes all elements from the array instantiatesCanonical, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteInstantiatesCanonicalAll(): string[] {
    if (typeof(this.instantiatesCanonical) !== 'undefined') {
       const oldArray = this.instantiatesCanonical;
       delete this.instantiatesCanonical;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array instantiatesCanonical, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteInstantiatesCanonicalBySplice(start: number, deleteCount?: number): string[] {
    if (typeof(this.instantiatesCanonical) !== 'undefined') {
       return this.instantiatesCanonical.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field instantiatesCanonical.
  * @returns the value  or undefined
  */
  public getInstantiatesCanonical(): string[] | undefined {
      return this.instantiatesCanonical;
  }

  public addInstantiatesUri(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.instantiatesUri) !== 'undefined') {
         delete this.instantiatesUri;
      }
      return;
    }
    
    if (typeof(this.instantiatesUri) === 'undefined') {
      this.instantiatesUri =  [];
    }
    this.instantiatesUri.push(newValue);
  }
  /**
  * Removes all elements from the array instantiatesUri, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteInstantiatesUriAll(): string[] {
    if (typeof(this.instantiatesUri) !== 'undefined') {
       const oldArray = this.instantiatesUri;
       delete this.instantiatesUri;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array instantiatesUri, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteInstantiatesUriBySplice(start: number, deleteCount?: number): string[] {
    if (typeof(this.instantiatesUri) !== 'undefined') {
       return this.instantiatesUri.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field instantiatesUri.
  * @returns the value  or undefined
  */
  public getInstantiatesUri(): string[] | undefined {
      return this.instantiatesUri;
  }

  public add_instantiatesUri(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._instantiatesUri) !== 'undefined') {
         delete this._instantiatesUri;
      }
      return;
    }
    
    if (typeof(this._instantiatesUri) === 'undefined') {
      this._instantiatesUri =  [];
    }
    this._instantiatesUri.push(newValue);
  }
  /**
  * Removes all elements from the array _instantiatesUri, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public delete_instantiatesUriAll(): Element[] {
    if (typeof(this._instantiatesUri) !== 'undefined') {
       const oldArray = this._instantiatesUri;
       delete this._instantiatesUri;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array _instantiatesUri, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public delete_instantiatesUriBySplice(start: number, deleteCount?: number): Element[] {
    if (typeof(this._instantiatesUri) !== 'undefined') {
       return this._instantiatesUri.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field _instantiatesUri.
  * @returns the value  or undefined
  */
  public get_instantiatesUri(): Element[] | undefined {
      return this._instantiatesUri;
  }

  public addReasonCode(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.reasonCode) !== 'undefined') {
         delete this.reasonCode;
      }
      return;
    }
    
    if (typeof(this.reasonCode) === 'undefined') {
      this.reasonCode =  [];
    }
    this.reasonCode.push(newValue);
  }
  /**
  * Removes all elements from the array reasonCode, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteReasonCodeAll(): CodeableConcept[] {
    if (typeof(this.reasonCode) !== 'undefined') {
       const oldArray = this.reasonCode;
       delete this.reasonCode;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array reasonCode, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteReasonCodeBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.reasonCode) !== 'undefined') {
       return this.reasonCode.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field reasonCode.
  * @returns the value  or undefined
  */
  public getReasonCode(): CodeableConcept[] | undefined {
      return this.reasonCode;
  }

  public addReasonReference(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.reasonReference) !== 'undefined') {
         delete this.reasonReference;
      }
      return;
    }
    
    if (typeof(this.reasonReference) === 'undefined') {
      this.reasonReference =  [];
    }
    this.reasonReference.push(newValue);
  }
  /**
  * Removes all elements from the array reasonReference, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteReasonReferenceAll(): Reference[] {
    if (typeof(this.reasonReference) !== 'undefined') {
       const oldArray = this.reasonReference;
       delete this.reasonReference;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array reasonReference, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteReasonReferenceBySplice(start: number, deleteCount?: number): Reference[] {
    if (typeof(this.reasonReference) !== 'undefined') {
       return this.reasonReference.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field reasonReference.
  * @returns the value  or undefined
  */
  public getReasonReference(): Reference[] | undefined {
      return this.reasonReference;
  }

  public addGoal(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.goal) !== 'undefined') {
         delete this.goal;
      }
      return;
    }
    
    if (typeof(this.goal) === 'undefined') {
      this.goal =  [];
    }
    this.goal.push(newValue);
  }
  /**
  * Removes all elements from the array goal, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteGoalAll(): Reference[] {
    if (typeof(this.goal) !== 'undefined') {
       const oldArray = this.goal;
       delete this.goal;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array goal, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteGoalBySplice(start: number, deleteCount?: number): Reference[] {
    if (typeof(this.goal) !== 'undefined') {
       return this.goal.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field goal.
  * @returns the value  or undefined
  */
  public getGoal(): Reference[] | undefined {
      return this.goal;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setStatus(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.status) !== 'undefined') {
         delete this.status;
      }
      return;
    }
    
    const idx = getValidValueIdx(CarePlanDetailStatus_list_ValidValues, newValue);
    if (idx >= 0) {
      this.status = CarePlanDetailStatus_list_ValidValues[idx];
    } else {
      throw new Error("Unknown status of " + newValue);
    }
  }
  
  public getCarePlanDetailStatusValidValues(): string[] {
    return CarePlanDetailStatus_list_ValidValues;
  }
  
  /**
  * Gets the current value of field status.
  * @returns the value  or undefined
  */
  public getStatus(): string | undefined {
      return this.status;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setScheduledString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.scheduledString) !== 'undefined') {
         delete this.scheduledString;
      }
      return;
    }
    
    if (REGEX_SCHEDULEDSTRING.test(newValue)) {
      this.scheduledString = newValue
    } else {
      throw new Error("Invalid value pattern for scheduledString of " + newValue);
    }
  }
  
  public getScheduledStringPattern(): string {
    return REGEX_SCHEDULEDSTRING.source;
  }
  
  /**
  * Gets the current value of field scheduledString.
  * @returns the value  or undefined
  */
  public getScheduledString(): string | undefined {
      return this.scheduledString;
  }

  public addPerformer(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.performer) !== 'undefined') {
         delete this.performer;
      }
      return;
    }
    
    if (typeof(this.performer) === 'undefined') {
      this.performer =  [];
    }
    this.performer.push(newValue);
  }
  /**
  * Removes all elements from the array performer, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deletePerformerAll(): Reference[] {
    if (typeof(this.performer) !== 'undefined') {
       const oldArray = this.performer;
       delete this.performer;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array performer, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deletePerformerBySplice(start: number, deleteCount?: number): Reference[] {
    if (typeof(this.performer) !== 'undefined') {
       return this.performer.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field performer.
  * @returns the value  or undefined
  */
  public getPerformer(): Reference[] | undefined {
      return this.performer;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDescription(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.description) !== 'undefined') {
         delete this.description;
      }
      return;
    }
    
    if (REGEX_DESCRIPTION.test(newValue)) {
      this.description = newValue
    } else {
      throw new Error("Invalid value pattern for description of " + newValue);
    }
  }
  
  public getDescriptionPattern(): string {
    return REGEX_DESCRIPTION.source;
  }
  
  /**
  * Gets the current value of field description.
  * @returns the value  or undefined
  */
  public getDescription(): string | undefined {
      return this.description;
  }


}


