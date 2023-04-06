import { Button, Icon } from '@mui/material';
import { useState } from 'react';
import { GetProducts } from './Network/NetworkUtil';

// functional component - using state
function StatePlaygroundCls() {

    const [Brand, setBrand] = useState("");
    const [Count, setCount] = useState(0);
    const [apiData, setapiData] = useState({});

   const callmethod2 = () => {
        console.log(" state information usestate", Brand);
        setBrand("Benz");
    }

    const addcount = () => {
       setCount(Count+1);
    }

    const reducecount = () => {
        setCount(Count-1);
    }

    // api call and display data using state
    const getApiInfo = async () => {
        const data = await GetProducts();
        setapiData(data);
    }
        return (
            <div>
            <button type="button" onClick={callmethod2}>update brand button 2</button>
            <div>car brand {Brand} </div>
            <Button onClick={addcount}>increment</Button>
            <Button onClick={reducecount}>decrement</Button>
            <Icon>{Count} </Icon>
            <Button onClick={getApiInfo}>api call</Button>
            <div>{apiData.brand}</div>
            </div>
        );
}

export default StatePlaygroundCls;
