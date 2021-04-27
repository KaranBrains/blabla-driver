import React from "react";
import Navbar from "../../Navbar/NavbarComponent";
import "./Login.css";

function Login() {
  return (
    <>
     <Navbar />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                What's your email/number and password?
              </h1>
              <form>
                <div className="input-group mt-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email/Number"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <div className="font-demi grey-hover text-primaryColor mt-4 py-3 px-3">
                  Become a member  <a href="/signup" className="ml-2">Signup</a>
                </div>

                <p className="text-secondaryColor font-demi grey-hover mt-4 py-3 px-3">
                  Forgot Password
                </p>
                <div className="text-center mt-5">
                  <button className="text-white bg-secondaryColor font-demi btn-blue">
                    Signin
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Login;
