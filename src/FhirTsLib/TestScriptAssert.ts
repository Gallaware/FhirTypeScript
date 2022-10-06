import { getValidValueIdx } from '../FhirTsLibValidation/FhirUtils';
import { Type } from 'class-transformer';
import { REGEX_ID, REGEX_LABEL, REGEX_DESCRIPTION, REGEX_COMPARETOSOURCEID, REGEX_COMPARETOSOURCEEXPRESSION, REGEX_COMPARETOSOURCEPATH, REGEX_CONTENTTYPE, REGEX_EXPRESSION, REGEX_HEADERFIELD, REGEX_MINIMUMID, REGEX_PATH, REGEX_REQUESTURL, REGEX_RESOURCE_000, REGEX_RESPONSECODE, REGEX_SOURCEID_000, REGEX_VALIDATEPROFILEID, REGEX_VALUE } from '../FhirTsLibValidation/FhirRegex';
import { Element, Extension } from './index';
import { TestScriptAssertDirection_list_ValidValues, TestScriptAssertOperator_list_ValidValues, TestScriptAssertRequestMethod_list_ValidValues, TestScriptAssertResponse_list_ValidValues } from '../FhirTsLibValidation/Fhir_ValidValues';



/**
 * A structured set of tests against a FHIR server or client implementation to determine compliance
 * against the FHIR specification.
 *
 * Generated by Gallaware, Inc. from:
 *    file:/Users/admin/Documents/DevNetbeans/jsonSchemaToJava/target/classes/schema/fhir.schema.json#/definitions/TestScript_Assert
 */
export class TestScriptAssert {
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
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected label?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _label?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected description?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _description?: Element;

  /**
   * The direction to use for the assertion.
   * Field access restricted because there are specific valid values.
   */
  protected direction?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _direction?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected compareToSourceId?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _compareToSourceId?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected compareToSourceExpression?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _compareToSourceExpression?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected compareToSourcePath?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _compareToSourcePath?: Element;

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
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected expression?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _expression?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected headerField?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _headerField?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected minimumId?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _minimumId?: Element;

  /**
   * Value of "true" or "false"
   */
   navigationLinks?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _navigationLinks?: Element;

  /**
   * The operator type defines the conditional behavior of the assert. If not defined, the default is
   * equals.
   * Field access restricted because there are specific valid values.
   */
  protected operator?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _operator?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected path?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _path?: Element;

  /**
   * The request method or HTTP operation code to compare against that used by the client system under
   * test.
   * Field access restricted because there are specific valid values.
   */
  protected requestMethod?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _requestMethod?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected requestURL?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _requestURL?: Element;

  /**
   * A string which has at least one character and no leading or trailing whitespace and where there is
   * no whitespace other than single spaces in the contents
   * Field access restricted because there are specific valid values.
   */
  protected resource?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _resource?: Element;

  /**
   * okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict
   * | gone | preconditionFailed | unprocessable.
   * Field access restricted because there are specific valid values.
   */
  protected response?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _response?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected responseCode?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _responseCode?: Element;

  /**
   * Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This
   * might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these
   * constraints.)  Ids are case-insensitive.
   * Field access restricted because there are specific valid values.
   */
  protected sourceId?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _sourceId?: Element;

  /**
   * Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This
   * might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these
   * constraints.)  Ids are case-insensitive.
   * Field access restricted because there are specific valid values.
   */
  protected validateProfileId?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _validateProfileId?: Element;

  /**
   * A sequence of Unicode characters
   * Field access restricted because there are specific valid values.
   */
  protected value?: string;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _value?: Element;

  /**
   * Value of "true" or "false"
   */
   warningOnly?: boolean;

