import { combineReducers } from "redux";

import cocktailReducer from "./action/Reducer";


const Rootreducer=combineReducers({
    data:cocktailReducer,
});

export default Rootreducer;