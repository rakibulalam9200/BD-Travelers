import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import AddOffer from "./pages/AddOffer/AddOffer";
import Book from "./pages/Book/Book";
import DashBoard from "./pages/DashBoard/DashBoard";
import Home from './pages/Home/Home/Home';
import OfferInfo from "./pages/Home/OfferInfo/OfferInfo";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import SignUp from "./pages/Login/SignUp/SignUp";
import ManageOffer from "./pages/ManageOffer/ManageOffer";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import UpdateOffer from "./pages/UpdateOffer/UpdateOffer";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route> 
            <PrivateRoute path="/addOffer">
              <AddOffer></AddOffer>
            </PrivateRoute> 
            <PrivateRoute path="/manageOffer">
              <ManageOffer></ManageOffer>
            </PrivateRoute> 
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute> 
            <PrivateRoute path="/book/:id">
              <Book></Book>
            </PrivateRoute> 
            <PrivateRoute path="/offers/:offerId">
              <OfferInfo></OfferInfo>
            </PrivateRoute> 
            <PrivateRoute path="/updateOffer/:id">
              <UpdateOffer></UpdateOffer>
            </PrivateRoute> 
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
