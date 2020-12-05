import React, { Component } from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomeContainer from "./Home";

class App extends Component {
  render() {    
    return (
    	<BrowserRouter>
    		<Switch>
    			<Route exact path="/" component={HomeContainer}></Route>
    		</Switch>
    	</BrowserRouter>
    );
  }
}

export default App;