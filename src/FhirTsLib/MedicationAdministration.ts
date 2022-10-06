import { Type } from 'class-transformer';
import { REGEX_ID_000, REGEX_IMPLICITRULES, REGEX_LANGUAGE, REGEX_STATUS_000, REGEX_EFFECTIVEDATETIME } from '../FhirTsLibValidation/FhirRegex';
import { Annotation, CodeableConcept, Element, Extension, Identifier, MedicationAdministrationDosage, MedicationAdministrationPerformer, Meta, Narrative, Period, Reference, ResourceList, Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItem, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Contract, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceDefinition, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, ExplanationOfBenefit, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProduct, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NamingSystem, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, Schedule, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, StructureMap, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SubstanceSpecification, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription } from './index';



/**
 * Describes the event of a patient consuming or otherwise being administered a medication.  This may
 * be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie
 * this event to the authorizing prescription, and the specific encounter between patient and health
 * care practitioner.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/MedicationAdministration
 */
export class MedicationAdministration {
  /**
   * This is a MedicationAdministration resource
   */
     resourceType = "MedicationAdministration";

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
   * Identifiers associated with this Medication Administration that are defined by business processes
   * and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
   * They are business identifiers assigned to this resource by the performer or other systems and
   * remain constant as the resource is updated and propagates from server to server.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Identifier)
  protected identifier?: Identifier[];

  /**
   * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by
   * this event.
   * Field access restricted because there are specific valid values.
   */
  protected instantiates?: string[];

  /**
   * Extensions for instantiates
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _instantiates?: Element[];

  /**
   * A larger event of which this particular event is a component or step.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected partOf?: Reference[];

  /**
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected status?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _status?: Element;

  /**
   * A code indicating why the administration was not performed.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected statusReason?: CodeableConcept[];

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
   medicationCodeableConcept?: CodeableConcept;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   medicationReference?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   subject?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   context?: Reference;

  /**
   * Additional information (for example, patient height and weight) that supports the administration of
   * the medication.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected supportingInformation?: Reference[];

  /**
   * A specific date/time or interval of time during which the administration took place (or did not
   * take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a
   * tablet the use of dateTime is more appropriate.
   * Field access restricted because there are specific valid values.
   */
  protected effectiveDateTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _effectiveDateTime?: Element;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   effectivePeriod?: Period;

  /**
   * Indicates who or what performed the medication administration and how they were involved.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => MedicationAdministrationPerformer)
  protected performer?: MedicationAdministrationPerformer[];

  /**
   * A code indicating why the medication was given.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected reasonCode?: CodeableConcept[];

  /**
   * Condition or observation that supports why the medication was administered.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected reasonReference?: Reference[];

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   request?: Reference;

  /**
   * The device used in administering the medication to the patient.  For example, a particular infusion
   * pump.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected device?: Reference[];

  /**
   * Extra information about the medication administration that is not conveyed by the other attributes.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Annotation)
  protected note?: Annotation[];

  /**
   * Describes the event of a patient consuming or otherwise being administered a medication.  This may
   * be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie
   * this event to the authorizing prescription, and the specific encounter between patient and health
   * care practitioner.
   */
  @Type(() => MedicationAdministrationDosage)
   dosage?: MedicationAdministrationDosage;

  /**
   * A summary of the events of interest that have occurred, such as when the administration was
   * verified.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected eventHistory?: Reference[];


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

  public addIdentifier(newValue: Identifier) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.identifier) !== 'undefined') {
         delete this.identifier;
      }
      return;
    }
    
    if (typeof(this.identifier) === 'undefined') {
      this.identifier =  [];
    }
    this.identifier.push(newValue);
  }

  public getIdentifier(): Identifier[] | undefined {
      return this.identifier;
  }

  public addInstantiates(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.instantiates) !== 'undefined') {
         delete this.instantiates;
      }
      return;
    }
    
    if (typeof(this.instantiates) === 'undefined') {
      this.instantiates =  [];
    }
    this.instantiates.push(newValue);
  }

  public getInstantiates(): string[] | undefined {
      return this.instantiates;
  }

  public add_instantiates(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._instantiates) !== 'undefined') {
         delete this._instantiates;
      }
      return;
    }
    
    if (typeof(this._instantiates) === 'undefined') {
      this._instantiates =  [];
    }
    this._instantiates.push(newValue);
  }

  public get_instantiates(): Element[] | undefined {
      return this._instantiates;
  }

  public addPartOf(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.partOf) !== 'undefined') {
         delete this.partOf;
      }
      return;
    }
    
    if (typeof(this.partOf) === 'undefined') {
      this.partOf =  [];
    }
    this.partOf.push(newValue);
  }

  public getPartOf(): Reference[] | undefined {
      return this.partOf;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setStatus(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.status) !== 'undefined') {
         delete this.status;
      }
      return;
    }
    
    if (REGEX_STATUS_000.test(newValue)) {
      this.status = newValue
    } else {
      throw new Error("Invalid value pattern for status of " + newValue);
    }
  }
  
  public getStatusPattern(): string {
    return REGEX_STATUS_000.source;
  }
  

  public getStatus(): string | undefined {
      return this.status;
  }

  public addStatusReason(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.statusReason) !== 'undefined') {
         delete this.statusReason;
      }
      return;
    }
    
    if (typeof(this.statusReason) === 'undefined') {
      this.statusReason =  [];
    }
    this.statusReason.push(newValue);
  }

  public getStatusReason(): CodeableConcept[] | undefined {
      return this.statusReason;
  }

  public addSupportingInformation(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.supportingInformation) !== 'undefined') {
         delete this.supportingInformation;
      }
      return;
    }
    
    if (typeof(this.supportingInformation) === 'undefined') {
      this.supportingInformation =  [];
    }
    this.supportingInformation.push(newValue);
  }

  public getSupportingInformation(): Reference[] | undefined {
      return this.supportingInformation;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setEffectiveDateTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.effectiveDateTime) !== 'undefined') {
         delete this.effectiveDateTime;
      }
      return;
    }
    
    if (REGEX_EFFECTIVEDATETIME.test(newValue)) {
      this.effectiveDateTime = newValue
    } else {
      throw new Error("Invalid value pattern for effectiveDateTime of " + newValue);
    }
  }
  
  public getEffectiveDateTimePattern(): string {
    return REGEX_EFFECTIVEDATETIME.source;
  }
  

  public getEffectiveDateTime(): string | undefined {
      return this.effectiveDateTime;
  }

  public addPerformer(newValue: MedicationAdministrationPerformer) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.performer) !== 'undefined') {
         delete this.performer;
      }
      return;
    }
    
    if (typeof(this.performer) === 'undefined') {
      this.performer =  [];
    }
    this.performer.push(newValue);
  }

  public getPerformer(): MedicationAdministrationPerformer[] | undefined {
      return this.performer;
  }

  public addReasonCode(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.reasonCode) !== 'undefined') {
         delete this.reasonCode;
      }
      return;
    }
    
    if (typeof(this.reasonCode) === 'undefined') {
      this.reasonCode =  [];
    }
    this.reasonCode.push(newValue);
  }

  public getReasonCode(): CodeableConcept[] | undefined {
      return this.reasonCode;
  }

  public addReasonReference(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.reasonReference) !== 'undefined') {
         delete this.reasonReference;
      }
      return;
    }
    
    if (typeof(this.reasonReference) === 'undefined') {
      this.reasonReference =  [];
    }
    this.reasonReference.push(newValue);
  }

  public getReasonReference(): Reference[] | undefined {
      return this.reasonReference;
  }

  public addDevice(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.device) !== 'undefined') {
         delete this.device;
      }
      return;
    }
    
    if (typeof(this.device) === 'undefined') {
      this.device =  [];
    }
    this.device.push(newValue);
  }

  public getDevice(): Reference[] | undefined {
      return this.device;
  }

  public addNote(newValue: Annotation) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.note) !== 'undefined') {
         delete this.note;
      }
      return;
    }
    
    if (typeof(this.note) === 'undefined') {
      this.note =  [];
    }
    this.note.push(newValue);
  }

  public getNote(): Annotation[] | undefined {
      return this.note;
  }

  public addEventHistory(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.eventHistory) !== 'undefined') {
         delete this.eventHistory;
      }
      return;
    }
    
    if (typeof(this.eventHistory) === 'undefined') {
      this.eventHistory =  [];
    }
    this.eventHistory.push(newValue);
  }

  public getEventHistory(): Reference[] | undefined {
      return this.eventHistory;
  }


}


