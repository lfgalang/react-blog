// import Header from "./header/Header";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";



function App() {
  const user=false; 
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/signup"> {user ? <Home/> : <Signup />} </Route>
        <Route path="/login"> <Login /> </Route>
        <Route path="/write"> {user ? <Write />: <Login/>} </Route>
        <Route path="/settings"> {user ? <Settings />: <Login/>} </Route>
        <Route path="/post/:postId"> <Single /> </Route>
      </Switch>
    </Router>    
  );
}

export default App;
