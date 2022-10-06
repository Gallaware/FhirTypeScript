import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_INSTRUCTION } from '../FhirTsLibValidation/FhirRegex';
import { CodeableConcept, Element, Extension, NutritionOrderNutrient, NutritionOrderTexture, Timing } from './index';



/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a
 * patient/resident.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/NutritionOrder_OralDiet
 */
export class NutritionOrderOralDiet {
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
   * The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected type?: CodeableConcept[];

  /**
   * The time period and frequency at which the diet should be given.  The diet should be given for the
   * combination of all schedules if more than one schedule is present.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Timing)
  protected schedule?: Timing[];

  /**
   * Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber
   * or sodium) required for the oral diet.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => NutritionOrderNutrient)
  protected nutrient?: NutritionOrderNutrient[];

  /**
   * Class that describes any texture modifications required for the patient to safely consume various
   * types of solid foods.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => NutritionOrderTexture)
  protected texture?: NutritionOrderTexture[];

  /**
   * The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids
   * served to the patient.
   * Field access restricted because there are specific valid values.
   */
  @Type(() => CodeableConcept)
  protected fluidConsistencyType?: CodeableConcept[];

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected instruction?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _instruction?: Element;


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

  public addType(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.type) !== 'undefined') {
         delete this.type;
      }
      return;
    }
    
    if (typeof(this.type) === 'undefined') {
      this.type =  [];
    }
    this.type.push(newValue);
  }

  public getType(): CodeableConcept[] | undefined {
      return this.type;
  }

  public addSchedule(newValue: Timing) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.schedule) !== 'undefined') {
         delete this.schedule;
      }
      return;
    }
    
    if (typeof(this.schedule) === 'undefined') {
      this.schedule =  [];
    }
    this.schedule.push(newValue);
  }

  public getSchedule(): Timing[] | undefined {
      return this.schedule;
  }

  public addNutrient(newValue: NutritionOrderNutrient) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.nutrient) !== 'undefined') {
         delete this.nutrient;
      }
      return;
    }
    
    if (typeof(this.nutrient) === 'undefined') {
      this.nutrient =  [];
    }
    this.nutrient.push(newValue);
  }

  public getNutrient(): NutritionOrderNutrient[] | undefined {
      return this.nutrient;
  }

  public addTexture(newValue: NutritionOrderTexture) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.texture) !== 'undefined') {
         delete this.texture;
      }
      return;
    }
    
    if (typeof(this.texture) === 'undefined') {
      this.texture =  [];
    }
    this.texture.push(newValue);
  }

  public getTexture(): NutritionOrderTexture[] | undefined {
      return this.texture;
  }

  public addFluidConsistencyType(newValue: CodeableConcept) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.fluidConsistencyType) !== 'undefined') {
         delete this.fluidConsistencyType;
      }
      return;
    }
    
    if (typeof(this.fluidConsistencyType) === 'undefined') {
      this.fluidConsistencyType =  [];
    }
    this.fluidConsistencyType.push(newValue);
  }

  public getFluidConsistencyType(): CodeableConcept[] | undefined {
      return this.fluidConsistencyType;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setInstruction(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.instruction) !== 'undefined') {
         delete this.instruction;
      }
      return;
    }
    
    if (REGEX_INSTRUCTION.test(newValue)) {
      this.instruction = newValue
    } else {
      throw new Error("Invalid value pattern for instruction of " + newValue);
    }
  }
  
  public getInstructionPattern(): string {
    return REGEX_INSTRUCTION.source;
  }
  

  public getInstruction(): string | undefined {
      return this.instruction;
  }


}


