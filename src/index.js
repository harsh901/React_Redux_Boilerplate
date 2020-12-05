import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import * as serviceWorker from './serviceWorker';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import reducers from "./Store/reducers";
import { ConnectedRouter } from "connected-react-router";
import history from "./Utils/history";

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(thunk)
  // other store enhancers if any
)(createStore);
const MOUNT_ROOT = document.getElementById("root");

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<ConnectedRouter history={history}>
      		<AppRoutes />
    	</ConnectedRouter>
	</Provider>,
	MOUNT_ROOT
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
