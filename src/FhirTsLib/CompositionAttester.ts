import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_TIME } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension, Reference } from './FhirType';
import { CompositionAttesterMode_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A set of healthcare-related information that is assembled together into a single logical package
 * that provides a single coherent statement of meaning, establishes its own context and that has
 * clinical attestation with regard to who is making the statement. A Composition defines the
 * structure and narrative content necessary for a document. However, a Composition alone does not
 * constitute a document. Rather, the Composition must be the first entry in a Bundle where
 * Bundle.type=document, and any other resources referenced from Composition must be included as
 * subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Composition_Attester
 */
export class CompositionAttester {
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
   * The type of attestation the authenticator offers.
   * Field access restricted because there are specific valid values.
   */
  protected mode?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _mode?: Element;

  /**
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected time?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _time?: Element;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   party?: Reference;


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
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setMode(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.mode) !== 'undefined') {
         delete this.mode;
      }
      return;
    }
    
    const idx = getValidValueIdx(CompositionAttesterMode_list_ValidValues, newValue);
    if (idx >= 0) {
      this.mode = CompositionAttesterMode_list_ValidValues[idx];
    } else {
      throw new Error("Unknown mode of " + newValue);
    }
  }
  
  public getCompositionAttesterModeValidValues(): string[] {
    return CompositionAttesterMode_list_ValidValues;
  }
  

  public getMode(): string | undefined {
      return this.mode;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.time) !== 'undefined') {
         delete this.time;
      }
      return;
    }
    
    if (REGEX_TIME.test(newValue)) {
      this.time = newValue
    } else {
      throw new Error("Invalid value pattern for time of " + newValue);
    }
  }
  
  public getTimePattern(): string {
    return REGEX_TIME.source;
  }
  

  public getTime(): string | undefined {
      return this.time;
  }


}

