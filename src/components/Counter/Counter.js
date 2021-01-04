import React from 'react';
import {connect} from 'react-redux';
import {testFetch} from '../../store';

const Counter = (props) => {
  React.useEffect(()=>{
    console.log(props.testFetch())
  }, []);


  return (
    <div className={'counter'} data-testid="Counter">
      Counter Component
    </div>
  )
}

/*
* properties of this object are gonna be the props of our components
*/
function mapStateToProps() {
  return {}
}

/*
* Action creators that will be available within our components props
*/
const mapDispatchToProps = {
  testFetch,
}

/*
* this will create component under the hood that will
* wrap our component and will handle the subscribing and unsubscribing
*/
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
