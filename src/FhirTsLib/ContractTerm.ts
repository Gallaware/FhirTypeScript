import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_ISSUED, REGEX_TEXT } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, ContractAction, ContractAsset, ContractOffer, ContractSecurityLabel, Element, Extension, Identifier, Period, Reference } from './index';



/**
 * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or
 * agreement.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Contract_Term
 */
export class ContractTerm {
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
  protected issued?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _issued?: Element;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   applies?: Period;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   topicCodeableConcept?: CodeableConcept;

  /**
   * A reference from one resource to another.
   */
  @Type(() => Reference)
   topicReference?: Reference;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   type?: CodeableConcept;

  /**
   * A concept that may be defined by a formal reference to a terminology or ontology or may be provided
   * by text.
   */
  @Type(() => CodeableConcept)
   subType?: CodeableConcept;

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
   * Security labels that protect the handling of information about the term and its elements, which may
   * be specifically identified..
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ContractSecurityLabel)
  protected securityLabel?: ContractSecurityLabel[];

  /**
   * Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or
   * agreement.
   */
  @Type(() => ContractOffer)
   offer?: ContractOffer;

  /**
   * Contract Term Asset List.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ContractAsset)
  protected asset?: ContractAsset[];

  /**
   * An actor taking a role in an activity for which it can be assigned some degree of responsibility
   * for the activity taking place.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ContractAction)
  protected action?: ContractAction[];

  /**
   * Nested group of Contract Provisions.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => ContractTerm)
  protected group?: ContractTerm[];


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
  public setIssued(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.issued) !== 'undefined') {
         delete this.issued;
      }
      return;
    }
    
    if (REGEX_ISSUED.test(newValue)) {
      this.issued = newValue
    } else {
      throw new Error("Invalid value pattern for issued of " + newValue);
    }
  }
  
  public getIssuedPattern(): string {
    return REGEX_ISSUED.source;
  }
  

  public getIssued(): string | undefined {
      return this.issued;
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

  public addSecurityLabel(newValue: ContractSecurityLabel) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.securityLabel) !== 'undefined') {
         delete this.securityLabel;
      }
      return;
    }
    
    if (typeof(this.securityLabel) === 'undefined') {
      this.securityLabel =  [];
    }
    this.securityLabel.push(newValue);
  }

  public getSecurityLabel(): ContractSecurityLabel[] | undefined {
      return this.securityLabel;
  }

  public addAsset(newValue: ContractAsset) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.asset) !== 'undefined') {
         delete this.asset;
      }
      return;
    }
    
    if (typeof(this.asset) === 'undefined') {
      this.asset =  [];
    }
    this.asset.push(newValue);
  }

  public getAsset(): ContractAsset[] | undefined {
      return this.asset;
  }

  public addAction(newValue: ContractAction) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.action) !== 'undefined') {
         delete this.action;
      }
      return;
    }
    
    if (typeof(this.action) === 'undefined') {
      this.action =  [];
    }
    this.action.push(newValue);
  }

  public getAction(): ContractAction[] | undefined {
      return this.action;
  }

  public addGroup(newValue: ContractTerm) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.group) !== 'undefined') {
         delete this.group;
      }
      return;
    }
    
    if (typeof(this.group) === 'undefined') {
      this.group =  [];
    }
    this.group.push(newValue);
  }

  public getGroup(): ContractTerm[] | undefined {
      return this.group;
  }


}


