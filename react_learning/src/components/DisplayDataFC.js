import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { getCallAxios } from './Network/NetworkCall';
import { API_POSTS } from './constants';
import { getApiDataToStore } from './actions/DataActions';
import { getApiData } from './sagas/DataSaga';

export const DisplayDataFC = () => {
    return (
        <Fragment>
            {/* <DisplayDataDirect /> */}
            <DisplayDataStore />
        </Fragment>
    )
};


const DisplayDataStore = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getApiData(1))
    },[dispatch]);
    return (
        <>
        
        <button> Get 10 From Store</button>
        </>
    )
}
const DisplayDataDirect = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true);
        const getAPIDATA = async (count) => {
            const dd = await getCallAxios(API_POSTS(count, 10));
            console.log("api data", dd.posts);
            setData(dd.posts);
        }
        
        getAPIDATA(count)
        setLoading(false);
    },[count])



    return (
        <>
        <div>
            {loading ? 
            <div> wait data loading</div>
            : 
            <div>
            {data.map((row) => {
                return <RowData key={row.id} row ={row} />
            })}
            </div>
            }
            <button onClick={() => setCount(count+10)}> Get Next 10</button>
            
        </div>
        </>
    )


}

const RowData = (props) => {
    const { row } = props;
    return (
        <div>
            {row.title}
        </div>
    )
}