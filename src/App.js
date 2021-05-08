import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './contexts/AuthContext';
import Home from './components/Home/Home'
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import Navbar from './components/Navbar/Navbar'
import MainPage from './components/MainPage/MainPage';
import SecondBody from './components/SecondBody/SecondBody';

const App = () => {
  return (
    <>
      <Navbar/>
      <Container className="asd"
      style={{ minHeight: "100vh"}}
      >
        
          <div className="w-100" style={{ maxWidth: '400px' }}>
            <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path="/" component={MainPage}/>
                  <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                  <Route path="/signup" component={SignUp}/>
                  <Route path="/login" component={LogIn}/>
                  <Route path="/forgot-password" component={ForgotPassword}/>
                </Switch>
              </AuthProvider>
            </Router>
          
          </div>
          <SecondBody/>
        </Container>
      </>
  );
};

export default App;