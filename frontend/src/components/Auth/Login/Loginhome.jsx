import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/NavbarComponent";
import Footer from "../../footer/Footer";

function Loginhome() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                How do you want to log in?
              </h1>
              <Link to="/login/email">
                <div className="d-flex justify-content-between grey-hover mt-4 py-3 px-3">
                  <div className="text-primaryColor font-demi font-18">
                    Continue with email/number
                  </div>
                  <i className="text-muted fas fa-chevron-right"></i>
                </div>
              </Link>
              <hr />
              <div className="text-primaryColor px-3 font-16 font-demi mt-3 d-flex">
                Not a member yet?&nbsp;&nbsp;
                <Link to="/signup">
                  <div className="text-secondaryColor">Sign up</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer ></Footer>
    </>
  );
}

export default Loginhome;
