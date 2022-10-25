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

export class PostV2PayoutsSendPayoutRequestDelivery {
    /**
    * Message to send with the payout.
    */
    'message'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return PostV2PayoutsSendPayoutRequestDelivery.attributeTypeMap;
    }
}
