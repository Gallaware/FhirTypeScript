import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_PREFIX, REGEX_TITLE, REGEX_DESCRIPTION, REGEX_TEXTEQUIVALENT, REGEX_PRIORITY, REGEX_TIMINGDATETIME, REGEX_DEFINITIONCANONICAL, REGEX_DEFINITIONURI, REGEX_TRANSFORM } from '../FhirTsLibValidation/FhirRegex';
import { Age, CodeableConcept, DataRequirement, Duration, Element, Extension, Period, PlanDefinitionCondition, PlanDefinitionDynamicValue, PlanDefinitionParticipant, PlanDefinitionRelatedAction, Range, Reference, RelatedArtifact, Timing, TriggerDefinition } from './index';
import { PlanDefinitionActionGroupingBehavior_list_ValidValues, PlanDefinitionActionSelectionBehavior_list_ValidValues, PlanDefinitionActionRequiredBehavior_list_ValidValues, PlanDefinitionActionPrecheckBehavior_list_ValidValues, PlanDefinitionActionCardinalityBehavior_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * This resource allows for the definition of various types of plans as a sharable, consumable, and
 * executable artifact. The resource is general enough to support the description of a broad range of
 * clinical artifacts such as clinical decision support rules, order sets and protocols.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/PlanDefinition_Action
 */
export class PlanDefinitionAction {
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
  protected prefix?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _prefix?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected title?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _title?: Element;

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
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected textEquivalent?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _textEquivalent?: Element;

  /**
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected priority?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _priority?: Element;

  /**
   * A code that provides meaning for the action or action group. For example, a section may have a
   * LOINC code for the section of a documentation template.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected code?: CodeableConcept[];

  /**
   * A description of why this action is necessary or appropriate.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected reason?: CodeableConcept[];

  /**
   * Didactic or other informational resources associated with the action that can be provided to the
   * CDS recipient. Information resources can include inline text commentary and links to web resources.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => RelatedArtifact)
  protected documentation?: RelatedArtifact[];

  /**
   * Identifies goals that this action supports. The reference must be to a goal element defined within
   * this plan definition.
   * Field access restricted because there are specific valid values.
   */
  protected goalId?: string[];

  /**
   * Extensions for goalId
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _goalId?: Element[];

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   subjectCodeableConcept?: CodeableConcept;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   subjectReference?: Reference;

  /**
   * A description of when the action should be triggered.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => TriggerDefinition)
  protected trigger?: TriggerDefinition[];

  /**
   * An expression that describes applicability criteria or start/stop conditions for the action.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => PlanDefinitionCondition)
  protected condition?: PlanDefinitionCondition[];

  /**
   * Defines input data requirements for the action.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => DataRequirement)
  protected input?: DataRequirement[];

  /**
   * Defines the outputs of the action, if any.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => DataRequirement)
  protected output?: DataRequirement[];

  /**
   * A relationship to another action such as "before" or "30-60 minutes after start of".
   * Field access restricted because there are specific valid values.
   */
  @Type(() => PlanDefinitionRelatedAction)
  protected relatedAction?: PlanDefinitionRelatedAction[];

  /**
   * An optional value describing when the action should be performed.
   * Field access restricted because there are specific valid values.
   */
  protected timingDateTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _timingDateTime?: Element;

  /**
   * A duration of time during which an organism (or a process) has existed.
   */
  @Type(() => Age)
   timingAge?: Age;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   timingPeriod?: Period;

  /**
   * A length of time.
   */
  @Type(() => Duration)
   timingDuration?: Duration;

  /**
   * A set of ordered Quantities defined by a low and high limit.
   */
  @Type(() => Range)
   timingRange?: Range;

  /**
   * Specifies an event that may occur multiple times. Timing schedules are used to record when things
   * are planned, expected or requested to occur. The most common usage is in dosage instructions for
   * medications. They are also used when planning care of various kinds, and may be used for reporting
   * the schedule to which past regular activities were carried out.
   */
  @Type(() => Timing)
   timingTiming?: Timing;

  /**
   * Indicates who should participate in performing the action described.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => PlanDefinitionParticipant)
  protected participant?: PlanDefinitionParticipant[];

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   type?: CodeableConcept;

  /**
   * Defines the grouping behavior for the action and its children.
   * Field access restricted because there are specific valid values.
   */
  protected groupingBehavior?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _groupingBehavior?: Element;

  /**
   * Defines the selection behavior for the action and its children.
   * Field access restricted because there are specific valid values.
   */
  protected selectionBehavior?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _selectionBehavior?: Element;

  /**
   * Defines the required behavior for the action.
   * Field access restricted because there are specific valid values.
   */
  protected requiredBehavior?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _requiredBehavior?: Element;

  /**
   * Defines whether the action should usually be preselected.
   * Field access restricted because there are specific valid values.
   */
  protected precheckBehavior?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _precheckBehavior?: Element;

  /**
   * Defines whether the action can be selected multiple times.
   * Field access restricted because there are specific valid values.
   */
  protected cardinalityBehavior?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _cardinalityBehavior?: Element;

  /**
   * A reference to an ActivityDefinition that describes the action to be taken in detail, or a
   * PlanDefinition that describes a series of actions to be taken.
   * Field access restricted because there are specific valid values.
   */
  protected definitionCanonical?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _definitionCanonical?: Element;

  /**
   * A reference to an ActivityDefinition that describes the action to be taken in detail, or a
   * PlanDefinition that describes a series of actions to be taken.
   * Field access restricted because there are specific valid values.
   */
  protected definitionUri?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _definitionUri?: Element;

  /**
   * A URI that is a reference to a canonical URL on a FHIR resource
   * Field access restricted because there are specific valid values.
   */
  protected transform?: string;

  /**
   * Customizations that should be applied to the statically defined resource. For example, if the
   * dosage of a medication must be computed based on the patient's weight, a customization would be
   * used to specify an expression that calculated the weight, and the path on the resource that would
   * contain the result.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => PlanDefinitionDynamicValue)
  protected dynamicValue?: PlanDefinitionDynamicValue[];

  /**
   * Sub actions that are contained within the action. The behavior of this action determines the
   * functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that
   * of the sub-actions, at most one may be chosen as part of realizing the action definition.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => PlanDefinitionAction)
  protected action?: PlanDefinitionAction[];


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
  public setPrefix(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.prefix) !== 'undefined') {
         delete this.prefix;
      }
      return;
    }
    
    if (REGEX_PREFIX.test(newValue)) {
      this.prefix = newValue
    } else {
      throw new Error("Invalid value pattern for prefix of " + newValue);
    }
  }
  
  public getPrefixPattern(): string {
    return REGEX_PREFIX.source;
  }
  

  public getPrefix(): string | undefined {
      return this.prefix;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setTitle(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.title) !== 'undefined') {
         delete this.title;
      }
      return;
    }
    
    if (REGEX_TITLE.test(newValue)) {
      this.title = newValue
    } else {
      throw new Error("Invalid value pattern for title of " + newValue);
    }
  }
  
  public getTitlePattern(): string {
    return REGEX_TITLE.source;
  }
  

  public getTitle(): string | undefined {
      return this.title;
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

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setTextEquivalent(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.textEquivalent) !== 'undefined') {
         delete this.textEquivalent;
      }
      return;
    }
    
    if (REGEX_TEXTEQUIVALENT.test(newValue)) {
      this.textEquivalent = newValue
    } else {
      throw new Error("Invalid value pattern for textEquivalent of " + newValue);
    }
  }
  
  public getTextEquivalentPattern(): string {
    return REGEX_TEXTEQUIVALENT.source;
  }
  

  public getTextEquivalent(): string | undefined {
      return this.textEquivalent;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setPriority(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.priority) !== 'undefined') {
         delete this.priority;
      }
      return;
    }
    
    if (REGEX_PRIORITY.test(newValue)) {
      this.priority = newValue
    } else {
      throw new Error("Invalid value pattern for priority of " + newValue);
    }
  }
  
  public getPriorityPattern(): string {
    return REGEX_PRIORITY.source;
  }
  

  public getPriority(): string | undefined {
      return this.priority;
  }

  public addCode(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.code) !== 'undefined') {
         delete this.code;
      }
      return;
    }
    
    if (typeof(this.code) === 'undefined') {
      this.code =  [];
    }
    this.code.push(newValue);
  }

  public getCode(): CodeableConcept[] | undefined {
      return this.code;
  }

  public addReason(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.reason) !== 'undefined') {
         delete this.reason;
      }
      return;
    }
    
    if (typeof(this.reason) === 'undefined') {
      this.reason =  [];
    }
    this.reason.push(newValue);
  }

  public getReason(): CodeableConcept[] | undefined {
      return this.reason;
  }

  public addDocumentation(newValue: RelatedArtifact) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.documentation) !== 'undefined') {
         delete this.documentation;
      }
      return;
    }
    
    if (typeof(this.documentation) === 'undefined') {
      this.documentation =  [];
    }
    this.documentation.push(newValue);
  }

  public getDocumentation(): RelatedArtifact[] | undefined {
      return this.documentation;
  }

  public addGoalId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.goalId) !== 'undefined') {
         delete this.goalId;
      }
      return;
    }
    
    if (typeof(this.goalId) === 'undefined') {
      this.goalId =  [];
    }
    this.goalId.push(newValue);
  }

  public getGoalId(): string[] | undefined {
      return this.goalId;
  }

  public add_goalId(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._goalId) !== 'undefined') {
         delete this._goalId;
      }
      return;
    }
    
    if (typeof(this._goalId) === 'undefined') {
      this._goalId =  [];
    }
    this._goalId.push(newValue);
  }

  public get_goalId(): Element[] | undefined {
      return this._goalId;
  }

  public addTrigger(newValue: TriggerDefinition) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.trigger) !== 'undefined') {
         delete this.trigger;
      }
      return;
    }
    
    if (typeof(this.trigger) === 'undefined') {
      this.trigger =  [];
    }
    this.trigger.push(newValue);
  }

  public getTrigger(): TriggerDefinition[] | undefined {
      return this.trigger;
  }

  public addCondition(newValue: PlanDefinitionCondition) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.condition) !== 'undefined') {
         delete this.condition;
      }
      return;
    }
    
    if (typeof(this.condition) === 'undefined') {
      this.condition =  [];
    }
    this.condition.push(newValue);
  }

  public getCondition(): PlanDefinitionCondition[] | undefined {
      return this.condition;
  }

  public addInput(newValue: DataRequirement) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.input) !== 'undefined') {
         delete this.input;
      }
      return;
    }
    
    if (typeof(this.input) === 'undefined') {
      this.input =  [];
    }
    this.input.push(newValue);
  }

  public getInput(): DataRequirement[] | undefined {
      return this.input;
  }

  public addOutput(newValue: DataRequirement) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.output) !== 'undefined') {
         delete this.output;
      }
      return;
    }
    
    if (typeof(this.output) === 'undefined') {
      this.output =  [];
    }
    this.output.push(newValue);
  }

  public getOutput(): DataRequirement[] | undefined {
      return this.output;
  }

  public addRelatedAction(newValue: PlanDefinitionRelatedAction) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.relatedAction) !== 'undefined') {
         delete this.relatedAction;
      }
      return;
    }
    
    if (typeof(this.relatedAction) === 'undefined') {
      this.relatedAction =  [];
    }
    this.relatedAction.push(newValue);
  }

  public getRelatedAction(): PlanDefinitionRelatedAction[] | undefined {
      return this.relatedAction;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setTimingDateTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.timingDateTime) !== 'undefined') {
         delete this.timingDateTime;
      }
      return;
    }
    
    if (REGEX_TIMINGDATETIME.test(newValue)) {
      this.timingDateTime = newValue
    } else {
      throw new Error("Invalid value pattern for timingDateTime of " + newValue);
    }
  }
  
  public getTimingDateTimePattern(): string {
    return REGEX_TIMINGDATETIME.source;
  }
  

  public getTimingDateTime(): string | undefined {
      return this.timingDateTime;
  }

  public addParticipant(newValue: PlanDefinitionParticipant) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.participant) !== 'undefined') {
         delete this.participant;
      }
      return;
    }
    
    if (typeof(this.participant) === 'undefined') {
      this.participant =  [];
    }
    this.participant.push(newValue);
  }

  public getParticipant(): PlanDefinitionParticipant[] | undefined {
      return this.participant;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setGroupingBehavior(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.groupingBehavior) !== 'undefined') {
         delete this.groupingBehavior;
      }
      return;
    }
    
    const idx = getValidValueIdx(PlanDefinitionActionGroupingBehavior_list_ValidValues, newValue);
    if (idx >= 0) {
      this.groupingBehavior = PlanDefinitionActionGroupingBehavior_list_ValidValues[idx];
    } else {
      throw new Error("Unknown groupingBehavior of " + newValue);
    }
  }
  
  public getPlanDefinitionActionGroupingBehaviorValidValues(): string[] {
    return PlanDefinitionActionGroupingBehavior_list_ValidValues;
  }
  

  public getGroupingBehavior(): string | undefined {
      return this.groupingBehavior;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setSelectionBehavior(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.selectionBehavior) !== 'undefined') {
         delete this.selectionBehavior;
      }
      return;
    }
    
    const idx = getValidValueIdx(PlanDefinitionActionSelectionBehavior_list_ValidValues, newValue);
    if (idx >= 0) {
      this.selectionBehavior = PlanDefinitionActionSelectionBehavior_list_ValidValues[idx];
    } else {
      throw new Error("Unknown selectionBehavior of " + newValue);
    }
  }
  
  public getPlanDefinitionActionSelectionBehaviorValidValues(): string[] {
    return PlanDefinitionActionSelectionBehavior_list_ValidValues;
  }
  

  public getSelectionBehavior(): string | undefined {
      return this.selectionBehavior;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setRequiredBehavior(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.requiredBehavior) !== 'undefined') {
         delete this.requiredBehavior;
      }
      return;
    }
    
    const idx = getValidValueIdx(PlanDefinitionActionRequiredBehavior_list_ValidValues, newValue);
    if (idx >= 0) {
      this.requiredBehavior = PlanDefinitionActionRequiredBehavior_list_ValidValues[idx];
    } else {
      throw new Error("Unknown requiredBehavior of " + newValue);
    }
  }
  
  public getPlanDefinitionActionRequiredBehaviorValidValues(): string[] {
    return PlanDefinitionActionRequiredBehavior_list_ValidValues;
  }
  

  public getRequiredBehavior(): string | undefined {
      return this.requiredBehavior;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setPrecheckBehavior(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.precheckBehavior) !== 'undefined') {
         delete this.precheckBehavior;
      }
      return;
    }
    
    const idx = getValidValueIdx(PlanDefinitionActionPrecheckBehavior_list_ValidValues, newValue);
    if (idx >= 0) {
      this.precheckBehavior = PlanDefinitionActionPrecheckBehavior_list_ValidValues[idx];
    } else {
      throw new Error("Unknown precheckBehavior of " + newValue);
    }
  }
  
  public getPlanDefinitionActionPrecheckBehaviorValidValues(): string[] {
    return PlanDefinitionActionPrecheckBehavior_list_ValidValues;
  }
  

  public getPrecheckBehavior(): string | undefined {
      return this.precheckBehavior;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setCardinalityBehavior(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.cardinalityBehavior) !== 'undefined') {
         delete this.cardinalityBehavior;
      }
      return;
    }
    
    const idx = getValidValueIdx(PlanDefinitionActionCardinalityBehavior_list_ValidValues, newValue);
    if (idx >= 0) {
      this.cardinalityBehavior = PlanDefinitionActionCardinalityBehavior_list_ValidValues[idx];
    } else {
      throw new Error("Unknown cardinalityBehavior of " + newValue);
    }
  }
  
  public getPlanDefinitionActionCardinalityBehaviorValidValues(): string[] {
    return PlanDefinitionActionCardinalityBehavior_list_ValidValues;
  }
  

  public getCardinalityBehavior(): string | undefined {
      return this.cardinalityBehavior;
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
  

  public getDefinitionCanonical(): string | undefined {
      return this.definitionCanonical;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDefinitionUri(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.definitionUri) !== 'undefined') {
         delete this.definitionUri;
      }
      return;
    }
    
    if (REGEX_DEFINITIONURI.test(newValue)) {
      this.definitionUri = newValue
    } else {
      throw new Error("Invalid value pattern for definitionUri of " + newValue);
    }
  }
  
  public getDefinitionUriPattern(): string {
    return REGEX_DEFINITIONURI.source;
  }
  

  public getDefinitionUri(): string | undefined {
      return this.definitionUri;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setTransform(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.transform) !== 'undefined') {
         delete this.transform;
      }
      return;
    }
    
    if (REGEX_TRANSFORM.test(newValue)) {
      this.transform = newValue
    } else {
      throw new Error("Invalid value pattern for transform of " + newValue);
    }
  }
  
  public getTransformPattern(): string {
    return REGEX_TRANSFORM.source;
  }
  

  public getTransform(): string | undefined {
      return this.transform;
  }

  public addDynamicValue(newValue: PlanDefinitionDynamicValue) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.dynamicValue) !== 'undefined') {
         delete this.dynamicValue;
      }
      return;
    }
    
    if (typeof(this.dynamicValue) === 'undefined') {
      this.dynamicValue =  [];
    }
    this.dynamicValue.push(newValue);
  }

  public getDynamicValue(): PlanDefinitionDynamicValue[] | undefined {
      return this.dynamicValue;
  }

  public addAction(newValue: PlanDefinitionAction) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.action) !== 'undefined') {
         delete this.action;
      }
      return;
    }
    
    if (typeof(this.action) === 'undefined') {
      this.action =  [];
    }
    this.action.push(newValue);
  }

  public getAction(): PlanDefinitionAction[] | undefined {
      return this.action;
  }


}


