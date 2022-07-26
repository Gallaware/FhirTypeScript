import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Reference } from './index';



/**
 * Indicates that a medication product is to be or has been dispensed for a named person/patient.
 * This includes a description of the medication product (supply) provided and the instructions for
 * administering the medication.  The medication dispense is the result of a pharmacy system
 * responding to a medication order.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/MedicationDispense_Substitution
 */
export class MedicationDispenseSubstitution {
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
   wasSubstituted?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _wasSubstituted?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   type?: CodeableConcept;

  /**
   * Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected reason?: CodeableConcept[];

  /**
   * The person or organization that has primary responsibility for the substitution.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected responsibleParty?: Reference[];


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

  public addReason(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.reason) !== 'undefined') {
         delete this.reason;
      }
      return;
    }
    
    if (typeof(this.reason) === 'undefined') {
      this.reason =  [];
    }
    this.reason.push(newValue);
  }
  /**
  * Removes all elements from the array reason, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteReasonAll(): CodeableConcept[] {
    if (typeof(this.reason) !== 'undefined') {
       const oldArray = this.reason;
       delete this.reason;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array reason, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteReasonBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.reason) !== 'undefined') {
       return this.reason.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field reason.
  * @returns the value  or undefined
  */
  public getReason(): CodeableConcept[] | undefined {
      return this.reason;
  }

  public addResponsibleParty(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.responsibleParty) !== 'undefined') {
         delete this.responsibleParty;
      }
      return;
    }
    
    if (typeof(this.responsibleParty) === 'undefined') {
      this.responsibleParty =  [];
    }
    this.responsibleParty.push(newValue);
  }
  /**
  * Removes all elements from the array responsibleParty, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteResponsiblePartyAll(): Reference[] {
    if (typeof(this.responsibleParty) !== 'undefined') {
       const oldArray = this.responsibleParty;
       delete this.responsibleParty;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array responsibleParty, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteResponsiblePartyBySplice(start: number, deleteCount?: number): Reference[] {
    if (typeof(this.responsibleParty) !== 'undefined') {
       return this.responsibleParty.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field responsibleParty.
  * @returns the value  or undefined
  */
  public getResponsibleParty(): Reference[] | undefined {
      return this.responsibleParty;
  }


}


