import { Type } from 'class-transformer';
import { REGEX_ID } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Extension, MeasureReportComponent, MeasureReportPopulation1, Quantity } from './index';



/**
 * The MeasureReport resource contains the results of the calculation of a measure; and optionally a
 * reference to the resources involved in that calculation.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/MeasureReport_Stratum
 */
export class MeasureReportStratum {
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
   value?: CodeableConcept;

  /**
   * A stratifier component value.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => MeasureReportComponent)
  protected component?: MeasureReportComponent[];

  /**
   * The populations that make up the stratum, one for each type of population appropriate to the
   * measure.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => MeasureReportPopulation1)
  protected population?: MeasureReportPopulation1[];

  /**
   * A measured amount (or an amount that can potentially be measured). Note that measured amounts
   * include amounts that are not precisely quantified, including amounts involving arbitrary units and
   * floating currencies.
   */
  @Type(() => Quantity)
   measureScore?: Quantity;


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

  public addComponent(newValue: MeasureReportComponent) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.component) !== 'undefined') {
         delete this.component;
      }
      return;
    }
    
    if (typeof(this.component) === 'undefined') {
      this.component =  [];
    }
    this.component.push(newValue);
  }
  public deleteComponentAll() {
    if (typeof(this.component) !== 'undefined') {
       delete this.component;
    }
    return;
  }
  

  public getComponent(): MeasureReportComponent[] | undefined {
      return this.component;
  }

  public addPopulation(newValue: MeasureReportPopulation1) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.population) !== 'undefined') {
         delete this.population;
      }
      return;
    }
    
    if (typeof(this.population) === 'undefined') {
      this.population =  [];
    }
    this.population.push(newValue);
  }
  public deletePopulationAll() {
    if (typeof(this.population) !== 'undefined') {
       delete this.population;
    }
    return;
  }
  

  public getPopulation(): MeasureReportPopulation1[] | undefined {
      return this.population;
  }


}


