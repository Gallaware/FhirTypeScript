import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_AUTHORITY, REGEX_URI } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './index';



/**
 * A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or
 * recipient role(s) to perform one or more actions within a given policy context, for specific
 * purposes and periods of time.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Consent_Policy
 */
export class ConsentPolicy {
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
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected authority?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _authority?: Element;

  /**
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected uri?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _uri?: Element;


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
  public setAuthority(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.authority) !== 'undefined') {
         delete this.authority;
      }
      return;
    }
    
    if (REGEX_AUTHORITY.test(newValue)) {
      this.authority = newValue
    } else {
      throw new Error("Invalid value pattern for authority of " + newValue);
    }
  }
  
  public getAuthorityPattern(): string {
    return REGEX_AUTHORITY.source;
  }
  
  /**
  * Gets the current value of field authority.
  * @returns the value  or undefined
  */
  public getAuthority(): string | undefined {
      return this.authority;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setUri(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.uri) !== 'undefined') {
         delete this.uri;
      }
      return;
    }
    
    if (REGEX_URI.test(newValue)) {
      this.uri = newValue
    } else {
      throw new Error("Invalid value pattern for uri of " + newValue);
    }
  }
  
  public getUriPattern(): string {
    return REGEX_URI.source;
  }
  
  /**
  * Gets the current value of field uri.
  * @returns the value  or undefined
  */
  public getUri(): string | undefined {
      return this.uri;
  }


}


