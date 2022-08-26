import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_PROFILE, REGEX_DOCUMENTATION } from '../FhirTsLibValidation/FhirRegex';
import { CapabilityStatementInteraction, CapabilityStatementOperation, CapabilityStatementSearchParam, Element, Extension } from './FhirType';
import { ResourceType_list_ValidValues, CapabilityStatementResourceVersioning_list_ValidValues, CapabilityStatementResourceConditionalRead_list_ValidValues, CapabilityStatementResourceConditionalDelete_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a
 * particular version of FHIR that may be used as a statement of actual server functionality or a
 * statement of required or desired server implementation.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/CapabilityStatement_Resource
 */
export class CapabilityStatementResource {
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
   * A type of resource exposed via the restful interface.
   * Field access restricted because there are specific valid values.
   */
  protected type?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _type?: Element;

  /**
   * A URI that is a reference to a canonical URL on a FHIR resource
   * Field access restricted because there are specific valid values.
   */
  protected profile?: string;

  /**
   * A list of profiles that represent different use cases supported by the system. For a server,
   * "supported by the system" means the system hosts/produces a set of resources that are conformant
   * to a particular profile, and allows clients that use its services to search using this profile and
   * to find appropriate data. For a client, it means the system will search by this profile and process
   * data according to the guidance implicit in the profile. See further discussion in [Using
   * Profiles](profiling.html#profile-uses).
   * Field access restricted because there are specific valid values.
   */
  protected supportedProfile?: string[];

  /**
   * A string that may contain Github Flavored Markdown syntax for optional processing by a mark down
   * presentation engine
   * Field access restricted because there are specific valid values.
   */
  protected documentation?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _documentation?: Element;

  /**
   * Identifies a restful operation supported by the solution.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CapabilityStatementInteraction)
  protected interaction?: CapabilityStatementInteraction[];

  /**
   * This field is set to no-version to specify that the system does not support (server) or use
   * (client) versioning for this resource type. If this has some other value, the server must at least
   * correctly track and populate the versionId meta-property on resources. If the value is
   * 'versioned-update', then the server supports all the versioning features, including using e-tags
   * for version integrity in the API.
   * Field access restricted because there are specific valid values.
   */
  protected versioning?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _versioning?: Element;

  /**
   * Value of "true" or "false"
   */
   readHistory?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _readHistory?: Element;

  /**
   * Value of "true" or "false"
   */
   updateCreate?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _updateCreate?: Element;

  /**
   * Value of "true" or "false"
   */
   conditionalCreate?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _conditionalCreate?: Element;

  /**
   * A code that indicates how the server supports conditional read.
   * Field access restricted because there are specific valid values.
   */
  protected conditionalRead?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _conditionalRead?: Element;

  /**
   * Value of "true" or "false"
   */
   conditionalUpdate?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _conditionalUpdate?: Element;

  /**
   * A code that indicates how the server supports conditional delete.
   * Field access restricted because there are specific valid values.
   */
  protected conditionalDelete?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _conditionalDelete?: Element;

  /**
   * A set of flags that defines how references are supported.
   * Field access restricted because there are specific valid values.
   */
  protected referencePolicy?: string[];

  /**
   * Extensions for referencePolicy
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _referencePolicy?: Element[];

  /**
   * A list of _include values supported by the server.
   * Field access restricted because there are specific valid values.
   */
  protected searchInclude?: string[];

  /**
   * Extensions for searchInclude
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _searchInclude?: Element[];

  /**
   * A list of _revinclude (reverse include) values supported by the server.
   * Field access restricted because there are specific valid values.
   */
  protected searchRevInclude?: string[];

  /**
   * Extensions for searchRevInclude
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _searchRevInclude?: Element[];

  /**
   * Search parameters for implementations to support and/or make use of - either references to ones
   * defined in the specification, or additional ones defined for/by the implementation.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CapabilityStatementSearchParam)
  protected searchParam?: CapabilityStatementSearchParam[];

  /**
   * Definition of an operation or a named query together with its parameters and their meaning and
   * type. Consult the definition of the operation for details about how to invoke the operation, and
   * the parameters.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CapabilityStatementOperation)
  protected operation?: CapabilityStatementOperation[];


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
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setType(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.type) !== 'undefined') {
         delete this.type;
      }
      return;
    }
    
    const idx = getValidValueIdx(ResourceType_list_ValidValues, newValue);
    if (idx >= 0) {
      this.type = ResourceType_list_ValidValues[idx];
    } else {
      throw new Error("Unknown type of " + newValue);
    }
  }
  
  public getCapabilityStatementResourceTypeValidValues(): string[] {
    return ResourceType_list_ValidValues;
  }
  

  public getType(): string | undefined {
      return this.type;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setProfile(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.profile) !== 'undefined') {
         delete this.profile;
      }
      return;
    }
    
    if (REGEX_PROFILE.test(newValue)) {
      this.profile = newValue
    } else {
      throw new Error("Invalid value pattern for profile of " + newValue);
    }
  }
  
  public getProfilePattern(): string {
    return REGEX_PROFILE.source;
  }
  

  public getProfile(): string | undefined {
      return this.profile;
  }

  public addSupportedProfile(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.supportedProfile) !== 'undefined') {
         delete this.supportedProfile;
      }
      return;
    }
    
    if (typeof(this.supportedProfile) === 'undefined') {
      this.supportedProfile =  [];
    }
    this.supportedProfile.push(newValue);
  }

  public getSupportedProfile(): string[] | undefined {
      return this.supportedProfile;
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

  public addInteraction(newValue: CapabilityStatementInteraction) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.interaction) !== 'undefined') {
         delete this.interaction;
      }
      return;
    }
    
    if (typeof(this.interaction) === 'undefined') {
      this.interaction =  [];
    }
    this.interaction.push(newValue);
  }

  public getInteraction(): CapabilityStatementInteraction[] | undefined {
      return this.interaction;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setVersioning(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.versioning) !== 'undefined') {
         delete this.versioning;
      }
      return;
    }
    
    const idx = getValidValueIdx(CapabilityStatementResourceVersioning_list_ValidValues, newValue);
    if (idx >= 0) {
      this.versioning = CapabilityStatementResourceVersioning_list_ValidValues[idx];
    } else {
      throw new Error("Unknown versioning of " + newValue);
    }
  }
  
  public getCapabilityStatementResourceVersioningValidValues(): string[] {
    return CapabilityStatementResourceVersioning_list_ValidValues;
  }
  

  public getVersioning(): string | undefined {
      return this.versioning;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setConditionalRead(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.conditionalRead) !== 'undefined') {
         delete this.conditionalRead;
      }
      return;
    }
    
    const idx = getValidValueIdx(CapabilityStatementResourceConditionalRead_list_ValidValues, newValue);
    if (idx >= 0) {
      this.conditionalRead = CapabilityStatementResourceConditionalRead_list_ValidValues[idx];
    } else {
      throw new Error("Unknown conditionalRead of " + newValue);
    }
  }
  
  public getCapabilityStatementResourceConditionalReadValidValues(): string[] {
    return CapabilityStatementResourceConditionalRead_list_ValidValues;
  }
  

  public getConditionalRead(): string | undefined {
      return this.conditionalRead;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setConditionalDelete(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.conditionalDelete) !== 'undefined') {
         delete this.conditionalDelete;
      }
      return;
    }
    
    const idx = getValidValueIdx(CapabilityStatementResourceConditionalDelete_list_ValidValues, newValue);
    if (idx >= 0) {
      this.conditionalDelete = CapabilityStatementResourceConditionalDelete_list_ValidValues[idx];
    } else {
      throw new Error("Unknown conditionalDelete of " + newValue);
    }
  }
  
  public getCapabilityStatementResourceConditionalDeleteValidValues(): string[] {
    return CapabilityStatementResourceConditionalDelete_list_ValidValues;
  }
  

  public getConditionalDelete(): string | undefined {
      return this.conditionalDelete;
  }

  public addReferencePolicy(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.referencePolicy) !== 'undefined') {
         delete this.referencePolicy;
      }
      return;
    }
    
    if (typeof(this.referencePolicy) === 'undefined') {
      this.referencePolicy =  [];
    }
    this.referencePolicy.push(newValue);
  }

  public getReferencePolicy(): string[] | undefined {
      return this.referencePolicy;
  }

  public add_referencePolicy(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._referencePolicy) !== 'undefined') {
         delete this._referencePolicy;
      }
      return;
    }
    
    if (typeof(this._referencePolicy) === 'undefined') {
      this._referencePolicy =  [];
    }
    this._referencePolicy.push(newValue);
  }

  public get_referencePolicy(): Element[] | undefined {
      return this._referencePolicy;
  }

  public addSearchInclude(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.searchInclude) !== 'undefined') {
         delete this.searchInclude;
      }
      return;
    }
    
    if (typeof(this.searchInclude) === 'undefined') {
      this.searchInclude =  [];
    }
    this.searchInclude.push(newValue);
  }

  public getSearchInclude(): string[] | undefined {
      return this.searchInclude;
  }

  public add_searchInclude(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._searchInclude) !== 'undefined') {
         delete this._searchInclude;
      }
      return;
    }
    
    if (typeof(this._searchInclude) === 'undefined') {
      this._searchInclude =  [];
    }
    this._searchInclude.push(newValue);
  }

  public get_searchInclude(): Element[] | undefined {
      return this._searchInclude;
  }

  public addSearchRevInclude(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.searchRevInclude) !== 'undefined') {
         delete this.searchRevInclude;
      }
      return;
    }
    
    if (typeof(this.searchRevInclude) === 'undefined') {
      this.searchRevInclude =  [];
    }
    this.searchRevInclude.push(newValue);
  }

  public getSearchRevInclude(): string[] | undefined {
      return this.searchRevInclude;
  }

  public add_searchRevInclude(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._searchRevInclude) !== 'undefined') {
         delete this._searchRevInclude;
      }
      return;
    }
    
    if (typeof(this._searchRevInclude) === 'undefined') {
      this._searchRevInclude =  [];
    }
    this._searchRevInclude.push(newValue);
  }

  public get_searchRevInclude(): Element[] | undefined {
      return this._searchRevInclude;
  }

  public addSearchParam(newValue: CapabilityStatementSearchParam) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.searchParam) !== 'undefined') {
         delete this.searchParam;
      }
      return;
    }
    
    if (typeof(this.searchParam) === 'undefined') {
      this.searchParam =  [];
    }
    this.searchParam.push(newValue);
  }

  public getSearchParam(): CapabilityStatementSearchParam[] | undefined {
      return this.searchParam;
  }

  public addOperation(newValue: CapabilityStatementOperation) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.operation) !== 'undefined') {
         delete this.operation;
      }
      return;
    }
    
    if (typeof(this.operation) === 'undefined') {
      this.operation =  [];
    }
    this.operation.push(newValue);
  }

  public getOperation(): CapabilityStatementOperation[] | undefined {
      return this.operation;
  }


}

