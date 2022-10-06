import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_NAME, REGEX_TITLE } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './index';



/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically
 * through the use of FHIR resources. This resource is used to gather all the parts of an
 * implementation guide into a logical whole and to publish a computable definition of all the parts.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ImplementationGuide_Page1
 */
export class ImplementationGuidePage1 {
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
  protected name?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _name?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected title?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _title?: Element;

  /**
   * The name of an anchor available on the page.
   * Field access restricted because there are specific valid values.
   */
  protected anchor?: string[];

  /**
   * Extensions for anchor
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _anchor?: Element[];


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
  public setName(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.name) !== 'undefined') {
         delete this.name;
      }
      return;
    }
    
    if (REGEX_NAME.test(newValue)) {
      this.name = newValue
    } else {
      throw new Error("Invalid value pattern for name of " + newValue);
    }
  }
  
  public getNamePattern(): string {
    return REGEX_NAME.source;
  }
  

  public getName(): string | undefined {
      return this.name;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setTitle(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.title) !== 'undefined') {
         delete this.title;
      }
      return;
    }
    
    if (REGEX_TITLE.test(newValue)) {
      this.title = newValue
    } else {
      throw new Error("Invalid value pattern for title of " + newValue);
    }
  }
  
  public getTitlePattern(): string {
    return REGEX_TITLE.source;
  }
  

  public getTitle(): string | undefined {
      return this.title;
  }

  public addAnchor(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.anchor) !== 'undefined') {
         delete this.anchor;
      }
      return;
    }
    
    if (typeof(this.anchor) === 'undefined') {
      this.anchor =  [];
    }
    this.anchor.push(newValue);
  }

  public getAnchor(): string[] | undefined {
      return this.anchor;
  }

  public add_anchor(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._anchor) !== 'undefined') {
         delete this._anchor;
      }
      return;
    }
    
    if (typeof(this._anchor) === 'undefined') {
      this._anchor =  [];
    }
    this._anchor.push(newValue);
  }

  public get_anchor(): Element[] | undefined {
      return this._anchor;
  }


}


