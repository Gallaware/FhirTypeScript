import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_DOCUMENTATION } from '../FhirTsLibValidation/FhirRegex';
import { CapabilityStatementInteraction1, CapabilityStatementOperation, CapabilityStatementResource, CapabilityStatementSearchParam, CapabilityStatementSecurity, Element, Extension } from './index';
import { CapabilityStatementRestMode_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a
 * particular version of FHIR that may be used as a statement of actual server functionality or a
 * statement of required or desired server implementation.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/CapabilityStatement_Rest
 */
export class CapabilityStatementRest {
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
   * Identifies whether this portion of the statement is describing the ability to initiate or receive
   * restful operations.
   * Field access restricted because there are specific valid values.
   */
  protected mode?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _mode?: Element;

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
   * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a
   * particular version of FHIR that may be used as a statement of actual server functionality or a
   * statement of required or desired server implementation.
   */
  @Type(() => CapabilityStatementSecurity)
   security?: CapabilityStatementSecurity;

  /**
   * A specification of the restful capabilities of the solution for a specific resource type.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CapabilityStatementResource)
  protected resource?: CapabilityStatementResource[];

  /**
   * A specification of restful operations supported by the system.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CapabilityStatementInteraction1)
  protected interaction?: CapabilityStatementInteraction1[];

  /**
   * Search parameters that are supported for searching all resources for implementations to support
   * and/or make use of - either references to ones defined in the specification, or additional ones
   * defined for/by the implementation.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CapabilityStatementSearchParam)
  protected searchParam?: CapabilityStatementSearchParam[];

  /**
   * Definition of an operation or a named query together with its parameters and their meaning and type.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CapabilityStatementOperation)
  protected operation?: CapabilityStatementOperation[];

  /**
   * An absolute URI which is a reference to the definition of a compartment that the system supports.
   * The reference is to a CompartmentDefinition resource by its canonical URL .
   * Field access restricted because there are specific valid values.
   */
  protected compartment?: string[];


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
    
    const idx = getValidValueIdx(CapabilityStatementRestMode_list_ValidValues, newValue);
    if (idx >= 0) {
      this.mode = CapabilityStatementRestMode_list_ValidValues[idx];
    } else {
      throw new Error("Unknown mode of " + newValue);
    }
  }
  
  public getCapabilityStatementRestModeValidValues(): string[] {
    return CapabilityStatementRestMode_list_ValidValues;
  }
  
  /**
  * Gets the current value of field mode.
  * @returns the value  or undefined
  */
  public getMode(): string | undefined {
      return this.mode;
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

  public addResource(newValue: CapabilityStatementResource) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.resource) !== 'undefined') {
         delete this.resource;
      }
      return;
    }
    
    if (typeof(this.resource) === 'undefined') {
      this.resource =  [];
    }
    this.resource.push(newValue);
  }
  /**
  * Removes all elements from the array resource, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteResourceAll(): CapabilityStatementResource[] {
    if (typeof(this.resource) !== 'undefined') {
       const oldArray = this.resource;
       delete this.resource;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array resource, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteResourceBySplice(start: number, deleteCount?: number): CapabilityStatementResource[] {
    if (typeof(this.resource) !== 'undefined') {
       return this.resource.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field resource.
  * @returns the value  or undefined
  */
  public getResource(): CapabilityStatementResource[] | undefined {
      return this.resource;
  }

  public addInteraction(newValue: CapabilityStatementInteraction1) {
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
  /**
  * Removes all elements from the array interaction, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteInteractionAll(): CapabilityStatementInteraction1[] {
    if (typeof(this.interaction) !== 'undefined') {
       const oldArray = this.interaction;
       delete this.interaction;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array interaction, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteInteractionBySplice(start: number, deleteCount?: number): CapabilityStatementInteraction1[] {
    if (typeof(this.interaction) !== 'undefined') {
       return this.interaction.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field interaction.
  * @returns the value  or undefined
  */
  public getInteraction(): CapabilityStatementInteraction1[] | undefined {
      return this.interaction;
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
  /**
  * Removes all elements from the array searchParam, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteSearchParamAll(): CapabilityStatementSearchParam[] {
    if (typeof(this.searchParam) !== 'undefined') {
       const oldArray = this.searchParam;
       delete this.searchParam;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array searchParam, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteSearchParamBySplice(start: number, deleteCount?: number): CapabilityStatementSearchParam[] {
    if (typeof(this.searchParam) !== 'undefined') {
       return this.searchParam.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field searchParam.
  * @returns the value  or undefined
  */
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
  /**
  * Removes all elements from the array operation, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteOperationAll(): CapabilityStatementOperation[] {
    if (typeof(this.operation) !== 'undefined') {
       const oldArray = this.operation;
       delete this.operation;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array operation, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteOperationBySplice(start: number, deleteCount?: number): CapabilityStatementOperation[] {
    if (typeof(this.operation) !== 'undefined') {
       return this.operation.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field operation.
  * @returns the value  or undefined
  */
  public getOperation(): CapabilityStatementOperation[] | undefined {
      return this.operation;
  }

  public addCompartment(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.compartment) !== 'undefined') {
         delete this.compartment;
      }
      return;
    }
    
    if (typeof(this.compartment) === 'undefined') {
      this.compartment =  [];
    }
    this.compartment.push(newValue);
  }
  /**
  * Removes all elements from the array compartment, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteCompartmentAll(): string[] {
    if (typeof(this.compartment) !== 'undefined') {
       const oldArray = this.compartment;
       delete this.compartment;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array compartment, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteCompartmentBySplice(start: number, deleteCount?: number): string[] {
    if (typeof(this.compartment) !== 'undefined') {
       return this.compartment.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field compartment.
  * @returns the value  or undefined
  */
  public getCompartment(): string[] | undefined {
      return this.compartment;
  }


}


