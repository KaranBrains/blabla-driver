import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./License.css";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { Modal } from "react-bootstrap";

function License() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fileOne, setFileOne] = useState("");
  const [fileTwo, setFileTwo] = useState("");
  const [value, setValue] = useState(false);
  const [photo, setPhoto] = useState("");
  function handleTakePhoto(dataUri) {
    dataUri && setValue(false);
    setPhoto(dataUri);
  }
  const handleIcon = (e) => {
    e.preventDefault();
    document.getElementById("upload")?.click();
  };
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 col-md-10 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Please upload your ID
              </h1>
              <form>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <p className="font-demi text-muted mt-4 font-20 mobile-center">
                        Front side of the ID
                      </p>
                      <div className="input-group file-container">
                        {fileOne ? (
                          <div className="image-container">
                            <img
                              src={fileOne}
                              className="img-fluid w-100 h-100 p-4"
                              style={{
                                background: "#e0f6ff",
                                borderRadius: "10px",
                              }}
                            />{" "}
                          </div>
                        ) : (
                          <input
                            type="file"
                            id="front-upload"
                            value=""
                            onChange={(e) =>
                              setFileOne(URL.createObjectURL(e.target.files[0]))
                            }
                            className="form-control-upload custom-file-input mx-5 my-4"
                            style={{ height: "250px" }}
                          />
                        )}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("front-upload")?.click();
                          }}
                          className="d-flex justify-content-center w-100 text-primaryColor custom-upload-button"
                        >
                          <i className="fas fa-3x fa-upload"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="card">
                      <p className="font-demi text-muted mt-4 font-20 mobile-center">
                        Back side of the ID
                      </p>
                      <div className="input-group file-container">
                        {fileTwo ? (
                          <div className="image-container">
                            <img
                              src={fileTwo}
                              className="img-fluid w-100 h-100 p-4"
                              style={{
                                background: "#e0f6ff",
                                borderRadius: "10px",
                              }}
                            />
                          </div>
                        ) : (
                          <input
                            type="file"
                            id="back-upload"
                            value=""
                            onChange={(e) =>
                              setFileTwo(URL.createObjectURL(e.target.files[0]))
                            }
                            className="form-control-upload custom-file-input mx-5 mt-4"
                            style={{ height: "250px" }}
                          />
                        )}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("back-upload")?.click();
                          }}
                          className="d-flex justify-content-center w-100 text-primaryColor custom-upload-button"
                        >
                          <i className="fas fa-3x fa-upload"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleShow();
                      setValue(!value);
                    }}
                    className="text-white bg-secondaryColor font-demi btn-blue mt-4"
                    style={{outline: 'none'}}
                  >
                    Take your photo
                  </button>
                </div>
                {photo ? (
                  <div className="mt-4 text-center">
                    <img
                      src={photo}
                      className="img-fluid"
                      style={{
                        borderRadius: "50%",
                        height: "250px",
                        width: "250px",
                      }}
                    />
                  </div>
                ) : (
                  ""
                )}

                {value ? (
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <div className="font-bold text-primaryColor">
                          Click your picture
                        </div>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="w-100 h-100">
                        <Camera
                          onTakePhoto={(dataUri) => {
                            handleTakePhoto(dataUri);
                          }}
                        />
                      </div>
                    </Modal.Body>
                  </Modal>
                ) : (
                  ""
                )}

                <Link to="/vehicleInfo">
                  <div className="text-center mt-5">
                    <button className="text-white bg-secondaryColor font-demi btn-blue">
                      Submit
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

export default License;
