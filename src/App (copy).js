
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navigation/Navbar.js";
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';

import Default from './Components/Default';
import Dashboard from './Components/Dashboard';
import Configuration from './Components/Configuration';
import Devices from './Components/Devices';
import Contact from './Components/Contact';



function App() {
  return (
    <div >
     
     {/*<div className='App'> <h1> Product Monitoring System </h1></div>    &nbsp; */} 
     
      <Navbar/>
      
      <Router>
      
      <Switch>
       <Route exact path='/' component={Default} />
      <Route exact path='/Dashboard' component={Dashboard} />
        <Route exact path='/Configuration' component={Configuration} />
          <Route exact path='/Devices' component={Devices} />
            <Route exact path='/Contact' component={Contact} />
      </Switch>
      
      </Router>
   
    </div>
  );
}

export default App;
