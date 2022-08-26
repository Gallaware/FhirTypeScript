import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_TEXT, REGEX_PATIENTINSTRUCTION } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, DosageDoseAndRate, Element, Extension, Quantity, Ratio, Timing } from './FhirType';



/**
 * Indicates how the medication is/was taken or should be taken by the patient.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Dosage
 */
export class Dosage {
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
   * A whole number
   */
   sequence?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _sequence?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected text?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _text?: Element;

  /**
   * Supplemental instructions to the patient on how to take the medication  (e.g. "with meals" or"take
   * half to one hour before food") or warnings for the patient about the medication (e.g. "may cause
   * drowsiness" or "avoid exposure of skin to direct sunlight or sunlamps").
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected additionalInstruction?: CodeableConcept[];

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected patientInstruction?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _patientInstruction?: Element;

  /**
   * Specifies an event that may occur multiple times. Timing schedules are used to record when things
   * are planned, expected or requested to occur. The most common usage is in dosage instructions for
   * medications. They are also used when planning care of various kinds, and may be used for reporting
   * the schedule to which past regular activities were carried out.
   */
  @Type(() => Timing)
   timing?: Timing;

  /**
   * Indicates whether the Medication is only taken when needed within a specific dosing schedule
   * (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept).
   */
   asNeededBoolean?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _asNeededBoolean?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   asNeededCodeableConcept?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   site?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   route?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   method?: CodeableConcept;

  /**
   * The amount of medication administered.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => DosageDoseAndRate)
  protected doseAndRate?: DosageDoseAndRate[];

  /**
   * A relationship of two Quantity values - expressed as a numerator and a denominator.
   */
  @Type(() => Ratio)
   maxDosePerPeriod?: Ratio;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   maxDosePerAdministration?: Quantity;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   maxDosePerLifetime?: Quantity;


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
  public setText(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.text) !== 'undefined') {
         delete this.text;
      }
      return;
    }
    
    if (REGEX_TEXT.test(newValue)) {
      this.text = newValue
    } else {
      throw new Error("Invalid value pattern for text of " + newValue);
    }
  }
  
  public getTextPattern(): string {
    return REGEX_TEXT.source;
  }
  

  public getText(): string | undefined {
      return this.text;
  }

  public addAdditionalInstruction(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.additionalInstruction) !== 'undefined') {
         delete this.additionalInstruction;
      }
      return;
    }
    
    if (typeof(this.additionalInstruction) === 'undefined') {
      this.additionalInstruction =  [];
    }
    this.additionalInstruction.push(newValue);
  }

  public getAdditionalInstruction(): CodeableConcept[] | undefined {
      return this.additionalInstruction;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setPatientInstruction(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.patientInstruction) !== 'undefined') {
         delete this.patientInstruction;
      }
      return;
    }
    
    if (REGEX_PATIENTINSTRUCTION.test(newValue)) {
      this.patientInstruction = newValue
    } else {
      throw new Error("Invalid value pattern for patientInstruction of " + newValue);
    }
  }
  
  public getPatientInstructionPattern(): string {
    return REGEX_PATIENTINSTRUCTION.source;
  }
  

  public getPatientInstruction(): string | undefined {
      return this.patientInstruction;
  }

  public addDoseAndRate(newValue: DosageDoseAndRate) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.doseAndRate) !== 'undefined') {
         delete this.doseAndRate;
      }
      return;
    }
    
    if (typeof(this.doseAndRate) === 'undefined') {
      this.doseAndRate =  [];
    }
    this.doseAndRate.push(newValue);
  }

  public getDoseAndRate(): DosageDoseAndRate[] | undefined {
      return this.doseAndRate;
  }


}


