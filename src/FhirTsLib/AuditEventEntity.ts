import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_NAME, REGEX_DESCRIPTION } from '../FhirTsLibValidation/FhirRegex';
import { AuditEventDetail, Coding, Element, Extension, Reference } from './index';



/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include
 * detection of intrusion attempts and monitoring for inappropriate usage.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/AuditEvent_Entity
 */
export class AuditEventEntity {
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
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   what?: Reference;

  /**
   * A reference to a code defined by a terminology system.
   */
  @Type(() => Coding)
   type?: Coding;

  /**
   * A reference to a code defined by a terminology system.
   */
  @Type(() => Coding)
   role?: Coding;

  /**
   * A reference to a code defined by a terminology system.
   */
  @Type(() => Coding)
   lifecycle?: Coding;

  /**
   * Security labels for the identified entity.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Coding)
  protected securityLabel?: Coding[];

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected name?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _name?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected description?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _description?: Element;

  /**
   * A stream of bytes
   */
   query?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _query?: Element;

  /**
   * Tagged value pairs for conveying additional information about the entity.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => AuditEventDetail)
  protected detail?: AuditEventDetail[];


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

  public addSecurityLabel(newValue: Coding) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.securityLabel) !== 'undefined') {
         delete this.securityLabel;
      }
      return;
    }
    
    if (typeof(this.securityLabel) === 'undefined') {
      this.securityLabel =  [];
    }
    this.securityLabel.push(newValue);
  }
  /**
  * Removes all elements from the array securityLabel, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteSecurityLabelAll(): Coding[] {
    if (typeof(this.securityLabel) !== 'undefined') {
       const oldArray = this.securityLabel;
       delete this.securityLabel;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array securityLabel, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteSecurityLabelBySplice(start: number, deleteCount?: number): Coding[] {
    if (typeof(this.securityLabel) !== 'undefined') {
       return this.securityLabel.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field securityLabel.
  * @returns the value  or undefined
  */
  public getSecurityLabel(): Coding[] | undefined {
      return this.securityLabel;
  }

  /**
  * Gets the current value of field securityLabel if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getSecurityLabelOrElse(defaultValue: Coding[]): Coding[] {
      if (this.securityLabel == undefined || this.securityLabel == null ) { return defaultValue; }
      return this.securityLabel;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setName(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.name) !== 'undefined') {
         delete this.name;
      }
      return;
    }
    
    if (REGEX_NAME.test(newValue)) {
      this.name = newValue
    } else {
      throw new Error("Invalid value pattern for name of " + newValue);
    }
  }
  
  public getNamePattern(): string {
    return REGEX_NAME.source;
  }
  
  /**
  * Gets the current value of field name.
  * @returns the value  or undefined
  */
  public getName(): string | undefined {
      return this.name;
  }

  /**
  * Gets the current value of field name if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getNameOrElse(defaultValue: string): string {
      if (this.name == undefined || this.name == null ) { return defaultValue; }
      return this.name;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDescription(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.description) !== 'undefined') {
         delete this.description;
      }
      return;
    }
    
    if (REGEX_DESCRIPTION.test(newValue)) {
      this.description = newValue
    } else {
      throw new Error("Invalid value pattern for description of " + newValue);
    }
  }
  
  public getDescriptionPattern(): string {
    return REGEX_DESCRIPTION.source;
  }
  
  /**
  * Gets the current value of field description.
  * @returns the value  or undefined
  */
  public getDescription(): string | undefined {
      return this.description;
  }

  /**
  * Gets the current value of field description if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getDescriptionOrElse(defaultValue: string): string {
      if (this.description == undefined || this.description == null ) { return defaultValue; }
      return this.description;
  }

  public addDetail(newValue: AuditEventDetail) {
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
  /**
  * Removes all elements from the array detail, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteDetailAll(): AuditEventDetail[] {
    if (typeof(this.detail) !== 'undefined') {
       const oldArray = this.detail;
       delete this.detail;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array detail, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteDetailBySplice(start: number, deleteCount?: number): AuditEventDetail[] {
    if (typeof(this.detail) !== 'undefined') {
       return this.detail.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field detail.
  * @returns the value  or undefined
  */
  public getDetail(): AuditEventDetail[] | undefined {
      return this.detail;
  }

  /**
  * Gets the current value of field detail if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getDetailOrElse(defaultValue: AuditEventDetail[]): AuditEventDetail[] {
      if (this.detail == undefined || this.detail == null ) { return defaultValue; }
      return this.detail;
  }


}


