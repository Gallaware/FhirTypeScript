import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_NAME, REGEX_VALUESTRING, REGEX_VALUEURI, REGEX_VALUECODE, REGEX_VALUEDATETIME } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './index';



/**
 * A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended
 * for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use
 * in [coded elements](terminologies.html).
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ValueSet_Parameter
 */
export class ValueSetParameter {
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
   * The value of the parameter.
   * Field access restricted because there are specific valid values.
   */
  protected valueString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueString?: Element;

  /**
   * The value of the parameter.
   */
   valueBoolean?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueBoolean?: Element;

  /**
   * The value of the parameter.
   */
   valueInteger?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueInteger?: Element;

  /**
   * The value of the parameter.
   */
   valueDecimal?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueDecimal?: Element;

  /**
   * The value of the parameter.
   * Field access restricted because there are specific valid values.
   */
  protected valueUri?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueUri?: Element;

  /**
   * The value of the parameter.
   * Field access restricted because there are specific valid values.
   */
  protected valueCode?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueCode?: Element;

  /**
   * The value of the parameter.
   * Field access restricted because there are specific valid values.
   */
  protected valueDateTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueDateTime?: Element;


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
  public setValueString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueString) !== 'undefined') {
         delete this.valueString;
      }
      return;
    }
    
    if (REGEX_VALUESTRING.test(newValue)) {
      this.valueString = newValue
    } else {
      throw new Error("Invalid value pattern for valueString of " + newValue);
    }
  }
  
  public getValueStringPattern(): string {
    return REGEX_VALUESTRING.source;
  }
  

  public getValueString(): string | undefined {
      return this.valueString;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueUri(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueUri) !== 'undefined') {
         delete this.valueUri;
      }
      return;
    }
    
    if (REGEX_VALUEURI.test(newValue)) {
      this.valueUri = newValue
    } else {
      throw new Error("Invalid value pattern for valueUri of " + newValue);
    }
  }
  
  public getValueUriPattern(): string {
    return REGEX_VALUEURI.source;
  }
  

  public getValueUri(): string | undefined {
      return this.valueUri;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueCode(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueCode) !== 'undefined') {
         delete this.valueCode;
      }
      return;
    }
    
    if (REGEX_VALUECODE.test(newValue)) {
      this.valueCode = newValue
    } else {
      throw new Error("Invalid value pattern for valueCode of " + newValue);
    }
  }
  
  public getValueCodePattern(): string {
    return REGEX_VALUECODE.source;
  }
  

  public getValueCode(): string | undefined {
      return this.valueCode;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueDateTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueDateTime) !== 'undefined') {
         delete this.valueDateTime;
      }
      return;
    }
    
    if (REGEX_VALUEDATETIME.test(newValue)) {
      this.valueDateTime = newValue
    } else {
      throw new Error("Invalid value pattern for valueDateTime of " + newValue);
    }
  }
  
  public getValueDateTimePattern(): string {
    return REGEX_VALUEDATETIME.source;
  }
  

  public getValueDateTime(): string | undefined {
      return this.valueDateTime;
  }


}


