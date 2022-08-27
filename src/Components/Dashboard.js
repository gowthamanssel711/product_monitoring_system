import   React ,{useEffect,useState} from 'react';
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

import { Get_Maindata,Get_ProductList,Get_InstantCount } from './API/Api';


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



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {

  const [datevalue, setDatevalue] = useState(new Date());
  const [personName,setPersonName] = useState([]);
  const [productlist,setProductlist] = useState(['A/UNIT 1 ','B/UNIT 2','C','D','E']);
  const [product,setProduct]  = useState([]);
  const [shift,setShift] = useState([]);
   const [actualop,setActualop] = useState('20');




  useEffect (  ()=> {

const interval = setInterval (() => {
   get_instant_count();

},5000);

return () => clearInterval(interval);




  },[])



  useEffect (  ()=> {
 get_productlist();
 get_main_data();


  },[])


const get_main_data = async () => {

  var param = {
    'date': datevalue,
    'product': product,
    'shift':shift
  }

console.log(param)
  const data = await Get_Maindata('/get_main_data/',param);

  console.log(data);

}


const get_productlist = async () => {

  const data = await Get_ProductList('/get_product_list/','');

  //setProductlist(data.data)


}



const get_instant_count = async () => {

  var param = {
    'date': datevalue,
    'product': product,
    'shift':shift
  }


  const data = await Get_InstantCount('/get_instant_count/',param);

  console.log(`instant count value = ${data.data}`);

  //setActualop(data.data);

  console.log(actualop)

}


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
    <div>
      <Box sx={{ flexGrow: 1 }}>
        &nbsp;
        <Grid container spacing={3}>
          <Grid item xs>

            &nbsp;

		 <FormControl sx={{ width: 275 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <MobileDatePicker
                label="DATE"
                sx={{ m: 1, width: '30ch' }}
                id="outlined-start-adornment"
                value={datevalue}
                onChange={(newValue) => {
                  setDatevalue(newValue);
                  get_main_data();

                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
             </FormControl>

            &nbsp;


          </Grid>


          <Grid item xs>
            &nbsp;

            <FormControl sx={{ width: 290 }}>
              <InputLabel id="demo-multiple-checkbox-label">PRODUCT/UNIT</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                sx={{ m: 1, width: '30ch' }}
                onChange={handleDeviceChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
              >
                {productlist.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

          </Grid>

        </Grid>


      </Box>


      <Box sx={{ flexGrow: 1 }}>
        &nbsp;
        <Grid container spacing={3}>
          <Grid item xs>
            &nbsp;


            <TextField
              label="SET TIME "
              id="outlined-start-adornment"
              sx={{ m: 1, width: '30ch' }}
               InputProps={{
            
            startAdornment: <InputAdornment position="start">seconds</InputAdornment>,
          }}

            />
            &nbsp;


          </Grid>


          <Grid item xs>
            &nbsp;

     <TextField
              label="ACTUAL TIME "
              id="outlined-start-adornment"
              sx={{ m: 1, width: '30ch' }}
                 InputProps={{
            
            startAdornment: <InputAdornment position="start">seconds</InputAdornment>,
          }}	

            />
       

            &nbsp;
          </Grid>

        </Grid>


      </Box>

      {/* /////////////////////////////////////////////// */}

      <Box sx={{ flexGrow: 1 }}>
        &nbsp;
        <Grid container spacing={3}>
          <Grid item xs>

            &nbsp;

            <TextField
              label="TARGET OUTPUT/DAY"
              id="outlined-start-adornment"
              sx={{ m: 1, width: '30ch' }}

            />

            &nbsp;


          </Grid>


          <Grid item xs>

            &nbsp;

           <TextField
          label="CURRENT OUTPUT"
          id="outlined-start-adornment"
          value = {actualop}
          sx={{ m: 1, width: '30ch' }}
          InputProps={{
             readOnly: true,
            startAdornment: <InputAdornment position="start">cu</InputAdornment>,
          }}
        />

            &nbsp;

          </Grid>

        </Grid>


      </Box>

      &nbsp;

      <TextField
        label="EFFICIENCY"
        id="outlined-start-adornment"
	
        sx={{ m: 1, width: '30ch' }}
          inputProps={{min: 0, style: { textAlign: 'center' }}}
       
      />

       

      &nbsp;

      <HoursTable />
    </div>
  );
}