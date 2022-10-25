import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, MolecularSequenceRoc, Quantity } from './index';
import { MolecularSequenceQualityType_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * Raw data describing a biological sequence.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/MolecularSequence_Quality
 */
export class MolecularSequenceQuality {
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
   * INDEL / SNP / Undefined variant.
   * Field access restricted because there are specific valid values.
   */
  protected type?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _type?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   standardSequence?: CodeableConcept;

  /**
   * A whole number
   */
   start?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _start?: Element;

  /**
   * A whole number
   */
   end?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _end?: Element;

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   score?: Quantity;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   method?: CodeableConcept;

  /**
   * A rational number with implicit precision
   */
   truthTP?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _truthTP?: Element;

  /**
   * A rational number with implicit precision
   */
   queryTP?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _queryTP?: Element;

  /**
   * A rational number with implicit precision
   */
   truthFN?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _truthFN?: Element;

  /**
   * A rational number with implicit precision
   */
   queryFP?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _queryFP?: Element;

  /**
   * A rational number with implicit precision
   */
   gtFP?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _gtFP?: Element;

  /**
   * A rational number with implicit precision
   */
   precision?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _precision?: Element;

  /**
   * A rational number with implicit precision
   */
   recall?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _recall?: Element;

  /**
   * A rational number with implicit precision
   */
   fScore?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _fScore?: Element;

  /**
   * Raw data describing a biological sequence.
   */
  @Type(() => MolecularSequenceRoc)
   roc?: MolecularSequenceRoc;


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

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setType(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.type) !== 'undefined') {
         delete this.type;
      }
      return;
    }
    
    const idx = getValidValueIdx(MolecularSequenceQualityType_list_ValidValues, newValue);
    if (idx >= 0) {
      this.type = MolecularSequenceQualityType_list_ValidValues[idx];
    } else {
      throw new Error("Unknown type of " + newValue);
    }
  }
  
  public getMolecularSequenceQualityTypeValidValues(): string[] {
    return MolecularSequenceQualityType_list_ValidValues;
  }
  
  /**
  * Gets the current value of field type.
  * @returns the value  or undefined
  */
  public getType(): string | undefined {
      return this.type;
  }


}


