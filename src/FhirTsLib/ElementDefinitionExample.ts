import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_LABEL, REGEX_VALUEBASE64BINARY, REGEX_VALUECANONICAL, REGEX_VALUECODE, REGEX_VALUEDATE, REGEX_VALUEDATETIME, REGEX_VALUEID, REGEX_VALUEINSTANT, REGEX_VALUEMARKDOWN, REGEX_VALUEOID, REGEX_VALUESTRING, REGEX_VALUETIME, REGEX_VALUEURI, REGEX_VALUEURL, REGEX_VALUEUUID } from '../FhirTsLibValidation/FhirRegex';
import { Address, Age, Annotation, Attachment, CodeableConcept, Coding, ContactDetail, ContactPoint, Contributor, Count, DataRequirement, Distance, Dosage, Duration, Element, Expression, Extension, HumanName, Identifier, Meta, Money, ParameterDefinition, Period, Quantity, Range, Ratio, Reference, RelatedArtifact, SampledData, Signature, Timing, TriggerDefinition, UsageContext } from './index';



/**
 * Captures constraints on each element within the resource, profile, or extension.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ElementDefinition_Example
 */
export class ElementDefinitionExample {
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
  protected label?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _label?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   * Field access restricted because there are specific valid values.
   */
  protected valueBase64Binary?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueBase64Binary?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
   valueBoolean?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueBoolean?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   * Field access restricted because there are specific valid values.
   */
  protected valueCanonical?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueCanonical?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   * Field access restricted because there are specific valid values.
   */
  protected valueCode?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueCode?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   * Field access restricted because there are specific valid values.
   */
  protected valueDate?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueDate?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   * Field access restricted because there are specific valid values.
   */
  protected valueDateTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueDateTime?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
   valueDecimal?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueDecimal?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   * Field access restricted because there are specific valid values.
   */
  protected valueId?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueId?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   * Field access restricted because there are specific valid values.
   */
  protected valueInstant?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueInstant?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
   valueInteger?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueInteger?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   * Field access restricted because there are specific valid values.
   */
  protected valueMarkdown?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueMarkdown?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   * Field access restricted because there are specific valid values.
   */
  protected valueOid?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueOid?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
   valuePositiveInt?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valuePositiveInt?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   * Field access restricted because there are specific valid values.
   */
  protected valueString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueString?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   * Field access restricted because there are specific valid values.
   */
  protected valueTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueTime?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   */
   valueUnsignedInt?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueUnsignedInt?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   * Field access restricted because there are specific valid values.
   */
  protected valueUri?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueUri?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   * Field access restricted because there are specific valid values.
   */
  protected valueUrl?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueUrl?: Element;

  /**
   * The actual value for the element, which must be one of the types allowed for this element.
   * Field access restricted because there are specific valid values.
   */
  protected valueUuid?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _valueUuid?: Element;

  /**
   * An address expressed using postal conventions (as opposed to GPS or other location definition
   * formats).  This data type may be used to convey addresses for use in delivering mail as well as
   * for visiting locations which might not be valid for mail delivery.  There are a variety of postal
   * address formats defined around the world.
   */
  @Type(() => Address)
   valueAddress?: Address;

  /**
   * A duration of time during which an organism (or a process) has existed.
   */
  @Type(() => Age)
   valueAge?: Age;

  /**
   * A  text note which also  contains information about who made the statement and when.
   */
  @Type(() => Annotation)
   valueAnnotation?: Annotation;

  /**
   * For referring to data content defined in other formats.
   */
  @Type(() => Attachment)
   valueAttachment?: Attachment;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   valueCodeableConcept?: CodeableConcept;

  /**
   * A reference to a code defined by a terminology system.
   */
  @Type(() => Coding)
   valueCoding?: Coding;

