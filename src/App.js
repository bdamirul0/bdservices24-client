import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/LandingPage/Home/Home';
import OrderList from './components/Admin/OrderList/OrderList';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ManageService from './components/Admin/ManageService/ManageService';
import Client from './components/Client/Client/Client';
import Book from './components/Client/Book/Book';
import Review from './components/Client/Review/Review';
import Login from './components/LoginComponent/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/LoginComponent/ProvateRoute/PrivateRoute';

export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser]=useState({})
  console.log(loggedInUser)
  return (
    
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
            <PrivateRoute path="/admin">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/orderList">
              <OrderList></OrderList>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/addServices">
              <AddService></AddService>
            </Route>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/manageServices">
              <ManageService></ManageService>
            </PrivateRoute>
            <PrivateRoute path="/serviceReview">
              <Book></Book>
            </PrivateRoute>
            <PrivateRoute path="/bookingList">
              <Client></Client>
            </PrivateRoute>
            <Route path="/book">
              <Book></Book>
            </Route>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
