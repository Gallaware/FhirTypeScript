import { Type } from 'class-transformer';
import { REGEX_ID_000, REGEX_IMPLICITRULES, REGEX_LANGUAGE } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Coding, Element, Extension, Identifier, MarketingStatus, MedicinalProductManufacturingBusinessOperation, MedicinalProductName, MedicinalProductSpecialDesignation, Meta, Narrative, Reference, ResourceList, Account, ActivityDefinition, AdverseEvent, AllergyIntolerance, Appointment, AppointmentResponse, AuditEvent, Basic, Binary, BiologicallyDerivedProduct, BodyStructure, Bundle, CapabilityStatement, CarePlan, CareTeam, CatalogEntry, ChargeItem, ChargeItemDefinition, Claim, ClaimResponse, ClinicalImpression, CodeSystem, Communication, CommunicationRequest, CompartmentDefinition, Composition, ConceptMap, Condition, Consent, Contract, Coverage, CoverageEligibilityRequest, CoverageEligibilityResponse, DetectedIssue, Device, DeviceDefinition, DeviceMetric, DeviceRequest, DeviceUseStatement, DiagnosticReport, DocumentManifest, DocumentReference, EffectEvidenceSynthesis, Encounter, Endpoint, EnrollmentRequest, EnrollmentResponse, EpisodeOfCare, EventDefinition, Evidence, EvidenceVariable, ExampleScenario, ExplanationOfBenefit, FamilyMemberHistory, Flag, Goal, GraphDefinition, Group, GuidanceResponse, HealthcareService, ImagingStudy, Immunization, ImmunizationEvaluation, ImmunizationRecommendation, ImplementationGuide, InsurancePlan, Invoice, Library, Linkage, List, Location, Measure, MeasureReport, Media, Medication, MedicationAdministration, MedicationDispense, MedicationKnowledge, MedicationRequest, MedicationStatement, MedicinalProductAuthorization, MedicinalProductContraindication, MedicinalProductIndication, MedicinalProductIngredient, MedicinalProductInteraction, MedicinalProductManufactured, MedicinalProductPackaged, MedicinalProductPharmaceutical, MedicinalProductUndesirableEffect, MessageDefinition, MessageHeader, MolecularSequence, NamingSystem, NutritionOrder, Observation, ObservationDefinition, OperationDefinition, OperationOutcome, Organization, OrganizationAffiliation, Parameters, Patient, PaymentNotice, PaymentReconciliation, Person, PlanDefinition, Practitioner, PractitionerRole, Procedure, Provenance, Questionnaire, QuestionnaireResponse, RelatedPerson, RequestGroup, ResearchDefinition, ResearchElementDefinition, ResearchStudy, ResearchSubject, RiskAssessment, RiskEvidenceSynthesis, Schedule, SearchParameter, ServiceRequest, Slot, Specimen, SpecimenDefinition, StructureDefinition, StructureMap, Subscription, Substance, SubstanceNucleicAcid, SubstancePolymer, SubstanceProtein, SubstanceReferenceInformation, SubstanceSourceMaterial, SubstanceSpecification, SupplyDelivery, SupplyRequest, Task, TerminologyCapabilities, TestReport, TestScript, ValueSet, VerificationResult, VisionPrescription } from './index';



/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g.
 * regulatory use).
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/MedicinalProduct
 */
