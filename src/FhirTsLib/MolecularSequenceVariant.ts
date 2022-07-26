import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_OBSERVEDALLELE, REGEX_REFERENCEALLELE, REGEX_CIGAR } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension, Reference } from './index';



/**
 * Raw data describing a biological sequence.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/MolecularSequence_Variant
 */
export class MolecularSequenceVariant {
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
   start?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _start?: Element;

  /**
   * A whole number
   */
   end?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _end?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected observedAllele?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _observedAllele?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected referenceAllele?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _referenceAllele?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected cigar?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _cigar?: Element;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   variantPointer?: Reference;


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

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setObservedAllele(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.observedAllele) !== 'undefined') {
         delete this.observedAllele;
      }
      return;
    }
    
    if (REGEX_OBSERVEDALLELE.test(newValue)) {
      this.observedAllele = newValue
    } else {
      throw new Error("Invalid value pattern for observedAllele of " + newValue);
    }
  }
  
  public getObservedAllelePattern(): string {
    return REGEX_OBSERVEDALLELE.source;
  }
  
  /**
  * Gets the current value of field observedAllele.
  * @returns the value  or undefined
  */
  public getObservedAllele(): string | undefined {
      return this.observedAllele;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setReferenceAllele(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.referenceAllele) !== 'undefined') {
         delete this.referenceAllele;
      }
      return;
    }
    
    if (REGEX_REFERENCEALLELE.test(newValue)) {
      this.referenceAllele = newValue
    } else {
      throw new Error("Invalid value pattern for referenceAllele of " + newValue);
    }
  }
  
  public getReferenceAllelePattern(): string {
    return REGEX_REFERENCEALLELE.source;
  }
  
  /**
  * Gets the current value of field referenceAllele.
  * @returns the value  or undefined
  */
  public getReferenceAllele(): string | undefined {
      return this.referenceAllele;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setCigar(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.cigar) !== 'undefined') {
         delete this.cigar;
      }
      return;
    }
    
    if (REGEX_CIGAR.test(newValue)) {
      this.cigar = newValue
    } else {
      throw new Error("Invalid value pattern for cigar of " + newValue);
    }
  }
  
  public getCigarPattern(): string {
    return REGEX_CIGAR.source;
  }
  
  /**
  * Gets the current value of field cigar.
  * @returns the value  or undefined
  */
  public getCigar(): string | undefined {
      return this.cigar;
  }


}


