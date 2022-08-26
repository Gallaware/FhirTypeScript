import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_URL, REGEX_ALIAS, REGEX_DOCUMENTATION } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './FhirType';
import { StructureMapStructureMode_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A Map of relationships between 2 structures that can be used to transform data.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/StructureMap_Structure
 */
export class StructureMapStructure {
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
   * A URI that is a reference to a canonical URL on a FHIR resource
   * Field access restricted because there are specific valid values.
   */
  protected url?: string;

  /**
   * How the referenced structure is used in this mapping.
   * Field access restricted because there are specific valid values.
   */
  protected mode?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _mode?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected alias?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _alias?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected documentation?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _documentation?: Element;


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

  public getModifierExtension(): Extension[] | undefined {
      return this.modifierExtension;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setUrl(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.url) !== 'undefined') {
         delete this.url;
      }
      return;
    }
    
    if (REGEX_URL.test(newValue)) {
      this.url = newValue
    } else {
      throw new Error("Invalid value pattern for url of " + newValue);
    }
  }
  
  public getUrlPattern(): string {
    return REGEX_URL.source;
  }
  

  public getUrl(): string | undefined {
      return this.url;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setMode(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.mode) !== 'undefined') {
         delete this.mode;
      }
      return;
    }
    
    const idx = getValidValueIdx(StructureMapStructureMode_list_ValidValues, newValue);
    if (idx >= 0) {
      this.mode = StructureMapStructureMode_list_ValidValues[idx];
    } else {
      throw new Error("Unknown mode of " + newValue);
    }
  }
  
  public getStructureMapStructureModeValidValues(): string[] {
    return StructureMapStructureMode_list_ValidValues;
  }
  

  public getMode(): string | undefined {
      return this.mode;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setAlias(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.alias) !== 'undefined') {
         delete this.alias;
      }
      return;
    }
    
    if (REGEX_ALIAS.test(newValue)) {
      this.alias = newValue
    } else {
      throw new Error("Invalid value pattern for alias of " + newValue);
    }
  }
  
  public getAliasPattern(): string {
    return REGEX_ALIAS.source;
  }
  

  public getAlias(): string | undefined {
      return this.alias;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDocumentation(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.documentation) !== 'undefined') {
         delete this.documentation;
      }
      return;
    }
    
    if (REGEX_DOCUMENTATION.test(newValue)) {
      this.documentation = newValue
    } else {
      throw new Error("Invalid value pattern for documentation of " + newValue);
    }
  }
  
  public getDocumentationPattern(): string {
    return REGEX_DOCUMENTATION.source;
  }
  

  public getDocumentation(): string | undefined {
      return this.documentation;
  }


}

