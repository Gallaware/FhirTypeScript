import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID_000, REGEX_IMPLICITRULES, REGEX_LANGUAGE, REGEX_URL, REGEX_VERSION, REGEX_NAME, REGEX_TITLE, REGEX_DATE, REGEX_PUBLISHER, REGEX_DESCRIPTION, REGEX_PURPOSE, REGEX_COPYRIGHT } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, ContactDetail, Element, Extension, Identifier, Meta, Narrative, ResourceList, Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItem, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Contract, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceDefinition, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, ExplanationOfBenefit, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProduct, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NamingSystem, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, Schedule, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SubstanceSpecification, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription, StructureMapGroup, StructureMapStructure, UsageContext } from './index';
import { StructureMapStatus_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A Map of relationships between 2 structures that can be used to transform data.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/StructureMap
 */
export class StructureMap {
  /**
   * This is a StructureMap resource
   */
     resourceType = "StructureMap";

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
   * String of characters used to identify a name or a resource
   * Field access restricted because there are specific valid values.
   */
  protected url?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _url?: Element;

  /**
   * A formal identifier that is used to identify this structure map when it is represented in other
   * formats, or referenced in a specification, model, design or an instance.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Identifier)
  protected identifier?: Identifier[];

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected version?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _version?: Element;

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
  protected title?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _title?: Element;

  /**
   * The status of this structure map. Enables tracking the life-cycle of the content.
   * Field access restricted because there are specific valid values.
   */
  protected status?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _status?: Element;

  /**
   * Value of "true" or "false"
   */
   experimental?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _experimental?: Element;

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
   * appropriate structure map instances.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => UsageContext)
  protected useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the structure map is intended to be used.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected jurisdiction?: CodeableConcept[];

  /**
   * A string that may contain Github Flavored Markdown syntax for optional processing by a mark down
   * presentation engine
   * Field access restricted because there are specific valid values.
   */
  protected purpose?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _purpose?: Element;

  /**
   * A string that may contain Github Flavored Markdown syntax for optional processing by a mark down
   * presentation engine
   * Field access restricted because there are specific valid values.
   */
  protected copyright?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _copyright?: Element;

  /**
   * A structure definition used by this map. The structure definition may describe instances that are
   * converted, or the instances that are produced.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => StructureMapStructure)
  protected structure?: StructureMapStructure[];

  /**
   * Other maps used by this map (canonical URLs).
   * Field access restricted because there are specific valid values.
   */
  protected import?: string[];

  /**
   * Organizes the mapping into manageable chunks for human review/ease of maintenance.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => StructureMapGroup)
  protected group?: StructureMapGroup[];


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
  public deleteContainedAll() {
    if (typeof(this.contained) !== 'undefined') {
       delete this.contained;
    }
    return;
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
  public setUrl(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.url) !== 'undefined') {
         delete this.url;
      }
      return;
    }
    
    if (REGEX_URL.test(newValue)) {
      this.url = newValue
    } else {
      throw new Error("Invalid value pattern for url of " + newValue);
    }
  }
  
  public getUrlPattern(): string {
    return REGEX_URL.source;
  }
  

  public getUrl(): string | undefined {
      return this.url;
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
  public deleteIdentifierAll() {
    if (typeof(this.identifier) !== 'undefined') {
       delete this.identifier;
    }
    return;
  }
  

  public getIdentifier(): Identifier[] | undefined {
      return this.identifier;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setVersion(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.version) !== 'undefined') {
         delete this.version;
      }
      return;
    }
    
    if (REGEX_VERSION.test(newValue)) {
      this.version = newValue
    } else {
      throw new Error("Invalid value pattern for version of " + newValue);
    }
  }
  
  public getVersionPattern(): string {
    return REGEX_VERSION.source;
  }
  

  public getVersion(): string | undefined {
      return this.version;
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
    
    const idx = getValidValueIdx(StructureMapStatus_list_ValidValues, newValue);
    if (idx >= 0) {
      this.status = StructureMapStatus_list_ValidValues[idx];
    } else {
      throw new Error("Unknown status of " + newValue);
    }
  }
  
  public getStructureMapStatusValidValues(): string[] {
    return StructureMapStatus_list_ValidValues;
  }
  

  public getStatus(): string | undefined {
      return this.status;
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
  public deleteContactAll() {
    if (typeof(this.contact) !== 'undefined') {
       delete this.contact;
    }
    return;
  }
  

  public getContact(): ContactDetail[] | undefined {
      return this.contact;
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
  public deleteUseContextAll() {
    if (typeof(this.useContext) !== 'undefined') {
       delete this.useContext;
    }
    return;
  }
  

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
  public deleteJurisdictionAll() {
    if (typeof(this.jurisdiction) !== 'undefined') {
       delete this.jurisdiction;
    }
    return;
  }
  

  public getJurisdiction(): CodeableConcept[] | undefined {
      return this.jurisdiction;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setPurpose(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.purpose) !== 'undefined') {
         delete this.purpose;
      }
      return;
    }
    
    if (REGEX_PURPOSE.test(newValue)) {
      this.purpose = newValue
    } else {
      throw new Error("Invalid value pattern for purpose of " + newValue);
    }
  }
  
  public getPurposePattern(): string {
    return REGEX_PURPOSE.source;
  }
  

  public getPurpose(): string | undefined {
      return this.purpose;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setCopyright(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.copyright) !== 'undefined') {
         delete this.copyright;
      }
      return;
    }
    
    if (REGEX_COPYRIGHT.test(newValue)) {
      this.copyright = newValue
    } else {
      throw new Error("Invalid value pattern for copyright of " + newValue);
    }
  }
  
  public getCopyrightPattern(): string {
    return REGEX_COPYRIGHT.source;
  }
  

  public getCopyright(): string | undefined {
      return this.copyright;
  }

  public addStructure(newValue: StructureMapStructure) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.structure) !== 'undefined') {
         delete this.structure;
      }
      return;
    }
    
    if (typeof(this.structure) === 'undefined') {
      this.structure =  [];
    }
    this.structure.push(newValue);
  }
  public deleteStructureAll() {
    if (typeof(this.structure) !== 'undefined') {
       delete this.structure;
    }
    return;
  }
  

  public getStructure(): StructureMapStructure[] | undefined {
      return this.structure;
  }

  public addImport(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.import) !== 'undefined') {
         delete this.import;
      }
      return;
    }
    
    if (typeof(this.import) === 'undefined') {
      this.import =  [];
    }
    this.import.push(newValue);
  }
  public deleteImportAll() {
    if (typeof(this.import) !== 'undefined') {
       delete this.import;
    }
    return;
  }
  

  public getImport(): string[] | undefined {
      return this.import;
  }

  public addGroup(newValue: StructureMapGroup) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.group) !== 'undefined') {
         delete this.group;
      }
      return;
    }
    
    if (typeof(this.group) === 'undefined') {
      this.group =  [];
    }
    this.group.push(newValue);
  }
  public deleteGroupAll() {
    if (typeof(this.group) !== 'undefined') {
       delete this.group;
    }
    return;
  }
  

  public getGroup(): StructureMapGroup[] | undefined {
      return this.group;
  }


}


