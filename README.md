# Gallaware's FHIR TypeScript library

## Overview

The [HL7 FHIR data structures](https://hl7.org/fhir/) are created to move Healthcare around the internet by providing a common data structure as well as a common transport mechanism.  This library is a FHIR v4.0 TypeScript class library implementing the JSON schema that is built for those who want to 
source the data, like from a UI, and send that data to a data store, and, of course, query that data back and present it again in the UI.

Unlike interface based versions found elsewhere, this provides functions for data setting that validates, either by value or by pattern, the data and throws an Error when the data is not correct. When the data requires validation, the class field is protected, otherwise the class fields are public and can be set to any valid value for the type.

The valid values and patterns are stored in separate files and referenced by the classes.  You'll find them in the FhirTsLibValidation folder.  Care was taken to not repeat the data in order to save memory, but instead reference a variable at the top of the file when values were duplicated.  So, the order of the file is important.

This library also includes labels for the valid values which are found under the FhirTsResources folder, and organized by 2 letter language abbreviations, and then named with the class name and the field they reference.

To provide in/out JSON conversion, this library uses ["class-transformer"](https://github.com/typestack/class-transformer) library and its @Type annotations/decorators. Although, class-tranformer provides the actually conversion to/from JSON for a class, additional utilities are provided in order to associated the correct class with the FHIR JSON data recieved.  The FHIR JSON data structure are usually marked with the "resourceType", but there are a few that are not, like Coding or AccountGuarantor.  With these JSON data, the utility does its best guess to get it right.  However, normally, these classes without "resourceType" don't usually get transmitted alone, but are part of a larger object.  You'll find the JSON related utilities for conversion in the FhirTsLibJson folder.

## Example Code

You can look at the test cases for example, or take a look at How to create a Patient, in the [ExampleCreatePatient.md](ExampleCreatePatient.md). This shows not only how to 
create a FHIR patient with data, but also how to send it across the wire or get it back from a server and how that conversion from a real
object to/from JSON works.


## How it was created

It was built using 2 Java apps: one with a JSON schema parser and one with an XML parser.  The FHIR JSON schema provided the bulk of the informtion and the FHIR XML provided the labels per language.  Where data annomolies were found extra files were added to 
help out.

The generated classes include all the class use documentation of the original JSON schema.
