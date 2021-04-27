import React from "react";
import { Link } from "react-router-dom";

function VehicleInfo() {
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Add Vehicle
              </h1>
              <form>
                <div className="input-group mt-4 font-medium">
                <select
                    type="text"
                    className=""
                    placeholder="Vehicle Type"
                  >
                    <option selected disabled>Vehicle type</option>
                    <option value="Bus">Bus</option>
                    <option value="Car">Car</option>
                  </select>
                </div>
                <div className="input-group mt-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number of Places"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Model Year"
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Vehicle Color"
                  />
                </div>              
                <Link to="/">
                  <div className="text-center mt-4">
                    <button className="text-white bg-secondaryColor font-demi btn-blue">
                      Add Vehicle
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

export default VehicleInfo;
