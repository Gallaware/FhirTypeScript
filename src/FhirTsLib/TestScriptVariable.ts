import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_NAME, REGEX_DEFAULTVALUE, REGEX_DESCRIPTION, REGEX_EXPRESSION, REGEX_HEADERFIELD, REGEX_HINT, REGEX_PATH, REGEX_SOURCEID_000 } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './index';



/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance
 * against the FHIR specification.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/TestScript_Variable
 */
export class TestScriptVariable {
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
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected defaultValue?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _defaultValue?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected description?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _description?: Element;

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
  protected headerField?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _headerField?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected hint?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _hint?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected path?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _path?: Element;

  /**
   * Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This
   * might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these
   * constraints.)  Ids are case-insensitive.
   * Field access restricted because there are specific valid values.
   */
  protected sourceId?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _sourceId?: Element;


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
  

  public getName(): string | undefined {
      return this.name;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDefaultValue(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.defaultValue) !== 'undefined') {
         delete this.defaultValue;
      }
      return;
    }
    
    if (REGEX_DEFAULTVALUE.test(newValue)) {
      this.defaultValue = newValue
    } else {
      throw new Error("Invalid value pattern for defaultValue of " + newValue);
    }
  }
  
  public getDefaultValuePattern(): string {
    return REGEX_DEFAULTVALUE.source;
  }
  

  public getDefaultValue(): string | undefined {
      return this.defaultValue;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDescription(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.description) !== 'undefined') {
         delete this.description;
      }
      return;
    }
    
    if (REGEX_DESCRIPTION.test(newValue)) {
      this.description = newValue
    } else {
      throw new Error("Invalid value pattern for description of " + newValue);
    }
  }
  
  public getDescriptionPattern(): string {
    return REGEX_DESCRIPTION.source;
  }
  

  public getDescription(): string | undefined {
      return this.description;
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
  

  public getExpression(): string | undefined {
      return this.expression;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setHeaderField(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.headerField) !== 'undefined') {
         delete this.headerField;
      }
      return;
    }
    
    if (REGEX_HEADERFIELD.test(newValue)) {
      this.headerField = newValue
    } else {
      throw new Error("Invalid value pattern for headerField of " + newValue);
    }
  }
  
  public getHeaderFieldPattern(): string {
    return REGEX_HEADERFIELD.source;
  }
  

  public getHeaderField(): string | undefined {
      return this.headerField;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setHint(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.hint) !== 'undefined') {
         delete this.hint;
      }
      return;
    }
    
    if (REGEX_HINT.test(newValue)) {
      this.hint = newValue
    } else {
      throw new Error("Invalid value pattern for hint of " + newValue);
    }
  }
  
  public getHintPattern(): string {
    return REGEX_HINT.source;
  }
  

  public getHint(): string | undefined {
      return this.hint;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setPath(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.path) !== 'undefined') {
         delete this.path;
      }
      return;
    }
    
    if (REGEX_PATH.test(newValue)) {
      this.path = newValue
    } else {
      throw new Error("Invalid value pattern for path of " + newValue);
    }
  }
  
  public getPathPattern(): string {
    return REGEX_PATH.source;
  }
  

  public getPath(): string | undefined {
      return this.path;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setSourceId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.sourceId) !== 'undefined') {
         delete this.sourceId;
      }
      return;
    }
    
    if (REGEX_SOURCEID_000.test(newValue)) {
      this.sourceId = newValue
    } else {
      throw new Error("Invalid value pattern for sourceId of " + newValue);
    }
  }
  
  public getSourceIdPattern(): string {
    return REGEX_SOURCEID_000.source;
  }
  

  public getSourceId(): string | undefined {
      return this.sourceId;
  }


}


