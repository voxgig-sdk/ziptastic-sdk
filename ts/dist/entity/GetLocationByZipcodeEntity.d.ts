import { ZiptasticEntityBase } from '../ZiptasticEntityBase';
import type { ZiptasticSDK } from '../ZiptasticSDK';
import type { Control } from '../types';
import type { GetLocationByZipcode, GetLocationByZipcodeLoadMatch } from '../ZiptasticTypes';
declare class GetLocationByZipcodeEntity extends ZiptasticEntityBase<GetLocationByZipcode> {
    constructor(client: ZiptasticSDK, entopts: any);
    make(this: GetLocationByZipcodeEntity): GetLocationByZipcodeEntity;
    load(this: any, reqmatch?: GetLocationByZipcodeLoadMatch, ctrl?: Control): Promise<GetLocationByZipcodeEntity>;
}
export { GetLocationByZipcodeEntity };
