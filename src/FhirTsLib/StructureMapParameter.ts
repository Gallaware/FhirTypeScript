import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_VALUEID, REGEX_VALUESTRING } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './FhirType';



/**
 * A Map of relationships between 2 structures that can be used to transform data.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/StructureMap_Parameter
 */
export class StructureMapParameter {
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
   * Parameter value - variable or literal.
   * Field access restricted because there are specific valid values.
   */
  protected valueId?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueId?: Element;

  /**
   * Parameter value - variable or literal.
   * Field access restricted because there are specific valid values.
   */
  protected valueString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueString?: Element;

  /**
   * Parameter value - variable or literal.
   */
   valueBoolean?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueBoolean?: Element;

  /**
   * Parameter value - variable or literal.
   */
   valueInteger?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueInteger?: Element;

  /**
   * Parameter value - variable or literal.
   */
   valueDecimal?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueDecimal?: Element;


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

  public getModifierExtension(): Extension[] | undefined {
      return this.modifierExtension;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueId) !== 'undefined') {
         delete this.valueId;
      }
      return;
    }
    
    if (REGEX_VALUEID.test(newValue)) {
      this.valueId = newValue
    } else {
      throw new Error("Invalid value pattern for valueId of " + newValue);
    }
  }
  
  public getValueIdPattern(): string {
    return REGEX_VALUEID.source;
  }
  

  public getValueId(): string | undefined {
      return this.valueId;
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


}

