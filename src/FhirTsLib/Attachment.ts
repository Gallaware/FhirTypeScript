import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_CONTENTTYPE, REGEX_LANGUAGE, REGEX_URL, REGEX_TITLE, REGEX_CREATION } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './FhirType';



/**
 * For referring to data content defined in other formats.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/Attachment
 */
export class Attachment {
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
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected contentType?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _contentType?: Element;

  /**
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected language?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _language?: Element;

  /**
   * A stream of bytes
   */
   data?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _data?: Element;

  /**
   * A URI that is a literal reference
   * Field access restricted because there are specific valid values.
   */
  protected url?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _url?: Element;

  /**
   * An integer with a value that is not negative (e.g. >= 0)
   */
   size?: number;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _size?: Element;

  /**
   * A stream of bytes
   */
   hash?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _hash?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected title?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _title?: Element;

  /**
   * A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are
   * specified, a time zone SHALL be populated. The format is a union of the schema types gYear,
   * gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be
   * zero-filled and may be ignored.                 Dates SHALL be valid dates.
   * Field access restricted because there are specific valid values.
   */
  protected creation?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _creation?: Element;


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
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setContentType(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.contentType) !== 'undefined') {
         delete this.contentType;
      }
      return;
    }
    
    if (REGEX_CONTENTTYPE.test(newValue)) {
      this.contentType = newValue
    } else {
      throw new Error("Invalid value pattern for contentType of " + newValue);
    }
  }
  
  public getContentTypePattern(): string {
    return REGEX_CONTENTTYPE.source;
  }
  

  public getContentType(): string | undefined {
      return this.contentType;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setLanguage(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.language) !== 'undefined') {
         delete this.language;
      }
      return;
    }
    
    if (REGEX_LANGUAGE.test(newValue)) {
      this.language = newValue
    } else {
      throw new Error("Invalid value pattern for language of " + newValue);
    }
  }
  
  public getLanguagePattern(): string {
    return REGEX_LANGUAGE.source;
  }
  

  public getLanguage(): string | undefined {
      return this.language;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setUrl(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.url) !== 'undefined') {
         delete this.url;
      }
      return;
    }
    
    if (REGEX_URL.test(newValue)) {
      this.url = newValue
    } else {
      throw new Error("Invalid value pattern for url of " + newValue);
    }
  }
  
  public getUrlPattern(): string {
    return REGEX_URL.source;
  }
  

  public getUrl(): string | undefined {
      return this.url;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setTitle(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.title) !== 'undefined') {
         delete this.title;
      }
      return;
    }
    
    if (REGEX_TITLE.test(newValue)) {
      this.title = newValue
    } else {
      throw new Error("Invalid value pattern for title of " + newValue);
    }
  }
  
  public getTitlePattern(): string {
    return REGEX_TITLE.source;
  }
  

  public getTitle(): string | undefined {
      return this.title;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setCreation(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.creation) !== 'undefined') {
         delete this.creation;
      }
      return;
    }
    
    if (REGEX_CREATION.test(newValue)) {
      this.creation = newValue
    } else {
      throw new Error("Invalid value pattern for creation of " + newValue);
    }
  }
  
  public getCreationPattern(): string {
    return REGEX_CREATION.source;
  }
  

  public getCreation(): string | undefined {
      return this.creation;
  }


}

