import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_TEXT, REGEX_CITY, REGEX_DISTRICT, REGEX_STATE, REGEX_POSTALCODE, REGEX_COUNTRY } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension, Period } from './index';
import { AddressUse_list_ValidValues, AddressType_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition
 * formats).  This data type may be used to convey addresses for use in delivering mail as well as
 * for visiting locations which might not be valid for mail delivery.  There are a variety of postal
 * address formats defined around the world.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Address
 */
export class Address {
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
   * The purpose of this address.
   * Field access restricted because there are specific valid values.
   */
  protected use?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _use?: Element;

  /**
   * Distinguishes between physical addresses (those you can visit) and mailing addresses (e.g. PO Boxes
   * and care-of addresses). Most addresses are both.
   * Field access restricted because there are specific valid values.
   */
  protected type?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _type?: Element;

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
   * This component contains the house number, apartment number, street name, street direction,  P.O.
   * Box number, delivery hints, and similar address information.
   * Field access restricted because there are specific valid values.
   */
  protected line?: string[];

  /**
   * Extensions for line
   * Field access restricted because there are specific valid values.
   */
  @Type(() => Element)
  protected _line?: Element[];

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected city?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _city?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected district?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _district?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected state?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _state?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected postalCode?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _postalCode?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected country?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _country?: Element;

  /**
   * A time period defined by a start and end date and optionally time.
   */
  @Type(() => Period)
   period?: Period;


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

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setUse(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.use) !== 'undefined') {
         delete this.use;
      }
      return;
    }
    
    const idx = getValidValueIdx(AddressUse_list_ValidValues, newValue);
    if (idx >= 0) {
      this.use = AddressUse_list_ValidValues[idx];
    } else {
      throw new Error("Unknown use of " + newValue);
    }
  }
  
  public getAddressUseValidValues(): string[] {
    return AddressUse_list_ValidValues;
  }
  

  public getUse(): string | undefined {
      return this.use;
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
    
    const idx = getValidValueIdx(AddressType_list_ValidValues, newValue);
    if (idx >= 0) {
      this.type = AddressType_list_ValidValues[idx];
    } else {
      throw new Error("Unknown type of " + newValue);
    }
  }
  
  public getAddressTypeValidValues(): string[] {
    return AddressType_list_ValidValues;
  }
  

  public getType(): string | undefined {
      return this.type;
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

  public addLine(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.line) !== 'undefined') {
         delete this.line;
      }
      return;
    }
    
    if (typeof(this.line) === 'undefined') {
      this.line =  [];
    }
    this.line.push(newValue);
  }

  public getLine(): string[] | undefined {
      return this.line;
  }

  public add_line(newValue: Element) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this._line) !== 'undefined') {
         delete this._line;
      }
      return;
    }
    
    if (typeof(this._line) === 'undefined') {
      this._line =  [];
    }
    this._line.push(newValue);
  }

  public get_line(): Element[] | undefined {
      return this._line;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setCity(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.city) !== 'undefined') {
         delete this.city;
      }
      return;
    }
    
    if (REGEX_CITY.test(newValue)) {
      this.city = newValue
    } else {
      throw new Error("Invalid value pattern for city of " + newValue);
    }
  }
  
  public getCityPattern(): string {
    return REGEX_CITY.source;
  }
  

  public getCity(): string | undefined {
      return this.city;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDistrict(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.district) !== 'undefined') {
         delete this.district;
      }
      return;
    }
    
    if (REGEX_DISTRICT.test(newValue)) {
      this.district = newValue
    } else {
      throw new Error("Invalid value pattern for district of " + newValue);
    }
  }
  
  public getDistrictPattern(): string {
    return REGEX_DISTRICT.source;
  }
  

  public getDistrict(): string | undefined {
      return this.district;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setState(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.state) !== 'undefined') {
         delete this.state;
      }
      return;
    }
    
    if (REGEX_STATE.test(newValue)) {
      this.state = newValue
    } else {
      throw new Error("Invalid value pattern for state of " + newValue);
    }
  }
  
  public getStatePattern(): string {
    return REGEX_STATE.source;
  }
  

  public getState(): string | undefined {
      return this.state;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setPostalCode(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.postalCode) !== 'undefined') {
         delete this.postalCode;
      }
      return;
    }
    
    if (REGEX_POSTALCODE.test(newValue)) {
      this.postalCode = newValue
    } else {
      throw new Error("Invalid value pattern for postalCode of " + newValue);
    }
  }
  
  public getPostalCodePattern(): string {
    return REGEX_POSTALCODE.source;
  }
  

  public getPostalCode(): string | undefined {
      return this.postalCode;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setCountry(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.country) !== 'undefined') {
         delete this.country;
      }
      return;
    }
    
    if (REGEX_COUNTRY.test(newValue)) {
      this.country = newValue
    } else {
      throw new Error("Invalid value pattern for country of " + newValue);
    }
  }
  
  public getCountryPattern(): string {
    return REGEX_COUNTRY.source;
  }
  

  public getCountry(): string | undefined {
      return this.country;
  }


}


