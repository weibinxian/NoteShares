import React, { Component } from 'react';
import { Route, Switch } from 'react-router'

//import components
import NavBar from './components/NavBar';
import Home from './components/Home';
import User from './components/userComponents/User';
import Notes from './components/noteComponents/Notes';
import Login from './components/loginComponents/Login';
import SignUp from './components/singUpComponents/signup';
import NewNotes from './components/newNoteComponents/newnote';
import ViewNote from './components/noteComponents/ViewNotes';
import SearchBar from './components/seachComponent/SearchBar'
//private route 
import {PrivateRoute} from './utilities/privateRoute'



class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar/> 
        <div className="Test">   
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/notes" component={Notes}/>
            <Route exact path="/login" component={Login}/>
            <Route extact path="/signup" component={SignUp}/>
            <Route extact path="/search" component={SearchBar}/>
            <PrivateRoute exact path="/user" component={User} />
            <PrivateRoute exact path="/newpost" component={NewNotes} />
            <PrivateRoute exact path="/viewnote/:id" component={ViewNote} />
          </Switch>
        </div>

      </div>

    );
  }
}

export default App;
