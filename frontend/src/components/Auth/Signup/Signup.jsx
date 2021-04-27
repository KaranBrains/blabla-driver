import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/NavbarComponent";

function Signup() {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Welcome to RideSharing, Signup here...
              </h1>
              <form>
                <div className="input-group mt-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <div className="font-demi grey-hover text-primaryColor mt-4 py-3 px-3">
                  Already a member?{" "}
                  <a href="/login" className="ml-2">
                    Signin
                  </a>
                </div>

                <Link to="/otp">
                  <div className="text-center mt-4">
                    <button className="text-white bg-secondaryColor font-demi btn-blue">
                      Signup
                    </button>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
