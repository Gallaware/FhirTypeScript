import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_PARAMS, REGEX_PROFILE } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension, GraphDefinitionCompartment, GraphDefinitionLink } from './index';
import { ResourceType_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that
 * form a graph by following references. The Graph Definition resource defines a set and makes rules
 * about the set.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/GraphDefinition_Target
 */
export class GraphDefinitionTarget {
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
   * Type of resource this link refers to.
   * Field access restricted because there are specific valid values.
   */
  protected type?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _type?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected params?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _params?: Element;

  /**
   * A URI that is a reference to a canonical URL on a FHIR resource
   * Field access restricted because there are specific valid values.
   */
  protected profile?: string;

  /**
   * Compartment Consistency Rules.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => GraphDefinitionCompartment)
  protected compartment?: GraphDefinitionCompartment[];

  /**
   * Additional links from target resource.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => GraphDefinitionLink)
  protected link?: GraphDefinitionLink[];


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
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setType(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.type) !== 'undefined') {
         delete this.type;
      }
      return;
    }
    
    const idx = getValidValueIdx(ResourceType_list_ValidValues, newValue);
    if (idx >= 0) {
      this.type = ResourceType_list_ValidValues[idx];
    } else {
      throw new Error("Unknown type of " + newValue);
    }
  }
  
  public getGraphDefinitionTargetTypeValidValues(): string[] {
    return ResourceType_list_ValidValues;
  }
  
  /**
  * Gets the current value of field type.
  * @returns the value  or undefined
  */
  public getType(): string | undefined {
      return this.type;
  }

  /**
  * Gets the current value of field type if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getTypeOrElse(defaultValue: string): string {
      if (this.type == undefined || this.type == null ) { return defaultValue; }
      return this.type;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setParams(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.params) !== 'undefined') {
         delete this.params;
      }
      return;
    }
    
    if (REGEX_PARAMS.test(newValue)) {
      this.params = newValue
    } else {
      throw new Error("Invalid value pattern for params of " + newValue);
    }
  }
  
  public getParamsPattern(): string {
    return REGEX_PARAMS.source;
  }
  
  /**
  * Gets the current value of field params.
  * @returns the value  or undefined
  */
  public getParams(): string | undefined {
      return this.params;
  }

  /**
  * Gets the current value of field params if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getParamsOrElse(defaultValue: string): string {
      if (this.params == undefined || this.params == null ) { return defaultValue; }
      return this.params;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setProfile(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.profile) !== 'undefined') {
         delete this.profile;
      }
      return;
    }
    
    if (REGEX_PROFILE.test(newValue)) {
      this.profile = newValue
    } else {
      throw new Error("Invalid value pattern for profile of " + newValue);
    }
  }
  
  public getProfilePattern(): string {
    return REGEX_PROFILE.source;
  }
  
  /**
  * Gets the current value of field profile.
  * @returns the value  or undefined
  */
  public getProfile(): string | undefined {
      return this.profile;
  }

  /**
  * Gets the current value of field profile if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getProfileOrElse(defaultValue: string): string {
      if (this.profile == undefined || this.profile == null ) { return defaultValue; }
      return this.profile;
  }

  public addCompartment(newValue: GraphDefinitionCompartment) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.compartment) !== 'undefined') {
         delete this.compartment;
      }
      return;
    }
    
    if (typeof(this.compartment) === 'undefined') {
      this.compartment =  [];
    }
    this.compartment.push(newValue);
  }
  /**
  * Removes all elements from the array compartment, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteCompartmentAll(): GraphDefinitionCompartment[] {
    if (typeof(this.compartment) !== 'undefined') {
       const oldArray = this.compartment;
       delete this.compartment;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array compartment, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteCompartmentBySplice(start: number, deleteCount?: number): GraphDefinitionCompartment[] {
    if (typeof(this.compartment) !== 'undefined') {
       return this.compartment.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field compartment.
  * @returns the value  or undefined
  */
  public getCompartment(): GraphDefinitionCompartment[] | undefined {
      return this.compartment;
  }

  /**
  * Gets the current value of field compartment if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getCompartmentOrElse(defaultValue: GraphDefinitionCompartment[]): GraphDefinitionCompartment[] {
      if (this.compartment == undefined || this.compartment == null ) { return defaultValue; }
      return this.compartment;
  }

  public addLink(newValue: GraphDefinitionLink) {
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
  public deleteLinkAll(): GraphDefinitionLink[] {
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
  public deleteLinkBySplice(start: number, deleteCount?: number): GraphDefinitionLink[] {
    if (typeof(this.link) !== 'undefined') {
       return this.link.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field link.
  * @returns the value  or undefined
  */
  public getLink(): GraphDefinitionLink[] | undefined {
      return this.link;
  }

  /**
  * Gets the current value of field link if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getLinkOrElse(defaultValue: GraphDefinitionLink[]): GraphDefinitionLink[] {
      if (this.link == undefined || this.link == null ) { return defaultValue; }
      return this.link;
  }


}


