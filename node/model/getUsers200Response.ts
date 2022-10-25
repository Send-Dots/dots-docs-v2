/**
 * dots api
 * Scalable and Flexible Payouts Infrastructure
 *
 * The version of the OpenAPI document: 1.0
 * Contact: info@dots.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { User } from './user';

export class GetUsers200Response {
    'data'?: Array<User>;
    'hasMore'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<User>"
        },
        {
            "name": "hasMore",
            "baseName": "has_more",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return GetUsers200Response.attributeTypeMap;
    }
}
