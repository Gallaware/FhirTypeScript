# Gallaware's FHIR TypeScript library

## Overview

This is a FHIR v4.0 TypeScript class library implementing the JSON schema that is built for those who want to 
source the data, like from a UI, and send that data to a data store.  Unlike interface based versions found elsewhere, this provides functions for data setting that validates, either by value or by pattern, the data and throws an Error when the data is not correct.
When the data requires validation, the class fields it protected, otherwise the class fields are public and can be set to any
valid value for the type.

The valid values and patterns are stored in separate files and referenced by the classes.  You'll find them in the FhirTsLibValidation folder.  Care was taken to not repeat the data, but instead reference a variable at the top of the file
when values were duplicated.  So, the order of the file is important.

This library also includes labels for the valid values which are found under the FhirTsResources folder, and organized by 2 letter
language abbreviations, and then named with the class name and the field they reference.

To provide in/out JSON conversion, this library uses ["class-transformer"](https://github.com/typestack/class-transformer) library and its @Type annotations/decorators. Although, class-tranformer provides the actually convertion to/from JSON for a class, additional utilities are provided in order to associated the correct class with the FHIR JSON data recieved.  The FHIR JSON data structure are usually marked with the "resourceType", but there are a few that are not, like Coding or AccountGuarantor.  With these JSON data, the utility does its best guess to get it right.  However, normally, these classes without "resourceType" don't usually get tranmitted alone, but are part of a larger object.  You'll find the JSON related utilities for conversion in the FhirTsLibJson folder.


## How it was created

It was built using 2 Java apps: one with a JSON schema parser and one with an XML parser.  The FHIR JSON schema provided the bulk of the informtion and the FHIR XML provided the labels per language.  Where data annomolies were found extra files were added to 
help out.

Care was taken to ensure that the generated classes include all the class use docuemtation of the orginal JSON schema.
