import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_DEFINITIONCANONICAL, REGEX_STUDYEFFECTIVEDESCRIPTION, REGEX_STUDYEFFECTIVEDATETIME, REGEX_PARTICIPANTEFFECTIVEDESCRIPTION, REGEX_PARTICIPANTEFFECTIVEDATETIME } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, DataRequirement, Duration, Element, Expression, Extension, Period, Timing, UsageContext } from './index';
import { ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasure_list_ValidValues, ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasure_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence,
 * assertion, recommendation) is about.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ResearchElementDefinition_Characteristic
 */
export class ResearchElementDefinitionCharacteristic {
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
   definitionCodeableConcept?: CodeableConcept;

  /**
   * Define members of the research element using Codes (such as condition, medication, or observation),
   * Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as
   * Diabetes diagnosis onset in the last year).
   * Field access restricted because there are specific valid values.
   */
  protected definitionCanonical?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _definitionCanonical?: Element;

  /**
   * A expression that is evaluated in a specified context and returns a value. The context of use of
   * the expression must specify the context in which the expression is evaluated, and how the result
   * of the expression is used.
   */
  @Type(() => Expression)
   definitionExpression?: Expression;

  /**
   * Describes a required data item for evaluation in terms of the type of data, and optional code or
   * date-based filters of the data.
   */
  @Type(() => DataRequirement)
   definitionDataRequirement?: DataRequirement;

  /**
   * Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => UsageContext)
  protected usageContext?: UsageContext[];

  /**
   * Value of "true" or "false"
   */
   exclude?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _exclude?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   unitOfMeasure?: CodeableConcept;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected studyEffectiveDescription?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _studyEffectiveDescription?: Element;

  /**
   * Indicates what effective period the study covers.
   * Field access restricted because there are specific valid values.
   */
  protected studyEffectiveDateTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _studyEffectiveDateTime?: Element;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   studyEffectivePeriod?: Period;

  /**
   * A length of time.
   */
  @Type(() => Duration)
   studyEffectiveDuration?: Duration;

  /**
   * Specifies an event that may occur multiple times. Timing schedules are used to record when things
   * are planned, expected or requested to occur. The most common usage is in dosage instructions for
   * medications. They are also used when planning care of various kinds, and may be used for reporting
   * the schedule to which past regular activities were carried out.
   */
  @Type(() => Timing)
   studyEffectiveTiming?: Timing;

  /**
   * A length of time.
   */
  @Type(() => Duration)
   studyEffectiveTimeFromStart?: Duration;

  /**
   * Indicates how elements are aggregated within the study effective period.
   * Field access restricted because there are specific valid values.
   */
  protected studyEffectiveGroupMeasure?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _studyEffectiveGroupMeasure?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected participantEffectiveDescription?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _participantEffectiveDescription?: Element;

  /**
   * Indicates what effective period the study covers.
   * Field access restricted because there are specific valid values.
   */
  protected participantEffectiveDateTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _participantEffectiveDateTime?: Element;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   participantEffectivePeriod?: Period;

  /**
   * A length of time.
   */
  @Type(() => Duration)
   participantEffectiveDuration?: Duration;

  /**
   * Specifies an event that may occur multiple times. Timing schedules are used to record when things
   * are planned, expected or requested to occur. The most common usage is in dosage instructions for
   * medications. They are also used when planning care of various kinds, and may be used for reporting
   * the schedule to which past regular activities were carried out.
   */
  @Type(() => Timing)
   participantEffectiveTiming?: Timing;

  /**
   * A length of time.
   */
  @Type(() => Duration)
   participantEffectiveTimeFromStart?: Duration;

