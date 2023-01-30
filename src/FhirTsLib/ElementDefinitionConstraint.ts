import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_KEY, REGEX_REQUIREMENTS, REGEX_HUMAN, REGEX_EXPRESSION, REGEX_XPATH, REGEX_SOURCE } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './index';
import { ElementDefinitionConstraintSeverity_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * Captures constraints on each element within the resource, profile, or extension.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ElementDefinition_Constraint
 */
export class ElementDefinitionConstraint {
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
  protected key?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _key?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected requirements?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _requirements?: Element;

  /**
   * Identifies the impact constraint violation has on the conformance of the instance.
   * Field access restricted because there are specific valid values.
   */
  protected severity?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _severity?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected human?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _human?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected expression?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _expression?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected xpath?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _xpath?: Element;

  /**
   * A URI that is a reference to a canonical URL on a FHIR resource
   * Field access restricted because there are specific valid values.
   */
  protected source?: string;


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
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setKey(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.key) !== 'undefined') {
         delete this.key;
      }
      return;
    }
    
    if (REGEX_KEY.test(newValue)) {
      this.key = newValue
    } else {
      throw new Error("Invalid value pattern for key of " + newValue);
    }
  }
  
  public getKeyPattern(): string {
    return REGEX_KEY.source;
  }
  
  /**
  * Gets the current value of field key.
  * @returns the value  or undefined
  */
  public getKey(): string | undefined {
      return this.key;
  }

  /**
  * Gets the current value of field key if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getKeyOrElse(defaultValue: string): string {
      if (this.key == undefined || this.key == null ) { return defaultValue; }
      return this.key;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setRequirements(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.requirements) !== 'undefined') {
         delete this.requirements;
      }
      return;
    }
    
    if (REGEX_REQUIREMENTS.test(newValue)) {
      this.requirements = newValue
    } else {
      throw new Error("Invalid value pattern for requirements of " + newValue);
    }
  }
  
  public getRequirementsPattern(): string {
    return REGEX_REQUIREMENTS.source;
  }
  
  /**
  * Gets the current value of field requirements.
  * @returns the value  or undefined
  */
  public getRequirements(): string | undefined {
      return this.requirements;
  }

  /**
  * Gets the current value of field requirements if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getRequirementsOrElse(defaultValue: string): string {
      if (this.requirements == undefined || this.requirements == null ) { return defaultValue; }
      return this.requirements;
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
    
    const idx = getValidValueIdx(ElementDefinitionConstraintSeverity_list_ValidValues, newValue);
    if (idx >= 0) {
      this.severity = ElementDefinitionConstraintSeverity_list_ValidValues[idx];
    } else {
      throw new Error("Unknown severity of " + newValue);
    }
  }
  
  public getElementDefinitionConstraintSeverityValidValues(): string[] {
    return ElementDefinitionConstraintSeverity_list_ValidValues;
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
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setHuman(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.human) !== 'undefined') {
         delete this.human;
      }
      return;
    }
    
    if (REGEX_HUMAN.test(newValue)) {
      this.human = newValue
    } else {
      throw new Error("Invalid value pattern for human of " + newValue);
    }
  }
  
  public getHumanPattern(): string {
    return REGEX_HUMAN.source;
  }
  
  /**
  * Gets the current value of field human.
  * @returns the value  or undefined
  */
  public getHuman(): string | undefined {
      return this.human;
  }

  /**
  * Gets the current value of field human if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getHumanOrElse(defaultValue: string): string {
      if (this.human == undefined || this.human == null ) { return defaultValue; }
      return this.human;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setExpression(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.expression) !== 'undefined') {
         delete this.expression;
      }
      return;
    }
    
    if (REGEX_EXPRESSION.test(newValue)) {
      this.expression = newValue
    } else {
      throw new Error("Invalid value pattern for expression of " + newValue);
    }
  }
  
  public getExpressionPattern(): string {
    return REGEX_EXPRESSION.source;
  }
  
  /**
  * Gets the current value of field expression.
  * @returns the value  or undefined
  */
  public getExpression(): string | undefined {
      return this.expression;
  }

  /**
  * Gets the current value of field expression if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getExpressionOrElse(defaultValue: string): string {
      if (this.expression == undefined || this.expression == null ) { return defaultValue; }
      return this.expression;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setXpath(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.xpath) !== 'undefined') {
         delete this.xpath;
      }
      return;
    }
    
    if (REGEX_XPATH.test(newValue)) {
      this.xpath = newValue
    } else {
      throw new Error("Invalid value pattern for xpath of " + newValue);
    }
  }
  
  public getXpathPattern(): string {
    return REGEX_XPATH.source;
  }
  
  /**
  * Gets the current value of field xpath.
  * @returns the value  or undefined
  */
  public getXpath(): string | undefined {
      return this.xpath;
  }

  /**
  * Gets the current value of field xpath if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getXpathOrElse(defaultValue: string): string {
      if (this.xpath == undefined || this.xpath == null ) { return defaultValue; }
      return this.xpath;
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
  
  /**
  * Gets the current value of field source.
  * @returns the value  or undefined
  */
  public getSource(): string | undefined {
      return this.source;
  }

  /**
  * Gets the current value of field source if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getSourceOrElse(defaultValue: string): string {
      if (this.source == undefined || this.source == null ) { return defaultValue; }
      return this.source;
  }


}


