import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_CONDITION } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Range } from './index';
import { ObservationDefinitionQualifiedIntervalCategory_list_ValidValues, ObservationDefinitionQualifiedIntervalGender_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed
 * by an orderable health care service.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ObservationDefinition_QualifiedInterval
 */
export class ObservationDefinitionQualifiedInterval {
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
   * The category of interval of values for continuous or ordinal observations conforming to this
   * ObservationDefinition.
   * Field access restricted because there are specific valid values.
   */
  protected category?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _category?: Element;

  /**
   * A set of ordered Quantities defined by a low and high limit.
   */
  @Type(() => Range)
   range?: Range;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   context?: CodeableConcept;

  /**
   * Codes to indicate the target population this reference range applies to.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected appliesTo?: CodeableConcept[];

  /**
   * Sex of the population the range applies to.
   * Field access restricted because there are specific valid values.
   */
  protected gender?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _gender?: Element;

  /**
   * A set of ordered Quantities defined by a low and high limit.
   */
  @Type(() => Range)
   age?: Range;

  /**
   * A set of ordered Quantities defined by a low and high limit.
   */
  @Type(() => Range)
   gestationalAge?: Range;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected condition?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _condition?: Element;


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
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setCategory(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.category) !== 'undefined') {
         delete this.category;
      }
      return;
    }
    
    const idx = getValidValueIdx(ObservationDefinitionQualifiedIntervalCategory_list_ValidValues, newValue);
    if (idx >= 0) {
      this.category = ObservationDefinitionQualifiedIntervalCategory_list_ValidValues[idx];
    } else {
      throw new Error("Unknown category of " + newValue);
    }
  }
  
  public getObservationDefinitionQualifiedIntervalCategoryValidValues(): string[] {
    return ObservationDefinitionQualifiedIntervalCategory_list_ValidValues;
  }
  

  public getCategory(): string | undefined {
      return this.category;
  }

  public addAppliesTo(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.appliesTo) !== 'undefined') {
         delete this.appliesTo;
      }
      return;
    }
    
    if (typeof(this.appliesTo) === 'undefined') {
      this.appliesTo =  [];
    }
    this.appliesTo.push(newValue);
  }

  public getAppliesTo(): CodeableConcept[] | undefined {
      return this.appliesTo;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setGender(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.gender) !== 'undefined') {
         delete this.gender;
      }
      return;
    }
    
    const idx = getValidValueIdx(ObservationDefinitionQualifiedIntervalGender_list_ValidValues, newValue);
    if (idx >= 0) {
      this.gender = ObservationDefinitionQualifiedIntervalGender_list_ValidValues[idx];
    } else {
      throw new Error("Unknown gender of " + newValue);
    }
  }
  
  public getObservationDefinitionQualifiedIntervalGenderValidValues(): string[] {
    return ObservationDefinitionQualifiedIntervalGender_list_ValidValues;
  }
  

  public getGender(): string | undefined {
      return this.gender;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setCondition(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.condition) !== 'undefined') {
         delete this.condition;
      }
      return;
    }
    
    if (REGEX_CONDITION.test(newValue)) {
      this.condition = newValue
    } else {
      throw new Error("Invalid value pattern for condition of " + newValue);
    }
  }
  
  public getConditionPattern(): string {
    return REGEX_CONDITION.source;
  }
  

  public getCondition(): string | undefined {
      return this.condition;
  }


}


