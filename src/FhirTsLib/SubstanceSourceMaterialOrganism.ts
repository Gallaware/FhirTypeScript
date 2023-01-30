import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_INTRASPECIFICDESCRIPTION } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, SubstanceSourceMaterialAuthor, SubstanceSourceMaterialHybrid, SubstanceSourceMaterialOrganismGeneral } from './index';



/**
 * Source material shall capture information on the taxonomic and anatomical origins as well as the
 * fraction of a material that can result in or can be modified to form a substance. This set of data
 * elements shall be used to define polymer substances isolated from biological matrices. Taxonomic
 * and anatomical origins shall be described using a controlled vocabulary as required. This
 * information is captured for naturally derived polymers ( . starch) and structurally diverse
 * substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh
 * material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For
 * Herbal preparations, the fraction information will be captured at the Substance information level
 * and additional information for herbal extracts will be captured at the Specified Substance Group 1
 * information level. See for further explanation the Substance Class: Structurally Diverse and the
 * herbal annex.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/SubstanceSourceMaterial_Organism
 */
export class SubstanceSourceMaterialOrganism {
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
   family?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   genus?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   species?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   intraspecificType?: CodeableConcept;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected intraspecificDescription?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _intraspecificDescription?: Element;

  /**
   * 4.9.13.6.1 Author type (Conditional).
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SubstanceSourceMaterialAuthor)
  protected author?: SubstanceSourceMaterialAuthor[];

  /**
   * Source material shall capture information on the taxonomic and anatomical origins as well as the
   * fraction of a material that can result in or can be modified to form a substance. This set of data
   * elements shall be used to define polymer substances isolated from biological matrices. Taxonomic
   * and anatomical origins shall be described using a controlled vocabulary as required. This
   * information is captured for naturally derived polymers ( . starch) and structurally diverse
   * substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh
   * material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For
   * Herbal preparations, the fraction information will be captured at the Substance information level
   * and additional information for herbal extracts will be captured at the Specified Substance Group 1
   * information level. See for further explanation the Substance Class: Structurally Diverse and the
   * herbal annex.
   */
  @Type(() => SubstanceSourceMaterialHybrid)
   hybrid?: SubstanceSourceMaterialHybrid;

  /**
   * Source material shall capture information on the taxonomic and anatomical origins as well as the
   * fraction of a material that can result in or can be modified to form a substance. This set of data
   * elements shall be used to define polymer substances isolated from biological matrices. Taxonomic
   * and anatomical origins shall be described using a controlled vocabulary as required. This
   * information is captured for naturally derived polymers ( . starch) and structurally diverse
   * substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh
   * material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For
   * Herbal preparations, the fraction information will be captured at the Substance information level
   * and additional information for herbal extracts will be captured at the Specified Substance Group 1
   * information level. See for further explanation the Substance Class: Structurally Diverse and the
   * herbal annex.
   */
  @Type(() => SubstanceSourceMaterialOrganismGeneral)
   organismGeneral?: SubstanceSourceMaterialOrganismGeneral;


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
  public setIntraspecificDescription(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.intraspecificDescription) !== 'undefined') {
         delete this.intraspecificDescription;
      }
      return;
    }
    
    if (REGEX_INTRASPECIFICDESCRIPTION.test(newValue)) {
      this.intraspecificDescription = newValue
    } else {
      throw new Error("Invalid value pattern for intraspecificDescription of " + newValue);
    }
  }
  
  public getIntraspecificDescriptionPattern(): string {
    return REGEX_INTRASPECIFICDESCRIPTION.source;
  }
  
  /**
  * Gets the current value of field intraspecificDescription.
  * @returns the value  or undefined
  */
  public getIntraspecificDescription(): string | undefined {
      return this.intraspecificDescription;
  }

  /**
  * Gets the current value of field intraspecificDescription if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getIntraspecificDescriptionOrElse(defaultValue: string): string {
      if (this.intraspecificDescription == undefined || this.intraspecificDescription == null ) { return defaultValue; }
      return this.intraspecificDescription;
  }

  public addAuthor(newValue: SubstanceSourceMaterialAuthor) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.author) !== 'undefined') {
         delete this.author;
      }
      return;
    }
    
    if (typeof(this.author) === 'undefined') {
      this.author =  [];
    }
    this.author.push(newValue);
  }
  /**
  * Removes all elements from the array author, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteAuthorAll(): SubstanceSourceMaterialAuthor[] {
    if (typeof(this.author) !== 'undefined') {
       const oldArray = this.author;
       delete this.author;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array author, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteAuthorBySplice(start: number, deleteCount?: number): SubstanceSourceMaterialAuthor[] {
    if (typeof(this.author) !== 'undefined') {
       return this.author.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field author.
  * @returns the value  or undefined
  */
  public getAuthor(): SubstanceSourceMaterialAuthor[] | undefined {
      return this.author;
  }

  /**
  * Gets the current value of field author if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getAuthorOrElse(defaultValue: SubstanceSourceMaterialAuthor[]): SubstanceSourceMaterialAuthor[] {
      if (this.author == undefined || this.author == null ) { return defaultValue; }
      return this.author;
  }


}


