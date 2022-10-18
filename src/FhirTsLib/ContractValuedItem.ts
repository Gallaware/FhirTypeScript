import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_EFFECTIVETIME, REGEX_PAYMENT, REGEX_PAYMENTDATE } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Identifier, Money, Quantity, Reference } from './index';



/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or
 * agreement.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Contract_ValuedItem
 */
export class ContractValuedItem {
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
   entityCodeableConcept?: CodeableConcept;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   entityReference?: Reference;

  /**
   * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for
   * business identifiers.
   */
  @Type(() => Identifier)
   identifier?: Identifier;

  /**
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected effectiveTime?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _effectiveTime?: Element;

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
   * A rational number with implicit precision
   */
   points?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _points?: Element;

  /**
   * An amount of economic utility in some recognized currency.
   */
  @Type(() => Money)
   net?: Money;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected payment?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _payment?: Element;

  /**
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected paymentDate?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _paymentDate?: Element;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   responsible?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   recipient?: Reference;

  /**
   * Id  of the clause or question text related to the context of this valuedItem in the referenced form
   * or QuestionnaireResponse.
   * Field access restricted because there are specific valid values.
   */
  protected linkId?: string[];

  /**
   * Extensions for linkId
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _linkId?: Element[];

  /**
   * A set of security labels that define which terms are controlled by this condition.
   * Field access restricted because there are specific valid values.
   */
  protected securityLabelNumber?: number[];

  /**
   * Extensions for securityLabelNumber
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _securityLabelNumber?: Element[];


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
  public setEffectiveTime(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.effectiveTime) !== 'undefined') {
         delete this.effectiveTime;
      }
      return;
    }
    
    if (REGEX_EFFECTIVETIME.test(newValue)) {
      this.effectiveTime = newValue
    } else {
      throw new Error("Invalid value pattern for effectiveTime of " + newValue);
    }
  }
  
  public getEffectiveTimePattern(): string {
    return REGEX_EFFECTIVETIME.source;
  }
  

  public getEffectiveTime(): string | undefined {
      return this.effectiveTime;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setPayment(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.payment) !== 'undefined') {
         delete this.payment;
      }
      return;
    }
    
    if (REGEX_PAYMENT.test(newValue)) {
      this.payment = newValue
    } else {
      throw new Error("Invalid value pattern for payment of " + newValue);
    }
  }
  
  public getPaymentPattern(): string {
    return REGEX_PAYMENT.source;
  }
  

  public getPayment(): string | undefined {
      return this.payment;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setPaymentDate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.paymentDate) !== 'undefined') {
         delete this.paymentDate;
      }
      return;
    }
    
    if (REGEX_PAYMENTDATE.test(newValue)) {
      this.paymentDate = newValue
    } else {
      throw new Error("Invalid value pattern for paymentDate of " + newValue);
    }
  }
  
  public getPaymentDatePattern(): string {
    return REGEX_PAYMENTDATE.source;
  }
  

  public getPaymentDate(): string | undefined {
      return this.paymentDate;
  }

  public addLinkId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.linkId) !== 'undefined') {
         delete this.linkId;
      }
      return;
    }
    
    if (typeof(this.linkId) === 'undefined') {
      this.linkId =  [];
    }
    this.linkId.push(newValue);
  }
  public deleteLinkIdAll() {
    if (typeof(this.linkId) !== 'undefined') {
       delete this.linkId;
    }
    return;
  }
  

  public getLinkId(): string[] | undefined {
      return this.linkId;
  }

  public add_linkId(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._linkId) !== 'undefined') {
         delete this._linkId;
      }
      return;
    }
    
    if (typeof(this._linkId) === 'undefined') {
      this._linkId =  [];
    }
    this._linkId.push(newValue);
  }
  public delete_linkIdAll() {
    if (typeof(this._linkId) !== 'undefined') {
       delete this._linkId;
    }
    return;
  }
  

  public get_linkId(): Element[] | undefined {
      return this._linkId;
  }

  public addSecurityLabelNumber(newValue: number) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.securityLabelNumber) !== 'undefined') {
         delete this.securityLabelNumber;
      }
      return;
    }
    
    if (typeof(this.securityLabelNumber) === 'undefined') {
      this.securityLabelNumber =  [];
    }
    this.securityLabelNumber.push(newValue);
  }
  public deleteSecurityLabelNumberAll() {
    if (typeof(this.securityLabelNumber) !== 'undefined') {
       delete this.securityLabelNumber;
    }
    return;
  }
  

  public getSecurityLabelNumber(): number[] | undefined {
      return this.securityLabelNumber;
  }

  public add_securityLabelNumber(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._securityLabelNumber) !== 'undefined') {
         delete this._securityLabelNumber;
      }
      return;
    }
    
    if (typeof(this._securityLabelNumber) === 'undefined') {
      this._securityLabelNumber =  [];
    }
    this._securityLabelNumber.push(newValue);
  }
  public delete_securityLabelNumberAll() {
    if (typeof(this._securityLabelNumber) !== 'undefined') {
       delete this._securityLabelNumber;
    }
    return;
  }
  

  public get_securityLabelNumber(): Element[] | undefined {
      return this._securityLabelNumber;
  }


}


