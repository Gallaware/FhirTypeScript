import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_DETAILSTRING, REGEX_DUEDATE } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Duration, Element, Extension, Quantity, Range, Ratio } from './index';



/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight
 * loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a
 * process improvement objective, etc.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Goal_Target
 */
export class GoalTarget {
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
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   measure?: CodeableConcept;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   detailQuantity?: Quantity;

  /**
   * A set of ordered Quantities defined by a low and high limit.
   */
  @Type(() => Range)
   detailRange?: Range;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   detailCodeableConcept?: CodeableConcept;

  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150
   * pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low
   * value is missing, it indicates that the goal is achieved at any focus value at or below the high
   * value. Similarly, if the high value is missing, it indicates that the goal is achieved at any
   * focus value at or above the low value.
   * Field access restricted because there are specific valid values.
   */
  protected detailString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _detailString?: Element;

  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150
   * pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low
   * value is missing, it indicates that the goal is achieved at any focus value at or below the high
   * value. Similarly, if the high value is missing, it indicates that the goal is achieved at any
   * focus value at or above the low value.
   */
   detailBoolean?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _detailBoolean?: Element;

  /**
   * The target value of the focus to be achieved to signify the fulfillment of the goal, e.g. 150
   * pounds, 7.0%. Either the high or low or both values of the range can be specified. When a low
   * value is missing, it indicates that the goal is achieved at any focus value at or below the high
   * value. Similarly, if the high value is missing, it indicates that the goal is achieved at any
   * focus value at or above the low value.
   */
   detailInteger?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _detailInteger?: Element;

  /**
   * A relationship of two Quantity values - expressed as a numerator and a denominator.
   */
  @Type(() => Ratio)
   detailRatio?: Ratio;

  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   * Field access restricted because there are specific valid values.
   */
  protected dueDate?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _dueDate?: Element;

  /**
   * A length of time.
   */
  @Type(() => Duration)
   dueDuration?: Duration;


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
  public setDetailString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.detailString) !== 'undefined') {
         delete this.detailString;
      }
      return;
    }
    
    if (REGEX_DETAILSTRING.test(newValue)) {
      this.detailString = newValue
    } else {
      throw new Error("Invalid value pattern for detailString of " + newValue);
    }
  }
  
  public getDetailStringPattern(): string {
    return REGEX_DETAILSTRING.source;
  }
  
  /**
  * Gets the current value of field detailString.
  * @returns the value  or undefined
  */
  public getDetailString(): string | undefined {
      return this.detailString;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDueDate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.dueDate) !== 'undefined') {
         delete this.dueDate;
      }
      return;
    }
    
    if (REGEX_DUEDATE.test(newValue)) {
      this.dueDate = newValue
    } else {
      throw new Error("Invalid value pattern for dueDate of " + newValue);
    }
  }
  
  public getDueDatePattern(): string {
    return REGEX_DUEDATE.source;
  }
  
  /**
  * Gets the current value of field dueDate.
  * @returns the value  or undefined
  */
  public getDueDate(): string | undefined {
      return this.dueDate;
  }


}


