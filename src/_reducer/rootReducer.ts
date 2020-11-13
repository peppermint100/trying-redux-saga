import { combineReducers } from "redux";
import catReducer from "./../_reducer/cat/catReducer";

export type RootReducerType = ReturnType<typeof RootReducer>  

const RootReducer = combineReducers({
   catReducer 
});

export default RootReducer;