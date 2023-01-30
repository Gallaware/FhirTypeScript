import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_VALUEDATE, REGEX_VALUETIME, REGEX_VALUESTRING } from '../FhirTsLibValidation/FhirRegex';
import { Coding, Element, Extension, Reference } from './index';



/**
 * A structured set of questions intended to guide the collection of answers from end-users.
 * Questionnaires provide detailed control over order, presentation, phraseology and grouping to
 * allow coherent, consistent data collection.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Questionnaire_AnswerOption
 */
export class QuestionnaireAnswerOption {
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
   * A potential answer that's allowed as the answer to this question.
   */
   valueInteger?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueInteger?: Element;

  /**
   * A potential answer that's allowed as the answer to this question.
   * Field access restricted because there are specific valid values.
   */
  protected valueDate?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueDate?: Element;

  /**
   * A potential answer that's allowed as the answer to this question.
   * Field access restricted because there are specific valid values.
   */
  protected valueTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueTime?: Element;

  /**
   * A potential answer that's allowed as the answer to this question.
   * Field access restricted because there are specific valid values.
   */
  protected valueString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueString?: Element;

  /**
   * A reference to a code defined by a terminology system.
   */
  @Type(() => Coding)
   valueCoding?: Coding;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   valueReference?: Reference;

  /**
   * Value of "true" or "false"
   */
   initialSelected?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _initialSelected?: Element;


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

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueDate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueDate) !== 'undefined') {
         delete this.valueDate;
      }
      return;
    }
    
    if (REGEX_VALUEDATE.test(newValue)) {
      this.valueDate = newValue
    } else {
      throw new Error("Invalid value pattern for valueDate of " + newValue);
    }
  }
  
  public getValueDatePattern(): string {
    return REGEX_VALUEDATE.source;
  }
  
  /**
  * Gets the current value of field valueDate.
  * @returns the value  or undefined
  */
  public getValueDate(): string | undefined {
      return this.valueDate;
  }

  /**
  * Gets the current value of field valueDate if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueDateOrElse(defaultValue: string): string {
      if (this.valueDate == undefined || this.valueDate == null ) { return defaultValue; }
      return this.valueDate;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueTime) !== 'undefined') {
         delete this.valueTime;
      }
      return;
    }
    
    if (REGEX_VALUETIME.test(newValue)) {
      this.valueTime = newValue
    } else {
      throw new Error("Invalid value pattern for valueTime of " + newValue);
    }
  }
  
  public getValueTimePattern(): string {
    return REGEX_VALUETIME.source;
  }
  
  /**
  * Gets the current value of field valueTime.
  * @returns the value  or undefined
  */
  public getValueTime(): string | undefined {
      return this.valueTime;
  }

  /**
  * Gets the current value of field valueTime if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueTimeOrElse(defaultValue: string): string {
      if (this.valueTime == undefined || this.valueTime == null ) { return defaultValue; }
      return this.valueTime;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueString) !== 'undefined') {
         delete this.valueString;
      }
      return;
    }
    
    if (REGEX_VALUESTRING.test(newValue)) {
      this.valueString = newValue
    } else {
      throw new Error("Invalid value pattern for valueString of " + newValue);
    }
  }
  
  public getValueStringPattern(): string {
    return REGEX_VALUESTRING.source;
  }
  
  /**
  * Gets the current value of field valueString.
  * @returns the value  or undefined
  */
  public getValueString(): string | undefined {
      return this.valueString;
  }

  /**
  * Gets the current value of field valueString if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueStringOrElse(defaultValue: string): string {
      if (this.valueString == undefined || this.valueString == null ) { return defaultValue; }
      return this.valueString;
  }


}


