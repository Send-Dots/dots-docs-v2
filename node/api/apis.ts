export * from './defaultApi';
import { DefaultApi } from './defaultApi';
export * from './flowsApi';
import { FlowsApi } from './flowsApi';
export * from './payoutLinksApi';
import { PayoutLinksApi } from './payoutLinksApi';
export * from './transactionsApi';
import { TransactionsApi } from './transactionsApi';
export * from './transfersApi';
import { TransfersApi } from './transfersApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [DefaultApi, FlowsApi, PayoutLinksApi, TransactionsApi, TransfersApi, UsersApi];
