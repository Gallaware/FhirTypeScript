import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_TEXTFILTER } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension, TerminologyCapabilitiesParameter } from './index';



/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR
 * Terminology Server that may be used as a statement of actual server functionality or a statement
 * of required or desired server implementation.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/TerminologyCapabilities_Expansion
 */
export class TerminologyCapabilitiesExpansion {
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
   * Value of "true" or "false"
   */
   hierarchical?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _hierarchical?: Element;

  /**
   * Value of "true" or "false"
   */
   paging?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _paging?: Element;

  /**
   * Value of "true" or "false"
   */
   incomplete?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _incomplete?: Element;

  /**
   * Supported expansion parameter.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => TerminologyCapabilitiesParameter)
  protected parameter?: TerminologyCapabilitiesParameter[];

  /**
   * A string that may contain Github Flavored Markdown syntax for optional processing by a mark down
   * presentation engine
   * Field access restricted because there are specific valid values.
   */
  protected textFilter?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _textFilter?: Element;


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

  public addParameter(newValue: TerminologyCapabilitiesParameter) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.parameter) !== 'undefined') {
         delete this.parameter;
      }
      return;
    }
    
    if (typeof(this.parameter) === 'undefined') {
      this.parameter =  [];
    }
    this.parameter.push(newValue);
  }

  public getParameter(): TerminologyCapabilitiesParameter[] | undefined {
      return this.parameter;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setTextFilter(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.textFilter) !== 'undefined') {
         delete this.textFilter;
      }
      return;
    }
    
    if (REGEX_TEXTFILTER.test(newValue)) {
      this.textFilter = newValue
    } else {
      throw new Error("Invalid value pattern for textFilter of " + newValue);
    }
  }
  
  public getTextFilterPattern(): string {
    return REGEX_TEXTFILTER.source;
  }
  

  public getTextFilter(): string | undefined {
      return this.textFilter;
  }


}


