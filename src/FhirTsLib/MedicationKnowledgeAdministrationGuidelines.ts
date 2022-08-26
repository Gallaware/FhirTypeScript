import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Extension, MedicationKnowledgeDosage, MedicationKnowledgePatientCharacteristics, Reference } from './FhirType';



/**
 * Information about a medication that is used to support knowledge.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/MedicationKnowledge_AdministrationGuidelines
 */
export class MedicationKnowledgeAdministrationGuidelines {
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
   * Dosage for the medication for the specific guidelines.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => MedicationKnowledgeDosage)
  protected dosage?: MedicationKnowledgeDosage[];

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   indicationCodeableConcept?: CodeableConcept;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   indicationReference?: Reference;

  /**
   * Characteristics of the patient that are relevant to the administration guidelines (for example,
   * height, weight, gender, etc.).
   * Field access restricted because there are specific valid values.
   */
  @Type(() => MedicationKnowledgePatientCharacteristics)
  protected patientCharacteristics?: MedicationKnowledgePatientCharacteristics[];


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

  public addDosage(newValue: MedicationKnowledgeDosage) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.dosage) !== 'undefined') {
         delete this.dosage;
      }
      return;
    }
    
    if (typeof(this.dosage) === 'undefined') {
      this.dosage =  [];
    }
    this.dosage.push(newValue);
  }

  public getDosage(): MedicationKnowledgeDosage[] | undefined {
      return this.dosage;
  }

  public addPatientCharacteristics(newValue: MedicationKnowledgePatientCharacteristics) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.patientCharacteristics) !== 'undefined') {
         delete this.patientCharacteristics;
      }
      return;
    }
    
    if (typeof(this.patientCharacteristics) === 'undefined') {
      this.patientCharacteristics =  [];
    }
    this.patientCharacteristics.push(newValue);
  }

  public getPatientCharacteristics(): MedicationKnowledgePatientCharacteristics[] | undefined {
      return this.patientCharacteristics;
  }


}

