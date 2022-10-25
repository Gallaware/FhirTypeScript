import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_SERVICEDDATE } from '../FhirTsLibValidation/FhirRegex';
import { Address, CodeableConcept, Element, ExplanationOfBenefitAdjudication, ExplanationOfBenefitDetail, Extension, Money, Period, Quantity, Reference } from './index';



/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and
 * optionally account balance information, for informing the subscriber of the benefits provided.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ExplanationOfBenefit_Item
 */
export class ExplanationOfBenefitItem {
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
   * An integer with a value that is positive (e.g. >0)
   */
   sequence?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _sequence?: Element;

  /**
   * Care team members related to this service or product.
   * Field access restricted because there are specific valid values.
   */
  protected careTeamSequence?: number[];

  /**
   * Extensions for careTeamSequence
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _careTeamSequence?: Element[];

  /**
   * Diagnoses applicable for this service or product.
   * Field access restricted because there are specific valid values.
   */
  protected diagnosisSequence?: number[];

  /**
   * Extensions for diagnosisSequence
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _diagnosisSequence?: Element[];

  /**
   * Procedures applicable for this service or product.
   * Field access restricted because there are specific valid values.
   */
  protected procedureSequence?: number[];

  /**
   * Extensions for procedureSequence
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _procedureSequence?: Element[];

  /**
   * Exceptions, special conditions and supporting information applicable for this service or product.
   * Field access restricted because there are specific valid values.
   */
  protected informationSequence?: number[];

  /**
   * Extensions for informationSequence
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _informationSequence?: Element[];

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   revenue?: CodeableConcept;

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
   productOrService?: CodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for the product or service.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected modifier?: CodeableConcept[];

  /**
   * Identifies the program under which this may be recovered.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected programCode?: CodeableConcept[];

  /**
   * The date or dates when the service or product was supplied, performed or completed.
   * Field access restricted because there are specific valid values.
   */
  protected servicedDate?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _servicedDate?: Element;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   servicedPeriod?: Period;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   locationCodeableConcept?: CodeableConcept;

  /**
   * An address expressed using postal conventions (as opposed to GPS or other location definition
   * formats).  This data type may be used to convey addresses for use in delivering mail as well as
   * for visiting locations which might not be valid for mail delivery.  There are a variety of postal
   * address formats defined around the world.
   */
  @Type(() => Address)
   locationAddress?: Address;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   locationReference?: Reference;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   quantity?: Quantity;

  /**
   * An amount of economic utility in some recognized currency.
   */
  @Type(() => Money)
   unitPrice?: Money;

  /**
   * A rational number with implicit precision
   */
   factor?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _factor?: Element;

  /**
   * An amount of economic utility in some recognized currency.
   */
  @Type(() => Money)
   net?: Money;

  /**
   * Unique Device Identifiers associated with this line item.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected udi?: Reference[];

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   bodySite?: CodeableConcept;

  /**
   * A region or surface of the bodySite, e.g. limb region or tooth surface(s).
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected subSite?: CodeableConcept[];

  /**
   * A billed item may include goods or services provided in multiple encounters.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Reference)
  protected encounter?: Reference[];

  /**
   * The numbers associated with notes below which apply to the adjudication of this item.
   * Field access restricted because there are specific valid values.
   */
  protected noteNumber?: number[];

  /**
   * Extensions for noteNumber
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _noteNumber?: Element[];

  /**
   * If this item is a group then the values here are a summary of the adjudication of the detail items.
   * If this item is a simple product or service then this is the result of the adjudication of this
   * item.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitAdjudication)
  protected adjudication?: ExplanationOfBenefitAdjudication[];

  /**
   * Second-tier of goods and services.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitDetail)
  protected detail?: ExplanationOfBenefitDetail[];


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

  public addCareTeamSequence(newValue: number) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.careTeamSequence) !== 'undefined') {
         delete this.careTeamSequence;
      }
      return;
    }
    
    if (typeof(this.careTeamSequence) === 'undefined') {
      this.careTeamSequence =  [];
    }
    this.careTeamSequence.push(newValue);
  }
  /**
  * Removes all elements from the array careTeamSequence, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteCareTeamSequenceAll(): number[] {
    if (typeof(this.careTeamSequence) !== 'undefined') {
       const oldArray = this.careTeamSequence;
       delete this.careTeamSequence;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array careTeamSequence, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteCareTeamSequenceBySplice(start: number, deleteCount?: number): number[] {
    if (typeof(this.careTeamSequence) !== 'undefined') {
       return this.careTeamSequence.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field careTeamSequence.
  * @returns the value  or undefined
  */
  public getCareTeamSequence(): number[] | undefined {
      return this.careTeamSequence;
  }

