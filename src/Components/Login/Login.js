import * as React from 'react';
import Box from '@mui/material/Box';
import {  Row, Col, Container } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <Box
      display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="80vh"
    >
     <Row>
   
     &nbsp;
       
       
         <TextField
          id="standard-textarea"
          label="user name"
          placeholder="user name"
          multiline
          variant="standard"
        />
        
        
     &nbsp;
       
       
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        &nbsp;
     
              <Button variant="outlined">SignIn</Button>

        
      </Row> 
    </Box>
  );
}

