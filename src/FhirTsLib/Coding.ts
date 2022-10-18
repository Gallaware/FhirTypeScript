import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_SYSTEM, REGEX_VERSION, REGEX_CODE, REGEX_DISPLAY } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './index';



/**
 * A reference to a code defined by a terminology system.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Coding
 */
export class Coding {
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
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected system?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _system?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected version?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _version?: Element;

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
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected display?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _display?: Element;

  /**
   * Value of "true" or "false"
   */
   userSelected?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _userSelected?: Element;


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

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setSystem(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.system) !== 'undefined') {
         delete this.system;
      }
      return;
    }
    
    if (REGEX_SYSTEM.test(newValue)) {
      this.system = newValue
    } else {
      throw new Error("Invalid value pattern for system of " + newValue);
    }
  }
  
  public getSystemPattern(): string {
    return REGEX_SYSTEM.source;
  }
  

  public getSystem(): string | undefined {
      return this.system;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setVersion(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.version) !== 'undefined') {
         delete this.version;
      }
      return;
    }
    
    if (REGEX_VERSION.test(newValue)) {
      this.version = newValue
    } else {
      throw new Error("Invalid value pattern for version of " + newValue);
    }
  }
  
  public getVersionPattern(): string {
    return REGEX_VERSION.source;
  }
  

  public getVersion(): string | undefined {
      return this.version;
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
  

  public getCode(): string | undefined {
      return this.code;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDisplay(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.display) !== 'undefined') {
         delete this.display;
      }
      return;
    }
    
    if (REGEX_DISPLAY.test(newValue)) {
      this.display = newValue
    } else {
      throw new Error("Invalid value pattern for display of " + newValue);
    }
  }
  
  public getDisplayPattern(): string {
    return REGEX_DISPLAY.source;
  }
  

  public getDisplay(): string | undefined {
      return this.display;
  }


}


