import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { ClaimResponseAdjudication, ClaimResponseDetail, Element, Extension } from './index';



/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ClaimResponse_Item
 */
export class ClaimResponseItem {
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
   * An integer with a value that is positive (e.g. >0)
   */
   itemSequence?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _itemSequence?: Element;

  /**
   * The numbers associated with notes below which apply to the adjudication of this item.
   * Field access restricted because there are specific valid values.
   */
  protected noteNumber?: number[];

  /**
   * Extensions for noteNumber
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _noteNumber?: Element[];

  /**
   * If this item is a group then the values here are a summary of the adjudication of the detail items.
   * If this item is a simple product or service then this is the result of the adjudication of this
   * item.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ClaimResponseAdjudication)
  protected adjudication?: ClaimResponseAdjudication[];

  /**
   * A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple
   * items.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ClaimResponseDetail)
  protected detail?: ClaimResponseDetail[];


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

  public addNoteNumber(newValue: number) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.noteNumber) !== 'undefined') {
         delete this.noteNumber;
      }
      return;
    }
    
    if (typeof(this.noteNumber) === 'undefined') {
      this.noteNumber =  [];
    }
    this.noteNumber.push(newValue);
  }

  public getNoteNumber(): number[] | undefined {
      return this.noteNumber;
  }

  public add_noteNumber(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._noteNumber) !== 'undefined') {
         delete this._noteNumber;
      }
      return;
    }
    
    if (typeof(this._noteNumber) === 'undefined') {
      this._noteNumber =  [];
    }
    this._noteNumber.push(newValue);
  }

  public get_noteNumber(): Element[] | undefined {
      return this._noteNumber;
  }

  public addAdjudication(newValue: ClaimResponseAdjudication) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.adjudication) !== 'undefined') {
         delete this.adjudication;
      }
      return;
    }
    
    if (typeof(this.adjudication) === 'undefined') {
      this.adjudication =  [];
    }
    this.adjudication.push(newValue);
  }

  public getAdjudication(): ClaimResponseAdjudication[] | undefined {
      return this.adjudication;
  }

  public addDetail(newValue: ClaimResponseDetail) {
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

  public getDetail(): ClaimResponseDetail[] | undefined {
      return this.detail;
  }


}


