import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_NAME } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Reference, SubstanceSpecificationOfficial } from './index';



/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/SubstanceSpecification_Name
 */
export class SubstanceSpecificationName {
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
  protected name?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _name?: Element;

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
   status?: CodeableConcept;

  /**
   * Value of "true" or "false"
   */
   preferred?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _preferred?: Element;

  /**
   * Language of the name.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected language?: CodeableConcept[];

  /**
   * The use context of this name for example if there is a different name a drug active ingredient as
   * opposed to a food colour additive.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected domain?: CodeableConcept[];

  /**
   * The jurisdiction where this name applies.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected jurisdiction?: CodeableConcept[];

  /**
   * A synonym of this name.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SubstanceSpecificationName)
  protected synonym?: SubstanceSpecificationName[];

  /**
   * A translation for this name.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SubstanceSpecificationName)
  protected translation?: SubstanceSpecificationName[];

  /**
   * Details of the official nature of this name.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SubstanceSpecificationOfficial)
  protected official?: SubstanceSpecificationOfficial[];

  /**
   * Supporting literature.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected source?: Reference[];


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
  public setName(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.name) !== 'undefined') {
         delete this.name;
      }
      return;
    }
    
    if (REGEX_NAME.test(newValue)) {
      this.name = newValue
    } else {
      throw new Error("Invalid value pattern for name of " + newValue);
    }
  }
  
  public getNamePattern(): string {
    return REGEX_NAME.source;
  }
  
  /**
  * Gets the current value of field name.
  * @returns the value  or undefined
  */
  public getName(): string | undefined {
      return this.name;
  }

  public addLanguage(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.language) !== 'undefined') {
         delete this.language;
      }
      return;
    }
    
    if (typeof(this.language) === 'undefined') {
      this.language =  [];
    }
    this.language.push(newValue);
  }
  /**
  * Removes all elements from the array language, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteLanguageAll(): CodeableConcept[] {
    if (typeof(this.language) !== 'undefined') {
       const oldArray = this.language;
       delete this.language;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array language, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteLanguageBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.language) !== 'undefined') {
       return this.language.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field language.
  * @returns the value  or undefined
  */
  public getLanguage(): CodeableConcept[] | undefined {
      return this.language;
  }

  public addDomain(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.domain) !== 'undefined') {
         delete this.domain;
      }
      return;
    }
    
    if (typeof(this.domain) === 'undefined') {
      this.domain =  [];
    }
    this.domain.push(newValue);
  }
  /**
  * Removes all elements from the array domain, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteDomainAll(): CodeableConcept[] {
    if (typeof(this.domain) !== 'undefined') {
       const oldArray = this.domain;
       delete this.domain;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array domain, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteDomainBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.domain) !== 'undefined') {
       return this.domain.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field domain.
  * @returns the value  or undefined
  */
  public getDomain(): CodeableConcept[] | undefined {
      return this.domain;
  }

  public addJurisdiction(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.jurisdiction) !== 'undefined') {
         delete this.jurisdiction;
      }
      return;
    }
    
    if (typeof(this.jurisdiction) === 'undefined') {
      this.jurisdiction =  [];
    }
    this.jurisdiction.push(newValue);
  }
  /**
  * Removes all elements from the array jurisdiction, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteJurisdictionAll(): CodeableConcept[] {
    if (typeof(this.jurisdiction) !== 'undefined') {
       const oldArray = this.jurisdiction;
       delete this.jurisdiction;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array jurisdiction, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteJurisdictionBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.jurisdiction) !== 'undefined') {
       return this.jurisdiction.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field jurisdiction.
  * @returns the value  or undefined
  */
  public getJurisdiction(): CodeableConcept[] | undefined {
      return this.jurisdiction;
  }

  public addSynonym(newValue: SubstanceSpecificationName) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.synonym) !== 'undefined') {
         delete this.synonym;
      }
      return;
    }
    
    if (typeof(this.synonym) === 'undefined') {
      this.synonym =  [];
    }
    this.synonym.push(newValue);
  }
  /**
  * Removes all elements from the array synonym, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteSynonymAll(): SubstanceSpecificationName[] {
    if (typeof(this.synonym) !== 'undefined') {
       const oldArray = this.synonym;
       delete this.synonym;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array synonym, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteSynonymBySplice(start: number, deleteCount?: number): SubstanceSpecificationName[] {
    if (typeof(this.synonym) !== 'undefined') {
       return this.synonym.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field synonym.
  * @returns the value  or undefined
  */
  public getSynonym(): SubstanceSpecificationName[] | undefined {
      return this.synonym;
  }

  public addTranslation(newValue: SubstanceSpecificationName) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.translation) !== 'undefined') {
         delete this.translation;
      }
      return;
    }
    
    if (typeof(this.translation) === 'undefined') {
      this.translation =  [];
    }
    this.translation.push(newValue);
  }
  /**
  * Removes all elements from the array translation, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteTranslationAll(): SubstanceSpecificationName[] {
    if (typeof(this.translation) !== 'undefined') {
       const oldArray = this.translation;
       delete this.translation;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array translation, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteTranslationBySplice(start: number, deleteCount?: number): SubstanceSpecificationName[] {
    if (typeof(this.translation) !== 'undefined') {
       return this.translation.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field translation.
  * @returns the value  or undefined
  */
  public getTranslation(): SubstanceSpecificationName[] | undefined {
      return this.translation;
  }

  public addOfficial(newValue: SubstanceSpecificationOfficial) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.official) !== 'undefined') {
         delete this.official;
      }
      return;
    }
    
    if (typeof(this.official) === 'undefined') {
      this.official =  [];
    }
    this.official.push(newValue);
  }
  /**
  * Removes all elements from the array official, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteOfficialAll(): SubstanceSpecificationOfficial[] {
    if (typeof(this.official) !== 'undefined') {
       const oldArray = this.official;
       delete this.official;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array official, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteOfficialBySplice(start: number, deleteCount?: number): SubstanceSpecificationOfficial[] {
    if (typeof(this.official) !== 'undefined') {
       return this.official.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field official.
  * @returns the value  or undefined
  */
  public getOfficial(): SubstanceSpecificationOfficial[] | undefined {
      return this.official;
  }

  public addSource(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.source) !== 'undefined') {
         delete this.source;
      }
      return;
    }
    
    if (typeof(this.source) === 'undefined') {
      this.source =  [];
    }
    this.source.push(newValue);
  }
  /**
  * Removes all elements from the array source, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteSourceAll(): Reference[] {
    if (typeof(this.source) !== 'undefined') {
       const oldArray = this.source;
       delete this.source;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array source, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteSourceBySplice(start: number, deleteCount?: number): Reference[] {
    if (typeof(this.source) !== 'undefined') {
       return this.source.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field source.
  * @returns the value  or undefined
  */
  public getSource(): Reference[] | undefined {
      return this.source;
  }


}