  /**
   * Details for all kinds of technology mediated contact points for a person or organization, including
   * telephone, email, etc.
   */
  @Type(() => ContactPoint)
   valueContactPoint?: ContactPoint;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Count)
   valueCount?: Count;

  /**
   * A length - a value with a unit that is a physical distance.
   */
  @Type(() => Distance)
   valueDistance?: Distance;

  /**
   * A length of time.
   */
  @Type(() => Duration)
   valueDuration?: Duration;

  /**
   * A human's name with the ability to identify parts and usage.
   */
  @Type(() => HumanName)
   valueHumanName?: HumanName;

  /**
   * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for
   * business identifiers.
   */
  @Type(() => Identifier)
   valueIdentifier?: Identifier;

  /**
   * An amount of economic utility in some recognized currency.
   */
  @Type(() => Money)
   valueMoney?: Money;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   valuePeriod?: Period;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   valueQuantity?: Quantity;

  /**
   * A set of ordered Quantities defined by a low and high limit.
   */
  @Type(() => Range)
   valueRange?: Range;

  /**
   * A relationship of two Quantity values - expressed as a numerator and a denominator.
   */
  @Type(() => Ratio)
   valueRatio?: Ratio;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   valueReference?: Reference;

  /**
   * A series of measurements taken by a device, with upper and lower limits. There may be more than one
   * dimension in the data.
   */
  @Type(() => SampledData)
   valueSampledData?: SampledData;

  /**
   * A signature along with supporting context. The signature may be a digital signature that is
   * cryptographic in nature, or some other signature acceptable to the domain. This other signature
   * may be as simple as a graphical image representing a hand-written signature, or a signature
   * ceremony Different signature approaches have different utilities.
   */
  @Type(() => Signature)
   valueSignature?: Signature;

  /**
   * Specifies an event that may occur multiple times. Timing schedules are used to record when things
   * are planned, expected or requested to occur. The most common usage is in dosage instructions for
   * medications. They are also used when planning care of various kinds, and may be used for reporting
   * the schedule to which past regular activities were carried out.
   */
  @Type(() => Timing)
   valueTiming?: Timing;

  /**
   * Specifies contact information for a person or organization.
   */
  @Type(() => ContactDetail)
   valueContactDetail?: ContactDetail;

  /**
   * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and
   * endorsers.
   */
  @Type(() => Contributor)
   valueContributor?: Contributor;

  /**
   * Describes a required data item for evaluation in terms of the type of data, and optional code or
   * date-based filters of the data.
   */
  @Type(() => DataRequirement)
   valueDataRequirement?: DataRequirement;

  /**
   * A expression that is evaluated in a specified context and returns a value. The context of use of
   * the expression must specify the context in which the expression is evaluated, and how the result
   * of the expression is used.
   */
  @Type(() => Expression)
   valueExpression?: Expression;

  /**
   * The parameters to the module. This collection specifies both the input and output parameters. Input
   * parameters are provided by the caller as part of the $evaluate operation. Output parameters are
   * included in the GuidanceResponse.
   */
  @Type(() => ParameterDefinition)
   valueParameterDefinition?: ParameterDefinition;

  /**
   * Related artifacts such as additional documentation, justification, or bibliographic references.
   */
  @Type(() => RelatedArtifact)
   valueRelatedArtifact?: RelatedArtifact;

  /**
   * A description of a triggering event. Triggering events can be named events, data events, or
   * periodic, as determined by the type element.
   */
  @Type(() => TriggerDefinition)
   valueTriggerDefinition?: TriggerDefinition;

  /**
   * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an
   * artifact. This metadata can either be specific to the applicable population (e.g., age category,
   * DRG) or the specific context of care (e.g., venue, care setting, provider of care).
   */
  @Type(() => UsageContext)
   valueUsageContext?: UsageContext;

  /**
   * Indicates how the medication is/was taken or should be taken by the patient.
   */
  @Type(() => Dosage)
   valueDosage?: Dosage;

  /**
   * The metadata about a resource. This is content in the resource that is maintained by the
   * infrastructure. Changes to the content might not always be associated with version changes to the
   * resource.
   */
  @Type(() => Meta)
   valueMeta?: Meta;


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

  /**
  * Gets the current value of field id if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getIdOrElse(defaultValue: string): string {
      if (this.id == undefined || this.id == null ) { return defaultValue; }
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

  /**
  * Gets the current value of field extension if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getExtensionOrElse(defaultValue: Extension[]): Extension[] {
      if (this.extension == undefined || this.extension == null ) { return defaultValue; }
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

  /**
  * Gets the current value of field modifierExtension if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getModifierExtensionOrElse(defaultValue: Extension[]): Extension[] {
      if (this.modifierExtension == undefined || this.modifierExtension == null ) { return defaultValue; }
      return this.modifierExtension;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setLabel(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.label) !== 'undefined') {
         delete this.label;
      }
      return;
    }
    
    if (REGEX_LABEL.test(newValue)) {
      this.label = newValue
    } else {
      throw new Error("Invalid value pattern for label of " + newValue);
    }
  }
  
  public getLabelPattern(): string {
    return REGEX_LABEL.source;
  }
  
  /**
  * Gets the current value of field label.
  * @returns the value  or undefined
  */
  public getLabel(): string | undefined {
      return this.label;
  }

  /**
  * Gets the current value of field label if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getLabelOrElse(defaultValue: string): string {
      if (this.label == undefined || this.label == null ) { return defaultValue; }
      return this.label;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueBase64Binary(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueBase64Binary) !== 'undefined') {
         delete this.valueBase64Binary;
      }
      return;
    }
    
    if (REGEX_VALUEBASE64BINARY.test(newValue)) {
      this.valueBase64Binary = newValue
    } else {
      throw new Error("Invalid value pattern for valueBase64Binary of " + newValue);
    }
  }
  
  public getValueBase64BinaryPattern(): string {
    return REGEX_VALUEBASE64BINARY.source;
  }
  
  /**
  * Gets the current value of field valueBase64Binary.
  * @returns the value  or undefined
  */
  public getValueBase64Binary(): string | undefined {
      return this.valueBase64Binary;
  }

  /**
  * Gets the current value of field valueBase64Binary if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueBase64BinaryOrElse(defaultValue: string): string {
      if (this.valueBase64Binary == undefined || this.valueBase64Binary == null ) { return defaultValue; }
      return this.valueBase64Binary;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueCanonical(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueCanonical) !== 'undefined') {
         delete this.valueCanonical;
      }
      return;
    }
    
    if (REGEX_VALUECANONICAL.test(newValue)) {
      this.valueCanonical = newValue
    } else {
      throw new Error("Invalid value pattern for valueCanonical of " + newValue);
    }
  }
  
  public getValueCanonicalPattern(): string {
    return REGEX_VALUECANONICAL.source;
  }
  
  /**
  * Gets the current value of field valueCanonical.
  * @returns the value  or undefined
  */
  public getValueCanonical(): string | undefined {
      return this.valueCanonical;
  }

  /**
  * Gets the current value of field valueCanonical if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueCanonicalOrElse(defaultValue: string): string {
      if (this.valueCanonical == undefined || this.valueCanonical == null ) { return defaultValue; }
      return this.valueCanonical;
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
  
  /**
  * Gets the current value of field valueCode.
  * @returns the value  or undefined
  */
  public getValueCode(): string | undefined {
      return this.valueCode;
  }

  /**
  * Gets the current value of field valueCode if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueCodeOrElse(defaultValue: string): string {
      if (this.valueCode == undefined || this.valueCode == null ) { return defaultValue; }
      return this.valueCode;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueDate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueDate) !== 'undefined') {
         delete this.valueDate;
      }
      return;
    }
    
    if (REGEX_VALUEDATE.test(newValue)) {
      this.valueDate = newValue
    } else {
      throw new Error("Invalid value pattern for valueDate of " + newValue);
    }
  }
  
  public getValueDatePattern(): string {
    return REGEX_VALUEDATE.source;
  }
  
  /**
  * Gets the current value of field valueDate.
  * @returns the value  or undefined
  */
  public getValueDate(): string | undefined {
      return this.valueDate;
  }

  /**
  * Gets the current value of field valueDate if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueDateOrElse(defaultValue: string): string {
      if (this.valueDate == undefined || this.valueDate == null ) { return defaultValue; }
      return this.valueDate;
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
  
  /**
  * Gets the current value of field valueDateTime.
  * @returns the value  or undefined
  */
  public getValueDateTime(): string | undefined {
      return this.valueDateTime;
  }

  /**
  * Gets the current value of field valueDateTime if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueDateTimeOrElse(defaultValue: string): string {
      if (this.valueDateTime == undefined || this.valueDateTime == null ) { return defaultValue; }
      return this.valueDateTime;
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
  
  /**
  * Gets the current value of field valueId.
  * @returns the value  or undefined
  */
  public getValueId(): string | undefined {
      return this.valueId;
  }

  /**
  * Gets the current value of field valueId if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueIdOrElse(defaultValue: string): string {
      if (this.valueId == undefined || this.valueId == null ) { return defaultValue; }
      return this.valueId;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueInstant(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueInstant) !== 'undefined') {
         delete this.valueInstant;
      }
      return;
    }
    
    if (REGEX_VALUEINSTANT.test(newValue)) {
      this.valueInstant = newValue
    } else {
      throw new Error("Invalid value pattern for valueInstant of " + newValue);
    }
  }
  
  public getValueInstantPattern(): string {
    return REGEX_VALUEINSTANT.source;
  }
  
  /**
  * Gets the current value of field valueInstant.
  * @returns the value  or undefined
  */
  public getValueInstant(): string | undefined {
      return this.valueInstant;
  }

  /**
  * Gets the current value of field valueInstant if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueInstantOrElse(defaultValue: string): string {
      if (this.valueInstant == undefined || this.valueInstant == null ) { return defaultValue; }
      return this.valueInstant;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueMarkdown(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueMarkdown) !== 'undefined') {
         delete this.valueMarkdown;
      }
      return;
    }
    
    if (REGEX_VALUEMARKDOWN.test(newValue)) {
      this.valueMarkdown = newValue
    } else {
      throw new Error("Invalid value pattern for valueMarkdown of " + newValue);
    }
  }
  
  public getValueMarkdownPattern(): string {
    return REGEX_VALUEMARKDOWN.source;
  }
  
  /**
  * Gets the current value of field valueMarkdown.
  * @returns the value  or undefined
  */
  public getValueMarkdown(): string | undefined {
      return this.valueMarkdown;
  }

  /**
  * Gets the current value of field valueMarkdown if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueMarkdownOrElse(defaultValue: string): string {
      if (this.valueMarkdown == undefined || this.valueMarkdown == null ) { return defaultValue; }
      return this.valueMarkdown;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueOid(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueOid) !== 'undefined') {
         delete this.valueOid;
      }
      return;
    }
    
    if (REGEX_VALUEOID.test(newValue)) {
      this.valueOid = newValue
    } else {
      throw new Error("Invalid value pattern for valueOid of " + newValue);
    }
  }
  
  public getValueOidPattern(): string {
    return REGEX_VALUEOID.source;
  }
  
  /**
  * Gets the current value of field valueOid.
  * @returns the value  or undefined
  */
  public getValueOid(): string | undefined {
      return this.valueOid;
  }

  /**
  * Gets the current value of field valueOid if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueOidOrElse(defaultValue: string): string {
      if (this.valueOid == undefined || this.valueOid == null ) { return defaultValue; }
      return this.valueOid;
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
  
  /**
  * Gets the current value of field valueString.
  * @returns the value  or undefined
  */
  public getValueString(): string | undefined {
      return this.valueString;
  }

  /**
  * Gets the current value of field valueString if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueStringOrElse(defaultValue: string): string {
      if (this.valueString == undefined || this.valueString == null ) { return defaultValue; }
      return this.valueString;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueTime) !== 'undefined') {
         delete this.valueTime;
      }
      return;
    }
    
    if (REGEX_VALUETIME.test(newValue)) {
      this.valueTime = newValue
    } else {
      throw new Error("Invalid value pattern for valueTime of " + newValue);
    }
  }
  
  public getValueTimePattern(): string {
    return REGEX_VALUETIME.source;
  }
  
  /**
  * Gets the current value of field valueTime.
  * @returns the value  or undefined
  */
  public getValueTime(): string | undefined {
      return this.valueTime;
  }

  /**
  * Gets the current value of field valueTime if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueTimeOrElse(defaultValue: string): string {
      if (this.valueTime == undefined || this.valueTime == null ) { return defaultValue; }
      return this.valueTime;
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
  
  /**
  * Gets the current value of field valueUri.
  * @returns the value  or undefined
  */
  public getValueUri(): string | undefined {
      return this.valueUri;
  }

  /**
  * Gets the current value of field valueUri if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueUriOrElse(defaultValue: string): string {
      if (this.valueUri == undefined || this.valueUri == null ) { return defaultValue; }
      return this.valueUri;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueUrl(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueUrl) !== 'undefined') {
         delete this.valueUrl;
      }
      return;
    }
    
    if (REGEX_VALUEURL.test(newValue)) {
      this.valueUrl = newValue
    } else {
      throw new Error("Invalid value pattern for valueUrl of " + newValue);
    }
  }
  
  public getValueUrlPattern(): string {
    return REGEX_VALUEURL.source;
  }
  
  /**
  * Gets the current value of field valueUrl.
  * @returns the value  or undefined
  */
  public getValueUrl(): string | undefined {
      return this.valueUrl;
  }

  /**
  * Gets the current value of field valueUrl if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueUrlOrElse(defaultValue: string): string {
      if (this.valueUrl == undefined || this.valueUrl == null ) { return defaultValue; }
      return this.valueUrl;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValueUuid(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.valueUuid) !== 'undefined') {
         delete this.valueUuid;
      }
      return;
    }
    
    if (REGEX_VALUEUUID.test(newValue)) {
      this.valueUuid = newValue
    } else {
      throw new Error("Invalid value pattern for valueUuid of " + newValue);
    }
  }
  
  public getValueUuidPattern(): string {
    return REGEX_VALUEUUID.source;
  }
  
  /**
  * Gets the current value of field valueUuid.
  * @returns the value  or undefined
  */
  public getValueUuid(): string | undefined {
      return this.valueUuid;
  }

  /**
  * Gets the current value of field valueUuid if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getValueUuidOrElse(defaultValue: string): string {
      if (this.valueUuid == undefined || this.valueUuid == null ) { return defaultValue; }
      return this.valueUuid;
  }


}


