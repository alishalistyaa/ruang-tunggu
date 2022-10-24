// Import Needs
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import {BrowserView, MobileView} from 'react-device-detect';


// Import JS
import './App.css';
import Landingpage from './1-Landingpage';
import LoginRegister from './2-LoginRegister';
import Login from './4-Login';
import Register from './3-Register';
import DataPasien from './DataPasien';
import DataAsuransi from './DataAsuransi';
import NoAntrian from './NoAntrian';
import Pasien from './Pasien';
import Asuransi from './Asuransi';
import Explore from './5-Explore';
import Pembayaran from './Pembayaran';
import Appointment from './Appointment';
import ErrorPage from './errorpage';
import errorimage from './images/404-error.png';


function App() {
  return (
    <>
    {/* Resticted View for Mobile and Browser
            <BrowserView>
                <h1>Maaf, kami baru tersedia di mobile.</h1>
                <img src ={errorimage}/>

            </BrowserView>
            <MobileView> */}
            <Router>

      <div className = "App">
      < Route render ={({location}) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={490}
            classNames="fade">
      
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
        <Route exact path="/explore">
          <Explore />
        </Route>

        {/* APPOINTMENT */}
        <Route exact path="/appointment">
          <Appointment />
        </Route>

        {/* Data Pasien */}
        <Route exact path="/pasien">
          <Pasien />
        </Route>

        <Route exact path="/tambah-data-pasien">
          <DataPasien />
        </Route>
        

        {/* Data Asuransi */}
        <Route exact path="/asuransi">
          <Asuransi />
        </Route>

        <Route exact path="/tambah-data-asuransi">
          <DataAsuransi />
        </Route>

        {/* Pembayaran */}
        <Route exact path="/pembayaran">
          <Pembayaran />
        </Route>

        {/* Nomor Antrian */}
        <Route exact path="/nomor-antrian">
          <NoAntrian />
        </Route>

        {/* ERROR PAGE */}
        <Route exact path="/404-error">
          <ErrorPage />
        </Route>
        

      </Switch>
      </CSSTransition>
        </TransitionGroup>
          )}/>
      </div>
    </Router>
            {/* </MobileView> */}
        </>

     
  );
}
export default App;
