import { TextField } from '@mui/material';
import { Autocomplete } from "@mui/material";

function AutoSuggestions() {
    const films = ['The Godfather', 'Pulp Fiction'];
    return (
      <div>
           <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
            />
      </div>
    );
  }
  
  export default AutoSuggestions;