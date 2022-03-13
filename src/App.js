import logo from './logo.svg';
import './App.css';
import Form from './Component/form/Form';
import ViewData from './Component/viewdata/ViewData';
import {  Switch, Route, BrowserRouter as Router  } from "react-router-dom"

function App() {
  return (
   
    
    
    <div>
 
    <Router>
          <Switch>
      
          
                    <Route exact path="/" component={Form}/>
                    <Route  path="/viewdata" component={ViewData}/>
            
                    
                    </Switch>
                    </Router>
      
      </div>
   

   
  );
}

export default App;
