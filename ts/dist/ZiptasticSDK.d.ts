import { GetLocationByZipcodeEntity } from './entity/GetLocationByZipcodeEntity';
export type * from './ZiptasticTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { ZiptasticEntityBase } from './ZiptasticEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class ZiptasticSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    GetLocationByZipcode(entopts?: Record<string, any>): GetLocationByZipcodeEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): ZiptasticSDK;
    tester(testopts?: any, sdkopts?: any): ZiptasticSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof ZiptasticSDK;
export { stdutil, config, BaseFeature, ZiptasticEntityBase, ZiptasticSDK, SDK, };
