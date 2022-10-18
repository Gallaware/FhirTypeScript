import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { Coding, Element, Extension } from './index';



/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or
 * agreement.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Contract_SecurityLabel
 */
export class ContractSecurityLabel {
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
   * Number used to link this term or term element to the applicable Security Label.
   * Field access restricted because there are specific valid values.
   */
  protected number?: number[];

  /**
   * Extensions for number
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _number?: Element[];

  /**
   * A reference to a code defined by a terminology system.
   */
  @Type(() => Coding)
   classification?: Coding;

  /**
   * Security label privacy tag that species the applicable privacy and security policies governing this
   * term and/or term elements.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Coding)
  protected category?: Coding[];

  /**
   * Security label privacy tag that species the manner in which term and/or term elements are to be
   * protected.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Coding)
  protected control?: Coding[];


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
  public deleteExtensionAll() {
    if (typeof(this.extension) !== 'undefined') {
       delete this.extension;
    }
    return;
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
  public deleteModifierExtensionAll() {
    if (typeof(this.modifierExtension) !== 'undefined') {
       delete this.modifierExtension;
    }
    return;
  }
  

  public getModifierExtension(): Extension[] | undefined {
      return this.modifierExtension;
  }

  public addNumber(newValue: number) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.number) !== 'undefined') {
         delete this.number;
      }
      return;
    }
    
    if (typeof(this.number) === 'undefined') {
      this.number =  [];
    }
    this.number.push(newValue);
  }
  public deleteNumberAll() {
    if (typeof(this.number) !== 'undefined') {
       delete this.number;
    }
    return;
  }
  

  public getNumber(): number[] | undefined {
      return this.number;
  }

  public add_number(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._number) !== 'undefined') {
         delete this._number;
      }
      return;
    }
    
    if (typeof(this._number) === 'undefined') {
      this._number =  [];
    }
    this._number.push(newValue);
  }
  public delete_numberAll() {
    if (typeof(this._number) !== 'undefined') {
       delete this._number;
    }
    return;
  }
  

  public get_number(): Element[] | undefined {
      return this._number;
  }

  public addCategory(newValue: Coding) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.category) !== 'undefined') {
         delete this.category;
      }
      return;
    }
    
    if (typeof(this.category) === 'undefined') {
      this.category =  [];
    }
    this.category.push(newValue);
  }
  public deleteCategoryAll() {
    if (typeof(this.category) !== 'undefined') {
       delete this.category;
    }
    return;
  }
  

  public getCategory(): Coding[] | undefined {
      return this.category;
  }

  public addControl(newValue: Coding) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.control) !== 'undefined') {
         delete this.control;
      }
      return;
    }
    
    if (typeof(this.control) === 'undefined') {
      this.control =  [];
    }
    this.control.push(newValue);
  }
  public deleteControlAll() {
    if (typeof(this.control) !== 'undefined') {
       delete this.control;
    }
    return;
  }
  

  public getControl(): Coding[] | undefined {
      return this.control;
  }


}