  public add_careTeamSequence(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._careTeamSequence) !== 'undefined') {
         delete this._careTeamSequence;
      }
      return;
    }
    
    if (typeof(this._careTeamSequence) === 'undefined') {
      this._careTeamSequence =  [];
    }
    this._careTeamSequence.push(newValue);
  }
  /**
  * Removes all elements from the array _careTeamSequence, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public delete_careTeamSequenceAll(): Element[] {
    if (typeof(this._careTeamSequence) !== 'undefined') {
       const oldArray = this._careTeamSequence;
       delete this._careTeamSequence;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array _careTeamSequence, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public delete_careTeamSequenceBySplice(start: number, deleteCount?: number): Element[] {
    if (typeof(this._careTeamSequence) !== 'undefined') {
       return this._careTeamSequence.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field _careTeamSequence.
  * @returns the value  or undefined
  */
  public get_careTeamSequence(): Element[] | undefined {
      return this._careTeamSequence;
  }

  public addDiagnosisSequence(newValue: number) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.diagnosisSequence) !== 'undefined') {
         delete this.diagnosisSequence;
      }
      return;
    }
    
    if (typeof(this.diagnosisSequence) === 'undefined') {
      this.diagnosisSequence =  [];
    }
    this.diagnosisSequence.push(newValue);
  }
  /**
  * Removes all elements from the array diagnosisSequence, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteDiagnosisSequenceAll(): number[] {
    if (typeof(this.diagnosisSequence) !== 'undefined') {
       const oldArray = this.diagnosisSequence;
       delete this.diagnosisSequence;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array diagnosisSequence, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteDiagnosisSequenceBySplice(start: number, deleteCount?: number): number[] {
    if (typeof(this.diagnosisSequence) !== 'undefined') {
       return this.diagnosisSequence.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field diagnosisSequence.
  * @returns the value  or undefined
  */
  public getDiagnosisSequence(): number[] | undefined {
      return this.diagnosisSequence;
  }

  public add_diagnosisSequence(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._diagnosisSequence) !== 'undefined') {
         delete this._diagnosisSequence;
      }
      return;
    }
    
    if (typeof(this._diagnosisSequence) === 'undefined') {
      this._diagnosisSequence =  [];
    }
    this._diagnosisSequence.push(newValue);
  }
  /**
  * Removes all elements from the array _diagnosisSequence, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public delete_diagnosisSequenceAll(): Element[] {
    if (typeof(this._diagnosisSequence) !== 'undefined') {
       const oldArray = this._diagnosisSequence;
       delete this._diagnosisSequence;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array _diagnosisSequence, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public delete_diagnosisSequenceBySplice(start: number, deleteCount?: number): Element[] {
    if (typeof(this._diagnosisSequence) !== 'undefined') {
       return this._diagnosisSequence.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field _diagnosisSequence.
  * @returns the value  or undefined
  */
  public get_diagnosisSequence(): Element[] | undefined {
      return this._diagnosisSequence;
  }

  public addProcedureSequence(newValue: number) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.procedureSequence) !== 'undefined') {
         delete this.procedureSequence;
      }
      return;
    }
    
    if (typeof(this.procedureSequence) === 'undefined') {
      this.procedureSequence =  [];
    }
    this.procedureSequence.push(newValue);
  }
  /**
  * Removes all elements from the array procedureSequence, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteProcedureSequenceAll(): number[] {
    if (typeof(this.procedureSequence) !== 'undefined') {
       const oldArray = this.procedureSequence;
       delete this.procedureSequence;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array procedureSequence, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteProcedureSequenceBySplice(start: number, deleteCount?: number): number[] {
    if (typeof(this.procedureSequence) !== 'undefined') {
       return this.procedureSequence.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field procedureSequence.
  * @returns the value  or undefined
  */
  public getProcedureSequence(): number[] | undefined {
      return this.procedureSequence;
  }

  public add_procedureSequence(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._procedureSequence) !== 'undefined') {
         delete this._procedureSequence;
      }
      return;
    }
    
    if (typeof(this._procedureSequence) === 'undefined') {
      this._procedureSequence =  [];
    }
    this._procedureSequence.push(newValue);
  }
  /**
  * Removes all elements from the array _procedureSequence, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public delete_procedureSequenceAll(): Element[] {
    if (typeof(this._procedureSequence) !== 'undefined') {
       const oldArray = this._procedureSequence;
       delete this._procedureSequence;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array _procedureSequence, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public delete_procedureSequenceBySplice(start: number, deleteCount?: number): Element[] {
    if (typeof(this._procedureSequence) !== 'undefined') {
       return this._procedureSequence.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field _procedureSequence.
  * @returns the value  or undefined
  */
  public get_procedureSequence(): Element[] | undefined {
      return this._procedureSequence;
  }

  public addInformationSequence(newValue: number) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.informationSequence) !== 'undefined') {
         delete this.informationSequence;
      }
      return;
    }
    
    if (typeof(this.informationSequence) === 'undefined') {
      this.informationSequence =  [];
    }
    this.informationSequence.push(newValue);
  }
  /**
  * Removes all elements from the array informationSequence, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteInformationSequenceAll(): number[] {
    if (typeof(this.informationSequence) !== 'undefined') {
       const oldArray = this.informationSequence;
       delete this.informationSequence;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array informationSequence, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteInformationSequenceBySplice(start: number, deleteCount?: number): number[] {
    if (typeof(this.informationSequence) !== 'undefined') {
       return this.informationSequence.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field informationSequence.
  * @returns the value  or undefined
  */
  public getInformationSequence(): number[] | undefined {
      return this.informationSequence;
  }

  public add_informationSequence(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._informationSequence) !== 'undefined') {
         delete this._informationSequence;
      }
      return;
    }
    
    if (typeof(this._informationSequence) === 'undefined') {
      this._informationSequence =  [];
    }
    this._informationSequence.push(newValue);
  }
  /**
  * Removes all elements from the array _informationSequence, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public delete_informationSequenceAll(): Element[] {
    if (typeof(this._informationSequence) !== 'undefined') {
       const oldArray = this._informationSequence;
       delete this._informationSequence;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array _informationSequence, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public delete_informationSequenceBySplice(start: number, deleteCount?: number): Element[] {
    if (typeof(this._informationSequence) !== 'undefined') {
       return this._informationSequence.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field _informationSequence.
  * @returns the value  or undefined
  */
  public get_informationSequence(): Element[] | undefined {
      return this._informationSequence;
  }

  public addModifier(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.modifier) !== 'undefined') {
         delete this.modifier;
      }
      return;
    }
    
    if (typeof(this.modifier) === 'undefined') {
      this.modifier =  [];
    }
    this.modifier.push(newValue);
  }
  /**
  * Removes all elements from the array modifier, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteModifierAll(): CodeableConcept[] {
    if (typeof(this.modifier) !== 'undefined') {
       const oldArray = this.modifier;
       delete this.modifier;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array modifier, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteModifierBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.modifier) !== 'undefined') {
       return this.modifier.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field modifier.
  * @returns the value  or undefined
  */
  public getModifier(): CodeableConcept[] | undefined {
      return this.modifier;
  }

  public addProgramCode(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.programCode) !== 'undefined') {
         delete this.programCode;
      }
      return;
    }
    
    if (typeof(this.programCode) === 'undefined') {
      this.programCode =  [];
    }
    this.programCode.push(newValue);
  }
  /**
  * Removes all elements from the array programCode, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteProgramCodeAll(): CodeableConcept[] {
    if (typeof(this.programCode) !== 'undefined') {
       const oldArray = this.programCode;
       delete this.programCode;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array programCode, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteProgramCodeBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.programCode) !== 'undefined') {
       return this.programCode.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field programCode.
  * @returns the value  or undefined
  */
  public getProgramCode(): CodeableConcept[] | undefined {
      return this.programCode;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setServicedDate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.servicedDate) !== 'undefined') {
         delete this.servicedDate;
      }
      return;
    }
    
    if (REGEX_SERVICEDDATE.test(newValue)) {
      this.servicedDate = newValue
    } else {
      throw new Error("Invalid value pattern for servicedDate of " + newValue);
    }
  }
  
  public getServicedDatePattern(): string {
    return REGEX_SERVICEDDATE.source;
  }
  
  /**
  * Gets the current value of field servicedDate.
  * @returns the value  or undefined
  */
  public getServicedDate(): string | undefined {
      return this.servicedDate;
  }

  public addUdi(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.udi) !== 'undefined') {
         delete this.udi;
      }
      return;
    }
    
    if (typeof(this.udi) === 'undefined') {
      this.udi =  [];
    }
    this.udi.push(newValue);
  }
  /**
  * Removes all elements from the array udi, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteUdiAll(): Reference[] {
    if (typeof(this.udi) !== 'undefined') {
       const oldArray = this.udi;
       delete this.udi;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array udi, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteUdiBySplice(start: number, deleteCount?: number): Reference[] {
    if (typeof(this.udi) !== 'undefined') {
       return this.udi.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field udi.
  * @returns the value  or undefined
  */
  public getUdi(): Reference[] | undefined {
      return this.udi;
  }

  public addSubSite(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.subSite) !== 'undefined') {
         delete this.subSite;
      }
      return;
    }
    
    if (typeof(this.subSite) === 'undefined') {
      this.subSite =  [];
    }
    this.subSite.push(newValue);
  }
  /**
  * Removes all elements from the array subSite, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteSubSiteAll(): CodeableConcept[] {
    if (typeof(this.subSite) !== 'undefined') {
       const oldArray = this.subSite;
       delete this.subSite;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array subSite, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteSubSiteBySplice(start: number, deleteCount?: number): CodeableConcept[] {
    if (typeof(this.subSite) !== 'undefined') {
       return this.subSite.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field subSite.
  * @returns the value  or undefined
  */
  public getSubSite(): CodeableConcept[] | undefined {
      return this.subSite;
  }

  public addEncounter(newValue: Reference) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.encounter) !== 'undefined') {
         delete this.encounter;
      }
      return;
    }
    
    if (typeof(this.encounter) === 'undefined') {
      this.encounter =  [];
    }
    this.encounter.push(newValue);
  }
  /**
  * Removes all elements from the array encounter, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteEncounterAll(): Reference[] {
    if (typeof(this.encounter) !== 'undefined') {
       const oldArray = this.encounter;
       delete this.encounter;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array encounter, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteEncounterBySplice(start: number, deleteCount?: number): Reference[] {
    if (typeof(this.encounter) !== 'undefined') {
       return this.encounter.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field encounter.
  * @returns the value  or undefined
  */
  public getEncounter(): Reference[] | undefined {
      return this.encounter;
  }

  public addNoteNumber(newValue: number) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.noteNumber) !== 'undefined') {
         delete this.noteNumber;
      }
      return;
    }
    
    if (typeof(this.noteNumber) === 'undefined') {
      this.noteNumber =  [];
    }
    this.noteNumber.push(newValue);
  }
  /**
  * Removes all elements from the array noteNumber, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteNoteNumberAll(): number[] {
    if (typeof(this.noteNumber) !== 'undefined') {
       const oldArray = this.noteNumber;
       delete this.noteNumber;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array noteNumber, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteNoteNumberBySplice(start: number, deleteCount?: number): number[] {
    if (typeof(this.noteNumber) !== 'undefined') {
       return this.noteNumber.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field noteNumber.
  * @returns the value  or undefined
  */
  public getNoteNumber(): number[] | undefined {
      return this.noteNumber;
  }

  public add_noteNumber(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._noteNumber) !== 'undefined') {
         delete this._noteNumber;
      }
      return;
    }
    
    if (typeof(this._noteNumber) === 'undefined') {
      this._noteNumber =  [];
    }
    this._noteNumber.push(newValue);
  }
  /**
  * Removes all elements from the array _noteNumber, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public delete_noteNumberAll(): Element[] {
    if (typeof(this._noteNumber) !== 'undefined') {
       const oldArray = this._noteNumber;
       delete this._noteNumber;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array _noteNumber, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public delete_noteNumberBySplice(start: number, deleteCount?: number): Element[] {
    if (typeof(this._noteNumber) !== 'undefined') {
       return this._noteNumber.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field _noteNumber.
  * @returns the value  or undefined
  */
  public get_noteNumber(): Element[] | undefined {
      return this._noteNumber;
  }

  public addAdjudication(newValue: ExplanationOfBenefitAdjudication) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.adjudication) !== 'undefined') {
         delete this.adjudication;
      }
      return;
    }
    
    if (typeof(this.adjudication) === 'undefined') {
      this.adjudication =  [];
    }
    this.adjudication.push(newValue);
  }
  /**
  * Removes all elements from the array adjudication, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteAdjudicationAll(): ExplanationOfBenefitAdjudication[] {
    if (typeof(this.adjudication) !== 'undefined') {
       const oldArray = this.adjudication;
       delete this.adjudication;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array adjudication, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteAdjudicationBySplice(start: number, deleteCount?: number): ExplanationOfBenefitAdjudication[] {
    if (typeof(this.adjudication) !== 'undefined') {
       return this.adjudication.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field adjudication.
  * @returns the value  or undefined
  */
  public getAdjudication(): ExplanationOfBenefitAdjudication[] | undefined {
      return this.adjudication;
  }

  public addDetail(newValue: ExplanationOfBenefitDetail) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.detail) !== 'undefined') {
         delete this.detail;
      }
      return;
    }
    
    if (typeof(this.detail) === 'undefined') {
      this.detail =  [];
    }
    this.detail.push(newValue);
  }
  /**
  * Removes all elements from the array detail, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteDetailAll(): ExplanationOfBenefitDetail[] {
    if (typeof(this.detail) !== 'undefined') {
       const oldArray = this.detail;
       delete this.detail;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array detail, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteDetailBySplice(start: number, deleteCount?: number): ExplanationOfBenefitDetail[] {
    if (typeof(this.detail) !== 'undefined') {
       return this.detail.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field detail.
  * @returns the value  or undefined
  */
  public getDetail(): ExplanationOfBenefitDetail[] | undefined {
      return this.detail;
  }


}


