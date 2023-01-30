import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_DESCRIPTION, REGEX_MINIMUMVOLUMESTRING, REGEX_PREPARATION } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Quantity, SpecimenDefinitionAdditive } from './index';



/**
 * A kind of specimen with associated set of requirements.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/SpecimenDefinition_Container
 */
export class SpecimenDefinitionContainer {
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
   material?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   type?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   cap?: CodeableConcept;

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
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   capacity?: Quantity;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   minimumVolumeQuantity?: Quantity;

  /**
   * The minimum volume to be conditioned in the container.
   * Field access restricted because there are specific valid values.
   */
  protected minimumVolumeString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _minimumVolumeString?: Element;

  /**
   * Substance introduced in the kind of container to preserve, maintain or enhance the specimen.
   * Examples: Formalin, Citrate, EDTA.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SpecimenDefinitionAdditive)
  protected additive?: SpecimenDefinitionAdditive[];

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected preparation?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _preparation?: Element;


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

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setMinimumVolumeString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.minimumVolumeString) !== 'undefined') {
         delete this.minimumVolumeString;
      }
      return;
    }
    
    if (REGEX_MINIMUMVOLUMESTRING.test(newValue)) {
      this.minimumVolumeString = newValue
    } else {
      throw new Error("Invalid value pattern for minimumVolumeString of " + newValue);
    }
  }
  
  public getMinimumVolumeStringPattern(): string {
    return REGEX_MINIMUMVOLUMESTRING.source;
  }
  
  /**
  * Gets the current value of field minimumVolumeString.
  * @returns the value  or undefined
  */
  public getMinimumVolumeString(): string | undefined {
      return this.minimumVolumeString;
  }

  /**
  * Gets the current value of field minimumVolumeString if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getMinimumVolumeStringOrElse(defaultValue: string): string {
      if (this.minimumVolumeString == undefined || this.minimumVolumeString == null ) { return defaultValue; }
      return this.minimumVolumeString;
  }

  public addAdditive(newValue: SpecimenDefinitionAdditive) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.additive) !== 'undefined') {
         delete this.additive;
      }
      return;
    }
    
    if (typeof(this.additive) === 'undefined') {
      this.additive =  [];
    }
    this.additive.push(newValue);
  }
  /**
  * Removes all elements from the array additive, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteAdditiveAll(): SpecimenDefinitionAdditive[] {
    if (typeof(this.additive) !== 'undefined') {
       const oldArray = this.additive;
       delete this.additive;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array additive, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteAdditiveBySplice(start: number, deleteCount?: number): SpecimenDefinitionAdditive[] {
    if (typeof(this.additive) !== 'undefined') {
       return this.additive.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field additive.
  * @returns the value  or undefined
  */
  public getAdditive(): SpecimenDefinitionAdditive[] | undefined {
      return this.additive;
  }

  /**
  * Gets the current value of field additive if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getAdditiveOrElse(defaultValue: SpecimenDefinitionAdditive[]): SpecimenDefinitionAdditive[] {
      if (this.additive == undefined || this.additive == null ) { return defaultValue; }
      return this.additive;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setPreparation(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.preparation) !== 'undefined') {
         delete this.preparation;
      }
      return;
    }
    
    if (REGEX_PREPARATION.test(newValue)) {
      this.preparation = newValue
    } else {
      throw new Error("Invalid value pattern for preparation of " + newValue);
    }
  }
  
  public getPreparationPattern(): string {
    return REGEX_PREPARATION.source;
  }
  
  /**
  * Gets the current value of field preparation.
  * @returns the value  or undefined
  */
  public getPreparation(): string | undefined {
      return this.preparation;
  }

  /**
  * Gets the current value of field preparation if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getPreparationOrElse(defaultValue: string): string {
      if (this.preparation == undefined || this.preparation == null ) { return defaultValue; }
      return this.preparation;
  }


}


