import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_DIAGNOSTICS } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension } from './index';
import { OperationOutcomeIssueSeverity_list_ValidValues, OperationOutcomeIssueCode_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A collection of error, warning, or information messages that result from a system action.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/OperationOutcome_Issue
 */
export class OperationOutcomeIssue {
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
   * Indicates whether the issue indicates a variation from successful processing.
   * Field access restricted because there are specific valid values.
   */
  protected severity?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _severity?: Element;

  /**
   * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most
   * applicable code from the IssueType value set, and may additional provide its own code for the
   * error in the details element.
   * Field access restricted because there are specific valid values.
   */
  protected code?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _code?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   details?: CodeableConcept;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected diagnostics?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _diagnostics?: Element;

  /**
   * This element is deprecated because it is XML specific. It is replaced by issue.expression, which is
   * format independent, and simpler to parse.
   * 
   * For resource issues, this will be a simple XPath limited to element names, repetition indicators
   * and the default child accessor that identifies one of the elements in the resource that caused
   * this issue to be raised.  For HTTP errors, will be "http." + the parameter name.
   * Field access restricted because there are specific valid values.
   */
  protected location?: string[];

  /**
   * Extensions for location
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _location?: Element[];

  /**
   * A [simple subset of FHIRPath](fhirpath.html#simple) limited to element names, repetition indicators
   * and the default child accessor that identifies one of the elements in the resource that caused this
   * issue to be raised.
   * Field access restricted because there are specific valid values.
   */
  protected expression?: string[];

  /**
   * Extensions for expression
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _expression?: Element[];


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

  /**
  * Gets the current value of field id if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getIdOrElse(defaultValue: string): string {
      if (this.id == undefined || this.id == null ) { return defaultValue; }
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

  /**
  * Gets the current value of field extension if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getExtensionOrElse(defaultValue: Extension[]): Extension[] {
      if (this.extension == undefined || this.extension == null ) { return defaultValue; }
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

  /**
  * Gets the current value of field modifierExtension if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getModifierExtensionOrElse(defaultValue: Extension[]): Extension[] {
      if (this.modifierExtension == undefined || this.modifierExtension == null ) { return defaultValue; }
      return this.modifierExtension;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setSeverity(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.severity) !== 'undefined') {
         delete this.severity;
      }
      return;
    }
    
    const idx = getValidValueIdx(OperationOutcomeIssueSeverity_list_ValidValues, newValue);
    if (idx >= 0) {
      this.severity = OperationOutcomeIssueSeverity_list_ValidValues[idx];
    } else {
      throw new Error("Unknown severity of " + newValue);
    }
  }
  
  public getOperationOutcomeIssueSeverityValidValues(): string[] {
    return OperationOutcomeIssueSeverity_list_ValidValues;
  }
  
  /**
  * Gets the current value of field severity.
  * @returns the value  or undefined
  */
  public getSeverity(): string | undefined {
      return this.severity;
  }

  /**
  * Gets the current value of field severity if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getSeverityOrElse(defaultValue: string): string {
      if (this.severity == undefined || this.severity == null ) { return defaultValue; }
      return this.severity;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setCode(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.code) !== 'undefined') {
         delete this.code;
      }
      return;
    }
    
    const idx = getValidValueIdx(OperationOutcomeIssueCode_list_ValidValues, newValue);
    if (idx >= 0) {
      this.code = OperationOutcomeIssueCode_list_ValidValues[idx];
    } else {
      throw new Error("Unknown code of " + newValue);
    }
  }
  
  public getOperationOutcomeIssueCodeValidValues(): string[] {
    return OperationOutcomeIssueCode_list_ValidValues;
  }
  
  /**
  * Gets the current value of field code.
  * @returns the value  or undefined
  */
  public getCode(): string | undefined {
      return this.code;
  }

  /**
  * Gets the current value of field code if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getCodeOrElse(defaultValue: string): string {
      if (this.code == undefined || this.code == null ) { return defaultValue; }
      return this.code;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDiagnostics(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.diagnostics) !== 'undefined') {
         delete this.diagnostics;
      }
      return;
    }
    
    if (REGEX_DIAGNOSTICS.test(newValue)) {
      this.diagnostics = newValue
    } else {
      throw new Error("Invalid value pattern for diagnostics of " + newValue);
    }
  }
  
  public getDiagnosticsPattern(): string {
    return REGEX_DIAGNOSTICS.source;
  }
  
  /**
  * Gets the current value of field diagnostics.
  * @returns the value  or undefined
  */
  public getDiagnostics(): string | undefined {
      return this.diagnostics;
  }

  /**
  * Gets the current value of field diagnostics if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getDiagnosticsOrElse(defaultValue: string): string {
      if (this.diagnostics == undefined || this.diagnostics == null ) { return defaultValue; }
      return this.diagnostics;
  }

  public addLocation(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.location) !== 'undefined') {
         delete this.location;
      }
      return;
    }
    
    if (typeof(this.location) === 'undefined') {
      this.location =  [];
    }
    this.location.push(newValue);
  }
  /**
  * Removes all elements from the array location, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteLocationAll(): string[] {
    if (typeof(this.location) !== 'undefined') {
       const oldArray = this.location;
       delete this.location;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array location, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteLocationBySplice(start: number, deleteCount?: number): string[] {
    if (typeof(this.location) !== 'undefined') {
       return this.location.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field location.
  * @returns the value  or undefined
  */
  public getLocation(): string[] | undefined {
      return this.location;
  }

  /**
  * Gets the current value of field location if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getLocationOrElse(defaultValue: string[]): string[] {
      if (this.location == undefined || this.location == null ) { return defaultValue; }
      return this.location;
  }

  public add_location(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._location) !== 'undefined') {
         delete this._location;
      }
      return;
    }
    
    if (typeof(this._location) === 'undefined') {
      this._location =  [];
    }
    this._location.push(newValue);
  }
  /**
  * Removes all elements from the array _location, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public delete_locationAll(): Element[] {
    if (typeof(this._location) !== 'undefined') {
       const oldArray = this._location;
       delete this._location;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array _location, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public delete_locationBySplice(start: number, deleteCount?: number): Element[] {
    if (typeof(this._location) !== 'undefined') {
       return this._location.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field _location.
  * @returns the value  or undefined
  */
  public get_location(): Element[] | undefined {
      return this._location;
  }

  /**
  * Gets the current value of field _location if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public get_locationOrElse(defaultValue: Element[]): Element[] {
      if (this._location == undefined || this._location == null ) { return defaultValue; }
      return this._location;
  }

  public addExpression(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.expression) !== 'undefined') {
         delete this.expression;
      }
      return;
    }
    
    if (typeof(this.expression) === 'undefined') {
      this.expression =  [];
    }
    this.expression.push(newValue);
  }
  /**
  * Removes all elements from the array expression, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteExpressionAll(): string[] {
    if (typeof(this.expression) !== 'undefined') {
       const oldArray = this.expression;
       delete this.expression;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array expression, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteExpressionBySplice(start: number, deleteCount?: number): string[] {
    if (typeof(this.expression) !== 'undefined') {
       return this.expression.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field expression.
  * @returns the value  or undefined
  */
  public getExpression(): string[] | undefined {
      return this.expression;
  }

  /**
  * Gets the current value of field expression if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getExpressionOrElse(defaultValue: string[]): string[] {
      if (this.expression == undefined || this.expression == null ) { return defaultValue; }
      return this.expression;
  }

  public add_expression(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._expression) !== 'undefined') {
         delete this._expression;
      }
      return;
    }
    
    if (typeof(this._expression) === 'undefined') {
      this._expression =  [];
    }
    this._expression.push(newValue);
  }
  /**
  * Removes all elements from the array _expression, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public delete_expressionAll(): Element[] {
    if (typeof(this._expression) !== 'undefined') {
       const oldArray = this._expression;
       delete this._expression;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array _expression, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public delete_expressionBySplice(start: number, deleteCount?: number): Element[] {
    if (typeof(this._expression) !== 'undefined') {
       return this._expression.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field _expression.
  * @returns the value  or undefined
  */
  public get_expression(): Element[] | undefined {
      return this._expression;
  }

  /**
  * Gets the current value of field _expression if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public get_expressionOrElse(defaultValue: Element[]): Element[] {
      if (this._expression == undefined || this._expression == null ) { return defaultValue; }
      return this._expression;
  }


}


