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
import Counter from './components/Counter/Counter';
import Login from './components/Login/Login';

function App(props) {
  React.useEffect(()=>{
    console.log('props.isLoggedIn')
  }, [props.isLoggedIn])

  return (

        <div className="App">
          <Router>
          {!props.isLoggedIn &&
            <Redirect to={'/login'} />}
            <Switch>
              <Route exact path="/">
                <Counter />
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
  console.log(state)
  return {
    isLoggedIn: state.isLoggedIn
  }
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
