import { applyMiddleware, createStore } from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";
import Rootreducer from "./Rootreducer";

const middleware=[thunk]

if(process.env.NODE_ENV==='development'){
    middleware.push(logger);
}

const store=createStore(Rootreducer,applyMiddleware(...middleware));



export default store;