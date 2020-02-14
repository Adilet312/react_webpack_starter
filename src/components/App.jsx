import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import {Switch,Route} from "react-router-dom";
import TweetForm from "./TweetForm";



function App(){
  return (
    <div>
      <Navbar/>
      <hr/>
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/pathToForm" component={TweetForm} />
        </Switch>
    </div>
  );
}

export default App;
