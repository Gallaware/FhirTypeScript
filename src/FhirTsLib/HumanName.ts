import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_TEXT, REGEX_FAMILY } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension, Period } from './index';
import { HumanNameUse_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A human's name with the ability to identify parts and usage.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/HumanName
 */
export class HumanName {
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
   * Identifies the purpose for this name.
   * Field access restricted because there are specific valid values.
   */
  protected use?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _use?: Element;

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
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected family?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _family?: Element;

  /**
   * Given name.
   * Field access restricted because there are specific valid values.
   */
  protected given?: string[];

  /**
   * Extensions for given
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _given?: Element[];

  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status,
   * etc. and that appears at the start of the name.
   * Field access restricted because there are specific valid values.
   */
  protected prefix?: string[];

  /**
   * Extensions for prefix
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _prefix?: Element[];

  /**
   * Part of the name that is acquired as a title due to academic, legal, employment or nobility status,
   * etc. and that appears at the end of the name.
   * Field access restricted because there are specific valid values.
   */
  protected suffix?: string[];

  /**
   * Extensions for suffix
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _suffix?: Element[];

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   period?: Period;


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
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setUse(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.use) !== 'undefined') {
         delete this.use;
      }
      return;
    }
    
    const idx = getValidValueIdx(HumanNameUse_list_ValidValues, newValue);
    if (idx >= 0) {
      this.use = HumanNameUse_list_ValidValues[idx];
    } else {
      throw new Error("Unknown use of " + newValue);
    }
  }
  
  public getHumanNameUseValidValues(): string[] {
    return HumanNameUse_list_ValidValues;
  }
  
  /**
  * Gets the current value of field use.
  * @returns the value  or undefined
  */
  public getUse(): string | undefined {
      return this.use;
  }

  /**
  * Gets the current value of field use if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getUseOrElse(defaultValue: string): string {
      if (this.use == undefined || this.use == null ) { return defaultValue; }
      return this.use;
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
  
  /**
  * Gets the current value of field text.
  * @returns the value  or undefined
  */
  public getText(): string | undefined {
      return this.text;
  }

  /**
  * Gets the current value of field text if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getTextOrElse(defaultValue: string): string {
      if (this.text == undefined || this.text == null ) { return defaultValue; }
      return this.text;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setFamily(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.family) !== 'undefined') {
         delete this.family;
      }
      return;
    }
    
    if (REGEX_FAMILY.test(newValue)) {
      this.family = newValue
    } else {
      throw new Error("Invalid value pattern for family of " + newValue);
    }
  }
  
  public getFamilyPattern(): string {
    return REGEX_FAMILY.source;
  }
  
  /**
  * Gets the current value of field family.
  * @returns the value  or undefined
  */
  public getFamily(): string | undefined {
      return this.family;
  }

  /**
  * Gets the current value of field family if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getFamilyOrElse(defaultValue: string): string {
      if (this.family == undefined || this.family == null ) { return defaultValue; }
      return this.family;
  }

  public addGiven(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.given) !== 'undefined') {
         delete this.given;
      }
      return;
    }
    
    if (typeof(this.given) === 'undefined') {
      this.given =  [];
    }
    this.given.push(newValue);
  }
  /**
  * Removes all elements from the array given, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteGivenAll(): string[] {
    if (typeof(this.given) !== 'undefined') {
       const oldArray = this.given;
       delete this.given;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array given, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteGivenBySplice(start: number, deleteCount?: number): string[] {
    if (typeof(this.given) !== 'undefined') {
       return this.given.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field given.
  * @returns the value  or undefined
  */
  public getGiven(): string[] | undefined {
      return this.given;
  }

  /**
  * Gets the current value of field given if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getGivenOrElse(defaultValue: string[]): string[] {
      if (this.given == undefined || this.given == null ) { return defaultValue; }
      return this.given;
  }

  public add_given(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._given) !== 'undefined') {
         delete this._given;
      }
      return;
    }
    
    if (typeof(this._given) === 'undefined') {
      this._given =  [];
    }
    this._given.push(newValue);
  }
  /**
  * Removes all elements from the array _given, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public delete_givenAll(): Element[] {
    if (typeof(this._given) !== 'undefined') {
       const oldArray = this._given;
       delete this._given;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array _given, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public delete_givenBySplice(start: number, deleteCount?: number): Element[] {
    if (typeof(this._given) !== 'undefined') {
       return this._given.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field _given.
  * @returns the value  or undefined
  */
  public get_given(): Element[] | undefined {
      return this._given;
  }

  /**
  * Gets the current value of field _given if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public get_givenOrElse(defaultValue: Element[]): Element[] {
      if (this._given == undefined || this._given == null ) { return defaultValue; }
      return this._given;
  }

  public addPrefix(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.prefix) !== 'undefined') {
         delete this.prefix;
      }
      return;
    }
    
    if (typeof(this.prefix) === 'undefined') {
      this.prefix =  [];
    }
    this.prefix.push(newValue);
  }
  /**
  * Removes all elements from the array prefix, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deletePrefixAll(): string[] {
    if (typeof(this.prefix) !== 'undefined') {
       const oldArray = this.prefix;
       delete this.prefix;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array prefix, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deletePrefixBySplice(start: number, deleteCount?: number): string[] {
    if (typeof(this.prefix) !== 'undefined') {
       return this.prefix.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field prefix.
  * @returns the value  or undefined
  */
  public getPrefix(): string[] | undefined {
      return this.prefix;
  }

  /**
  * Gets the current value of field prefix if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getPrefixOrElse(defaultValue: string[]): string[] {
      if (this.prefix == undefined || this.prefix == null ) { return defaultValue; }
      return this.prefix;
  }

  public add_prefix(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._prefix) !== 'undefined') {
         delete this._prefix;
      }
      return;
    }
    
    if (typeof(this._prefix) === 'undefined') {
      this._prefix =  [];
    }
    this._prefix.push(newValue);
  }
  /**
  * Removes all elements from the array _prefix, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public delete_prefixAll(): Element[] {
    if (typeof(this._prefix) !== 'undefined') {
       const oldArray = this._prefix;
       delete this._prefix;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array _prefix, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public delete_prefixBySplice(start: number, deleteCount?: number): Element[] {
    if (typeof(this._prefix) !== 'undefined') {
       return this._prefix.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field _prefix.
  * @returns the value  or undefined
  */
  public get_prefix(): Element[] | undefined {
      return this._prefix;
  }

  /**
  * Gets the current value of field _prefix if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public get_prefixOrElse(defaultValue: Element[]): Element[] {
      if (this._prefix == undefined || this._prefix == null ) { return defaultValue; }
      return this._prefix;
  }

  public addSuffix(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.suffix) !== 'undefined') {
         delete this.suffix;
      }
      return;
    }
    
    if (typeof(this.suffix) === 'undefined') {
      this.suffix =  [];
    }
    this.suffix.push(newValue);
  }
  /**
  * Removes all elements from the array suffix, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteSuffixAll(): string[] {
    if (typeof(this.suffix) !== 'undefined') {
       const oldArray = this.suffix;
       delete this.suffix;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array suffix, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteSuffixBySplice(start: number, deleteCount?: number): string[] {
    if (typeof(this.suffix) !== 'undefined') {
       return this.suffix.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field suffix.
  * @returns the value  or undefined
  */
  public getSuffix(): string[] | undefined {
      return this.suffix;
  }

  /**
  * Gets the current value of field suffix if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getSuffixOrElse(defaultValue: string[]): string[] {
      if (this.suffix == undefined || this.suffix == null ) { return defaultValue; }
      return this.suffix;
  }

  public add_suffix(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._suffix) !== 'undefined') {
         delete this._suffix;
      }
      return;
    }
    
    if (typeof(this._suffix) === 'undefined') {
      this._suffix =  [];
    }
    this._suffix.push(newValue);
  }
  /**
  * Removes all elements from the array _suffix, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public delete_suffixAll(): Element[] {
    if (typeof(this._suffix) !== 'undefined') {
       const oldArray = this._suffix;
       delete this._suffix;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array _suffix, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public delete_suffixBySplice(start: number, deleteCount?: number): Element[] {
    if (typeof(this._suffix) !== 'undefined') {
       return this._suffix.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field _suffix.
  * @returns the value  or undefined
  */
  public get_suffix(): Element[] | undefined {
      return this._suffix;
  }

  /**
  * Gets the current value of field _suffix if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public get_suffixOrElse(defaultValue: Element[]): Element[] {
      if (this._suffix == undefined || this._suffix == null ) { return defaultValue; }
      return this._suffix;
  }


}


