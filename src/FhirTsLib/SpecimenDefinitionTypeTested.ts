import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_REQUIREMENT } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Duration, Element, Extension, SpecimenDefinitionContainer, SpecimenDefinitionHandling } from './index';
import { SpecimenDefinitionTypeTestedPreference_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A kind of specimen with associated set of requirements.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/SpecimenDefinition_TypeTested
 */
export class SpecimenDefinitionTypeTested {
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
   * Value of "true" or "false"
   */
   isDerived?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _isDerived?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   type?: CodeableConcept;

  /**
   * The preference for this type of conditioned specimen.
   * Field access restricted because there are specific valid values.
   */
  protected preference?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _preference?: Element;

  /**
   * A kind of specimen with associated set of requirements.
   */
  @Type(() => SpecimenDefinitionContainer)
   container?: SpecimenDefinitionContainer;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected requirement?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _requirement?: Element;

  /**
   * A length of time.
   */
  @Type(() => Duration)
   retentionTime?: Duration;

  /**
   * Criterion for rejection of the specimen in its container by the laboratory.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected rejectionCriterion?: CodeableConcept[];

  /**
   * Set of instructions for preservation/transport of the specimen at a defined temperature interval,
   * prior the testing process.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SpecimenDefinitionHandling)
  protected handling?: SpecimenDefinitionHandling[];


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
  public setPreference(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.preference) !== 'undefined') {
         delete this.preference;
      }
      return;
    }
    
    const idx = getValidValueIdx(SpecimenDefinitionTypeTestedPreference_list_ValidValues, newValue);
    if (idx >= 0) {
      this.preference = SpecimenDefinitionTypeTestedPreference_list_ValidValues[idx];
    } else {
      throw new Error("Unknown preference of " + newValue);
    }
  }
  
  public getSpecimenDefinitionTypeTestedPreferenceValidValues(): string[] {
    return SpecimenDefinitionTypeTestedPreference_list_ValidValues;
  }
  
  /**
  * Gets the current value of field preference.
  * @returns the value  or undefined
  */
  public getPreference(): string | undefined {
      return this.preference;
  }

  /**
  * Gets the current value of field preference if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getPreferenceOrElse(defaultValue: string): string {
      if (this.preference == undefined || this.preference == null ) { return defaultValue; }
      return this.preference;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setRequirement(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.requirement) !== 'undefined') {
         delete this.requirement;
      }
      return;
    }
    
    if (REGEX_REQUIREMENT.test(newValue)) {
      this.requirement = newValue
    } else {
      throw new Error("Invalid value pattern for requirement of " + newValue);
    }
  }
  
  public getRequirementPattern(): string {
    return REGEX_REQUIREMENT.source;
  }
  
  /**
  * Gets the current value of field requirement.
  * @returns the value  or undefined
  */
  public getRequirement(): string | undefined {
      return this.requirement;
  }

  /**
  * Gets the current value of field requirement if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getRequirementOrElse(defaultValue: string): string {
      if (this.requirement == undefined || this.requirement == null ) { return defaultValue; }
      return this.requirement;
  }

  public addRejectionCriterion(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.rejectionCriterion) !== 'undefined') {
         delete this.rejectionCriterion;
      }
      return;
    }
    
    if (typeof(this.rejectionCriterion) === 'undefined') {
      this.rejectionCriterion =  [];
    }
    this.rejectionCriterion.push(newValue);
  }
  /**
  * Removes all elements from the array rejectionCriterion, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteRejectionCriterionAll(): CodeableConcept[] {
    if (typeof(this.rejectionCriterion) !== 'undefined') {
       const oldArray = this.rejectionCriterion;
       delete this.rejectionCriterion;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array rejectionCriterion, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteRejectionCriterionBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.rejectionCriterion) !== 'undefined') {
       return this.rejectionCriterion.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field rejectionCriterion.
  * @returns the value  or undefined
  */
  public getRejectionCriterion(): CodeableConcept[] | undefined {
      return this.rejectionCriterion;
  }

  /**
  * Gets the current value of field rejectionCriterion if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getRejectionCriterionOrElse(defaultValue: CodeableConcept[]): CodeableConcept[] {
      if (this.rejectionCriterion == undefined || this.rejectionCriterion == null ) { return defaultValue; }
      return this.rejectionCriterion;
  }

  public addHandling(newValue: SpecimenDefinitionHandling) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.handling) !== 'undefined') {
         delete this.handling;
      }
      return;
    }
    
    if (typeof(this.handling) === 'undefined') {
      this.handling =  [];
    }
    this.handling.push(newValue);
  }
  /**
  * Removes all elements from the array handling, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteHandlingAll(): SpecimenDefinitionHandling[] {
    if (typeof(this.handling) !== 'undefined') {
       const oldArray = this.handling;
       delete this.handling;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array handling, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteHandlingBySplice(start: number, deleteCount?: number): SpecimenDefinitionHandling[] {
    if (typeof(this.handling) !== 'undefined') {
       return this.handling.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field handling.
  * @returns the value  or undefined
  */
  public getHandling(): SpecimenDefinitionHandling[] | undefined {
      return this.handling;
  }

  /**
  * Gets the current value of field handling if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getHandlingOrElse(defaultValue: SpecimenDefinitionHandling[]): SpecimenDefinitionHandling[] {
      if (this.handling == undefined || this.handling == null ) { return defaultValue; }
      return this.handling;
  }


}


