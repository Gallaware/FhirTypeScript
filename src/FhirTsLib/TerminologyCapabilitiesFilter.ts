import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_CODE } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './index';



/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR
 * Terminology Server that may be used as a statement of actual server functionality or a statement
 * of required or desired server implementation.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/TerminologyCapabilities_Filter
 */
export class TerminologyCapabilitiesFilter {
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
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected code?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _code?: Element;

  /**
   * Operations supported for the property.
   * Field access restricted because there are specific valid values.
   */
  protected op?: string[];

  /**
   * Extensions for op
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _op?: Element[];


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
  public setCode(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.code) !== 'undefined') {
         delete this.code;
      }
      return;
    }
    
    if (REGEX_CODE.test(newValue)) {
      this.code = newValue
    } else {
      throw new Error("Invalid value pattern for code of " + newValue);
    }
  }
  
  public getCodePattern(): string {
    return REGEX_CODE.source;
  }
  
  /**
  * Gets the current value of field code.
  * @returns the value  or undefined
  */
  public getCode(): string | undefined {
      return this.code;
  }

  public addOp(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.op) !== 'undefined') {
         delete this.op;
      }
      return;
    }
    
    if (typeof(this.op) === 'undefined') {
      this.op =  [];
    }
    this.op.push(newValue);
  }
  /**
  * Removes all elements from the array op, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteOpAll(): string[] {
    if (typeof(this.op) !== 'undefined') {
       const oldArray = this.op;
       delete this.op;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array op, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteOpBySplice(start: number, deleteCount?: number): string[] {
    if (typeof(this.op) !== 'undefined') {
       return this.op.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field op.
  * @returns the value  or undefined
  */
  public getOp(): string[] | undefined {
      return this.op;
  }

  public add_op(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._op) !== 'undefined') {
         delete this._op;
      }
      return;
    }
    
    if (typeof(this._op) === 'undefined') {
      this._op =  [];
    }
    this._op.push(newValue);
  }
  /**
  * Removes all elements from the array _op, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public delete_opAll(): Element[] {
    if (typeof(this._op) !== 'undefined') {
       const oldArray = this._op;
       delete this._op;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array _op, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public delete_opBySplice(start: number, deleteCount?: number): Element[] {
    if (typeof(this._op) !== 'undefined') {
       return this._op.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field _op.
  * @returns the value  or undefined
  */
  public get_op(): Element[] | undefined {
      return this._op;
  }


}


