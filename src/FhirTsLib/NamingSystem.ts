import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID_000, REGEX_IMPLICITRULES, REGEX_LANGUAGE, REGEX_NAME, REGEX_DATE, REGEX_PUBLISHER, REGEX_RESPONSIBLE, REGEX_DESCRIPTION, REGEX_USAGE } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, ContactDetail, Element, Extension, Meta, NamingSystemUniqueId, Narrative, ResourceList, Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItem, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Contract, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceDefinition, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, ExplanationOfBenefit, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProduct, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, Schedule, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, StructureMap, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SubstanceSpecification, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription, UsageContext } from './index';
import { NamingSystemStatus_list_ValidValues, NamingSystemKind_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A curated namespace that issues unique symbols within that namespace for the identification of
 * concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data
 * types.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/NamingSystem
 */
export class NamingSystem {
  /**
   * This is a NamingSystem resource
   */
     resourceType = "NamingSystem";

  /**
   * Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This
   * might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these
   * constraints.)  Ids are case-insensitive.
   * Field access restricted because there are specific valid values.
   */
  protected id?: string;

  /**
   * The metadata about a resource. This is content in the resource that is maintained by the
   * infrastructure. Changes to the content might not always be associated with version changes to the
   * resource.
   */
  @Type(() => Meta)
   meta?: Meta;

  /**
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected implicitRules?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _implicitRules?: Element;

  /**
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected language?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _language?: Element;

  /**
   * A human-readable summary of the resource conveying the essential clinical and business information
   * for the resource.
   */
  @Type(() => Narrative)
   text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the resource that contains them -
   * they cannot be identified independently, and nor can they have their own independent transaction
   * scope.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ResourceList, {
          discriminator: {
    property: 'resourceType',
    subTypes: [
      	{ value: Account, name: 'Account'},
      	{ value: ActivityDefinition, name: 'ActivityDefinition'},
      	{ value: AdverseEvent, name: 'AdverseEvent'},
      	{ value: AllergyIntolerance, name: 'AllergyIntolerance'},
      	{ value: Appointment, name: 'Appointment'},
      	{ value: AppointmentResponse, name: 'AppointmentResponse'},
      	{ value: AuditEvent, name: 'AuditEvent'},
      	{ value: Basic, name: 'Basic'},
      	{ value: Binary, name: 'Binary'},
      	{ value: BiologicallyDerivedProduct, name: 'BiologicallyDerivedProduct'},
      	{ value: BodyStructure, name: 'BodyStructure'},
      	{ value: Bundle, name: 'Bundle'},
      	{ value: CapabilityStatement, name: 'CapabilityStatement'},
      	{ value: CarePlan, name: 'CarePlan'},
      	{ value: CareTeam, name: 'CareTeam'},
      	{ value: CatalogEntry, name: 'CatalogEntry'},
      	{ value: ChargeItem, name: 'ChargeItem'},
      	{ value: ChargeItemDefinition, name: 'ChargeItemDefinition'},
      	{ value: Claim, name: 'Claim'},
      	{ value: ClaimResponse, name: 'ClaimResponse'},
      	{ value: ClinicalImpression, name: 'ClinicalImpression'},
      	{ value: CodeSystem, name: 'CodeSystem'},
      	{ value: Communication, name: 'Communication'},
      	{ value: CommunicationRequest, name: 'CommunicationRequest'},
      	{ value: CompartmentDefinition, name: 'CompartmentDefinition'},
      	{ value: Composition, name: 'Composition'},
      	{ value: ConceptMap, name: 'ConceptMap'},
      	{ value: Condition, name: 'Condition'},
      	{ value: Consent, name: 'Consent'},
      	{ value: Contract, name: 'Contract'},
      	{ value: Coverage, name: 'Coverage'},
      	{ value: CoverageEligibilityRequest, name: 'CoverageEligibilityRequest'},
      	{ value: CoverageEligibilityResponse, name: 'CoverageEligibilityResponse'},
      	{ value: DetectedIssue, name: 'DetectedIssue'},
      	{ value: Device, name: 'Device'},
      	{ value: DeviceDefinition, name: 'DeviceDefinition'},
      	{ value: DeviceMetric, name: 'DeviceMetric'},
      	{ value: DeviceRequest, name: 'DeviceRequest'},
      	{ value: DeviceUseStatement, name: 'DeviceUseStatement'},
      	{ value: DiagnosticReport, name: 'DiagnosticReport'},
      	{ value: DocumentManifest, name: 'DocumentManifest'},
      	{ value: DocumentReference, name: 'DocumentReference'},
      	{ value: EffectEvidenceSynthesis, name: 'EffectEvidenceSynthesis'},
      	{ value: Encounter, name: 'Encounter'},
      	{ value: Endpoint, name: 'Endpoint'},
      	{ value: EnrollmentRequest, name: 'EnrollmentRequest'},
      	{ value: EnrollmentResponse, name: 'EnrollmentResponse'},
      	{ value: EpisodeOfCare, name: 'EpisodeOfCare'},
      	{ value: EventDefinition, name: 'EventDefinition'},
      	{ value: Evidence, name: 'Evidence'},
      	{ value: EvidenceVariable, name: 'EvidenceVariable'},
      	{ value: ExampleScenario, name: 'ExampleScenario'},
      	{ value: ExplanationOfBenefit, name: 'ExplanationOfBenefit'},
      	{ value: FamilyMemberHistory, name: 'FamilyMemberHistory'},
      	{ value: Flag, name: 'Flag'},
      	{ value: Goal, name: 'Goal'},
      	{ value: GraphDefinition, name: 'GraphDefinition'},
      	{ value: Group, name: 'Group'},
      	{ value: GuidanceResponse, name: 'GuidanceResponse'},
      	{ value: HealthcareService, name: 'HealthcareService'},
      	{ value: ImagingStudy, name: 'ImagingStudy'},
      	{ value: Immunization, name: 'Immunization'},
      	{ value: ImmunizationEvaluation, name: 'ImmunizationEvaluation'},
      	{ value: ImmunizationRecommendation, name: 'ImmunizationRecommendation'},
      	{ value: ImplementationGuide, name: 'ImplementationGuide'},
      	{ value: InsurancePlan, name: 'InsurancePlan'},
      	{ value: Invoice, name: 'Invoice'},
      	{ value: Library, name: 'Library'},
      	{ value: Linkage, name: 'Linkage'},
      	{ value: List, name: 'List'},
      	{ value: Location, name: 'Location'},
      	{ value: Measure, name: 'Measure'},
      	{ value: MeasureReport, name: 'MeasureReport'},
      	{ value: Media, name: 'Media'},
      	{ value: Medication, name: 'Medication'},
      	{ value: MedicationAdministration, name: 'MedicationAdministration'},
      	{ value: MedicationDispense, name: 'MedicationDispense'},
      	{ value: MedicationKnowledge, name: 'MedicationKnowledge'},
      	{ value: MedicationRequest, name: 'MedicationRequest'},
      	{ value: MedicationStatement, name: 'MedicationStatement'},
      	{ value: MedicinalProduct, name: 'MedicinalProduct'},
      	{ value: MedicinalProductAuthorization, name: 'MedicinalProductAuthorization'},
      	{ value: MedicinalProductContraindication, name: 'MedicinalProductContraindication'},
      	{ value: MedicinalProductIndication, name: 'MedicinalProductIndication'},
      	{ value: MedicinalProductIngredient, name: 'MedicinalProductIngredient'},
      	{ value: MedicinalProductInteraction, name: 'MedicinalProductInteraction'},
      	{ value: MedicinalProductManufactured, name: 'MedicinalProductManufactured'},
      	{ value: MedicinalProductPackaged, name: 'MedicinalProductPackaged'},
      	{ value: MedicinalProductPharmaceutical, name: 'MedicinalProductPharmaceutical'},
      	{ value: MedicinalProductUndesirableEffect, name: 'MedicinalProductUndesirableEffect'},
      	{ value: MessageDefinition, name: 'MessageDefinition'},
      	{ value: MessageHeader, name: 'MessageHeader'},
      	{ value: MolecularSequence, name: 'MolecularSequence'},
      	{ value: NamingSystem, name: 'NamingSystem'},
      	{ value: NutritionOrder, name: 'NutritionOrder'},
      	{ value: Observation, name: 'Observation'},
      	{ value: ObservationDefinition, name: 'ObservationDefinition'},
      	{ value: OperationDefinition, name: 'OperationDefinition'},
      	{ value: OperationOutcome, name: 'OperationOutcome'},
      	{ value: Organization, name: 'Organization'},
      	{ value: OrganizationAffiliation, name: 'OrganizationAffiliation'},
      	{ value: Parameters, name: 'Parameters'},
      	{ value: Patient, name: 'Patient'},
      	{ value: PaymentNotice, name: 'PaymentNotice'},
      	{ value: PaymentReconciliation, name: 'PaymentReconciliation'},
      	{ value: Person, name: 'Person'},
      	{ value: PlanDefinition, name: 'PlanDefinition'},
      	{ value: Practitioner, name: 'Practitioner'},
      	{ value: PractitionerRole, name: 'PractitionerRole'},
      	{ value: Procedure, name: 'Procedure'},
      	{ value: Provenance, name: 'Provenance'},
      	{ value: Questionnaire, name: 'Questionnaire'},
      	{ value: QuestionnaireResponse, name: 'QuestionnaireResponse'},
      	{ value: RelatedPerson, name: 'RelatedPerson'},
      	{ value: RequestGroup, name: 'RequestGroup'},
      	{ value: ResearchDefinition, name: 'ResearchDefinition'},
      	{ value: ResearchElementDefinition, name: 'ResearchElementDefinition'},
      	{ value: ResearchStudy, name: 'ResearchStudy'},
      	{ value: ResearchSubject, name: 'ResearchSubject'},
      	{ value: RiskAssessment, name: 'RiskAssessment'},
      	{ value: RiskEvidenceSynthesis, name: 'RiskEvidenceSynthesis'},
      	{ value: Schedule, name: 'Schedule'},
      	{ value: SearchParameter, name: 'SearchParameter'},
      	{ value: ServiceRequest, name: 'ServiceRequest'},
      	{ value: Slot, name: 'Slot'},
      	{ value: Specimen, name: 'Specimen'},
      	{ value: SpecimenDefinition, name: 'SpecimenDefinition'},
      	{ value: StructureDefinition, name: 'StructureDefinition'},
      	{ value: StructureMap, name: 'StructureMap'},
      	{ value: Subscription, name: 'Subscription'},
      	{ value: Substance, name: 'Substance'},
      	{ value: SubstanceNucleicAcid, name: 'SubstanceNucleicAcid'},
      	{ value: SubstancePolymer, name: 'SubstancePolymer'},
      	{ value: SubstanceProtein, name: 'SubstanceProtein'},
      	{ value: SubstanceReferenceInformation, name: 'SubstanceReferenceInformation'},
      	{ value: SubstanceSourceMaterial, name: 'SubstanceSourceMaterial'},
      	{ value: SubstanceSpecification, name: 'SubstanceSpecification'},
      	{ value: SupplyDelivery, name: 'SupplyDelivery'},
      	{ value: SupplyRequest, name: 'SupplyRequest'},
      	{ value: Task, name: 'Task'},
      	{ value: TerminologyCapabilities, name: 'TerminologyCapabilities'},
      	{ value: TestReport, name: 'TestReport'},
      	{ value: TestScript, name: 'TestScript'},
      	{ value: ValueSet, name: 'ValueSet'},
      	{ value: VerificationResult, name: 'VerificationResult'},
      	{ value: VisionPrescription, name: 'VisionPrescription'}
      ],
    }
  })
  protected contained?: ResourceList[];

  /**
   * May be used to represent additional information that is not part of the basic definition of the
   * resource. To make the use of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any implementer can define an extension,
   * there is a set of requirements that SHALL be met as part of the definition of the extension.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Extension)
  protected extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of the basic definition of the
   * resource and that modifies the understanding of the element that contains it and/or the
   * understanding of the containing element's descendants. Usually modifier elements provide negation
   * or qualification. To make the use of extensions safe and manageable, there is a strict set of
   * governance applied to the definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met as part of the definition of
   * the extension. Applications processing a resource are required to check for modifier extensions.
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
  protected name?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _name?: Element;

  /**
   * The status of this naming system. Enables tracking the life-cycle of the content.
   * Field access restricted because there are specific valid values.
   */
  protected status?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _status?: Element;

  /**
   * Indicates the purpose for the naming system - what kinds of things does it make unique?
   * Field access restricted because there are specific valid values.
   */
  protected kind?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _kind?: Element;

  /**
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected date?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _date?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected publisher?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _publisher?: Element;

  /**
   * Contact details to assist a user in finding and communicating with the publisher.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ContactDetail)
  protected contact?: ContactDetail[];

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected responsible?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _responsible?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   type?: CodeableConcept;

  /**
   * A string that may contain Github Flavored Markdown syntax for optional processing by a mark down
   * presentation engine
   * Field access restricted because there are specific valid values.
   */
  protected description?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _description?: Element;

  /**
   * The content was developed with a focus and intent of supporting the contexts that are listed. These
   * contexts may be general categories (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with indexing and searching for
   * appropriate naming system instances.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => UsageContext)
  protected useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the naming system is intended to be used.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected jurisdiction?: CodeableConcept[];

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected usage?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _usage?: Element;

  /**
   * Indicates how the system may be identified when referenced in electronic exchange.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => NamingSystemUniqueId)
  protected uniqueId?: NamingSystemUniqueId[];


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
    
    if (REGEX_ID_000.test(newValue)) {
      this.id = newValue
    } else {
      throw new Error("Invalid value pattern for id of " + newValue);
    }
  }
  
  public getIdPattern(): string {
    return REGEX_ID_000.source;
  }
  
  /**
  * Gets the current value of field id.
  * @returns the value  or undefined
  */
  public getId(): string | undefined {
      return this.id;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setImplicitRules(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.implicitRules) !== 'undefined') {
         delete this.implicitRules;
      }
      return;
    }
    
    if (REGEX_IMPLICITRULES.test(newValue)) {
      this.implicitRules = newValue
    } else {
      throw new Error("Invalid value pattern for implicitRules of " + newValue);
    }
  }
  
  public getImplicitRulesPattern(): string {
    return REGEX_IMPLICITRULES.source;
  }
  
  /**
  * Gets the current value of field implicitRules.
  * @returns the value  or undefined
  */
  public getImplicitRules(): string | undefined {
      return this.implicitRules;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setLanguage(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.language) !== 'undefined') {
         delete this.language;
      }
      return;
    }
    
    if (REGEX_LANGUAGE.test(newValue)) {
      this.language = newValue
    } else {
      throw new Error("Invalid value pattern for language of " + newValue);
    }
  }
  
  public getLanguagePattern(): string {
    return REGEX_LANGUAGE.source;
  }
  
  /**
  * Gets the current value of field language.
  * @returns the value  or undefined
  */
  public getLanguage(): string | undefined {
      return this.language;
  }

  public addContained(newValue: ResourceList) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.contained) !== 'undefined') {
         delete this.contained;
      }
      return;
    }
    
    if (typeof(this.contained) === 'undefined') {
      this.contained =  [];
    }
    this.contained.push(newValue);
  }
  /**
  * Removes all elements from the array contained, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteContainedAll(): ResourceList[] {
    if (typeof(this.contained) !== 'undefined') {
       const oldArray = this.contained;
       delete this.contained;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array contained, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteContainedBySplice(start: number, deleteCount?: number): ResourceList[] {
    if (typeof(this.contained) !== 'undefined') {
       return this.contained.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field contained.
  * @returns the value  or undefined
  */
  public getContained(): ResourceList[] | undefined {
      return this.contained;
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
  
  /**
  * Gets the current value of field name.
  * @returns the value  or undefined
  */
  public getName(): string | undefined {
      return this.name;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setStatus(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.status) !== 'undefined') {
         delete this.status;
      }
      return;
    }
    
    const idx = getValidValueIdx(NamingSystemStatus_list_ValidValues, newValue);
    if (idx >= 0) {
      this.status = NamingSystemStatus_list_ValidValues[idx];
    } else {
      throw new Error("Unknown status of " + newValue);
    }
  }
  
  public getNamingSystemStatusValidValues(): string[] {
    return NamingSystemStatus_list_ValidValues;
  }
  
  /**
  * Gets the current value of field status.
  * @returns the value  or undefined
  */
  public getStatus(): string | undefined {
      return this.status;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setKind(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.kind) !== 'undefined') {
         delete this.kind;
      }
      return;
    }
    
    const idx = getValidValueIdx(NamingSystemKind_list_ValidValues, newValue);
    if (idx >= 0) {
      this.kind = NamingSystemKind_list_ValidValues[idx];
    } else {
      throw new Error("Unknown kind of " + newValue);
    }
  }
  
  public getNamingSystemKindValidValues(): string[] {
    return NamingSystemKind_list_ValidValues;
  }
  
  /**
  * Gets the current value of field kind.
  * @returns the value  or undefined
  */
  public getKind(): string | undefined {
      return this.kind;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.date) !== 'undefined') {
         delete this.date;
      }
      return;
    }
    
    if (REGEX_DATE.test(newValue)) {
      this.date = newValue
    } else {
      throw new Error("Invalid value pattern for date of " + newValue);
    }
  }
  
  public getDatePattern(): string {
    return REGEX_DATE.source;
  }
  
  /**
  * Gets the current value of field date.
  * @returns the value  or undefined
  */
  public getDate(): string | undefined {
      return this.date;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setPublisher(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.publisher) !== 'undefined') {
         delete this.publisher;
      }
      return;
    }
    
    if (REGEX_PUBLISHER.test(newValue)) {
      this.publisher = newValue
    } else {
      throw new Error("Invalid value pattern for publisher of " + newValue);
    }
  }
  
  public getPublisherPattern(): string {
    return REGEX_PUBLISHER.source;
  }
  
  /**
  * Gets the current value of field publisher.
  * @returns the value  or undefined
  */
  public getPublisher(): string | undefined {
      return this.publisher;
  }

  public addContact(newValue: ContactDetail) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.contact) !== 'undefined') {
         delete this.contact;
      }
      return;
    }
    
    if (typeof(this.contact) === 'undefined') {
      this.contact =  [];
    }
    this.contact.push(newValue);
  }
  /**
  * Removes all elements from the array contact, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteContactAll(): ContactDetail[] {
    if (typeof(this.contact) !== 'undefined') {
       const oldArray = this.contact;
       delete this.contact;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array contact, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteContactBySplice(start: number, deleteCount?: number): ContactDetail[] {
    if (typeof(this.contact) !== 'undefined') {
       return this.contact.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field contact.
  * @returns the value  or undefined
  */
  public getContact(): ContactDetail[] | undefined {
      return this.contact;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setResponsible(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.responsible) !== 'undefined') {
         delete this.responsible;
      }
      return;
    }
    
    if (REGEX_RESPONSIBLE.test(newValue)) {
      this.responsible = newValue
    } else {
      throw new Error("Invalid value pattern for responsible of " + newValue);
    }
  }
  
  public getResponsiblePattern(): string {
    return REGEX_RESPONSIBLE.source;
  }
  
  /**
  * Gets the current value of field responsible.
  * @returns the value  or undefined
  */
  public getResponsible(): string | undefined {
      return this.responsible;
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
  
  /**
  * Gets the current value of field description.
  * @returns the value  or undefined
  */
  public getDescription(): string | undefined {
      return this.description;
  }

  public addUseContext(newValue: UsageContext) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.useContext) !== 'undefined') {
         delete this.useContext;
      }
      return;
    }
    
    if (typeof(this.useContext) === 'undefined') {
      this.useContext =  [];
    }
    this.useContext.push(newValue);
  }
  /**
  * Removes all elements from the array useContext, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteUseContextAll(): UsageContext[] {
    if (typeof(this.useContext) !== 'undefined') {
       const oldArray = this.useContext;
       delete this.useContext;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array useContext, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteUseContextBySplice(start: number, deleteCount?: number): UsageContext[] {
    if (typeof(this.useContext) !== 'undefined') {
       return this.useContext.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field useContext.
  * @returns the value  or undefined
  */
  public getUseContext(): UsageContext[] | undefined {
      return this.useContext;
  }

  public addJurisdiction(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.jurisdiction) !== 'undefined') {
         delete this.jurisdiction;
      }
      return;
    }
    
    if (typeof(this.jurisdiction) === 'undefined') {
      this.jurisdiction =  [];
    }
    this.jurisdiction.push(newValue);
  }
  /**
  * Removes all elements from the array jurisdiction, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteJurisdictionAll(): CodeableConcept[] {
    if (typeof(this.jurisdiction) !== 'undefined') {
       const oldArray = this.jurisdiction;
       delete this.jurisdiction;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array jurisdiction, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteJurisdictionBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.jurisdiction) !== 'undefined') {
       return this.jurisdiction.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field jurisdiction.
  * @returns the value  or undefined
  */
  public getJurisdiction(): CodeableConcept[] | undefined {
      return this.jurisdiction;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setUsage(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.usage) !== 'undefined') {
         delete this.usage;
      }
      return;
    }
    
    if (REGEX_USAGE.test(newValue)) {
      this.usage = newValue
    } else {
      throw new Error("Invalid value pattern for usage of " + newValue);
    }
  }
  
  public getUsagePattern(): string {
    return REGEX_USAGE.source;
  }
  
  /**
  * Gets the current value of field usage.
  * @returns the value  or undefined
  */
  public getUsage(): string | undefined {
      return this.usage;
  }

  public addUniqueId(newValue: NamingSystemUniqueId) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.uniqueId) !== 'undefined') {
         delete this.uniqueId;
      }
      return;
    }
    
    if (typeof(this.uniqueId) === 'undefined') {
      this.uniqueId =  [];
    }
    this.uniqueId.push(newValue);
  }
  /**
  * Removes all elements from the array uniqueId, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteUniqueIdAll(): NamingSystemUniqueId[] {
    if (typeof(this.uniqueId) !== 'undefined') {
       const oldArray = this.uniqueId;
       delete this.uniqueId;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array uniqueId, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteUniqueIdBySplice(start: number, deleteCount?: number): NamingSystemUniqueId[] {
    if (typeof(this.uniqueId) !== 'undefined') {
       return this.uniqueId.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field uniqueId.
  * @returns the value  or undefined
  */
  public getUniqueId(): NamingSystemUniqueId[] | undefined {
      return this.uniqueId;
  }


}


