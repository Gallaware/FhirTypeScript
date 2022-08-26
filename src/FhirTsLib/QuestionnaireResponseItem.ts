import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_LINKID, REGEX_DEFINITION_000, REGEX_TEXT } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension, QuestionnaireResponseAnswer } from './FhirType';



/**
 * A structured set of questions and their answers. The questions are ordered and grouped into
 * coherent subsets, corresponding to the structure of the grouping of the questionnaire being
 * responded to.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/QuestionnaireResponse_Item
 */
export class QuestionnaireResponseItem {
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
   * The respondent's answer(s) to the question.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => QuestionnaireResponseAnswer)
  protected answer?: QuestionnaireResponseAnswer[];

  /**
   * Questions or sub-groups nested beneath a question or group.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => QuestionnaireResponseItem)
  protected item?: QuestionnaireResponseItem[];


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
  

  public getDefinition(): string | undefined {
      return this.definition;
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
  

  public getText(): string | undefined {
      return this.text;
  }

  public addAnswer(newValue: QuestionnaireResponseAnswer) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.answer) !== 'undefined') {
         delete this.answer;
      }
      return;
    }
    
    if (typeof(this.answer) === 'undefined') {
      this.answer =  [];
    }
    this.answer.push(newValue);
  }

  public getAnswer(): QuestionnaireResponseAnswer[] | undefined {
      return this.answer;
  }

  public addItem(newValue: QuestionnaireResponseItem) {
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

  public getItem(): QuestionnaireResponseItem[] | undefined {
      return this.item;
  }


}


