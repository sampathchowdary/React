import { Button } from '@mui/material';
import { Component } from 'react';

// Class component using props example 
class Level1Child2 extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        
      }
    
    render() {
         // destructuring the prop values
        const { data, increase, decrease} = this.props;
        return (
            <div>
            <div>Level 1 - child 2</div>
            <Button onClick={increase}>increase parent from c1</Button>
            <Button onClick={decrease}>decrease parent from c1</Button>
            <div>{data}</div>
            </div>
        );
    }
}

export default Level1Child2;
