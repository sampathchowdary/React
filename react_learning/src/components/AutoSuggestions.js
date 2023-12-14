import { TextField } from '@mui/material';
import { Autocomplete } from "@mui/material";
import React,{ useEffect, useState } from 'react';
import { getCallAxios } from './Network/NetworkCall';
import { AXIOSCALL_AUTOSUGGESTION } from './constants';
import { getNames } from './utils';


function AutoSuggestions() {
    const [suggestions, setSuggestions] = useState([]);
    const getSuggestions = async () => {
      const apiData = await getCallAxios(AXIOSCALL_AUTOSUGGESTION);
      // console.log(apiData);
      return getNames(apiData);
    };

    const updateSuggestions = async () => {
      const names = await getSuggestions();
      setSuggestions(names);
    };
    
    useEffect(() => {
      updateSuggestions();
    }, []);

    return (
      <div>
        {suggestions}
           <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={suggestions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
            />
            <button onClick={()=> getSuggestions()}>click</button>
      </div>
    );
  }
  
  export default AutoSuggestions;