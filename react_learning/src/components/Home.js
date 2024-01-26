import React from 'react';
import Header from './Header';
import Button from '@mui/material/Button';
import StatePlaygroundCls from './StatePlagroundCls';
import StatePlaygroundF from './StatePlaygroundF';
import { APICALL_DUM } from './constants';
import { DisplayDataFC } from './DisplayDataFC';


const callmethod = async()=> {
    console.log("Hey this is sam")
        const response = await fetch(APICALL_DUM);
        const jsonData = await response.json();
        console.log(jsonData);
  }
  

class Home extends React.Component {
    callmethod2 = () => {
        console.log("Hey this is sam from button 2 + func inside class component")
    }

    render() {
      return (
      <div>
        {/* <Header /> */}
        {/* <button type="button" onClick={()=>callmethod()} value="func outside class component">Button F1</button>
        <button type="button" onClick={this.callmethod2} value="func inside class component">Button F2</button>
        <Button variant="outlined">using MUI</Button>
        <StatePlaygroundCls></StatePlaygroundCls> */}
        {/* <StatePlaygroundF></StatePlaygroundF> */}

        <DisplayDataFC />
      </div> 
      );
    }
}

export default Home;