export class MedicinalProduct {
  /**
   * This is a MedicinalProduct resource
   */
     resourceType = "MedicinalProduct";

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
   * Business identifier for this product. Could be an MPID.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Identifier)
  protected identifier?: Identifier[];

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   type?: CodeableConcept;

  /**
   * A reference to a code defined by a terminology system.
   */
  @Type(() => Coding)
   domain?: Coding;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   combinedPharmaceuticalDoseForm?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   legalStatusOfSupply?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   additionalMonitoringIndicator?: CodeableConcept;

  /**
   * Whether the Medicinal Product is subject to special measures for regulatory reasons.
   * Field access restricted because there are specific valid values.
   */
  protected specialMeasures?: string[];

  /**
   * Extensions for specialMeasures
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _specialMeasures?: Element[];

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   paediatricUseIndicator?: CodeableConcept;

  /**
   * Allows the product to be classified by various systems.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected productClassification?: CodeableConcept[];

  /**
   * Marketing status of the medicinal product, in contrast to marketing authorizaton.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => MarketingStatus)
  protected marketingStatus?: MarketingStatus[];

  /**
   * Pharmaceutical aspects of product.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected pharmaceuticalProduct?: Reference[];

  /**
   * Package representation for the product.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected packagedMedicinalProduct?: Reference[];

  /**
   * Supporting documentation, typically for regulatory submission.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected attachedDocument?: Reference[];

  /**
   * A master file for to the medicinal product (e.g. Pharmacovigilance System Master File).
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected masterFile?: Reference[];

  /**
   * A product specific contact, person (in a role), or an organization.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected contact?: Reference[];

  /**
   * Clinical trials or studies that this product is involved in.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected clinicalTrial?: Reference[];

  /**
   * The product's name, including full name and possibly coded parts.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => MedicinalProductName)
  protected name?: MedicinalProductName[];

  /**
   * Reference to another product, e.g. for linking authorised to investigational product.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Identifier)
  protected crossReference?: Identifier[];

  /**
   * An operation applied to the product, for manufacturing or adminsitrative purpose.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => MedicinalProductManufacturingBusinessOperation)
  protected manufacturingBusinessOperation?: MedicinalProductManufacturingBusinessOperation[];

  /**
   * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => MedicinalProductSpecialDesignation)
  protected specialDesignation?: MedicinalProductSpecialDesignation[];


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

  public addSpecialMeasures(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.specialMeasures) !== 'undefined') {
         delete this.specialMeasures;
      }
      return;
    }
    
    if (typeof(this.specialMeasures) === 'undefined') {
      this.specialMeasures =  [];
    }
    this.specialMeasures.push(newValue);
  }

  public getSpecialMeasures(): string[] | undefined {
      return this.specialMeasures;
  }

  public add_specialMeasures(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._specialMeasures) !== 'undefined') {
         delete this._specialMeasures;
      }
      return;
    }
    
    if (typeof(this._specialMeasures) === 'undefined') {
      this._specialMeasures =  [];
    }
    this._specialMeasures.push(newValue);
  }

  public get_specialMeasures(): Element[] | undefined {
      return this._specialMeasures;
  }

  public addProductClassification(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.productClassification) !== 'undefined') {
         delete this.productClassification;
      }
      return;
    }
    
    if (typeof(this.productClassification) === 'undefined') {
      this.productClassification =  [];
    }
    this.productClassification.push(newValue);
  }

  public getProductClassification(): CodeableConcept[] | undefined {
      return this.productClassification;
  }

  public addMarketingStatus(newValue: MarketingStatus) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.marketingStatus) !== 'undefined') {
         delete this.marketingStatus;
      }
      return;
    }
    
    if (typeof(this.marketingStatus) === 'undefined') {
      this.marketingStatus =  [];
    }
    this.marketingStatus.push(newValue);
  }

  public getMarketingStatus(): MarketingStatus[] | undefined {
      return this.marketingStatus;
  }

  public addPharmaceuticalProduct(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.pharmaceuticalProduct) !== 'undefined') {
         delete this.pharmaceuticalProduct;
      }
      return;
    }
    
    if (typeof(this.pharmaceuticalProduct) === 'undefined') {
      this.pharmaceuticalProduct =  [];
    }
    this.pharmaceuticalProduct.push(newValue);
  }

  public getPharmaceuticalProduct(): Reference[] | undefined {
      return this.pharmaceuticalProduct;
  }

  public addPackagedMedicinalProduct(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.packagedMedicinalProduct) !== 'undefined') {
         delete this.packagedMedicinalProduct;
      }
      return;
    }
    
    if (typeof(this.packagedMedicinalProduct) === 'undefined') {
      this.packagedMedicinalProduct =  [];
    }
    this.packagedMedicinalProduct.push(newValue);
  }

  public getPackagedMedicinalProduct(): Reference[] | undefined {
      return this.packagedMedicinalProduct;
  }

  public addAttachedDocument(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.attachedDocument) !== 'undefined') {
         delete this.attachedDocument;
      }
      return;
    }
    
    if (typeof(this.attachedDocument) === 'undefined') {
      this.attachedDocument =  [];
    }
    this.attachedDocument.push(newValue);
  }

  public getAttachedDocument(): Reference[] | undefined {
      return this.attachedDocument;
  }

  public addMasterFile(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.masterFile) !== 'undefined') {
         delete this.masterFile;
      }
      return;
    }
    
    if (typeof(this.masterFile) === 'undefined') {
      this.masterFile =  [];
    }
    this.masterFile.push(newValue);
  }

  public getMasterFile(): Reference[] | undefined {
      return this.masterFile;
  }

  public addContact(newValue: Reference) {
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

  public getContact(): Reference[] | undefined {
      return this.contact;
  }

  public addClinicalTrial(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.clinicalTrial) !== 'undefined') {
         delete this.clinicalTrial;
      }
      return;
    }
    
    if (typeof(this.clinicalTrial) === 'undefined') {
      this.clinicalTrial =  [];
    }
    this.clinicalTrial.push(newValue);
  }

  public getClinicalTrial(): Reference[] | undefined {
      return this.clinicalTrial;
  }

  public addName(newValue: MedicinalProductName) {
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

  public getName(): MedicinalProductName[] | undefined {
      return this.name;
  }

  public addCrossReference(newValue: Identifier) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.crossReference) !== 'undefined') {
         delete this.crossReference;
      }
      return;
    }
    
    if (typeof(this.crossReference) === 'undefined') {
      this.crossReference =  [];
    }
    this.crossReference.push(newValue);
  }

  public getCrossReference(): Identifier[] | undefined {
      return this.crossReference;
  }

  public addManufacturingBusinessOperation(newValue: MedicinalProductManufacturingBusinessOperation) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.manufacturingBusinessOperation) !== 'undefined') {
         delete this.manufacturingBusinessOperation;
      }
      return;
    }
    
    if (typeof(this.manufacturingBusinessOperation) === 'undefined') {
      this.manufacturingBusinessOperation =  [];
    }
    this.manufacturingBusinessOperation.push(newValue);
  }

  public getManufacturingBusinessOperation(): MedicinalProductManufacturingBusinessOperation[] | undefined {
      return this.manufacturingBusinessOperation;
  }

  public addSpecialDesignation(newValue: MedicinalProductSpecialDesignation) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.specialDesignation) !== 'undefined') {
         delete this.specialDesignation;
      }
      return;
    }
    
    if (typeof(this.specialDesignation) === 'undefined') {
      this.specialDesignation =  [];
    }
    this.specialDesignation.push(newValue);
  }

  public getSpecialDesignation(): MedicinalProductSpecialDesignation[] | undefined {
      return this.specialDesignation;
  }


}