  /**
   * Indicates how elements are aggregated within the study effective period.
   * Field access restricted because there are specific valid values.
   */
  protected participantEffectiveGroupMeasure?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _participantEffectiveGroupMeasure?: Element;


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

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDefinitionCanonical(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.definitionCanonical) !== 'undefined') {
         delete this.definitionCanonical;
      }
      return;
    }
    
    if (REGEX_DEFINITIONCANONICAL.test(newValue)) {
      this.definitionCanonical = newValue
    } else {
      throw new Error("Invalid value pattern for definitionCanonical of " + newValue);
    }
  }
  
  public getDefinitionCanonicalPattern(): string {
    return REGEX_DEFINITIONCANONICAL.source;
  }
  
  /**
  * Gets the current value of field definitionCanonical.
  * @returns the value  or undefined
  */
  public getDefinitionCanonical(): string | undefined {
      return this.definitionCanonical;
  }

  public addUsageContext(newValue: UsageContext) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.usageContext) !== 'undefined') {
         delete this.usageContext;
      }
      return;
    }
    
    if (typeof(this.usageContext) === 'undefined') {
      this.usageContext =  [];
    }
    this.usageContext.push(newValue);
  }
  /**
  * Removes all elements from the array usageContext, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteUsageContextAll(): UsageContext[] {
    if (typeof(this.usageContext) !== 'undefined') {
       const oldArray = this.usageContext;
       delete this.usageContext;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array usageContext, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteUsageContextBySplice(start: number, deleteCount?: number): UsageContext[] {
    if (typeof(this.usageContext) !== 'undefined') {
       return this.usageContext.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field usageContext.
  * @returns the value  or undefined
  */
  public getUsageContext(): UsageContext[] | undefined {
      return this.usageContext;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setStudyEffectiveDescription(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.studyEffectiveDescription) !== 'undefined') {
         delete this.studyEffectiveDescription;
      }
      return;
    }
    
    if (REGEX_STUDYEFFECTIVEDESCRIPTION.test(newValue)) {
      this.studyEffectiveDescription = newValue
    } else {
      throw new Error("Invalid value pattern for studyEffectiveDescription of " + newValue);
    }
  }
  
  public getStudyEffectiveDescriptionPattern(): string {
    return REGEX_STUDYEFFECTIVEDESCRIPTION.source;
  }
  
  /**
  * Gets the current value of field studyEffectiveDescription.
  * @returns the value  or undefined
  */
  public getStudyEffectiveDescription(): string | undefined {
      return this.studyEffectiveDescription;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setStudyEffectiveDateTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.studyEffectiveDateTime) !== 'undefined') {
         delete this.studyEffectiveDateTime;
      }
      return;
    }
    
    if (REGEX_STUDYEFFECTIVEDATETIME.test(newValue)) {
      this.studyEffectiveDateTime = newValue
    } else {
      throw new Error("Invalid value pattern for studyEffectiveDateTime of " + newValue);
    }
  }
  
  public getStudyEffectiveDateTimePattern(): string {
    return REGEX_STUDYEFFECTIVEDATETIME.source;
  }
  
  /**
  * Gets the current value of field studyEffectiveDateTime.
  * @returns the value  or undefined
  */
  public getStudyEffectiveDateTime(): string | undefined {
      return this.studyEffectiveDateTime;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setStudyEffectiveGroupMeasure(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.studyEffectiveGroupMeasure) !== 'undefined') {
         delete this.studyEffectiveGroupMeasure;
      }
      return;
    }
    
    const idx = getValidValueIdx(ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasure_list_ValidValues, newValue);
    if (idx >= 0) {
      this.studyEffectiveGroupMeasure = ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasure_list_ValidValues[idx];
    } else {
      throw new Error("Unknown studyEffectiveGroupMeasure of " + newValue);
    }
  }
  
  public getResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasureValidValues(): string[] {
    return ResearchElementDefinitionCharacteristicStudyEffectiveGroupMeasure_list_ValidValues;
  }
  
  /**
  * Gets the current value of field studyEffectiveGroupMeasure.
  * @returns the value  or undefined
  */
  public getStudyEffectiveGroupMeasure(): string | undefined {
      return this.studyEffectiveGroupMeasure;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setParticipantEffectiveDescription(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.participantEffectiveDescription) !== 'undefined') {
         delete this.participantEffectiveDescription;
      }
      return;
    }
    
    if (REGEX_PARTICIPANTEFFECTIVEDESCRIPTION.test(newValue)) {
      this.participantEffectiveDescription = newValue
    } else {
      throw new Error("Invalid value pattern for participantEffectiveDescription of " + newValue);
    }
  }
  
  public getParticipantEffectiveDescriptionPattern(): string {
    return REGEX_PARTICIPANTEFFECTIVEDESCRIPTION.source;
  }
  
  /**
  * Gets the current value of field participantEffectiveDescription.
  * @returns the value  or undefined
  */
  public getParticipantEffectiveDescription(): string | undefined {
      return this.participantEffectiveDescription;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setParticipantEffectiveDateTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.participantEffectiveDateTime) !== 'undefined') {
         delete this.participantEffectiveDateTime;
      }
      return;
    }
    
    if (REGEX_PARTICIPANTEFFECTIVEDATETIME.test(newValue)) {
      this.participantEffectiveDateTime = newValue
    } else {
      throw new Error("Invalid value pattern for participantEffectiveDateTime of " + newValue);
    }
  }
  
  public getParticipantEffectiveDateTimePattern(): string {
    return REGEX_PARTICIPANTEFFECTIVEDATETIME.source;
  }
  
  /**
  * Gets the current value of field participantEffectiveDateTime.
  * @returns the value  or undefined
  */
  public getParticipantEffectiveDateTime(): string | undefined {
      return this.participantEffectiveDateTime;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setParticipantEffectiveGroupMeasure(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.participantEffectiveGroupMeasure) !== 'undefined') {
         delete this.participantEffectiveGroupMeasure;
      }
      return;
    }
    
    const idx = getValidValueIdx(ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasure_list_ValidValues, newValue);
    if (idx >= 0) {
      this.participantEffectiveGroupMeasure = ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasure_list_ValidValues[idx];
    } else {
      throw new Error("Unknown participantEffectiveGroupMeasure of " + newValue);
    }
  }
  
  public getResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasureValidValues(): string[] {
    return ResearchElementDefinitionCharacteristicParticipantEffectiveGroupMeasure_list_ValidValues;
  }
  
  /**
  * Gets the current value of field participantEffectiveGroupMeasure.
  * @returns the value  or undefined
  */
  public getParticipantEffectiveGroupMeasure(): string | undefined {
      return this.participantEffectiveGroupMeasure;
  }


}


