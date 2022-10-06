import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_PARAMETERS, REGEX_AMOUNTSTRING } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Quantity, Reference } from './index';



/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/SubstanceSpecification_Property
 */
export class SubstanceSpecificationProperty {
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
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   category?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   code?: CodeableConcept;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected parameters?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _parameters?: Element;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   definingSubstanceReference?: Reference;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   definingSubstanceCodeableConcept?: CodeableConcept;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   amountQuantity?: Quantity;

  /**
   * Quantitative value for this property.
   * Field access restricted because there are specific valid values.
   */
  protected amountString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _amountString?: Element;


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
  public setParameters(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.parameters) !== 'undefined') {
         delete this.parameters;
      }
      return;
    }
    
    if (REGEX_PARAMETERS.test(newValue)) {
      this.parameters = newValue
    } else {
      throw new Error("Invalid value pattern for parameters of " + newValue);
    }
  }
  
  public getParametersPattern(): string {
    return REGEX_PARAMETERS.source;
  }
  

  public getParameters(): string | undefined {
      return this.parameters;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setAmountString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.amountString) !== 'undefined') {
         delete this.amountString;
      }
      return;
    }
    
    if (REGEX_AMOUNTSTRING.test(newValue)) {
      this.amountString = newValue
    } else {
      throw new Error("Invalid value pattern for amountString of " + newValue);
    }
  }
  
  public getAmountStringPattern(): string {
    return REGEX_AMOUNTSTRING.source;
  }
  

  public getAmountString(): string | undefined {
      return this.amountString;
  }


}


