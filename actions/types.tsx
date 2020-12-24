export const SAMPLE_ACTION = 'SAMPLE_ACTION';
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export interface Action {
    type: string,
    payload: any
}

export interface User {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}