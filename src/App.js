import './App.css';
import React from 'react';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect,
  // useHistory,
  // useLocation
} from "react-router-dom";

// Components
import MainLayout from './components/MainLayout/MainLayout';
import Login from './components/Login/Login';

// Selectors
import {appSelector__selector} from './selectors'

function App(props) {
  // Component did mount
  React.useEffect(()=>{
    console.log('App Mounted')
  }, [])

  // component did update on specific prop
  React.useEffect(()=>{
    console.log('props.isLoggedIn changed', props.isLoggedIn)
  }, [props.isLoggedIn])

  // component rerendered
  React.useEffect(()=>{
    console.log('!!App rerenderd!!!')
  })

  /**
   ** JSX
   */
  return (
        <div className="App">
          <Router>
          { !props.isLoggedIn 
            &&
            <Redirect to={'/login'} />
          }
            <Switch>
              <Route exact path="/">
                <MainLayout />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Router>
        </div>
  );
}

/*
* properties of this object are gonna be the props of our components
*/
function mapStateToProps(state) {
  console.log('App:state',state)
  //with memoization
  return {
    isLoggedIn: state.isLoggedIn,
    payload: state.payload,
  }
  console.log(appSelector__selector(state));
  // return appSelector__selector(state);
}

/*
* Action creators that will be available within our components props
*/
const mapDispatchToProps = {
}

/*
* this will create component under the hood that will
* wrap our component and will handle the subscribing and unsubscribing
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
