import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_SYSTEM, REGEX_VERSION } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension, ValueSetConcept, ValueSetFilter } from './index';



/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended
 * for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use
 * in [coded elements](terminologies.html).
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ValueSet_Include
 */
export class ValueSetInclude {
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
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected system?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _system?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected version?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _version?: Element;

  /**
   * Specifies a concept to be included or excluded.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ValueSetConcept)
  protected concept?: ValueSetConcept[];

  /**
   * Select concepts by specify a matching criterion based on the properties (including relationships)
   * defined by the system, or on filters defined by the system. If multiple filters are specified,
   * they SHALL all be true.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ValueSetFilter)
  protected filter?: ValueSetFilter[];

  /**
   * Selects the concepts found in this value set (based on its value set definition). This is an
   * absolute URI that is a reference to ValueSet.url.  If multiple value sets are specified this
   * includes the union of the contents of all of the referenced value sets.
   * Field access restricted because there are specific valid values.
   */
  protected valueSet?: string[];


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
  public setSystem(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.system) !== 'undefined') {
         delete this.system;
      }
      return;
    }
    
    if (REGEX_SYSTEM.test(newValue)) {
      this.system = newValue
    } else {
      throw new Error("Invalid value pattern for system of " + newValue);
    }
  }
  
  public getSystemPattern(): string {
    return REGEX_SYSTEM.source;
  }
  
  /**
  * Gets the current value of field system.
  * @returns the value  or undefined
  */
  public getSystem(): string | undefined {
      return this.system;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setVersion(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.version) !== 'undefined') {
         delete this.version;
      }
      return;
    }
    
    if (REGEX_VERSION.test(newValue)) {
      this.version = newValue
    } else {
      throw new Error("Invalid value pattern for version of " + newValue);
    }
  }
  
  public getVersionPattern(): string {
    return REGEX_VERSION.source;
  }
  
  /**
  * Gets the current value of field version.
  * @returns the value  or undefined
  */
  public getVersion(): string | undefined {
      return this.version;
  }

  public addConcept(newValue: ValueSetConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.concept) !== 'undefined') {
         delete this.concept;
      }
      return;
    }
    
    if (typeof(this.concept) === 'undefined') {
      this.concept =  [];
    }
    this.concept.push(newValue);
  }
  /**
  * Removes all elements from the array concept, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteConceptAll(): ValueSetConcept[] {
    if (typeof(this.concept) !== 'undefined') {
       const oldArray = this.concept;
       delete this.concept;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array concept, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteConceptBySplice(start: number, deleteCount?: number): ValueSetConcept[] {
    if (typeof(this.concept) !== 'undefined') {
       return this.concept.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field concept.
  * @returns the value  or undefined
  */
  public getConcept(): ValueSetConcept[] | undefined {
      return this.concept;
  }

  public addFilter(newValue: ValueSetFilter) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.filter) !== 'undefined') {
         delete this.filter;
      }
      return;
    }
    
    if (typeof(this.filter) === 'undefined') {
      this.filter =  [];
    }
    this.filter.push(newValue);
  }
  /**
  * Removes all elements from the array filter, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteFilterAll(): ValueSetFilter[] {
    if (typeof(this.filter) !== 'undefined') {
       const oldArray = this.filter;
       delete this.filter;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array filter, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteFilterBySplice(start: number, deleteCount?: number): ValueSetFilter[] {
    if (typeof(this.filter) !== 'undefined') {
       return this.filter.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field filter.
  * @returns the value  or undefined
  */
  public getFilter(): ValueSetFilter[] | undefined {
      return this.filter;
  }

  public addValueSet(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueSet) !== 'undefined') {
         delete this.valueSet;
      }
      return;
    }
    
    if (typeof(this.valueSet) === 'undefined') {
      this.valueSet =  [];
    }
    this.valueSet.push(newValue);
  }
  /**
  * Removes all elements from the array valueSet, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteValueSetAll(): string[] {
    if (typeof(this.valueSet) !== 'undefined') {
       const oldArray = this.valueSet;
       delete this.valueSet;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array valueSet, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteValueSetBySplice(start: number, deleteCount?: number): string[] {
    if (typeof(this.valueSet) !== 'undefined') {
       return this.valueSet.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field valueSet.
  * @returns the value  or undefined
  */
  public getValueSet(): string[] | undefined {
      return this.valueSet;
  }


}


