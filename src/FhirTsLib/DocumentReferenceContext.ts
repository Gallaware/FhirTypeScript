import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Extension, Period, Reference } from './index';



/**
 * A reference to a document of any kind for any purpose. Provides metadata about the document so that
 * the document can be discovered and managed. The scope of a document is any seralized object with a
 * mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and
 * non-patient specific documents like policy text.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/DocumentReference_Context
 */
export class DocumentReferenceContext {
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
   * Describes the clinical encounter or type of care that the document content is associated with.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected encounter?: Reference[];

  /**
   * This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy,
   * being documented. In some cases, the event is inherent in the type Code, such as a "History and
   * Physical Report" in which the procedure being documented is necessarily a "History and Physical"
   * act.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected event?: CodeableConcept[];

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   period?: Period;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   facilityType?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   practiceSetting?: CodeableConcept;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   sourcePatientInfo?: Reference;

  /**
   * Related identifiers or resources associated with the DocumentReference.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected related?: Reference[];


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

  public addEncounter(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.encounter) !== 'undefined') {
         delete this.encounter;
      }
      return;
    }
    
    if (typeof(this.encounter) === 'undefined') {
      this.encounter =  [];
    }
    this.encounter.push(newValue);
  }
  /**
  * Removes all elements from the array encounter, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteEncounterAll(): Reference[] {
    if (typeof(this.encounter) !== 'undefined') {
       const oldArray = this.encounter;
       delete this.encounter;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array encounter, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteEncounterBySplice(start: number, deleteCount?: number): Reference[] {
    if (typeof(this.encounter) !== 'undefined') {
       return this.encounter.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field encounter.
  * @returns the value  or undefined
  */
  public getEncounter(): Reference[] | undefined {
      return this.encounter;
  }

  public addEvent(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.event) !== 'undefined') {
         delete this.event;
      }
      return;
    }
    
    if (typeof(this.event) === 'undefined') {
      this.event =  [];
    }
    this.event.push(newValue);
  }
  /**
  * Removes all elements from the array event, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteEventAll(): CodeableConcept[] {
    if (typeof(this.event) !== 'undefined') {
       const oldArray = this.event;
       delete this.event;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array event, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteEventBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.event) !== 'undefined') {
       return this.event.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field event.
  * @returns the value  or undefined
  */
  public getEvent(): CodeableConcept[] | undefined {
      return this.event;
  }

  public addRelated(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.related) !== 'undefined') {
         delete this.related;
      }
      return;
    }
    
    if (typeof(this.related) === 'undefined') {
      this.related =  [];
    }
    this.related.push(newValue);
  }
  /**
  * Removes all elements from the array related, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteRelatedAll(): Reference[] {
    if (typeof(this.related) !== 'undefined') {
       const oldArray = this.related;
       delete this.related;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array related, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteRelatedBySplice(start: number, deleteCount?: number): Reference[] {
    if (typeof(this.related) !== 'undefined') {
       return this.related.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field related.
  * @returns the value  or undefined
  */
  public getRelated(): Reference[] | undefined {
      return this.related;
  }


}


