import localVarRequest from 'request';

export * from './flow';
export * from './getTransfers200Response';
export * from './getUsers200Response';
export * from './getV2Flows200Response';
export * from './getV2PayoutLinks200Response';
export * from './getV2Transactions200Response';
export * from './paymentMethod';
export * from './payoutLink';
export * from './payoutLinkDelivery';
export * from './payoutLinkPayee';
export * from './postTransfersRequest';
export * from './postUsersRequest';
export * from './postUsersUserIdVerifyRequest';
export * from './postV2FlowsRequest';
export * from './postV2PayoutLinksRequest';
export * from './postV2PayoutLinksRequestDelivery';
export * from './postV2PayoutLinksRequestPayee';
export * from './postV2PayoutsRequest';
export * from './postV2PayoutsSendPayoutRequest';
export * from './postV2PayoutsSendPayoutRequestDelivery';
export * from './postV2PayoutsSendPayoutRequestPayee';
export * from './putUsersUserIdPayoutMethodsRequest';
export * from './putV2UsersUserIdKycRequest';
export * from './putV2UsersUserIdKycRequestAddress';
export * from './transaction';
export * from './transfer';
export * from './transferExternalData';
export * from './user';
export * from './userCompliance';
export * from './userPhoneNumber';
export * from './wallet';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Flow } from './flow';
import { GetTransfers200Response } from './getTransfers200Response';
import { GetUsers200Response } from './getUsers200Response';
import { GetV2Flows200Response } from './getV2Flows200Response';
import { GetV2PayoutLinks200Response } from './getV2PayoutLinks200Response';
import { GetV2Transactions200Response } from './getV2Transactions200Response';
import { PaymentMethod } from './paymentMethod';
import { PayoutLink } from './payoutLink';
import { PayoutLinkDelivery } from './payoutLinkDelivery';
import { PayoutLinkPayee } from './payoutLinkPayee';
import { PostTransfersRequest } from './postTransfersRequest';
import { PostUsersRequest } from './postUsersRequest';
import { PostUsersUserIdVerifyRequest } from './postUsersUserIdVerifyRequest';
import { PostV2FlowsRequest } from './postV2FlowsRequest';
import { PostV2PayoutLinksRequest } from './postV2PayoutLinksRequest';
import { PostV2PayoutLinksRequestDelivery } from './postV2PayoutLinksRequestDelivery';
import { PostV2PayoutLinksRequestPayee } from './postV2PayoutLinksRequestPayee';
import { PostV2PayoutsRequest } from './postV2PayoutsRequest';
import { PostV2PayoutsSendPayoutRequest } from './postV2PayoutsSendPayoutRequest';
import { PostV2PayoutsSendPayoutRequestDelivery } from './postV2PayoutsSendPayoutRequestDelivery';
import { PostV2PayoutsSendPayoutRequestPayee } from './postV2PayoutsSendPayoutRequestPayee';
import { PutUsersUserIdPayoutMethodsRequest } from './putUsersUserIdPayoutMethodsRequest';
import { PutV2UsersUserIdKycRequest } from './putV2UsersUserIdKycRequest';
import { PutV2UsersUserIdKycRequestAddress } from './putV2UsersUserIdKycRequestAddress';
import { Transaction } from './transaction';
import { Transfer } from './transfer';
import { TransferExternalData } from './transferExternalData';
import { User } from './user';
import { UserCompliance } from './userCompliance';
import { UserPhoneNumber } from './userPhoneNumber';
import { Wallet } from './wallet';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "PaymentMethod.PlatformEnum": PaymentMethod.PlatformEnum,
        "PayoutLink.StatusEnum": PayoutLink.StatusEnum,
        "PayoutLinkDelivery.MethodEnum": PayoutLinkDelivery.MethodEnum,
        "PostV2FlowsRequest.StepsEnum": PostV2FlowsRequest.StepsEnum,
        "PostV2PayoutLinksRequestDelivery.MethodEnum": PostV2PayoutLinksRequestDelivery.MethodEnum,
        "PostV2PayoutsRequest.PlatformEnum": PostV2PayoutsRequest.PlatformEnum,
        "PutUsersUserIdPayoutMethodsRequest.PlatformEnum": PutUsersUserIdPayoutMethodsRequest.PlatformEnum,
        "PutUsersUserIdPayoutMethodsRequest.AccountTypeEnum": PutUsersUserIdPayoutMethodsRequest.AccountTypeEnum,
        "PutV2UsersUserIdKycRequest.EntityTypeEnum": PutV2UsersUserIdKycRequest.EntityTypeEnum,
        "Transfer.StatusEnum": Transfer.StatusEnum,
        "Transfer.TypeEnum": Transfer.TypeEnum,
        "TransferExternalData.PlatformEnum": TransferExternalData.PlatformEnum,
}

let typeMap: {[index: string]: any} = {
    "Flow": Flow,
    "GetTransfers200Response": GetTransfers200Response,
    "GetUsers200Response": GetUsers200Response,
    "GetV2Flows200Response": GetV2Flows200Response,
    "GetV2PayoutLinks200Response": GetV2PayoutLinks200Response,
    "GetV2Transactions200Response": GetV2Transactions200Response,
    "PaymentMethod": PaymentMethod,
    "PayoutLink": PayoutLink,
    "PayoutLinkDelivery": PayoutLinkDelivery,
    "PayoutLinkPayee": PayoutLinkPayee,
    "PostTransfersRequest": PostTransfersRequest,
    "PostUsersRequest": PostUsersRequest,
    "PostUsersUserIdVerifyRequest": PostUsersUserIdVerifyRequest,
    "PostV2FlowsRequest": PostV2FlowsRequest,
    "PostV2PayoutLinksRequest": PostV2PayoutLinksRequest,
    "PostV2PayoutLinksRequestDelivery": PostV2PayoutLinksRequestDelivery,
    "PostV2PayoutLinksRequestPayee": PostV2PayoutLinksRequestPayee,
    "PostV2PayoutsRequest": PostV2PayoutsRequest,
    "PostV2PayoutsSendPayoutRequest": PostV2PayoutsSendPayoutRequest,
    "PostV2PayoutsSendPayoutRequestDelivery": PostV2PayoutsSendPayoutRequestDelivery,
    "PostV2PayoutsSendPayoutRequestPayee": PostV2PayoutsSendPayoutRequestPayee,
    "PutUsersUserIdPayoutMethodsRequest": PutUsersUserIdPayoutMethodsRequest,
    "PutV2UsersUserIdKycRequest": PutV2UsersUserIdKycRequest,
    "PutV2UsersUserIdKycRequestAddress": PutV2UsersUserIdKycRequestAddress,
    "Transaction": Transaction,
    "Transfer": Transfer,
    "TransferExternalData": TransferExternalData,
    "User": User,
    "UserCompliance": UserCompliance,
    "UserPhoneNumber": UserPhoneNumber,
    "Wallet": Wallet,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
