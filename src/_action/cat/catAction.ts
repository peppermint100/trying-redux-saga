import CatImageType from "../../type/cat";

export const REQUEST_DATA = "REQUEST_DATA" as const;
export const RECEIVE_DATA = "RECEIVE_DATA" as const;

// triggered by application
export const requestData = () => ({
    type: REQUEST_DATA,
})

// triggered by saga
export const receiveData = (data: CatImageType) => ({
    type: RECEIVE_DATA,
    data
})

export type CatActionType = ReturnType<typeof receiveData>