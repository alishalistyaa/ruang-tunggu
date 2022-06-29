// Import Needs
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import JS
import './App.css';
import Landingpage from './Landingpage';
import LoginRegister from './LoginRegister';
import Login from './Login';
import Register from './Register';
import DataPasien from './DataPasien';
import DataAsuransi from './DataAsuransi';


function App() {
  return (
    <Router>
      <div className = "App">
      <Switch>
        {/* Landing Page */}
        <Route exact path="/">
          <Landingpage />
        </Route>

        {/* Login and Register */}
        <Route exact path="/login-register">
          <LoginRegister />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>

        {/* Explore */}

        {/* Data Pasien */}
        <Route exact path="/tambah-data-pasien">
          <DataPasien />
        </Route>

        {/* Data Asuransi */}
        <Route exact path="/tambah-data-asuransi">
          <DataAsuransi />
        </Route>
        

      </Switch>
      </div>
    </Router>
     
    
  );
}
export default App;
