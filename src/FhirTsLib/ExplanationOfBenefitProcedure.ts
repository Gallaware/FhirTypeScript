import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_DATE } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Reference } from './index';



/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and
 * optionally account balance information, for informing the subscriber of the benefits provided.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ExplanationOfBenefit_Procedure
 */
export class ExplanationOfBenefitProcedure {
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
   sequence?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _sequence?: Element;

  /**
   * When the condition was observed or the relative ranking.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected type?: CodeableConcept[];

  /**
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected date?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _date?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   procedureCodeableConcept?: CodeableConcept;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   procedureReference?: Reference;

  /**
   * Unique Device Identifiers associated with this line item.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected udi?: Reference[];


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

  public addType(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.type) !== 'undefined') {
         delete this.type;
      }
      return;
    }
    
    if (typeof(this.type) === 'undefined') {
      this.type =  [];
    }
    this.type.push(newValue);
  }

  public getType(): CodeableConcept[] | undefined {
      return this.type;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.date) !== 'undefined') {
         delete this.date;
      }
      return;
    }
    
    if (REGEX_DATE.test(newValue)) {
      this.date = newValue
    } else {
      throw new Error("Invalid value pattern for date of " + newValue);
    }
  }
  
  public getDatePattern(): string {
    return REGEX_DATE.source;
  }
  

  public getDate(): string | undefined {
      return this.date;
  }

  public addUdi(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.udi) !== 'undefined') {
         delete this.udi;
      }
      return;
    }
    
    if (typeof(this.udi) === 'undefined') {
      this.udi =  [];
    }
    this.udi.push(newValue);
  }

  public getUdi(): Reference[] | undefined {
      return this.udi;
  }


}


