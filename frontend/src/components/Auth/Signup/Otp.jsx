import React, { useState } from "react";
import Navbar from "../../Navbar/NavbarComponent";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";

function Otp() {
  const [otp, setOtp] = useState("");
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Please enter the OTP received on your number.
              </h1>
              <form>
                <div className="d-flex justify-content-center">
                  <OtpInput
                    value={otp}
                    numInputs={5}
                    isInputNum={true}
                    separator={<span>&nbsp;&nbsp;</span>}
                    inputStyle={{
                      margin: "10px",
                      height: "3rem",
                      width: "3rem",
                      backgrounColor: "#fffff",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",
                    }}
                    focusStyle={{
                      outline: "none",
                    }}
                  />
                </div>
                <Link to="/email">
                  <div className="text-center mt-5">
                    <button className="text-white bg-secondaryColor font-demi btn-blue">
                      Continue
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

export default Otp;
