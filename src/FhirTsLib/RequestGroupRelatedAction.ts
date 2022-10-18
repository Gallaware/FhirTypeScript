import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_ACTIONID, REGEX_RELATIONSHIP } from '../FhirTsLibValidation/FhirRegex';
import { Duration, Element, Extension, Range } from './index';



/**
 * A group of related requests that can be used to capture intended activities that have
 * inter-dependencies such as "give this medication after that one".
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/RequestGroup_RelatedAction
 */
export class RequestGroupRelatedAction {
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
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
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
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setRelationship(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.relationship) !== 'undefined') {
         delete this.relationship;
      }
      return;
    }
    
    if (REGEX_RELATIONSHIP.test(newValue)) {
      this.relationship = newValue
    } else {
      throw new Error("Invalid value pattern for relationship of " + newValue);
    }
  }
  
  public getRelationshipPattern(): string {
    return REGEX_RELATIONSHIP.source;
  }
  

  public getRelationship(): string | undefined {
      return this.relationship;
  }


}


