import { Type } from 'class-transformer';
import { REGEX_ID_000, REGEX_IMPLICITRULES, REGEX_LANGUAGE, REGEX_DESCRIPTION, REGEX_COMMENT } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Identifier, Meta, Narrative, Reference, ResourceList, Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItem, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Contract, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceDefinition, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, ExplanationOfBenefit, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProduct, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NamingSystem, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, Schedule, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, StructureMap, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription, SubstanceSpecificationCode, SubstanceSpecificationMoiety, SubstanceSpecificationMolecularWeight, SubstanceSpecificationName, SubstanceSpecificationProperty, SubstanceSpecificationRelationship, SubstanceSpecificationStructure } from './index';



/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/SubstanceSpecification
 */
export class SubstanceSpecification {
  /**
   * This is a SubstanceSpecification resource
   */
     resourceType = "SubstanceSpecification";

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
   * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for
   * business identifiers.
   */
  @Type(() => Identifier)
   identifier?: Identifier;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   type?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   status?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   domain?: CodeableConcept;

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
   * Supporting literature.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected source?: Reference[];

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

  /**
   * Moiety, for structural modifications.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SubstanceSpecificationMoiety)
  protected moiety?: SubstanceSpecificationMoiety[];

  /**
   * General specifications for this substance, including how it is related to other substances.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SubstanceSpecificationProperty)
  protected property?: SubstanceSpecificationProperty[];

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   referenceInformation?: Reference;

  /**
   * The detailed description of a substance, typically at a level beyond what is used for prescribing.
   */
  @Type(() => SubstanceSpecificationStructure)
   structure?: SubstanceSpecificationStructure;

