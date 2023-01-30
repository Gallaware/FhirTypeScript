import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_AVERAGEMOLECULARFORMULA } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, SubstancePolymerRepeatUnit } from './index';



/**
 * Todo.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/SubstancePolymer_Repeat
 */
export class SubstancePolymerRepeat {
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
   * A whole number
   */
   numberOfUnits?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _numberOfUnits?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected averageMolecularFormula?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _averageMolecularFormula?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   repeatUnitAmountType?: CodeableConcept;

  /**
   * Todo.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SubstancePolymerRepeatUnit)
  protected repeatUnit?: SubstancePolymerRepeatUnit[];


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
  public setAverageMolecularFormula(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.averageMolecularFormula) !== 'undefined') {
         delete this.averageMolecularFormula;
      }
      return;
    }
    
    if (REGEX_AVERAGEMOLECULARFORMULA.test(newValue)) {
      this.averageMolecularFormula = newValue
    } else {
      throw new Error("Invalid value pattern for averageMolecularFormula of " + newValue);
    }
  }
  
  public getAverageMolecularFormulaPattern(): string {
    return REGEX_AVERAGEMOLECULARFORMULA.source;
  }
  
  /**
  * Gets the current value of field averageMolecularFormula.
  * @returns the value  or undefined
  */
  public getAverageMolecularFormula(): string | undefined {
      return this.averageMolecularFormula;
  }

  /**
  * Gets the current value of field averageMolecularFormula if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getAverageMolecularFormulaOrElse(defaultValue: string): string {
      if (this.averageMolecularFormula == undefined || this.averageMolecularFormula == null ) { return defaultValue; }
      return this.averageMolecularFormula;
  }

  public addRepeatUnit(newValue: SubstancePolymerRepeatUnit) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.repeatUnit) !== 'undefined') {
         delete this.repeatUnit;
      }
      return;
    }
    
    if (typeof(this.repeatUnit) === 'undefined') {
      this.repeatUnit =  [];
    }
    this.repeatUnit.push(newValue);
  }
  /**
  * Removes all elements from the array repeatUnit, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteRepeatUnitAll(): SubstancePolymerRepeatUnit[] {
    if (typeof(this.repeatUnit) !== 'undefined') {
       const oldArray = this.repeatUnit;
       delete this.repeatUnit;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array repeatUnit, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteRepeatUnitBySplice(start: number, deleteCount?: number): SubstancePolymerRepeatUnit[] {
    if (typeof(this.repeatUnit) !== 'undefined') {
       return this.repeatUnit.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field repeatUnit.
  * @returns the value  or undefined
  */
  public getRepeatUnit(): SubstancePolymerRepeatUnit[] | undefined {
      return this.repeatUnit;
  }

  /**
  * Gets the current value of field repeatUnit if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getRepeatUnitOrElse(defaultValue: SubstancePolymerRepeatUnit[]): SubstancePolymerRepeatUnit[] {
      if (this.repeatUnit == undefined || this.repeatUnit == null ) { return defaultValue; }
      return this.repeatUnit;
  }


}


