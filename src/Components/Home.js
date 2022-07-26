import { Button, Row, Col, Container } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import React from 'react';
import { Get_Count } from './API/Api';


function Home() {

  const [datevalue, setDatevalue] = React.useState(new Date());




  return (
    <Container>

      <Row>
        <Col style={{ 'paddingLeft': '50px' }} xs={16} md={4}>

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
        </Col>

        <Col xs={6} md={4}>

        </Col>
        <Col style={{ 'paddingLeft': '150px' }} xs={10} md={4}>
          <TextField
            label="SHIFT"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">kg</InputAdornment>,
            }}
          />
        </Col>
      </Row>

      &nbsp;

      <Row>
        <Col style={{ 'paddingLeft': '50px' }} xs={16} md={4}>
          <TextField
            label="SET TIME"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">sec</InputAdornment>,
            }}
          />
        </Col>
        <Col xs={6} md={4}>

        </Col>
        <Col style={{ 'paddingLeft': '150px' }} xs={10} md={4}>
          <TextField
            label="ACTUAL TIME"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">sec</InputAdornment>,
            }}
          />
        </Col>
      </Row>

      &nbsp;

      <Row>
        <Col style={{ 'paddingLeft': '50px' }} xs={16} md={4}>
          <TextField
            label="TARGET OUTPUT"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">cnt</InputAdornment>,
            }}
          />
        </Col>
        <Col xs={6} md={4}>

        </Col>
        <Col style={{ 'paddingLeft': '150px' }} xs={10} md={4}>
          <TextField
            label="ACTUAL OUTPUT"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">cnt</InputAdornment>,
            }}
          />
        </Col>
      </Row>

      &nbsp;


      <Row>
        <Col style={{ 'paddingLeft': '50px' }} xs={16} md={4}>
          <TextField
            label="EFFICIENCY"
            id="outlined-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              startAdornment: <InputAdornment position="start">%</InputAdornment>,
            }}
          />
        </Col>
        <Col xs={6} md={4}>

        </Col>

      </Row>

    </Container>
  );
}


export default Home;
