import CatImageType from "../../type/cat";
import {CatActionType, RECEIVE_DATA} from "./../../_action/cat/catAction";

const initialState: Array<CatImageType> = [];

export default (state:Array<CatImageType>=initialState, action:CatActionType) => {
    switch(action.type){
        case RECEIVE_DATA:
            return [...state, action.data];
        default:
            return state;
    }
}