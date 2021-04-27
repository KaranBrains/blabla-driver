import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Email from "./components/Auth/Signup/Email";
import Footer from "./components/Footer/Footer";
import Otp from "./components/Auth/Signup/Otp";
import Signup from "./components/Auth/Signup/Signup";
import NavbarComponent from "./components/Navbar/NavbarComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Switch>
        {/* Login */}
        <Route exact path="/login" component={Login} />

        {/* Sign up */}
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/otp" component={Otp} />
        <Route exact path="/email" component={Email} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
