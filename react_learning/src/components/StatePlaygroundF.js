import { Button, Icon } from '@mui/material';
import { useState, useEffect } from 'react';
import { GetProducts } from './Network/NetworkUtil';
import Level1Child1 from './Level1Child1';
import Level1Child2 from './Level1Child2';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from './actions/Actions';



// functional component - using state
function StatePlaygroundCls() {

    const [Brand, setBrand] = useState("");
    const [Count, setCount] = useState(0);
    const [apiData, setapiData] = useState({});
    const age = useSelector((state) => { console.log(state.counter.age)
         return state.counter.age});
    const dispatch = useDispatch()

      // Use useEffect to ensure the component is mounted before accessing 'age'
//   useEffect(() => {
//     console.log(age); // Safely access 'age' here
//   }, [age]);
    console.log('data from store', age);
   const callmethod2 = () => {
        console.log(" state information usestate", Brand);
        setBrand("Benz");
    }

    const addcount = () => {
       setCount(Count+1);
console.log('trigger reducere')
       // update the reducer TOO
       dispatch(incrementCounter())
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
            <div style={{marginTop: '30px'}}>
            <button type="button" onClick={callmethod2}>update brand button 2 using Functional component</button>
            <div>car brand {Brand} </div>
            <Button onClick={addcount}>increment</Button>
            <Button onClick={reducecount}>decrement</Button>
            <Icon>{Count} </Icon>
            <Button onClick={getApiInfo}>api call</Button>
            <div>{apiData.brand}</div>
            {/* using child1 and child2 demonstrating props and respective updates in diff childs */}
            <Level1Child1 data={Count} increase={addcount} decrease={reducecount} />
            <Level1Child2 data={Count} increase={addcount} decrease={reducecount} />

            <Button>{age} from Redux store </Button>
            </div>
        );
}

export default StatePlaygroundCls;
