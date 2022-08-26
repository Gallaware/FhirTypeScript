import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_CODE, REGEX_DISPLAY } from '../FhirTsLibValidation/FhirRegex';
import { ConceptMapTarget, Element, Extension } from './FhirType';



/**
 * A statement of relationships from one set of concepts to one or more other concepts - either
 * concepts in code systems, or data element/data element concepts, or classes in class models.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ConceptMap_Element
 */
export class ConceptMapElement {
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
  protected code?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _code?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected display?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _display?: Element;

  /**
   * A concept from the target value set that this concept maps to.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ConceptMapTarget)
  protected target?: ConceptMapTarget[];


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
  public setCode(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.code) !== 'undefined') {
         delete this.code;
      }
      return;
    }
    
    if (REGEX_CODE.test(newValue)) {
      this.code = newValue
    } else {
      throw new Error("Invalid value pattern for code of " + newValue);
    }
  }
  
  public getCodePattern(): string {
    return REGEX_CODE.source;
  }
  

  public getCode(): string | undefined {
      return this.code;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDisplay(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.display) !== 'undefined') {
         delete this.display;
      }
      return;
    }
    
    if (REGEX_DISPLAY.test(newValue)) {
      this.display = newValue
    } else {
      throw new Error("Invalid value pattern for display of " + newValue);
    }
  }
  
  public getDisplayPattern(): string {
    return REGEX_DISPLAY.source;
  }
  

  public getDisplay(): string | undefined {
      return this.display;
  }

  public addTarget(newValue: ConceptMapTarget) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.target) !== 'undefined') {
         delete this.target;
      }
      return;
    }
    
    if (typeof(this.target) === 'undefined') {
      this.target =  [];
    }
    this.target.push(newValue);
  }

  public getTarget(): ConceptMapTarget[] | undefined {
      return this.target;
  }


}


