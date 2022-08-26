import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, ExplanationOfBenefitAdjudication, ExplanationOfBenefitSubDetail1, Extension, Money, Quantity } from './FhirType';



/**
 * This resource provides: the claim details; adjudication details from the processing of a Claim; and
 * optionally account balance information, for informing the subscriber of the benefits provided.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ExplanationOfBenefit_Detail1
 */
export class ExplanationOfBenefitDetail1 {
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
   * The adjudication results.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitAdjudication)
  protected adjudication?: ExplanationOfBenefitAdjudication[];

  /**
   * The third-tier service adjudications for payor added services.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ExplanationOfBenefitSubDetail1)
  protected subDetail?: ExplanationOfBenefitSubDetail1[];


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

  public getModifier(): CodeableConcept[] | undefined {
      return this.modifier;
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

  public getAdjudication(): ExplanationOfBenefitAdjudication[] | undefined {
      return this.adjudication;
  }

  public addSubDetail(newValue: ExplanationOfBenefitSubDetail1) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.subDetail) !== 'undefined') {
         delete this.subDetail;
      }
      return;
    }
    
    if (typeof(this.subDetail) === 'undefined') {
      this.subDetail =  [];
    }
    this.subDetail.push(newValue);
  }

  public getSubDetail(): ExplanationOfBenefitSubDetail1[] | undefined {
      return this.subDetail;
  }


}


