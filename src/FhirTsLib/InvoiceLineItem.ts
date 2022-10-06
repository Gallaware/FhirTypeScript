import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, InvoicePriceComponent, Reference } from './index';



/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price
 * for Billing purpose.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Invoice_LineItem
 */
export class InvoiceLineItem {
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
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   chargeItemReference?: Reference;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   chargeItemCodeableConcept?: CodeableConcept;

  /**
   * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply
   * in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and
   * conditions that apply to a billing code is currently under development. The priceComponent element
   * can be used to offer transparency to the recipient of the Invoice as to how the prices have been
   * calculated.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => InvoicePriceComponent)
  protected priceComponent?: InvoicePriceComponent[];


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

  public addPriceComponent(newValue: InvoicePriceComponent) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.priceComponent) !== 'undefined') {
         delete this.priceComponent;
      }
      return;
    }
    
    if (typeof(this.priceComponent) === 'undefined') {
      this.priceComponent =  [];
    }
    this.priceComponent.push(newValue);
  }

  public getPriceComponent(): InvoicePriceComponent[] | undefined {
      return this.priceComponent;
  }


}


