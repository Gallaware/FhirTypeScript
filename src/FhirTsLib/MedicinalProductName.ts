import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_PRODUCTNAME } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension, MedicinalProductCountryLanguage, MedicinalProductNamePart } from './index';



/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g.
 * regulatory use).
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/MedicinalProduct_Name
 */
export class MedicinalProductName {
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
  protected productName?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _productName?: Element;

  /**
   * Coding words or phrases of the name.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => MedicinalProductNamePart)
  protected namePart?: MedicinalProductNamePart[];

  /**
   * Country where the name applies.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => MedicinalProductCountryLanguage)
  protected countryLanguage?: MedicinalProductCountryLanguage[];


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
  public setProductName(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.productName) !== 'undefined') {
         delete this.productName;
      }
      return;
    }
    
    if (REGEX_PRODUCTNAME.test(newValue)) {
      this.productName = newValue
    } else {
      throw new Error("Invalid value pattern for productName of " + newValue);
    }
  }
  
  public getProductNamePattern(): string {
    return REGEX_PRODUCTNAME.source;
  }
  
  /**
  * Gets the current value of field productName.
  * @returns the value  or undefined
  */
  public getProductName(): string | undefined {
      return this.productName;
  }

  /**
  * Gets the current value of field productName if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getProductNameOrElse(defaultValue: string): string {
      if (this.productName == undefined || this.productName == null ) { return defaultValue; }
      return this.productName;
  }

  public addNamePart(newValue: MedicinalProductNamePart) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.namePart) !== 'undefined') {
         delete this.namePart;
      }
      return;
    }
    
    if (typeof(this.namePart) === 'undefined') {
      this.namePart =  [];
    }
    this.namePart.push(newValue);
  }
  /**
  * Removes all elements from the array namePart, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteNamePartAll(): MedicinalProductNamePart[] {
    if (typeof(this.namePart) !== 'undefined') {
       const oldArray = this.namePart;
       delete this.namePart;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array namePart, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteNamePartBySplice(start: number, deleteCount?: number): MedicinalProductNamePart[] {
    if (typeof(this.namePart) !== 'undefined') {
       return this.namePart.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field namePart.
  * @returns the value  or undefined
  */
  public getNamePart(): MedicinalProductNamePart[] | undefined {
      return this.namePart;
  }

  /**
  * Gets the current value of field namePart if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getNamePartOrElse(defaultValue: MedicinalProductNamePart[]): MedicinalProductNamePart[] {
      if (this.namePart == undefined || this.namePart == null ) { return defaultValue; }
      return this.namePart;
  }

  public addCountryLanguage(newValue: MedicinalProductCountryLanguage) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.countryLanguage) !== 'undefined') {
         delete this.countryLanguage;
      }
      return;
    }
    
    if (typeof(this.countryLanguage) === 'undefined') {
      this.countryLanguage =  [];
    }
    this.countryLanguage.push(newValue);
  }
  /**
  * Removes all elements from the array countryLanguage, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteCountryLanguageAll(): MedicinalProductCountryLanguage[] {
    if (typeof(this.countryLanguage) !== 'undefined') {
       const oldArray = this.countryLanguage;
       delete this.countryLanguage;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array countryLanguage, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteCountryLanguageBySplice(start: number, deleteCount?: number): MedicinalProductCountryLanguage[] {
    if (typeof(this.countryLanguage) !== 'undefined') {
       return this.countryLanguage.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field countryLanguage.
  * @returns the value  or undefined
  */
  public getCountryLanguage(): MedicinalProductCountryLanguage[] | undefined {
      return this.countryLanguage;
  }

  /**
  * Gets the current value of field countryLanguage if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getCountryLanguageOrElse(defaultValue: MedicinalProductCountryLanguage[]): MedicinalProductCountryLanguage[] {
      if (this.countryLanguage == undefined || this.countryLanguage == null ) { return defaultValue; }
      return this.countryLanguage;
  }


}


