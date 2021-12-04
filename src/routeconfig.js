import React from "react";
import {
  Switch,
  Route,
  useLocation} from "react-router-dom";
  import {Home} from './App';
  import MyProfile from './MyProfile';

export default function RouteConfig() {
    let location = useLocation();
  
  
    return (
      <div>
        <Switch >
          <Route exact path="/" children={<Home />} />
          <Route path="/myprofile" children={MyProfile} />
          
        </Switch>
  
        
      </div>
    );
  }