import React from 'react';
import {connect} from 'react-redux'
import {increment} from '../../store'
import {counter__selector} from '../../selectors'
const Counter = (props) => {
  React.useEffect(()=>{
    console.log('Counter Mounted')
    // setInterval(()=>{
    //   props.increment();
    // }, 1000)
  },[])
  React.useEffect(()=>{
    console.log('!!Counter rerenderd!!!')

  })
  return (
  <div className={'styles.Counter'} data-testid="Counter">
    {props.counter}
  </div>
  );
}

/*
* properties of this object are gonna be the props of our components
*/
function mapStateToProps(state) {
  return counter__selector(state)
}

/*
* Action creators that will be available within our components props
*/
const mapDispatchToProps = {
  increment
}

/*
* this will create component under the hood that will
* wrap our component and will handle the subscribing and unsubscribing
*/
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
