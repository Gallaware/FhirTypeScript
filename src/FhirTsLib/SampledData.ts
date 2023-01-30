import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_DATA } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension, Quantity } from './index';



/**
 * A series of measurements taken by a device, with upper and lower limits. There may be more than one
 * dimension in the data.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/SampledData
 */
export class SampledData {
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
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   origin?: Quantity;

  /**
   * A rational number with implicit precision
   */
   period?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _period?: Element;

  /**
   * A rational number with implicit precision
   */
   factor?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _factor?: Element;

  /**
   * A rational number with implicit precision
   */
   lowerLimit?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _lowerLimit?: Element;

  /**
   * A rational number with implicit precision
   */
   upperLimit?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _upperLimit?: Element;

  /**
   * An integer with a value that is positive (e.g. >0)
   */
   dimensions?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _dimensions?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected data?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _data?: Element;


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

  /**
  * Gets the current value of field id if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getIdOrElse(defaultValue: string): string {
      if (this.id == undefined || this.id == null ) { return defaultValue; }
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

  /**
  * Gets the current value of field extension if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getExtensionOrElse(defaultValue: Extension[]): Extension[] {
      if (this.extension == undefined || this.extension == null ) { return defaultValue; }
      return this.extension;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setData(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.data) !== 'undefined') {
         delete this.data;
      }
      return;
    }
    
    if (REGEX_DATA.test(newValue)) {
      this.data = newValue
    } else {
      throw new Error("Invalid value pattern for data of " + newValue);
    }
  }
  
  public getDataPattern(): string {
    return REGEX_DATA.source;
  }
  
  /**
  * Gets the current value of field data.
  * @returns the value  or undefined
  */
  public getData(): string | undefined {
      return this.data;
  }

  /**
  * Gets the current value of field data if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getDataOrElse(defaultValue: string): string {
      if (this.data == undefined || this.data == null ) { return defaultValue; }
      return this.data;
  }


}


