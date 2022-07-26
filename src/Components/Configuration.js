
import * as React from 'react';
import DeviceConfig from './Devices/DeviceConfig'
import Box from '@mui/material/Box';


export default function Configuration() {
  

  return (
   <Box sx={{ flexGrow: 1 }}>
   &nbsp;
     <div className='App'> <h1> Config Devices with Department
      </h1></div>
     
     &nbsp;
     
     <DeviceConfig/> 
         
    </Box>
  );
}
