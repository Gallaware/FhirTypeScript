import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_GENOMEBUILD, REGEX_REFERENCESEQSTRING } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Reference } from './index';
import { MolecularSequenceReferenceSeqOrientation_list_ValidValues, MolecularSequenceReferenceSeqStrand_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * Raw data describing a biological sequence.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/MolecularSequence_ReferenceSeq
 */
export class MolecularSequenceReferenceSeq {
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
   chromosome?: CodeableConcept;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected genomeBuild?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _genomeBuild?: Element;

  /**
   * A relative reference to a DNA strand based on gene orientation. The strand that contains the open
   * reading frame of the gene is the "sense" strand, and the opposite complementary strand is the
   * "antisense" strand.
   * Field access restricted because there are specific valid values.
   */
  protected orientation?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _orientation?: Element;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   referenceSeqId?: CodeableConcept;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   referenceSeqPointer?: Reference;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected referenceSeqString?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _referenceSeqString?: Element;

  /**
   * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm
   * of the chromosome, and the Crick strand as the one whose 5'-end is on the long arm.
   * Field access restricted because there are specific valid values.
   */
  protected strand?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _strand?: Element;

  /**
   * A whole number
   */
   windowStart?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _windowStart?: Element;

  /**
   * A whole number
   */
   windowEnd?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _windowEnd?: Element;


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
  public setGenomeBuild(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.genomeBuild) !== 'undefined') {
         delete this.genomeBuild;
      }
      return;
    }
    
    if (REGEX_GENOMEBUILD.test(newValue)) {
      this.genomeBuild = newValue
    } else {
      throw new Error("Invalid value pattern for genomeBuild of " + newValue);
    }
  }
  
  public getGenomeBuildPattern(): string {
    return REGEX_GENOMEBUILD.source;
  }
  

  public getGenomeBuild(): string | undefined {
      return this.genomeBuild;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setOrientation(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.orientation) !== 'undefined') {
         delete this.orientation;
      }
      return;
    }
    
    const idx = getValidValueIdx(MolecularSequenceReferenceSeqOrientation_list_ValidValues, newValue);
    if (idx >= 0) {
      this.orientation = MolecularSequenceReferenceSeqOrientation_list_ValidValues[idx];
    } else {
      throw new Error("Unknown orientation of " + newValue);
    }
  }
  
  public getMolecularSequenceReferenceSeqOrientationValidValues(): string[] {
    return MolecularSequenceReferenceSeqOrientation_list_ValidValues;
  }
  

  public getOrientation(): string | undefined {
      return this.orientation;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setReferenceSeqString(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.referenceSeqString) !== 'undefined') {
         delete this.referenceSeqString;
      }
      return;
    }
    
    if (REGEX_REFERENCESEQSTRING.test(newValue)) {
      this.referenceSeqString = newValue
    } else {
      throw new Error("Invalid value pattern for referenceSeqString of " + newValue);
    }
  }
  
  public getReferenceSeqStringPattern(): string {
    return REGEX_REFERENCESEQSTRING.source;
  }
  

  public getReferenceSeqString(): string | undefined {
      return this.referenceSeqString;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setStrand(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.strand) !== 'undefined') {
         delete this.strand;
      }
      return;
    }
    
    const idx = getValidValueIdx(MolecularSequenceReferenceSeqStrand_list_ValidValues, newValue);
    if (idx >= 0) {
      this.strand = MolecularSequenceReferenceSeqStrand_list_ValidValues[idx];
    } else {
      throw new Error("Unknown strand of " + newValue);
    }
  }
  
  public getMolecularSequenceReferenceSeqStrandValidValues(): string[] {
    return MolecularSequenceReferenceSeqStrand_list_ValidValues;
  }
  

  public getStrand(): string | undefined {
      return this.strand;
  }


}


