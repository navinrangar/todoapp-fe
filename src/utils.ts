import {values} from 'lodash';

export const ObjectKeys = <T> (object: Object) => {
    return Object.keys(object) as any as T[]
}

export const ObjectToArray = <T> (object: Object) => {
    return ObjectKeys<string>(object).map(k => (object as any)[k] as any) as T[]
}

export const ObjectToArrayWithLodash = <T> (object: Object) => {
    return values(object) as T[]
}