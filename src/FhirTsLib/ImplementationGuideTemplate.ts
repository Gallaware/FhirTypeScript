import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_CODE, REGEX_SOURCE_000, REGEX_SCOPE } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './index';



/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically
 * through the use of FHIR resources. This resource is used to gather all the parts of an
 * implementation guide into a logical whole and to publish a computable definition of all the parts.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ImplementationGuide_Template
 */
export class ImplementationGuideTemplate {
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
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected source?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _source?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected scope?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _scope?: Element;


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
  public setSource(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.source) !== 'undefined') {
         delete this.source;
      }
      return;
    }
    
    if (REGEX_SOURCE_000.test(newValue)) {
      this.source = newValue
    } else {
      throw new Error("Invalid value pattern for source of " + newValue);
    }
  }
  
  public getSourcePattern(): string {
    return REGEX_SOURCE_000.source;
  }
  

  public getSource(): string | undefined {
      return this.source;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setScope(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.scope) !== 'undefined') {
         delete this.scope;
      }
      return;
    }
    
    if (REGEX_SCOPE.test(newValue)) {
      this.scope = newValue
    } else {
      throw new Error("Invalid value pattern for scope of " + newValue);
    }
  }
  
  public getScopePattern(): string {
    return REGEX_SCOPE.source;
  }
  

  public getScope(): string | undefined {
      return this.scope;
  }


}


