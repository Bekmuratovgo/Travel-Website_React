import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './contexts/AuthContext';
import LogIn from './components/LogIn/LogIn';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import Navbar from './components/Navbar/Navbar'
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
import Admin from './components/Admin/Admin';
import TopicDetails from './components/TopicDetails/TopicDetails';
import Basket from './components/Basket/Basket';
import Favorite from './components/Favorite/Favorite';
import Comment from './components/Comment/Comment';
import CreditCard from './components/Paymant/CreditCard'
import FormOrder from './components/FormOrder/FormOrder';

const Routes = () => {
    return (
        <>
        <AuthProvider>
            <BrowserRouter>
              <Navbar/>
                <Container className="asd" style={{ minHeight: "100vh"}}>
                <div className="w-100" >
                    {/* <Router> */}
                    <Switch>
                        <PrivateRoute exact path="/admin" component={Admin}/>
                        <PrivateRoute path="/update-profile" component={UpdateProfile}/>
                        <PrivateRoute exact path="/details/:id" component={TopicDetails} />
                        <PrivateRoute exact path="/" component={MainPage}/>

                        <Route exact path="/about" component={About}/>
                        <Route exact path="/basket" component={Basket}/>
                        <Route exact path="/favorite" component={Favorite} />
                        <Route exact path="/payment" component={CreditCard}/>
                        <Route exact path="/form-order" component={FormOrder}/>
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/login" component={LogIn}/>
                        <Route path="/forgot-password" component={ForgotPassword}/>
                        <Route path="/comment" component={Comment}/>
                    </Switch>
                    {/* </Router> */}
                </div>
                </Container>
            </BrowserRouter>
        </AuthProvider>

        </>
      );
};

export default Routes;