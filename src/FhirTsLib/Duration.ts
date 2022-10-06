import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_UNIT, REGEX_SYSTEM, REGEX_CODE } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './index';
import { DurationComparator_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A length of time.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Duration
 */
export class Duration {
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
   * A rational number with implicit precision
   */
   value?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _value?: Element;

  /**
   * How the value should be understood and represented - whether the actual value is greater or less
   * than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real
   * value is < stated value.
   * Field access restricted because there are specific valid values.
   */
  protected comparator?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _comparator?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected unit?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _unit?: Element;

  /**
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected system?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _system?: Element;

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

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setComparator(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.comparator) !== 'undefined') {
         delete this.comparator;
      }
      return;
    }
    
    const idx = getValidValueIdx(DurationComparator_list_ValidValues, newValue);
    if (idx >= 0) {
      this.comparator = DurationComparator_list_ValidValues[idx];
    } else {
      throw new Error("Unknown comparator of " + newValue);
    }
  }
  
  public getDurationComparatorValidValues(): string[] {
    return DurationComparator_list_ValidValues;
  }
  

  public getComparator(): string | undefined {
      return this.comparator;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setUnit(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.unit) !== 'undefined') {
         delete this.unit;
      }
      return;
    }
    
    if (REGEX_UNIT.test(newValue)) {
      this.unit = newValue
    } else {
      throw new Error("Invalid value pattern for unit of " + newValue);
    }
  }
  
  public getUnitPattern(): string {
    return REGEX_UNIT.source;
  }
  

  public getUnit(): string | undefined {
      return this.unit;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setSystem(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.system) !== 'undefined') {
         delete this.system;
      }
      return;
    }
    
    if (REGEX_SYSTEM.test(newValue)) {
      this.system = newValue
    } else {
      throw new Error("Invalid value pattern for system of " + newValue);
    }
  }
  
  public getSystemPattern(): string {
    return REGEX_SYSTEM.source;
  }
  

  public getSystem(): string | undefined {
      return this.system;
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


}


