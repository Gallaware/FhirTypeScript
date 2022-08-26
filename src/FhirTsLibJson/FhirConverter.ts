import { FHIR_RESOURCE_TYPE_TO_OBJECT } from './FhirConverterMap';

/*
 *  Given a JSON string, try to convert it to a FHIR TypeScript class associated with that data type.
*/
export function plainToFhir(jsonData: string) {

    // find the string: "resourceType":"TYPE", where TYPE is the data type, such as Patient, Claim, Account, etc.
    let idx = jsonData.indexOf('"resourceType"');
    if (idx >= 0) {
        let idx2 = jsonData.indexOf(',', idx);
        if (idx2 >= 0) {
            // this should be the full name:value
            let resourceStr = jsonData.substring(idx, idx2);

            // get the resource value
            idx = resourceStr.indexOf(':');
            // this is the quote before the resource type name
            idx = resourceStr.indexOf('"', idx);
            // get the quote after this quote
            idx2 = resourceStr.indexOf('"', ++idx);
            let typeName = resourceStr.substring(idx, idx2);

            return plainTypeToFhirType(jsonData, typeName);
        }
    } else {
        // this data structure does not have a resource type, so we need to figure out its type 
        // some other way.
    }

}



export function plainTypeToFhirType(jsonData: string, typeName: string) {

    let func = FHIR_RESOURCE_TYPE_TO_OBJECT.get(typeName);
    if (func !== undefined) {
        return func(jsonData);
    } 
    console.log("Could not find FHIR_RESOURCE_TYPE... for resource type: \"" + typeName + "\"");
    //TODO - this should never happen

}