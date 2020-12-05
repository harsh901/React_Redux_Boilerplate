import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "../Store/history";

import homeReducer from "../Home/modules/homeReducer";

const rootReducer = combineReducers({
  router: connectRouter(history),

  home:homeReducer,
});

export default rootReducer;