import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { Annotation, CodeableConcept, Extension } from './index';



/**
 * The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus
 * exposure state where the risk estimate is derived from a combination of research studies.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/RiskEvidenceSynthesis_CertaintySubcomponent
 */
export class RiskEvidenceSynthesisCertaintySubcomponent {
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
   type?: CodeableConcept;

  /**
   * A rating of a subcomponent of rating certainty.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected rating?: CodeableConcept[];

  /**
   * A human-readable string to clarify or explain concepts about the resource.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Annotation)
  protected note?: Annotation[];


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

  public addRating(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.rating) !== 'undefined') {
         delete this.rating;
      }
      return;
    }
    
    if (typeof(this.rating) === 'undefined') {
      this.rating =  [];
    }
    this.rating.push(newValue);
  }
  /**
  * Removes all elements from the array rating, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteRatingAll(): CodeableConcept[] {
    if (typeof(this.rating) !== 'undefined') {
       const oldArray = this.rating;
       delete this.rating;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array rating, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteRatingBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.rating) !== 'undefined') {
       return this.rating.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field rating.
  * @returns the value  or undefined
  */
  public getRating(): CodeableConcept[] | undefined {
      return this.rating;
  }

  public addNote(newValue: Annotation) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.note) !== 'undefined') {
         delete this.note;
      }
      return;
    }
    
    if (typeof(this.note) === 'undefined') {
      this.note =  [];
    }
    this.note.push(newValue);
  }
  /**
  * Removes all elements from the array note, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteNoteAll(): Annotation[] {
    if (typeof(this.note) !== 'undefined') {
       const oldArray = this.note;
       delete this.note;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array note, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteNoteBySplice(start: number, deleteCount?: number): Annotation[] {
    if (typeof(this.note) !== 'undefined') {
       return this.note.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field note.
  * @returns the value  or undefined
  */
  public getNote(): Annotation[] | undefined {
      return this.note;
  }


}


