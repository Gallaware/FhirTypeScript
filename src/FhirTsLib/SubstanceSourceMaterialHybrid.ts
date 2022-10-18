import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_MATERNALORGANISMID, REGEX_MATERNALORGANISMNAME, REGEX_PATERNALORGANISMID, REGEX_PATERNALORGANISMNAME } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension } from './index';



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
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/SubstanceSourceMaterial_Hybrid
 */
export class SubstanceSourceMaterialHybrid {
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
  protected maternalOrganismId?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _maternalOrganismId?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected maternalOrganismName?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _maternalOrganismName?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected paternalOrganismId?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _paternalOrganismId?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected paternalOrganismName?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _paternalOrganismName?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   hybridType?: CodeableConcept;


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
  public deleteExtensionAll() {
    if (typeof(this.extension) !== 'undefined') {
       delete this.extension;
    }
    return;
  }
  

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
  public deleteModifierExtensionAll() {
    if (typeof(this.modifierExtension) !== 'undefined') {
       delete this.modifierExtension;
    }
    return;
  }
  

  public getModifierExtension(): Extension[] | undefined {
      return this.modifierExtension;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setMaternalOrganismId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.maternalOrganismId) !== 'undefined') {
         delete this.maternalOrganismId;
      }
      return;
    }
    
    if (REGEX_MATERNALORGANISMID.test(newValue)) {
      this.maternalOrganismId = newValue
    } else {
      throw new Error("Invalid value pattern for maternalOrganismId of " + newValue);
    }
  }
  
  public getMaternalOrganismIdPattern(): string {
    return REGEX_MATERNALORGANISMID.source;
  }
  

  public getMaternalOrganismId(): string | undefined {
      return this.maternalOrganismId;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setMaternalOrganismName(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.maternalOrganismName) !== 'undefined') {
         delete this.maternalOrganismName;
      }
      return;
    }
    
    if (REGEX_MATERNALORGANISMNAME.test(newValue)) {
      this.maternalOrganismName = newValue
    } else {
      throw new Error("Invalid value pattern for maternalOrganismName of " + newValue);
    }
  }
  
  public getMaternalOrganismNamePattern(): string {
    return REGEX_MATERNALORGANISMNAME.source;
  }
  

  public getMaternalOrganismName(): string | undefined {
      return this.maternalOrganismName;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setPaternalOrganismId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.paternalOrganismId) !== 'undefined') {
         delete this.paternalOrganismId;
      }
      return;
    }
    
    if (REGEX_PATERNALORGANISMID.test(newValue)) {
      this.paternalOrganismId = newValue
    } else {
      throw new Error("Invalid value pattern for paternalOrganismId of " + newValue);
    }
  }
  
  public getPaternalOrganismIdPattern(): string {
    return REGEX_PATERNALORGANISMID.source;
  }
  

  public getPaternalOrganismId(): string | undefined {
      return this.paternalOrganismId;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setPaternalOrganismName(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.paternalOrganismName) !== 'undefined') {
         delete this.paternalOrganismName;
      }
      return;
    }
    
    if (REGEX_PATERNALORGANISMNAME.test(newValue)) {
      this.paternalOrganismName = newValue
    } else {
      throw new Error("Invalid value pattern for paternalOrganismName of " + newValue);
    }
  }
  
  public getPaternalOrganismNamePattern(): string {
    return REGEX_PATERNALORGANISMNAME.source;
  }
  

  public getPaternalOrganismName(): string | undefined {
      return this.paternalOrganismName;
  }


}


