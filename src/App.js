import './App.css';
import Home from './Componants/Home/Home';
import Service from './Componants/Services/Service';
import NotFound from './Componants/NotFound/NotFound';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Componants/Header/Header';
import Details from './Componants/Details/Details';
import Login from './Componants/Login/Login';
import AuthProvider from './Componants/Context/AuthProvider';
import PrivateRoute from './Componants/Login/PrivateRoute';
import Contact from './Componants/Contact/Contact';
import About from './Componants/About/About';
import Footer from './Componants/Footers/Footer';
import AddProduct from './Componants/AddProduc/AddProduct';
import Success from './Componants/Success/Success';
import MyOrders from './Componants/MyOrder/MyOrders';
import ManageOrders from './Componants/ManageOrders/ManageOrders';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/service">
          <Service></Service>
        </Route>
        <PrivateRoute path="/addservice">
          <AddProduct></AddProduct>
        </PrivateRoute>
        <Route path="/myorder">
          <MyOrders></MyOrders>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <PrivateRoute path="/success">
          <Success></Success>
        </PrivateRoute>
        <PrivateRoute path="/manageorders">
          <ManageOrders></ManageOrders>
        </PrivateRoute>
        <Route path="/about">
          <About></About>
        </Route>
        
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/details/:detailsId">
          <Details></Details>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
