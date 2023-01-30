import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_EFFECTIVEDATE } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Identifier, Reference } from './index';



/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g.
 * regulatory use).
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/MedicinalProduct_ManufacturingBusinessOperation
 */
export class MedicinalProductManufacturingBusinessOperation {
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
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   operationType?: CodeableConcept;

  /**
   * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for
   * business identifiers.
   */
  @Type(() => Identifier)
   authorisationReferenceNumber?: Identifier;

  /**
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected effectiveDate?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _effectiveDate?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   confidentialityIndicator?: CodeableConcept;

  /**
   * The manufacturer or establishment associated with the process.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected manufacturer?: Reference[];

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   regulator?: Reference;


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
  public setEffectiveDate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.effectiveDate) !== 'undefined') {
         delete this.effectiveDate;
      }
      return;
    }
    
    if (REGEX_EFFECTIVEDATE.test(newValue)) {
      this.effectiveDate = newValue
    } else {
      throw new Error("Invalid value pattern for effectiveDate of " + newValue);
    }
  }
  
  public getEffectiveDatePattern(): string {
    return REGEX_EFFECTIVEDATE.source;
  }
  
  /**
  * Gets the current value of field effectiveDate.
  * @returns the value  or undefined
  */
  public getEffectiveDate(): string | undefined {
      return this.effectiveDate;
  }

  /**
  * Gets the current value of field effectiveDate if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getEffectiveDateOrElse(defaultValue: string): string {
      if (this.effectiveDate == undefined || this.effectiveDate == null ) { return defaultValue; }
      return this.effectiveDate;
  }

  public addManufacturer(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.manufacturer) !== 'undefined') {
         delete this.manufacturer;
      }
      return;
    }
    
    if (typeof(this.manufacturer) === 'undefined') {
      this.manufacturer =  [];
    }
    this.manufacturer.push(newValue);
  }
  /**
  * Removes all elements from the array manufacturer, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteManufacturerAll(): Reference[] {
    if (typeof(this.manufacturer) !== 'undefined') {
       const oldArray = this.manufacturer;
       delete this.manufacturer;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array manufacturer, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteManufacturerBySplice(start: number, deleteCount?: number): Reference[] {
    if (typeof(this.manufacturer) !== 'undefined') {
       return this.manufacturer.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field manufacturer.
  * @returns the value  or undefined
  */
  public getManufacturer(): Reference[] | undefined {
      return this.manufacturer;
  }

  /**
  * Gets the current value of field manufacturer if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getManufacturerOrElse(defaultValue: Reference[]): Reference[] {
      if (this.manufacturer == undefined || this.manufacturer == null ) { return defaultValue; }
      return this.manufacturer;
  }


}


