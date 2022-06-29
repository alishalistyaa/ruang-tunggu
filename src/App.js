import './App.css';
import Landingpage from './Landingpage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className = "App">
      <Switch>
        <Route path="/">
          <Landingpage />
        </Route>
        
      </Switch>
      </div>
    </Router>
     
    
  );
}
export default App;
