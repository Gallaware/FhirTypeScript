import { Type } from 'class-transformer';
import { REGEX_ID_000, REGEX_IMPLICITRULES, REGEX_LANGUAGE, REGEX_COMMENT } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Identifier, Meta, Narrative, Period, Reference, ResourceList, Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItem, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Contract, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceDefinition, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, ExplanationOfBenefit, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProduct, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NamingSystem, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, StructureMap, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SubstanceSpecification, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription } from './index';



/**
 * A container for slots of time that may be available for booking appointments.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Schedule
 */
export class Schedule {
  /**
   * This is a Schedule resource
   */
     resourceType = "Schedule";

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
   * External Ids for this item.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Identifier)
  protected identifier?: Identifier[];

  /**
   * Value of "true" or "false"
   */
   active?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _active?: Element;

  /**
   * A broad categorization of the service that is to be performed during this appointment.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected serviceCategory?: CodeableConcept[];

  /**
   * The specific service that is to be performed during this appointment.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected serviceType?: CodeableConcept[];

  /**
   * The specialty of a practitioner that would be required to perform the service requested in this
   * appointment.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected specialty?: CodeableConcept[];

  /**
   * Slots that reference this schedule resource provide the availability details to these referenced
   * resource(s).
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected actor?: Reference[];

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   planningHorizon?: Period;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected comment?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _comment?: Element;


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

  /**
  * Gets the current value of field implicitRules if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getImplicitRulesOrElse(defaultValue: string): string {
      if (this.implicitRules == undefined || this.implicitRules == null ) { return defaultValue; }
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

  /**
  * Gets the current value of field language if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getLanguageOrElse(defaultValue: string): string {
      if (this.language == undefined || this.language == null ) { return defaultValue; }
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

  /**
  * Gets the current value of field contained if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getContainedOrElse(defaultValue: ResourceList[]): ResourceList[] {
      if (this.contained == undefined || this.contained == null ) { return defaultValue; }
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
  /**
  * Removes all elements from the array identifier, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteIdentifierAll(): Identifier[] {
    if (typeof(this.identifier) !== 'undefined') {
       const oldArray = this.identifier;
       delete this.identifier;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array identifier, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteIdentifierBySplice(start: number, deleteCount?: number): Identifier[] {
    if (typeof(this.identifier) !== 'undefined') {
       return this.identifier.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field identifier.
  * @returns the value  or undefined
  */
  public getIdentifier(): Identifier[] | undefined {
      return this.identifier;
  }

  /**
  * Gets the current value of field identifier if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getIdentifierOrElse(defaultValue: Identifier[]): Identifier[] {
      if (this.identifier == undefined || this.identifier == null ) { return defaultValue; }
      return this.identifier;
  }

  public addServiceCategory(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.serviceCategory) !== 'undefined') {
         delete this.serviceCategory;
      }
      return;
    }
    
    if (typeof(this.serviceCategory) === 'undefined') {
      this.serviceCategory =  [];
    }
    this.serviceCategory.push(newValue);
  }
  /**
  * Removes all elements from the array serviceCategory, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteServiceCategoryAll(): CodeableConcept[] {
    if (typeof(this.serviceCategory) !== 'undefined') {
       const oldArray = this.serviceCategory;
       delete this.serviceCategory;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array serviceCategory, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteServiceCategoryBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.serviceCategory) !== 'undefined') {
       return this.serviceCategory.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field serviceCategory.
  * @returns the value  or undefined
  */
  public getServiceCategory(): CodeableConcept[] | undefined {
      return this.serviceCategory;
  }

  /**
  * Gets the current value of field serviceCategory if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getServiceCategoryOrElse(defaultValue: CodeableConcept[]): CodeableConcept[] {
      if (this.serviceCategory == undefined || this.serviceCategory == null ) { return defaultValue; }
      return this.serviceCategory;
  }

  public addServiceType(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.serviceType) !== 'undefined') {
         delete this.serviceType;
      }
      return;
    }
    
    if (typeof(this.serviceType) === 'undefined') {
      this.serviceType =  [];
    }
    this.serviceType.push(newValue);
  }
  /**
  * Removes all elements from the array serviceType, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteServiceTypeAll(): CodeableConcept[] {
    if (typeof(this.serviceType) !== 'undefined') {
       const oldArray = this.serviceType;
       delete this.serviceType;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array serviceType, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteServiceTypeBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.serviceType) !== 'undefined') {
       return this.serviceType.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field serviceType.
  * @returns the value  or undefined
  */
  public getServiceType(): CodeableConcept[] | undefined {
      return this.serviceType;
  }

  /**
  * Gets the current value of field serviceType if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getServiceTypeOrElse(defaultValue: CodeableConcept[]): CodeableConcept[] {
      if (this.serviceType == undefined || this.serviceType == null ) { return defaultValue; }
      return this.serviceType;
  }

  public addSpecialty(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.specialty) !== 'undefined') {
         delete this.specialty;
      }
      return;
    }
    
    if (typeof(this.specialty) === 'undefined') {
      this.specialty =  [];
    }
    this.specialty.push(newValue);
  }
  /**
  * Removes all elements from the array specialty, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteSpecialtyAll(): CodeableConcept[] {
    if (typeof(this.specialty) !== 'undefined') {
       const oldArray = this.specialty;
       delete this.specialty;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array specialty, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteSpecialtyBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.specialty) !== 'undefined') {
       return this.specialty.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field specialty.
  * @returns the value  or undefined
  */
  public getSpecialty(): CodeableConcept[] | undefined {
      return this.specialty;
  }

  /**
  * Gets the current value of field specialty if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getSpecialtyOrElse(defaultValue: CodeableConcept[]): CodeableConcept[] {
      if (this.specialty == undefined || this.specialty == null ) { return defaultValue; }
      return this.specialty;
  }

  public addActor(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.actor) !== 'undefined') {
         delete this.actor;
      }
      return;
    }
    
    if (typeof(this.actor) === 'undefined') {
      this.actor =  [];
    }
    this.actor.push(newValue);
  }
  /**
  * Removes all elements from the array actor, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteActorAll(): Reference[] {
    if (typeof(this.actor) !== 'undefined') {
       const oldArray = this.actor;
       delete this.actor;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array actor, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteActorBySplice(start: number, deleteCount?: number): Reference[] {
    if (typeof(this.actor) !== 'undefined') {
       return this.actor.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field actor.
  * @returns the value  or undefined
  */
  public getActor(): Reference[] | undefined {
      return this.actor;
  }

  /**
  * Gets the current value of field actor if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getActorOrElse(defaultValue: Reference[]): Reference[] {
      if (this.actor == undefined || this.actor == null ) { return defaultValue; }
      return this.actor;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setComment(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.comment) !== 'undefined') {
         delete this.comment;
      }
      return;
    }
    
    if (REGEX_COMMENT.test(newValue)) {
      this.comment = newValue
    } else {
      throw new Error("Invalid value pattern for comment of " + newValue);
    }
  }
  
  public getCommentPattern(): string {
    return REGEX_COMMENT.source;
  }
  
  /**
  * Gets the current value of field comment.
  * @returns the value  or undefined
  */
  public getComment(): string | undefined {
      return this.comment;
  }

  /**
  * Gets the current value of field comment if it exists,
  * but if it is 'undefined' it will return the value supplied
  * as the parameter.
  * @returns the value or the parameter value
  */
  public getCommentOrElse(defaultValue: string): string {
      if (this.comment == undefined || this.comment == null ) { return defaultValue; }
      return this.comment;
  }


}


