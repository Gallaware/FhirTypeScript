import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_ALTID, REGEX_NAME } from '../FhirTsLibValidation/FhirRegex';
import { AuditEventNetwork, CodeableConcept, Coding, Element, Extension, Reference } from './index';



/**
 * A record of an event made for purposes of maintaining a security log. Typical uses include
 * detection of intrusion attempts and monitoring for inappropriate usage.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/AuditEvent_Agent
 */
export class AuditEventAgent {
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
   type?: CodeableConcept;

  /**
   * The security role that the user was acting under, that come from local codes defined by the access
   * control security system (e.g. RBAC, ABAC) used in the local context.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected role?: CodeableConcept[];

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   who?: Reference;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected altId?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _altId?: Element;

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
   * Value of "true" or "false"
   */
   requestor?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _requestor?: Element;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   location?: Reference;

  /**
   * The policy or plan that authorized the activity being recorded. Typically, a single activity may
   * have multiple applicable policies, such as patient consent, guarantor funding, etc. The policy
   * would also indicate the security token used.
   * Field access restricted because there are specific valid values.
   */
  protected policy?: string[];

  /**
   * Extensions for policy
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _policy?: Element[];

  /**
   * A reference to a code defined by a terminology system.
   */
  @Type(() => Coding)
   media?: Coding;

  /**
   * A record of an event made for purposes of maintaining a security log. Typical uses include
   * detection of intrusion attempts and monitoring for inappropriate usage.
   */
  @Type(() => AuditEventNetwork)
   network?: AuditEventNetwork;

  /**
   * The reason (purpose of use), specific to this agent, that was used during the event being recorded.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected purposeOfUse?: CodeableConcept[];


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

  public addRole(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.role) !== 'undefined') {
         delete this.role;
      }
      return;
    }
    
    if (typeof(this.role) === 'undefined') {
      this.role =  [];
    }
    this.role.push(newValue);
  }
  /**
  * Removes all elements from the array role, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteRoleAll(): CodeableConcept[] {
    if (typeof(this.role) !== 'undefined') {
       const oldArray = this.role;
       delete this.role;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array role, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteRoleBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.role) !== 'undefined') {
       return this.role.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field role.
  * @returns the value  or undefined
  */
  public getRole(): CodeableConcept[] | undefined {
      return this.role;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setAltId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.altId) !== 'undefined') {
         delete this.altId;
      }
      return;
    }
    
    if (REGEX_ALTID.test(newValue)) {
      this.altId = newValue
    } else {
      throw new Error("Invalid value pattern for altId of " + newValue);
    }
  }
  
  public getAltIdPattern(): string {
    return REGEX_ALTID.source;
  }
  
  /**
  * Gets the current value of field altId.
  * @returns the value  or undefined
  */
  public getAltId(): string | undefined {
      return this.altId;
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

  public addPolicy(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.policy) !== 'undefined') {
         delete this.policy;
      }
      return;
    }
    
    if (typeof(this.policy) === 'undefined') {
      this.policy =  [];
    }
    this.policy.push(newValue);
  }
  /**
  * Removes all elements from the array policy, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deletePolicyAll(): string[] {
    if (typeof(this.policy) !== 'undefined') {
       const oldArray = this.policy;
       delete this.policy;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array policy, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deletePolicyBySplice(start: number, deleteCount?: number): string[] {
    if (typeof(this.policy) !== 'undefined') {
       return this.policy.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field policy.
  * @returns the value  or undefined
  */
  public getPolicy(): string[] | undefined {
      return this.policy;
  }

  public add_policy(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._policy) !== 'undefined') {
         delete this._policy;
      }
      return;
    }
    
    if (typeof(this._policy) === 'undefined') {
      this._policy =  [];
    }
    this._policy.push(newValue);
  }
  /**
  * Removes all elements from the array _policy, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public delete_policyAll(): Element[] {
    if (typeof(this._policy) !== 'undefined') {
       const oldArray = this._policy;
       delete this._policy;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array _policy, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public delete_policyBySplice(start: number, deleteCount?: number): Element[] {
    if (typeof(this._policy) !== 'undefined') {
       return this._policy.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field _policy.
  * @returns the value  or undefined
  */
  public get_policy(): Element[] | undefined {
      return this._policy;
  }

  public addPurposeOfUse(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.purposeOfUse) !== 'undefined') {
         delete this.purposeOfUse;
      }
      return;
    }
    
    if (typeof(this.purposeOfUse) === 'undefined') {
      this.purposeOfUse =  [];
    }
    this.purposeOfUse.push(newValue);
  }
  /**
  * Removes all elements from the array purposeOfUse, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deletePurposeOfUseAll(): CodeableConcept[] {
    if (typeof(this.purposeOfUse) !== 'undefined') {
       const oldArray = this.purposeOfUse;
       delete this.purposeOfUse;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array purposeOfUse, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deletePurposeOfUseBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.purposeOfUse) !== 'undefined') {
       return this.purposeOfUse.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field purposeOfUse.
  * @returns the value  or undefined
  */
  public getPurposeOfUse(): CodeableConcept[] | undefined {
      return this.purposeOfUse;
  }


}


