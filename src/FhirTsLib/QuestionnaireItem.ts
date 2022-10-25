import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_LINKID, REGEX_DEFINITION_000, REGEX_PREFIX, REGEX_TEXT, REGEX_ANSWERVALUESET } from '../FhirTsLibValidation/FhirRegex';
import { Coding, Element, Extension, QuestionnaireAnswerOption, QuestionnaireEnableWhen, QuestionnaireInitial } from './index';
import { QuestionnaireItemType_list_ValidValues, QuestionnaireItemEnableBehavior_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A structured set of questions intended to guide the collection of answers from end-users.
 * Questionnaires provide detailed control over order, presentation, phraseology and grouping to
 * allow coherent, consistent data collection.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Questionnaire_Item
 */
export class QuestionnaireItem {
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
  protected linkId?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _linkId?: Element;

  /**
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected definition?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _definition?: Element;

  /**
   * A terminology code that corresponds to this group or question (e.g. a code from LOINC, which
   * defines many questions and answers).
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Coding)
  protected code?: Coding[];

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected prefix?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _prefix?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected text?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _text?: Element;

  /**
   * The type of questionnaire item this is - whether text for display, a grouping of other items or a
   * particular type of data to be captured (string, integer, coded choice, etc.).
   * Field access restricted because there are specific valid values.
   */
  protected type?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _type?: Element;

  /**
   * A constraint indicating that this item should only be enabled (displayed/allow answers to be
   * captured) when the specified condition is true.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => QuestionnaireEnableWhen)
  protected enableWhen?: QuestionnaireEnableWhen[];

  /**
   * Controls how multiple enableWhen values are interpreted -  whether all or any must be true.
   * Field access restricted because there are specific valid values.
   */
  protected enableBehavior?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _enableBehavior?: Element;

  /**
   * Value of "true" or "false"
   */
   required?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _required?: Element;

  /**
   * Value of "true" or "false"
   */
   repeats?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _repeats?: Element;

  /**
   * Value of "true" or "false"
   */
   readOnly?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _readOnly?: Element;

  /**
   * A whole number
   */
   maxLength?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _maxLength?: Element;

  /**
   * A URI that is a reference to a canonical URL on a FHIR resource
   * Field access restricted because there are specific valid values.
   */
  protected answerValueSet?: string;

  /**
   * One of the permitted answers for a "choice" or "open-choice" question.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => QuestionnaireAnswerOption)
  protected answerOption?: QuestionnaireAnswerOption[];

  /**
   * One or more values that should be pre-populated in the answer when initially rendering the
   * questionnaire for user input.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => QuestionnaireInitial)
  protected initial?: QuestionnaireInitial[];

  /**
   * Text, questions and other groups to be nested beneath a question or group.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => QuestionnaireItem)
  protected item?: QuestionnaireItem[];


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
  public setLinkId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.linkId) !== 'undefined') {
         delete this.linkId;
      }
      return;
    }
    
    if (REGEX_LINKID.test(newValue)) {
      this.linkId = newValue
    } else {
      throw new Error("Invalid value pattern for linkId of " + newValue);
    }
  }
  
  public getLinkIdPattern(): string {
    return REGEX_LINKID.source;
  }
  
  /**
  * Gets the current value of field linkId.
  * @returns the value  or undefined
  */
  public getLinkId(): string | undefined {
      return this.linkId;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDefinition(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.definition) !== 'undefined') {
         delete this.definition;
      }
      return;
    }
    
    if (REGEX_DEFINITION_000.test(newValue)) {
      this.definition = newValue
    } else {
      throw new Error("Invalid value pattern for definition of " + newValue);
    }
  }
  
  public getDefinitionPattern(): string {
    return REGEX_DEFINITION_000.source;
  }
  
  /**
  * Gets the current value of field definition.
  * @returns the value  or undefined
  */
  public getDefinition(): string | undefined {
      return this.definition;
  }

  public addCode(newValue: Coding) {
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
  public deleteCodeAll(): Coding[] {
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
  public deleteCodeBySplice(start: number, deleteCount?: number): Coding[] {
    if (typeof(this.code) !== 'undefined') {
       return this.code.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field code.
  * @returns the value  or undefined
  */
  public getCode(): Coding[] | undefined {
      return this.code;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setPrefix(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.prefix) !== 'undefined') {
         delete this.prefix;
      }
      return;
    }
    
    if (REGEX_PREFIX.test(newValue)) {
      this.prefix = newValue
    } else {
      throw new Error("Invalid value pattern for prefix of " + newValue);
    }
  }
  
  public getPrefixPattern(): string {
    return REGEX_PREFIX.source;
  }
  
  /**
  * Gets the current value of field prefix.
  * @returns the value  or undefined
  */
  public getPrefix(): string | undefined {
      return this.prefix;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setText(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.text) !== 'undefined') {
         delete this.text;
      }
      return;
    }
    
    if (REGEX_TEXT.test(newValue)) {
      this.text = newValue
    } else {
      throw new Error("Invalid value pattern for text of " + newValue);
    }
  }
  
  public getTextPattern(): string {
    return REGEX_TEXT.source;
  }
  
  /**
  * Gets the current value of field text.
  * @returns the value  or undefined
  */
  public getText(): string | undefined {
      return this.text;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setType(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.type) !== 'undefined') {
         delete this.type;
      }
      return;
    }
    
    const idx = getValidValueIdx(QuestionnaireItemType_list_ValidValues, newValue);
    if (idx >= 0) {
      this.type = QuestionnaireItemType_list_ValidValues[idx];
    } else {
      throw new Error("Unknown type of " + newValue);
    }
  }
  
  public getQuestionnaireItemTypeValidValues(): string[] {
    return QuestionnaireItemType_list_ValidValues;
  }
  
  /**
  * Gets the current value of field type.
  * @returns the value  or undefined
  */
  public getType(): string | undefined {
      return this.type;
  }

  public addEnableWhen(newValue: QuestionnaireEnableWhen) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.enableWhen) !== 'undefined') {
         delete this.enableWhen;
      }
      return;
    }
    
    if (typeof(this.enableWhen) === 'undefined') {
      this.enableWhen =  [];
    }
    this.enableWhen.push(newValue);
  }
  /**
  * Removes all elements from the array enableWhen, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteEnableWhenAll(): QuestionnaireEnableWhen[] {
    if (typeof(this.enableWhen) !== 'undefined') {
       const oldArray = this.enableWhen;
       delete this.enableWhen;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array enableWhen, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteEnableWhenBySplice(start: number, deleteCount?: number): QuestionnaireEnableWhen[] {
    if (typeof(this.enableWhen) !== 'undefined') {
       return this.enableWhen.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field enableWhen.
  * @returns the value  or undefined
  */
  public getEnableWhen(): QuestionnaireEnableWhen[] | undefined {
      return this.enableWhen;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setEnableBehavior(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.enableBehavior) !== 'undefined') {
         delete this.enableBehavior;
      }
      return;
    }
    
    const idx = getValidValueIdx(QuestionnaireItemEnableBehavior_list_ValidValues, newValue);
    if (idx >= 0) {
      this.enableBehavior = QuestionnaireItemEnableBehavior_list_ValidValues[idx];
    } else {
      throw new Error("Unknown enableBehavior of " + newValue);
    }
  }
  
  public getQuestionnaireItemEnableBehaviorValidValues(): string[] {
    return QuestionnaireItemEnableBehavior_list_ValidValues;
  }
  
  /**
  * Gets the current value of field enableBehavior.
  * @returns the value  or undefined
  */
  public getEnableBehavior(): string | undefined {
      return this.enableBehavior;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setAnswerValueSet(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.answerValueSet) !== 'undefined') {
         delete this.answerValueSet;
      }
      return;
    }
    
    if (REGEX_ANSWERVALUESET.test(newValue)) {
      this.answerValueSet = newValue
    } else {
      throw new Error("Invalid value pattern for answerValueSet of " + newValue);
    }
  }
  
  public getAnswerValueSetPattern(): string {
    return REGEX_ANSWERVALUESET.source;
  }
  
  /**
  * Gets the current value of field answerValueSet.
  * @returns the value  or undefined
  */
  public getAnswerValueSet(): string | undefined {
      return this.answerValueSet;
  }

  public addAnswerOption(newValue: QuestionnaireAnswerOption) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.answerOption) !== 'undefined') {
         delete this.answerOption;
      }
      return;
    }
    
    if (typeof(this.answerOption) === 'undefined') {
      this.answerOption =  [];
    }
    this.answerOption.push(newValue);
  }
  /**
  * Removes all elements from the array answerOption, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteAnswerOptionAll(): QuestionnaireAnswerOption[] {
    if (typeof(this.answerOption) !== 'undefined') {
       const oldArray = this.answerOption;
       delete this.answerOption;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array answerOption, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteAnswerOptionBySplice(start: number, deleteCount?: number): QuestionnaireAnswerOption[] {
    if (typeof(this.answerOption) !== 'undefined') {
       return this.answerOption.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field answerOption.
  * @returns the value  or undefined
  */
  public getAnswerOption(): QuestionnaireAnswerOption[] | undefined {
      return this.answerOption;
  }

  public addInitial(newValue: QuestionnaireInitial) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.initial) !== 'undefined') {
         delete this.initial;
      }
      return;
    }
    
    if (typeof(this.initial) === 'undefined') {
      this.initial =  [];
    }
    this.initial.push(newValue);
  }
  /**
  * Removes all elements from the array initial, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteInitialAll(): QuestionnaireInitial[] {
    if (typeof(this.initial) !== 'undefined') {
       const oldArray = this.initial;
       delete this.initial;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array initial, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteInitialBySplice(start: number, deleteCount?: number): QuestionnaireInitial[] {
    if (typeof(this.initial) !== 'undefined') {
       return this.initial.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field initial.
  * @returns the value  or undefined
  */
  public getInitial(): QuestionnaireInitial[] | undefined {
      return this.initial;
  }

  public addItem(newValue: QuestionnaireItem) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.item) !== 'undefined') {
         delete this.item;
      }
      return;
    }
    
    if (typeof(this.item) === 'undefined') {
      this.item =  [];
    }
    this.item.push(newValue);
  }
  /**
  * Removes all elements from the array item, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteItemAll(): QuestionnaireItem[] {
    if (typeof(this.item) !== 'undefined') {
       const oldArray = this.item;
       delete this.item;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array item, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteItemBySplice(start: number, deleteCount?: number): QuestionnaireItem[] {
    if (typeof(this.item) !== 'undefined') {
       return this.item.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field item.
  * @returns the value  or undefined
  */
  public getItem(): QuestionnaireItem[] | undefined {
      return this.item;
  }


}


