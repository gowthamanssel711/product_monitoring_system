import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Row, Col, Container } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import OverAllGraph from './Graph/OverAllgraph';
import HoursTable from './HoursTable';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import { Get_Count } from './API/Api';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
 'A','B','C','D','E','F'
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  const [datevalue, setDatevalue] = React.useState(new Date());

  const [personName, setPersonName] = React.useState([]);

  const handleDeviceChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
        
        &nbsp;
        
  <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              label="DATE"
              id="outlined-start-adornment"
              value={datevalue}
              onChange={(newValue) => {
                Get_Count("/get_date/",newValue)
                setDatevalue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          
          &nbsp;
          
           <TextField
            label="SHIFT"
            id="outlined-start-adornment"
  
           
          />
          
           &nbsp;
          
           <TextField
            label="SET TIME"
            id="outlined-start-adornment"
          />
          
          &nbsp;
          
              <TextField
            label="TARGET OP"
            id="outlined-start-adornment"
          />
         

        </Grid>


        <Grid item xs>
      &nbsp;

    <FormControl sx={{ width: 190 }}>
        <InputLabel id="demo-multiple-checkbox-label">Pro</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleDeviceChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
          
                   &nbsp;
   <TextField
            label="Efficiency"
            id="outlined-start-adornment"
  
          />
          
           &nbsp;
          
           <TextField
            label="ACTUAL"
            id="outlined-start-adornment"
  
           
          />
          
            &nbsp;
          
              <TextField
            label="ACTUAL OP"
            id="outlined-start-adornment"
          />

        </Grid>

        <Grid item xs={8}>

          <OverAllGraph />

        </Grid>

   
      </Grid>
      &nbsp;
      <HoursTable/>
    </Box>
  );
}
