import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_DATE_000, REGEX_SOURCEIDENTITYCERTIFICATE, REGEX_PROXYIDENTITYCERTIFICATE } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, Reference, Signature } from './FhirType';



/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/VerificationResult_Attestation
 */
export class VerificationResultAttestation {
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
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   who?: Reference;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   onBehalfOf?: Reference;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   communicationMethod?: CodeableConcept;

  /**
   * A date or partial date (e.g. just year or year + month). There is no time zone. The format is a
   * union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected date?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _date?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected sourceIdentityCertificate?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _sourceIdentityCertificate?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected proxyIdentityCertificate?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _proxyIdentityCertificate?: Element;

  /**
   * A signature along with supporting context. The signature may be a digital signature that is
   * cryptographic in nature, or some other signature acceptable to the domain. This other signature
   * may be as simple as a graphical image representing a hand-written signature, or a signature
   * ceremony Different signature approaches have different utilities.
   */
  @Type(() => Signature)
   proxySignature?: Signature;

  /**
   * A signature along with supporting context. The signature may be a digital signature that is
   * cryptographic in nature, or some other signature acceptable to the domain. This other signature
   * may be as simple as a graphical image representing a hand-written signature, or a signature
   * ceremony Different signature approaches have different utilities.
   */
  @Type(() => Signature)
   sourceSignature?: Signature;


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
  public setDate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.date) !== 'undefined') {
         delete this.date;
      }
      return;
    }
    
    if (REGEX_DATE_000.test(newValue)) {
      this.date = newValue
    } else {
      throw new Error("Invalid value pattern for date of " + newValue);
    }
  }
  
  public getDatePattern(): string {
    return REGEX_DATE_000.source;
  }
  

  public getDate(): string | undefined {
      return this.date;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setSourceIdentityCertificate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.sourceIdentityCertificate) !== 'undefined') {
         delete this.sourceIdentityCertificate;
      }
      return;
    }
    
    if (REGEX_SOURCEIDENTITYCERTIFICATE.test(newValue)) {
      this.sourceIdentityCertificate = newValue
    } else {
      throw new Error("Invalid value pattern for sourceIdentityCertificate of " + newValue);
    }
  }
  
  public getSourceIdentityCertificatePattern(): string {
    return REGEX_SOURCEIDENTITYCERTIFICATE.source;
  }
  

  public getSourceIdentityCertificate(): string | undefined {
      return this.sourceIdentityCertificate;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setProxyIdentityCertificate(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.proxyIdentityCertificate) !== 'undefined') {
         delete this.proxyIdentityCertificate;
      }
      return;
    }
    
    if (REGEX_PROXYIDENTITYCERTIFICATE.test(newValue)) {
      this.proxyIdentityCertificate = newValue
    } else {
      throw new Error("Invalid value pattern for proxyIdentityCertificate of " + newValue);
    }
  }
  
  public getProxyIdentityCertificatePattern(): string {
    return REGEX_PROXYIDENTITYCERTIFICATE.source;
  }
  

  public getProxyIdentityCertificate(): string | undefined {
      return this.proxyIdentityCertificate;
  }


}

