import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_QUESTION, REGEX_ANSWERDATE, REGEX_ANSWERDATETIME, REGEX_ANSWERTIME, REGEX_ANSWERSTRING } from '../FhirTsLibValidation/FhirRegex';
import { Coding, Element, Extension, Quantity, Reference } from './index';
import { QuestionnaireEnableWhenOperator_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A structured set of questions intended to guide the collection of answers from end-users.
 * Questionnaires provide detailed control over order, presentation, phraseology and grouping to
 * allow coherent, consistent data collection.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Questionnaire_EnableWhen
 */
export class QuestionnaireEnableWhen {
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
  protected question?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _question?: Element;

  /**
   * Specifies the criteria by which the question is enabled.
   * Field access restricted because there are specific valid values.
   */
  protected operator?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _operator?: Element;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item
   * to be enabled.
   */
   answerBoolean?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _answerBoolean?: Element;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item
   * to be enabled.
   */
   answerDecimal?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _answerDecimal?: Element;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item
   * to be enabled.
   */
   answerInteger?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _answerInteger?: Element;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item
   * to be enabled.
   * Field access restricted because there are specific valid values.
   */
  protected answerDate?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _answerDate?: Element;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item
   * to be enabled.
   * Field access restricted because there are specific valid values.
   */
  protected answerDateTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _answerDateTime?: Element;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item
   * to be enabled.
   * Field access restricted because there are specific valid values.
   */
  protected answerTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _answerTime?: Element;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item
   * to be enabled.
   * Field access restricted because there are specific valid values.
   */
  protected answerString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _answerString?: Element;

  /**
   * A reference to a code defined by a terminology system.
   */
  @Type(() => Coding)
   answerCoding?: Coding;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   answerQuantity?: Quantity;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   answerReference?: Reference;


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
  public setQuestion(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.question) !== 'undefined') {
         delete this.question;
      }
      return;
    }
    
    if (REGEX_QUESTION.test(newValue)) {
      this.question = newValue
    } else {
      throw new Error("Invalid value pattern for question of " + newValue);
    }
  }
  
  public getQuestionPattern(): string {
    return REGEX_QUESTION.source;
  }
  
  /**
  * Gets the current value of field question.
  * @returns the value  or undefined
  */
  public getQuestion(): string | undefined {
      return this.question;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setOperator(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.operator) !== 'undefined') {
         delete this.operator;
      }
      return;
    }
    
    const idx = getValidValueIdx(QuestionnaireEnableWhenOperator_list_ValidValues, newValue);
    if (idx >= 0) {
      this.operator = QuestionnaireEnableWhenOperator_list_ValidValues[idx];
    } else {
      throw new Error("Unknown operator of " + newValue);
    }
  }
  
  public getQuestionnaireEnableWhenOperatorValidValues(): string[] {
    return QuestionnaireEnableWhenOperator_list_ValidValues;
  }
  
  /**
  * Gets the current value of field operator.
  * @returns the value  or undefined
  */
  public getOperator(): string | undefined {
      return this.operator;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setAnswerDate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.answerDate) !== 'undefined') {
         delete this.answerDate;
      }
      return;
    }
    
    if (REGEX_ANSWERDATE.test(newValue)) {
      this.answerDate = newValue
    } else {
      throw new Error("Invalid value pattern for answerDate of " + newValue);
    }
  }
  
  public getAnswerDatePattern(): string {
    return REGEX_ANSWERDATE.source;
  }
  
  /**
  * Gets the current value of field answerDate.
  * @returns the value  or undefined
  */
  public getAnswerDate(): string | undefined {
      return this.answerDate;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setAnswerDateTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.answerDateTime) !== 'undefined') {
         delete this.answerDateTime;
      }
      return;
    }
    
    if (REGEX_ANSWERDATETIME.test(newValue)) {
      this.answerDateTime = newValue
    } else {
      throw new Error("Invalid value pattern for answerDateTime of " + newValue);
    }
  }
  
  public getAnswerDateTimePattern(): string {
    return REGEX_ANSWERDATETIME.source;
  }
  
  /**
  * Gets the current value of field answerDateTime.
  * @returns the value  or undefined
  */
  public getAnswerDateTime(): string | undefined {
      return this.answerDateTime;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setAnswerTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.answerTime) !== 'undefined') {
         delete this.answerTime;
      }
      return;
    }
    
    if (REGEX_ANSWERTIME.test(newValue)) {
      this.answerTime = newValue
    } else {
      throw new Error("Invalid value pattern for answerTime of " + newValue);
    }
  }
  
  public getAnswerTimePattern(): string {
    return REGEX_ANSWERTIME.source;
  }
  
  /**
  * Gets the current value of field answerTime.
  * @returns the value  or undefined
  */
  public getAnswerTime(): string | undefined {
      return this.answerTime;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setAnswerString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.answerString) !== 'undefined') {
         delete this.answerString;
      }
      return;
    }
    
    if (REGEX_ANSWERSTRING.test(newValue)) {
      this.answerString = newValue
    } else {
      throw new Error("Invalid value pattern for answerString of " + newValue);
    }
  }
  
  public getAnswerStringPattern(): string {
    return REGEX_ANSWERSTRING.source;
  }
  
  /**
  * Gets the current value of field answerString.
  * @returns the value  or undefined
  */
  public getAnswerString(): string | undefined {
      return this.answerString;
  }


}


