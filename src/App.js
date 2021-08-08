import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Container, Grid } from "@material-ui/core"
import Profile from "./components/profile/Profile"
import Header from "./components/header/Header"
import Portfolio from "./pages/portfolio/Portfolio"
import Resume from "./pages/resume/Resume"
import Footer from "./components/footer/Footer"

import {BrowserRouter as Router,Switch,Route} from "react-router-dom"


function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} lg={3} md={4} >
         <Profile/>
        </Grid>

        <Grid item  xs>
          
          
          
          <Router>
            <Header />
            <Switch>
            <Route path="/portfolio">
               <Portfolio />
            </Route>

            <Router path="/">
              <Resume />
            </Router>

            </Switch>
            
           
          </Router>
          <Footer/>
        
        
        </Grid>

        </Grid>

    </Container>
  );
}

export default App;
