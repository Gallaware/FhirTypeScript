import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { ClaimResponseAdjudication, ClaimResponseSubDetail1, CodeableConcept, Element, Extension, Money, Quantity } from './index';



/**
 * This resource provides the adjudication details from the processing of a Claim resource.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/ClaimResponse_Detail1
 */
export class ClaimResponseDetail1 {
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
  @Type(() => ClaimResponseAdjudication)
  protected adjudication?: ClaimResponseAdjudication[];

  /**
   * The third-tier service adjudications for payor added services.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ClaimResponseSubDetail1)
  protected subDetail?: ClaimResponseSubDetail1[];


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

  public addAdjudication(newValue: ClaimResponseAdjudication) {
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
  public deleteAdjudicationAll(): ClaimResponseAdjudication[] {
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
  public deleteAdjudicationBySplice(start: number, deleteCount?: number): ClaimResponseAdjudication[] {
    if (typeof(this.adjudication) !== 'undefined') {
       return this.adjudication.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field adjudication.
  * @returns the value  or undefined
  */
  public getAdjudication(): ClaimResponseAdjudication[] | undefined {
      return this.adjudication;
  }

  public addSubDetail(newValue: ClaimResponseSubDetail1) {
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
  /**
  * Removes all elements from the array subDetail, returning the deleted elements.
  * @returns An array containing the elements that were deleted.
  */
  public deleteSubDetailAll(): ClaimResponseSubDetail1[] {
    if (typeof(this.subDetail) !== 'undefined') {
       const oldArray = this.subDetail;
       delete this.subDetail;
       return oldArray;
    }
    return [];
  }
  
  /**
  * Removes elements from the array subDetail, returning the deleted elements.
  * @param start The zero-based location in the array from which to start removing elements.
  * @param deleteCount The number of elements to remove.
  * @returns An array containing the elements that were deleted, or an empty array if the element
  *     was undefined.
  */
  public deleteSubDetailBySplice(start: number, deleteCount?: number): ClaimResponseSubDetail1[] {
    if (typeof(this.subDetail) !== 'undefined') {
       return this.subDetail.splice(start, deleteCount);
    }
    return [];
  }
  
  /**
  * Gets the current value of field subDetail.
  * @returns the value  or undefined
  */
  public getSubDetail(): ClaimResponseSubDetail1[] | undefined {
      return this.subDetail;
  }


}


