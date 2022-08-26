import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_NAME, REGEX_DESCRIPTION, REGEX_AUTHORIZATIONURL } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, CoverageEligibilityResponseBenefit, Element, Extension, Reference } from './FhirType';



/**
 * This resource provides eligibility and plan details from the processing of an
 * CoverageEligibilityRequest resource.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/CoverageEligibilityResponse_Item
 */
export class CoverageEligibilityResponseItem {
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
   productOrService?: CodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for the product or service.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected modifier?: CodeableConcept[];

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   provider?: Reference;

  /**
   * Value of "true" or "false"
   */
   excluded?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _excluded?: Element;

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
  protected description?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _description?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   network?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   unit?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   term?: CodeableConcept;

  /**
   * Benefits used to date.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CoverageEligibilityResponseBenefit)
  protected benefit?: CoverageEligibilityResponseBenefit[];

  /**
   * Value of "true" or "false"
   */
   authorizationRequired?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _authorizationRequired?: Element;

  /**
   * Codes or comments regarding information or actions associated with the preauthorization.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected authorizationSupporting?: CodeableConcept[];

  /**
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected authorizationUrl?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _authorizationUrl?: Element;


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

  public addModifier(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.modifier) !== 'undefined') {
         delete this.modifier;
      }
      return;
    }
    
    if (typeof(this.modifier) === 'undefined') {
      this.modifier =  [];
    }
    this.modifier.push(newValue);
  }

  public getModifier(): CodeableConcept[] | undefined {
      return this.modifier;
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

  public addBenefit(newValue: CoverageEligibilityResponseBenefit) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.benefit) !== 'undefined') {
         delete this.benefit;
      }
      return;
    }
    
    if (typeof(this.benefit) === 'undefined') {
      this.benefit =  [];
    }
    this.benefit.push(newValue);
  }

  public getBenefit(): CoverageEligibilityResponseBenefit[] | undefined {
      return this.benefit;
  }

  public addAuthorizationSupporting(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.authorizationSupporting) !== 'undefined') {
         delete this.authorizationSupporting;
      }
      return;
    }
    
    if (typeof(this.authorizationSupporting) === 'undefined') {
      this.authorizationSupporting =  [];
    }
    this.authorizationSupporting.push(newValue);
  }

  public getAuthorizationSupporting(): CodeableConcept[] | undefined {
      return this.authorizationSupporting;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setAuthorizationUrl(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.authorizationUrl) !== 'undefined') {
         delete this.authorizationUrl;
      }
      return;
    }
    
    if (REGEX_AUTHORIZATIONURL.test(newValue)) {
      this.authorizationUrl = newValue
    } else {
      throw new Error("Invalid value pattern for authorizationUrl of " + newValue);
    }
  }
  
  public getAuthorizationUrlPattern(): string {
    return REGEX_AUTHORIZATIONURL.source;
  }
  

  public getAuthorizationUrl(): string | undefined {
      return this.authorizationUrl;
  }


}


