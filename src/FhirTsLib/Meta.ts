import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_VERSIONID, REGEX_LASTUPDATED, REGEX_SOURCE } from '../FhirTsLibValidation/FhirRegex';
import { Coding, Element, Extension } from './index';



/**
 * The metadata about a resource. This is content in the resource that is maintained by the
 * infrastructure. Changes to the content might not always be associated with version changes to the
 * resource.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Meta
 */
export class Meta {
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
   * Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This
   * might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these
   * constraints.)  Ids are case-insensitive.
   * Field access restricted because there are specific valid values.
   */
  protected versionId?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _versionId?: Element;

  /**
   * An instant in time - known at least to the second
   * Field access restricted because there are specific valid values.
   */
  protected lastUpdated?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _lastUpdated?: Element;

  /**
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected source?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _source?: Element;

  /**
   * A list of profiles (references to [[[StructureDefinition]]] resources) that this resource claims to
   * conform to. The URL is a reference to [[[StructureDefinition.url]]].
   * Field access restricted because there are specific valid values.
   */
  protected profile?: string[];

  /**
   * Security labels applied to this resource. These tags connect specific resources to the overall
   * security policy and infrastructure.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Coding)
  protected security?: Coding[];

  /**
   * Tags applied to this resource. Tags are intended to be used to identify and relate resources to
   * process and workflow, and applications are not required to consider the tags when interpreting the
   * meaning of a resource.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Coding)
  protected tag?: Coding[];


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

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setVersionId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.versionId) !== 'undefined') {
         delete this.versionId;
      }
      return;
    }
    
    if (REGEX_VERSIONID.test(newValue)) {
      this.versionId = newValue
    } else {
      throw new Error("Invalid value pattern for versionId of " + newValue);
    }
  }
  
  public getVersionIdPattern(): string {
    return REGEX_VERSIONID.source;
  }
  

  public getVersionId(): string | undefined {
      return this.versionId;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setLastUpdated(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.lastUpdated) !== 'undefined') {
         delete this.lastUpdated;
      }
      return;
    }
    
    if (REGEX_LASTUPDATED.test(newValue)) {
      this.lastUpdated = newValue
    } else {
      throw new Error("Invalid value pattern for lastUpdated of " + newValue);
    }
  }
  
  public getLastUpdatedPattern(): string {
    return REGEX_LASTUPDATED.source;
  }
  

  public getLastUpdated(): string | undefined {
      return this.lastUpdated;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setSource(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.source) !== 'undefined') {
         delete this.source;
      }
      return;
    }
    
    if (REGEX_SOURCE.test(newValue)) {
      this.source = newValue
    } else {
      throw new Error("Invalid value pattern for source of " + newValue);
    }
  }
  
  public getSourcePattern(): string {
    return REGEX_SOURCE.source;
  }
  

  public getSource(): string | undefined {
      return this.source;
  }

  public addProfile(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.profile) !== 'undefined') {
         delete this.profile;
      }
      return;
    }
    
    if (typeof(this.profile) === 'undefined') {
      this.profile =  [];
    }
    this.profile.push(newValue);
  }

  public getProfile(): string[] | undefined {
      return this.profile;
  }

  public addSecurity(newValue: Coding) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.security) !== 'undefined') {
         delete this.security;
      }
      return;
    }
    
    if (typeof(this.security) === 'undefined') {
      this.security =  [];
    }
    this.security.push(newValue);
  }

  public getSecurity(): Coding[] | undefined {
      return this.security;
  }

  public addTag(newValue: Coding) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.tag) !== 'undefined') {
         delete this.tag;
      }
      return;
    }
    
    if (typeof(this.tag) === 'undefined') {
      this.tag =  [];
    }
    this.tag.push(newValue);
  }

  public getTag(): Coding[] | undefined {
      return this.tag;
  }


}


