export function getApi(location) {
    return {
        type: GET_REQUEST,
        payload: { location }
    }
}

export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_ERROR = "GET_ERROR";