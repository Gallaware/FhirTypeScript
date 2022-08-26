import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_IDENTIFIER_000, REGEX_TIMESTAMP_000 } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension, ValueSetContains, ValueSetParameter } from './FhirType';



/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended
 * for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use
 * in [coded elements](terminologies.html).
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ValueSet_Expansion
 */
export class ValueSetExpansion {
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
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected identifier?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _identifier?: Element;

  /**
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected timestamp?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _timestamp?: Element;

  /**
   * A whole number
   */
   total?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _total?: Element;

  /**
   * A whole number
   */
   offset?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _offset?: Element;

  /**
   * A parameter that controlled the expansion process. These parameters may be used by users of
   * expanded value sets to check whether the expansion is suitable for a particular purpose, or to
   * pick the correct expansion.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ValueSetParameter)
  protected parameter?: ValueSetParameter[];

  /**
   * The codes that are contained in the value set expansion.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ValueSetContains)
  protected contains?: ValueSetContains[];


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
  public setIdentifier(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.identifier) !== 'undefined') {
         delete this.identifier;
      }
      return;
    }
    
    if (REGEX_IDENTIFIER_000.test(newValue)) {
      this.identifier = newValue
    } else {
      throw new Error("Invalid value pattern for identifier of " + newValue);
    }
  }
  
  public getIdentifierPattern(): string {
    return REGEX_IDENTIFIER_000.source;
  }
  

  public getIdentifier(): string | undefined {
      return this.identifier;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setTimestamp(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.timestamp) !== 'undefined') {
         delete this.timestamp;
      }
      return;
    }
    
    if (REGEX_TIMESTAMP_000.test(newValue)) {
      this.timestamp = newValue
    } else {
      throw new Error("Invalid value pattern for timestamp of " + newValue);
    }
  }
  
  public getTimestampPattern(): string {
    return REGEX_TIMESTAMP_000.source;
  }
  

  public getTimestamp(): string | undefined {
      return this.timestamp;
  }

  public addParameter(newValue: ValueSetParameter) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.parameter) !== 'undefined') {
         delete this.parameter;
      }
      return;
    }
    
    if (typeof(this.parameter) === 'undefined') {
      this.parameter =  [];
    }
    this.parameter.push(newValue);
  }

  public getParameter(): ValueSetParameter[] | undefined {
      return this.parameter;
  }

  public addContains(newValue: ValueSetContains) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.contains) !== 'undefined') {
         delete this.contains;
      }
      return;
    }
    
    if (typeof(this.contains) === 'undefined') {
      this.contains =  [];
    }
    this.contains.push(newValue);
  }

  public getContains(): ValueSetContains[] | undefined {
      return this.contains;
  }


}

