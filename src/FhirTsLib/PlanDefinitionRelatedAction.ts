import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_ACTIONID } from '../FhirTsLibValidation/FhirRegex';
import { Duration, Element, Extension, Range } from './FhirType';
import { PlanDefinitionRelatedActionRelationship_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and
 * executable artifact. The resource is general enough to support the description of a broad range of
 * clinical artifacts such as clinical decision support rules, order sets and protocols.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/PlanDefinition_RelatedAction
 */
export class PlanDefinitionRelatedAction {
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
   * Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This
   * might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these
   * constraints.)  Ids are case-insensitive.
   * Field access restricted because there are specific valid values.
   */
  protected actionId?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _actionId?: Element;

  /**
   * The relationship of this action to the related action.
   * Field access restricted because there are specific valid values.
   */
  protected relationship?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _relationship?: Element;

  /**
   * A length of time.
   */
  @Type(() => Duration)
   offsetDuration?: Duration;

  /**
   * A set of ordered Quantities defined by a low and high limit.
   */
  @Type(() => Range)
   offsetRange?: Range;


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
  public setActionId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.actionId) !== 'undefined') {
         delete this.actionId;
      }
      return;
    }
    
    if (REGEX_ACTIONID.test(newValue)) {
      this.actionId = newValue
    } else {
      throw new Error("Invalid value pattern for actionId of " + newValue);
    }
  }
  
  public getActionIdPattern(): string {
    return REGEX_ACTIONID.source;
  }
  

  public getActionId(): string | undefined {
      return this.actionId;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setRelationship(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.relationship) !== 'undefined') {
         delete this.relationship;
      }
      return;
    }
    
    const idx = getValidValueIdx(PlanDefinitionRelatedActionRelationship_list_ValidValues, newValue);
    if (idx >= 0) {
      this.relationship = PlanDefinitionRelatedActionRelationship_list_ValidValues[idx];
    } else {
      throw new Error("Unknown relationship of " + newValue);
    }
  }
  
  public getPlanDefinitionRelatedActionRelationshipValidValues(): string[] {
    return PlanDefinitionRelatedActionRelationship_list_ValidValues;
  }
  

  public getRelationship(): string | undefined {
      return this.relationship;
  }


}

