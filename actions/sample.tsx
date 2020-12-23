import { SAMPLE_ACTION } from './types';

export const SampleAction = (payload: string) => {
    return {
        type: SAMPLE_ACTION,
        payload
    }
}