  /**
   * Base definition for all elements in a resource.
   */
  @Type(() => Element)
   _warningOnly?: Element;


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
  public setLabel(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.label) !== 'undefined') {
         delete this.label;
      }
      return;
    }
    
    if (REGEX_LABEL.test(newValue)) {
      this.label = newValue
    } else {
      throw new Error("Invalid value pattern for label of " + newValue);
    }
  }
  
  public getLabelPattern(): string {
    return REGEX_LABEL.source;
  }
  

  public getLabel(): string | undefined {
      return this.label;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setDescription(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.description) !== 'undefined') {
         delete this.description;
      }
      return;
    }
    
    if (REGEX_DESCRIPTION.test(newValue)) {
      this.description = newValue
    } else {
      throw new Error("Invalid value pattern for description of " + newValue);
    }
  }
  
  public getDescriptionPattern(): string {
    return REGEX_DESCRIPTION.source;
  }
  

  public getDescription(): string | undefined {
      return this.description;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setDirection(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.direction) !== 'undefined') {
         delete this.direction;
      }
      return;
    }
    
    const idx = getValidValueIdx(TestScriptAssertDirection_list_ValidValues, newValue);
    if (idx >= 0) {
      this.direction = TestScriptAssertDirection_list_ValidValues[idx];
    } else {
      throw new Error("Unknown direction of " + newValue);
    }
  }
  
  public getTestScriptAssertDirectionValidValues(): string[] {
    return TestScriptAssertDirection_list_ValidValues;
  }
  

  public getDirection(): string | undefined {
      return this.direction;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setCompareToSourceId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.compareToSourceId) !== 'undefined') {
         delete this.compareToSourceId;
      }
      return;
    }
    
    if (REGEX_COMPARETOSOURCEID.test(newValue)) {
      this.compareToSourceId = newValue
    } else {
      throw new Error("Invalid value pattern for compareToSourceId of " + newValue);
    }
  }
  
  public getCompareToSourceIdPattern(): string {
    return REGEX_COMPARETOSOURCEID.source;
  }
  

  public getCompareToSourceId(): string | undefined {
      return this.compareToSourceId;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setCompareToSourceExpression(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.compareToSourceExpression) !== 'undefined') {
         delete this.compareToSourceExpression;
      }
      return;
    }
    
    if (REGEX_COMPARETOSOURCEEXPRESSION.test(newValue)) {
      this.compareToSourceExpression = newValue
    } else {
      throw new Error("Invalid value pattern for compareToSourceExpression of " + newValue);
    }
  }
  
  public getCompareToSourceExpressionPattern(): string {
    return REGEX_COMPARETOSOURCEEXPRESSION.source;
  }
  

  public getCompareToSourceExpression(): string | undefined {
      return this.compareToSourceExpression;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setCompareToSourcePath(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.compareToSourcePath) !== 'undefined') {
         delete this.compareToSourcePath;
      }
      return;
    }
    
    if (REGEX_COMPARETOSOURCEPATH.test(newValue)) {
      this.compareToSourcePath = newValue
    } else {
      throw new Error("Invalid value pattern for compareToSourcePath of " + newValue);
    }
  }
  
  public getCompareToSourcePathPattern(): string {
    return REGEX_COMPARETOSOURCEPATH.source;
  }
  

  public getCompareToSourcePath(): string | undefined {
      return this.compareToSourcePath;
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
  public setExpression(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.expression) !== 'undefined') {
         delete this.expression;
      }
      return;
    }
    
    if (REGEX_EXPRESSION.test(newValue)) {
      this.expression = newValue
    } else {
      throw new Error("Invalid value pattern for expression of " + newValue);
    }
  }
  
  public getExpressionPattern(): string {
    return REGEX_EXPRESSION.source;
  }
  

  public getExpression(): string | undefined {
      return this.expression;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setHeaderField(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.headerField) !== 'undefined') {
         delete this.headerField;
      }
      return;
    }
    
    if (REGEX_HEADERFIELD.test(newValue)) {
      this.headerField = newValue
    } else {
      throw new Error("Invalid value pattern for headerField of " + newValue);
    }
  }
  
  public getHeaderFieldPattern(): string {
    return REGEX_HEADERFIELD.source;
  }
  

  public getHeaderField(): string | undefined {
      return this.headerField;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setMinimumId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.minimumId) !== 'undefined') {
         delete this.minimumId;
      }
      return;
    }
    
    if (REGEX_MINIMUMID.test(newValue)) {
      this.minimumId = newValue
    } else {
      throw new Error("Invalid value pattern for minimumId of " + newValue);
    }
  }
  
  public getMinimumIdPattern(): string {
    return REGEX_MINIMUMID.source;
  }
  

  public getMinimumId(): string | undefined {
      return this.minimumId;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setOperator(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.operator) !== 'undefined') {
         delete this.operator;
      }
      return;
    }
    
    const idx = getValidValueIdx(TestScriptAssertOperator_list_ValidValues, newValue);
    if (idx >= 0) {
      this.operator = TestScriptAssertOperator_list_ValidValues[idx];
    } else {
      throw new Error("Unknown operator of " + newValue);
    }
  }
  
  public getTestScriptAssertOperatorValidValues(): string[] {
    return TestScriptAssertOperator_list_ValidValues;
  }
  

  public getOperator(): string | undefined {
      return this.operator;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setPath(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.path) !== 'undefined') {
         delete this.path;
      }
      return;
    }
    
    if (REGEX_PATH.test(newValue)) {
      this.path = newValue
    } else {
      throw new Error("Invalid value pattern for path of " + newValue);
    }
  }
  
  public getPathPattern(): string {
    return REGEX_PATH.source;
  }
  

  public getPath(): string | undefined {
      return this.path;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setRequestMethod(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.requestMethod) !== 'undefined') {
         delete this.requestMethod;
      }
      return;
    }
    
    const idx = getValidValueIdx(TestScriptAssertRequestMethod_list_ValidValues, newValue);
    if (idx >= 0) {
      this.requestMethod = TestScriptAssertRequestMethod_list_ValidValues[idx];
    } else {
      throw new Error("Unknown requestMethod of " + newValue);
    }
  }
  
  public getTestScriptAssertRequestMethodValidValues(): string[] {
    return TestScriptAssertRequestMethod_list_ValidValues;
  }
  

  public getRequestMethod(): string | undefined {
      return this.requestMethod;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setRequestURL(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.requestURL) !== 'undefined') {
         delete this.requestURL;
      }
      return;
    }
    
    if (REGEX_REQUESTURL.test(newValue)) {
      this.requestURL = newValue
    } else {
      throw new Error("Invalid value pattern for requestURL of " + newValue);
    }
  }
  
  public getRequestURLPattern(): string {
    return REGEX_REQUESTURL.source;
  }
  

  public getRequestURL(): string | undefined {
      return this.requestURL;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setResource(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.resource) !== 'undefined') {
         delete this.resource;
      }
      return;
    }
    
    if (REGEX_RESOURCE_000.test(newValue)) {
      this.resource = newValue
    } else {
      throw new Error("Invalid value pattern for resource of " + newValue);
    }
  }
  
  public getResourcePattern(): string {
    return REGEX_RESOURCE_000.source;
  }
  

  public getResource(): string | undefined {
      return this.resource;
  }

  /*
  * This sets the data ensuring that the value is valid.  If not valid, it throws an error
  * that should be caught.
  */
  public setResponse(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.response) !== 'undefined') {
         delete this.response;
      }
      return;
    }
    
    const idx = getValidValueIdx(TestScriptAssertResponse_list_ValidValues, newValue);
    if (idx >= 0) {
      this.response = TestScriptAssertResponse_list_ValidValues[idx];
    } else {
      throw new Error("Unknown response of " + newValue);
    }
  }
  
  public getTestScriptAssertResponseValidValues(): string[] {
    return TestScriptAssertResponse_list_ValidValues;
  }
  

  public getResponse(): string | undefined {
      return this.response;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setResponseCode(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.responseCode) !== 'undefined') {
         delete this.responseCode;
      }
      return;
    }
    
    if (REGEX_RESPONSECODE.test(newValue)) {
      this.responseCode = newValue
    } else {
      throw new Error("Invalid value pattern for responseCode of " + newValue);
    }
  }
  
  public getResponseCodePattern(): string {
    return REGEX_RESPONSECODE.source;
  }
  

  public getResponseCode(): string | undefined {
      return this.responseCode;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setSourceId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.sourceId) !== 'undefined') {
         delete this.sourceId;
      }
      return;
    }
    
    if (REGEX_SOURCEID_000.test(newValue)) {
      this.sourceId = newValue
    } else {
      throw new Error("Invalid value pattern for sourceId of " + newValue);
    }
  }
  
  public getSourceIdPattern(): string {
    return REGEX_SOURCEID_000.source;
  }
  

  public getSourceId(): string | undefined {
      return this.sourceId;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValidateProfileId(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.validateProfileId) !== 'undefined') {
         delete this.validateProfileId;
      }
      return;
    }
    
    if (REGEX_VALIDATEPROFILEID.test(newValue)) {
      this.validateProfileId = newValue
    } else {
      throw new Error("Invalid value pattern for validateProfileId of " + newValue);
    }
  }
  
  public getValidateProfileIdPattern(): string {
    return REGEX_VALIDATEPROFILEID.source;
  }
  

  public getValidateProfileId(): string | undefined {
      return this.validateProfileId;
  }

  /*
  * This sets the data ensuring that the value is valid pattern.  If not valid, it throws an error
  * that should be caught.
  */
  public setValue(newValue: string) {
    if (typeof(newValue) === 'undefined') {
      if (typeof(this.value) !== 'undefined') {
         delete this.value;
      }
      return;
    }
    
    if (REGEX_VALUE.test(newValue)) {
      this.value = newValue
    } else {
      throw new Error("Invalid value pattern for value of " + newValue);
    }
  }
  
  public getValuePattern(): string {
    return REGEX_VALUE.source;
  }
  

  public getValue(): string | undefined {
      return this.value;
  }


}


