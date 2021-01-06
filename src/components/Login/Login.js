import React from 'react';
import { userLogin__thunk } from '../../store'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom'
// Selectors
import {isLoggedIn__selector} from '../../selectors'

const Login = (props) => {
  const history = useHistory();

    // Component did mount
    React.useEffect(()=>{
      console.log('Login Mounted')
    }, [])

  React.useEffect(()=>{
    if(props.isLoggedIn){
      history.push('/')
    }
  }, [props.isLoggedIn])

    // component rerendered
    React.useEffect(()=>{
      console.log('!!Login rerenderd!!!')
    })

  const handleLogin = () =>{
    props.userLogin__thunk();
  }

  return (
  <div className={'login'} data-testid="Login">
    Login Component
    <button onClick={()=>handleLogin()}>Login</button>
  </div>
  )
};



/*
* properties of this object are gonna be the props of our components
*/
function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn
  }
}

/*
* Action creators that will be available within our components props
*/
const mapDispatchToProps = {
  userLogin__thunk,
}

/*
* this will create component under the hood that will
* wrap our component and will handle the subscribing and unsubscribing
*/
export default connect(mapStateToProps, mapDispatchToProps)(Login);
