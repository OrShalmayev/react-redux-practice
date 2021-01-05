import React from 'react';
import {connect} from 'react-redux';
import {toggleSwitch} from '../../store'

const MainLayout = (props) => {
  React.useEffect(()=>{
    console.log('MainLayout Mounted :)')
  }, []);

  React.useEffect(()=>{
    console.log('!!!MainLayout Rerendered!!!')
  });


  const handleBtnClick = () => {
    props.toggleSwitch();
  }

  return (
    <div className={'MainLayout'} data-testid="MainLayout">
      MainLayout Component
      <button onClick={()=>handleBtnClick()}>Update switch state</button>
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
  toggleSwitch
}

/*
* this will create component under the hood that will
* wrap our component and will handle the subscribing and unsubscribing
*/
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
