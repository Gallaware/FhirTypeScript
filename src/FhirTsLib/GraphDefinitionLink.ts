import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_PATH, REGEX_SLICENAME, REGEX_MAX, REGEX_DESCRIPTION } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension, GraphDefinitionTarget } from './index';



/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that
 * form a graph by following references. The Graph Definition resource defines a set and makes rules
 * about the set.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/GraphDefinition_Link
 */
export class GraphDefinitionLink {
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
  protected path?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _path?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected sliceName?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _sliceName?: Element;

  /**
   * A whole number
   */
   min?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _min?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected max?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _max?: Element;

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
   * Potential target for the link.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => GraphDefinitionTarget)
  protected target?: GraphDefinitionTarget[];


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
  public setPath(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.path) !== 'undefined') {
         delete this.path;
      }
      return;
    }
    
    if (REGEX_PATH.test(newValue)) {
      this.path = newValue
    } else {
      throw new Error("Invalid value pattern for path of " + newValue);
    }
  }
  
  public getPathPattern(): string {
    return REGEX_PATH.source;
  }
  
  /**
  * Gets the current value of field path.
  * @returns the value  or undefined
  */
  public getPath(): string | undefined {
      return this.path;
  }

  /**
  * Gets the current value of field path if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getPathOrElse(defaultValue: string): string {
      if (this.path == undefined || this.path == null ) { return defaultValue; }
      return this.path;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setSliceName(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.sliceName) !== 'undefined') {
         delete this.sliceName;
      }
      return;
    }
    
    if (REGEX_SLICENAME.test(newValue)) {
      this.sliceName = newValue
    } else {
      throw new Error("Invalid value pattern for sliceName of " + newValue);
    }
  }
  
  public getSliceNamePattern(): string {
    return REGEX_SLICENAME.source;
  }
  
  /**
  * Gets the current value of field sliceName.
  * @returns the value  or undefined
  */
  public getSliceName(): string | undefined {
      return this.sliceName;
  }

  /**
  * Gets the current value of field sliceName if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getSliceNameOrElse(defaultValue: string): string {
      if (this.sliceName == undefined || this.sliceName == null ) { return defaultValue; }
      return this.sliceName;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setMax(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.max) !== 'undefined') {
         delete this.max;
      }
      return;
    }
    
    if (REGEX_MAX.test(newValue)) {
      this.max = newValue
    } else {
      throw new Error("Invalid value pattern for max of " + newValue);
    }
  }
  
  public getMaxPattern(): string {
    return REGEX_MAX.source;
  }
  
  /**
  * Gets the current value of field max.
  * @returns the value  or undefined
  */
  public getMax(): string | undefined {
      return this.max;
  }

  /**
  * Gets the current value of field max if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getMaxOrElse(defaultValue: string): string {
      if (this.max == undefined || this.max == null ) { return defaultValue; }
      return this.max;
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

  public addTarget(newValue: GraphDefinitionTarget) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.target) !== 'undefined') {
         delete this.target;
      }
      return;
    }
    
    if (typeof(this.target) === 'undefined') {
      this.target =  [];
    }
    this.target.push(newValue);
  }
  /**
  * Removes all elements from the array target, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteTargetAll(): GraphDefinitionTarget[] {
    if (typeof(this.target) !== 'undefined') {
       const oldArray = this.target;
       delete this.target;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array target, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteTargetBySplice(start: number, deleteCount?: number): GraphDefinitionTarget[] {
    if (typeof(this.target) !== 'undefined') {
       return this.target.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field target.
  * @returns the value  or undefined
  */
  public getTarget(): GraphDefinitionTarget[] | undefined {
      return this.target;
  }

  /**
  * Gets the current value of field target if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getTargetOrElse(defaultValue: GraphDefinitionTarget[]): GraphDefinitionTarget[] {
      if (this.target == undefined || this.target == null ) { return defaultValue; }
      return this.target;
  }


}


