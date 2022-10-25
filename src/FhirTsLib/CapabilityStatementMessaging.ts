import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_DOCUMENTATION } from '../FhirTsLibValidation/FhirRegex';
import { CapabilityStatementEndpoint, CapabilityStatementSupportedMessage, Element, Extension } from './index';



/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a
 * particular version of FHIR that may be used as a statement of actual server functionality or a
 * statement of required or desired server implementation.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/CapabilityStatement_Messaging
 */
export class CapabilityStatementMessaging {
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
   * An endpoint (network accessible address) to which messages and/or replies are to be sent.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CapabilityStatementEndpoint)
  protected endpoint?: CapabilityStatementEndpoint[];

  /**
   * An integer with a value that is not negative (e.g. >= 0)
   */
   reliableCache?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _reliableCache?: Element;

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
   * References to message definitions for messages this system can send or receive.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CapabilityStatementSupportedMessage)
  protected supportedMessage?: CapabilityStatementSupportedMessage[];


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

  public addEndpoint(newValue: CapabilityStatementEndpoint) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.endpoint) !== 'undefined') {
         delete this.endpoint;
      }
      return;
    }
    
    if (typeof(this.endpoint) === 'undefined') {
      this.endpoint =  [];
    }
    this.endpoint.push(newValue);
  }
  /**
  * Removes all elements from the array endpoint, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteEndpointAll(): CapabilityStatementEndpoint[] {
    if (typeof(this.endpoint) !== 'undefined') {
       const oldArray = this.endpoint;
       delete this.endpoint;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array endpoint, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteEndpointBySplice(start: number, deleteCount?: number): CapabilityStatementEndpoint[] {
    if (typeof(this.endpoint) !== 'undefined') {
       return this.endpoint.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field endpoint.
  * @returns the value  or undefined
  */
  public getEndpoint(): CapabilityStatementEndpoint[] | undefined {
      return this.endpoint;
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
  
  /**
  * Gets the current value of field documentation.
  * @returns the value  or undefined
  */
  public getDocumentation(): string | undefined {
      return this.documentation;
  }

  public addSupportedMessage(newValue: CapabilityStatementSupportedMessage) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.supportedMessage) !== 'undefined') {
         delete this.supportedMessage;
      }
      return;
    }
    
    if (typeof(this.supportedMessage) === 'undefined') {
      this.supportedMessage =  [];
    }
    this.supportedMessage.push(newValue);
  }
  /**
  * Removes all elements from the array supportedMessage, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteSupportedMessageAll(): CapabilityStatementSupportedMessage[] {
    if (typeof(this.supportedMessage) !== 'undefined') {
       const oldArray = this.supportedMessage;
       delete this.supportedMessage;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array supportedMessage, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteSupportedMessageBySplice(start: number, deleteCount?: number): CapabilityStatementSupportedMessage[] {
    if (typeof(this.supportedMessage) !== 'undefined') {
       return this.supportedMessage.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field supportedMessage.
  * @returns the value  or undefined
  */
  public getSupportedMessage(): CapabilityStatementSupportedMessage[] | undefined {
      return this.supportedMessage;
  }


}