  /**
   * Codes associated with the substance.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SubstanceSpecificationCode)
  protected code?: SubstanceSpecificationCode[];

  /**
   * Names applicable to this substance.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SubstanceSpecificationName)
  protected name?: SubstanceSpecificationName[];

  /**
   * The molecular weight or weight range (for proteins, polymers or nucleic acids).
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SubstanceSpecificationMolecularWeight)
  protected molecularWeight?: SubstanceSpecificationMolecularWeight[];

  /**
   * A link between this substance and another, with details of the relationship.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => SubstanceSpecificationRelationship)
  protected relationship?: SubstanceSpecificationRelationship[];

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   nucleicAcid?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   polymer?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   protein?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   sourceMaterial?: Reference;


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

  public addSource(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.source) !== 'undefined') {
         delete this.source;
      }
      return;
    }
    
    if (typeof(this.source) === 'undefined') {
      this.source =  [];
    }
    this.source.push(newValue);
  }
  /**
  * Removes all elements from the array source, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteSourceAll(): Reference[] {
    if (typeof(this.source) !== 'undefined') {
       const oldArray = this.source;
       delete this.source;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array source, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteSourceBySplice(start: number, deleteCount?: number): Reference[] {
    if (typeof(this.source) !== 'undefined') {
       return this.source.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field source.
  * @returns the value  or undefined
  */
  public getSource(): Reference[] | undefined {
      return this.source;
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

  public addMoiety(newValue: SubstanceSpecificationMoiety) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.moiety) !== 'undefined') {
         delete this.moiety;
      }
      return;
    }
    
    if (typeof(this.moiety) === 'undefined') {
      this.moiety =  [];
    }
    this.moiety.push(newValue);
  }
  /**
  * Removes all elements from the array moiety, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteMoietyAll(): SubstanceSpecificationMoiety[] {
    if (typeof(this.moiety) !== 'undefined') {
       const oldArray = this.moiety;
       delete this.moiety;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array moiety, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteMoietyBySplice(start: number, deleteCount?: number): SubstanceSpecificationMoiety[] {
    if (typeof(this.moiety) !== 'undefined') {
       return this.moiety.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field moiety.
  * @returns the value  or undefined
  */
  public getMoiety(): SubstanceSpecificationMoiety[] | undefined {
      return this.moiety;
  }

  public addProperty(newValue: SubstanceSpecificationProperty) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.property) !== 'undefined') {
         delete this.property;
      }
      return;
    }
    
    if (typeof(this.property) === 'undefined') {
      this.property =  [];
    }
    this.property.push(newValue);
  }
  /**
  * Removes all elements from the array property, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deletePropertyAll(): SubstanceSpecificationProperty[] {
    if (typeof(this.property) !== 'undefined') {
       const oldArray = this.property;
       delete this.property;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array property, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deletePropertyBySplice(start: number, deleteCount?: number): SubstanceSpecificationProperty[] {
    if (typeof(this.property) !== 'undefined') {
       return this.property.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field property.
  * @returns the value  or undefined
  */
  public getProperty(): SubstanceSpecificationProperty[] | undefined {
      return this.property;
  }

  public addCode(newValue: SubstanceSpecificationCode) {
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
  /**
  * Removes all elements from the array code, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteCodeAll(): SubstanceSpecificationCode[] {
    if (typeof(this.code) !== 'undefined') {
       const oldArray = this.code;
       delete this.code;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array code, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteCodeBySplice(start: number, deleteCount?: number): SubstanceSpecificationCode[] {
    if (typeof(this.code) !== 'undefined') {
       return this.code.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field code.
  * @returns the value  or undefined
  */
  public getCode(): SubstanceSpecificationCode[] | undefined {
      return this.code;
  }

  public addName(newValue: SubstanceSpecificationName) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.name) !== 'undefined') {
         delete this.name;
      }
      return;
    }
    
    if (typeof(this.name) === 'undefined') {
      this.name =  [];
    }
    this.name.push(newValue);
  }
  /**
  * Removes all elements from the array name, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteNameAll(): SubstanceSpecificationName[] {
    if (typeof(this.name) !== 'undefined') {
       const oldArray = this.name;
       delete this.name;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array name, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteNameBySplice(start: number, deleteCount?: number): SubstanceSpecificationName[] {
    if (typeof(this.name) !== 'undefined') {
       return this.name.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field name.
  * @returns the value  or undefined
  */
  public getName(): SubstanceSpecificationName[] | undefined {
      return this.name;
  }

  public addMolecularWeight(newValue: SubstanceSpecificationMolecularWeight) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.molecularWeight) !== 'undefined') {
         delete this.molecularWeight;
      }
      return;
    }
    
    if (typeof(this.molecularWeight) === 'undefined') {
      this.molecularWeight =  [];
    }
    this.molecularWeight.push(newValue);
  }
  /**
  * Removes all elements from the array molecularWeight, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteMolecularWeightAll(): SubstanceSpecificationMolecularWeight[] {
    if (typeof(this.molecularWeight) !== 'undefined') {
       const oldArray = this.molecularWeight;
       delete this.molecularWeight;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array molecularWeight, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteMolecularWeightBySplice(start: number, deleteCount?: number): SubstanceSpecificationMolecularWeight[] {
    if (typeof(this.molecularWeight) !== 'undefined') {
       return this.molecularWeight.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field molecularWeight.
  * @returns the value  or undefined
  */
  public getMolecularWeight(): SubstanceSpecificationMolecularWeight[] | undefined {
      return this.molecularWeight;
  }

  public addRelationship(newValue: SubstanceSpecificationRelationship) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.relationship) !== 'undefined') {
         delete this.relationship;
      }
      return;
    }
    
    if (typeof(this.relationship) === 'undefined') {
      this.relationship =  [];
    }
    this.relationship.push(newValue);
  }
  /**
  * Removes all elements from the array relationship, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteRelationshipAll(): SubstanceSpecificationRelationship[] {
    if (typeof(this.relationship) !== 'undefined') {
       const oldArray = this.relationship;
       delete this.relationship;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array relationship, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteRelationshipBySplice(start: number, deleteCount?: number): SubstanceSpecificationRelationship[] {
    if (typeof(this.relationship) !== 'undefined') {
       return this.relationship.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field relationship.
  * @returns the value  or undefined
  */
  public getRelationship(): SubstanceSpecificationRelationship[] | undefined {
      return this.relationship;
  }


}


