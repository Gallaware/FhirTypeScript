import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { Extension, TestScriptCapability, TestScriptLink } from './index';



/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance
 * against the FHIR specification.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/TestScript_Metadata
 */
export class TestScriptMetadata {
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
   * A link to the FHIR specification that this test is covering.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => TestScriptLink)
  protected link?: TestScriptLink[];

  /**
   * Capabilities that must exist and are assumed to function correctly on the FHIR server being tested.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => TestScriptCapability)
  protected capability?: TestScriptCapability[];


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

  public addLink(newValue: TestScriptLink) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.link) !== 'undefined') {
         delete this.link;
      }
      return;
    }
    
    if (typeof(this.link) === 'undefined') {
      this.link =  [];
    }
    this.link.push(newValue);
  }
  /**
  * Removes all elements from the array link, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteLinkAll(): TestScriptLink[] {
    if (typeof(this.link) !== 'undefined') {
       const oldArray = this.link;
       delete this.link;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array link, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteLinkBySplice(start: number, deleteCount?: number): TestScriptLink[] {
    if (typeof(this.link) !== 'undefined') {
       return this.link.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field link.
  * @returns the value  or undefined
  */
  public getLink(): TestScriptLink[] | undefined {
      return this.link;
  }

  /**
  * Gets the current value of field link if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getLinkOrElse(defaultValue: TestScriptLink[]): TestScriptLink[] {
      if (this.link == undefined || this.link == null ) { return defaultValue; }
      return this.link;
  }

  public addCapability(newValue: TestScriptCapability) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.capability) !== 'undefined') {
         delete this.capability;
      }
      return;
    }
    
    if (typeof(this.capability) === 'undefined') {
      this.capability =  [];
    }
    this.capability.push(newValue);
  }
  /**
  * Removes all elements from the array capability, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteCapabilityAll(): TestScriptCapability[] {
    if (typeof(this.capability) !== 'undefined') {
       const oldArray = this.capability;
       delete this.capability;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array capability, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteCapabilityBySplice(start: number, deleteCount?: number): TestScriptCapability[] {
    if (typeof(this.capability) !== 'undefined') {
       return this.capability.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field capability.
  * @returns the value  or undefined
  */
  public getCapability(): TestScriptCapability[] | undefined {
      return this.capability;
  }

  /**
  * Gets the current value of field capability if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getCapabilityOrElse(defaultValue: TestScriptCapability[]): TestScriptCapability[] {
      if (this.capability == undefined || this.capability == null ) { return defaultValue; }
      return this.capability;
  }


}


