import { Button, Icon } from '@mui/material';
import { Component } from 'react';
import { GetProducts } from './Network/NetworkUtil';

// Class component using state example 
class StatePlaygroundCls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            count: 0,
            apiInfo: {},
        };
      }
    callmethod2 = () => {
        console.log(" state information", this.state);
        this.setState({ brand: "Benz" });
    }

    addcount = () => {
        // destructuring the state
        const { count } = this.state;
        this.setState({ count: count+1 });
    }

    reducecount = () => {
        // destructuring the state
        const { count } = this.state;
        this.setState({ count: count-1 });
    }

    // api call and display data using state
    getApiInfo = async () => {
        const data = await GetProducts();
        this.setState({ apiInfo: data });
    }
    
    render() {
         // destructuring the state values
        const { count, apiInfo } = this.state;
        return (
            <div style={{marginTop: '30px'}}>
            <button type="button" onClick={this.callmethod2}>update brand button 2 using class component</button>
            <div>car brand {this.state.brand}</div>
            <Button onClick={this.addcount}>increment</Button>
            <Button onClick={this.reducecount}>decrement</Button>
            <Icon> {count}</Icon>
            <Button onClick={this.getApiInfo}>api call</Button>
            <div>{apiInfo.brand}</div>
            </div>
        );
    }
}

export default StatePlaygroundCls;
