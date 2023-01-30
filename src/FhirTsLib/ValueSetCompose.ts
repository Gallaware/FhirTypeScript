import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_LOCKEDDATE } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension, ValueSetInclude } from './index';



/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended
 * for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use
 * in [coded elements](terminologies.html).
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ValueSet_Compose
 */
export class ValueSetCompose {
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
   * A date or partial date (e.g. just year or year + month). There is no time zone. The format is a
   * union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected lockedDate?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _lockedDate?: Element;

  /**
   * Value of "true" or "false"
   */
   inactive?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _inactive?: Element;

  /**
   * Include one or more codes from a code system or other value set(s).
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ValueSetInclude)
  protected include?: ValueSetInclude[];

  /**
   * Exclude one or more codes from the value set based on code system filters and/or other value sets.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ValueSetInclude)
  protected exclude?: ValueSetInclude[];


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
  /**
  * Removes all elements from the array modifierExtension, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteModifierExtensionAll(): Extension[] {
    if (typeof(this.modifierExtension) !== 'undefined') {
       const oldArray = this.modifierExtension;
       delete this.modifierExtension;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array modifierExtension, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteModifierExtensionBySplice(start: number, deleteCount?: number): Extension[] {
    if (typeof(this.modifierExtension) !== 'undefined') {
       return this.modifierExtension.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field modifierExtension.
  * @returns the value  or undefined
  */
  public getModifierExtension(): Extension[] | undefined {
      return this.modifierExtension;
  }

  /**
  * Gets the current value of field modifierExtension if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getModifierExtensionOrElse(defaultValue: Extension[]): Extension[] {
      if (this.modifierExtension == undefined || this.modifierExtension == null ) { return defaultValue; }
      return this.modifierExtension;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setLockedDate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.lockedDate) !== 'undefined') {
         delete this.lockedDate;
      }
      return;
    }
    
    if (REGEX_LOCKEDDATE.test(newValue)) {
      this.lockedDate = newValue
    } else {
      throw new Error("Invalid value pattern for lockedDate of " + newValue);
    }
  }
  
  public getLockedDatePattern(): string {
    return REGEX_LOCKEDDATE.source;
  }
  
  /**
  * Gets the current value of field lockedDate.
  * @returns the value  or undefined
  */
  public getLockedDate(): string | undefined {
      return this.lockedDate;
  }

  /**
  * Gets the current value of field lockedDate if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getLockedDateOrElse(defaultValue: string): string {
      if (this.lockedDate == undefined || this.lockedDate == null ) { return defaultValue; }
      return this.lockedDate;
  }

  public addInclude(newValue: ValueSetInclude) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.include) !== 'undefined') {
         delete this.include;
      }
      return;
    }
    
    if (typeof(this.include) === 'undefined') {
      this.include =  [];
    }
    this.include.push(newValue);
  }
  /**
  * Removes all elements from the array include, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteIncludeAll(): ValueSetInclude[] {
    if (typeof(this.include) !== 'undefined') {
       const oldArray = this.include;
       delete this.include;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array include, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteIncludeBySplice(start: number, deleteCount?: number): ValueSetInclude[] {
    if (typeof(this.include) !== 'undefined') {
       return this.include.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field include.
  * @returns the value  or undefined
  */
  public getInclude(): ValueSetInclude[] | undefined {
      return this.include;
  }

  /**
  * Gets the current value of field include if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getIncludeOrElse(defaultValue: ValueSetInclude[]): ValueSetInclude[] {
      if (this.include == undefined || this.include == null ) { return defaultValue; }
      return this.include;
  }

  public addExclude(newValue: ValueSetInclude) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.exclude) !== 'undefined') {
         delete this.exclude;
      }
      return;
    }
    
    if (typeof(this.exclude) === 'undefined') {
      this.exclude =  [];
    }
    this.exclude.push(newValue);
  }
  /**
  * Removes all elements from the array exclude, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteExcludeAll(): ValueSetInclude[] {
    if (typeof(this.exclude) !== 'undefined') {
       const oldArray = this.exclude;
       delete this.exclude;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array exclude, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteExcludeBySplice(start: number, deleteCount?: number): ValueSetInclude[] {
    if (typeof(this.exclude) !== 'undefined') {
       return this.exclude.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field exclude.
  * @returns the value  or undefined
  */
  public getExclude(): ValueSetInclude[] | undefined {
      return this.exclude;
  }

  /**
  * Gets the current value of field exclude if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getExcludeOrElse(defaultValue: ValueSetInclude[]): ValueSetInclude[] {
      if (this.exclude == undefined || this.exclude == null ) { return defaultValue; }
      return this.exclude;
  }


}


