import React from 'react';
import Header from './Header';
import Button from '@mui/material/Button';


const callmethod = async()=> {
    console.log("Hey this is sam")
        const response = await fetch("https://dummyjson.com/products/1");
        const jsonData = await response.json();
        console.log(jsonData);
  }
  
  const callmethod2 = ()=> {
    console.log("Hey this is sam from button 2")
  }

class Home extends React.Component {
    render() {
      return (
      <div>
        <Header />
        <button type="button" onClick={()=>callmethod()}>Sample button</button>
        <button type="button" onClick={callmethod2}>Sample button 2</button>
        <Button variant="outlined">using MUI</Button>
      </div> 
      );
    }
}

export default Home;