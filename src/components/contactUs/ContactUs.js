import React, { useState } from "react";
import "./ContactUs.css";
import phone from "../../assets/images/phone-one.png";
import map from "../../assets/images/map-one.png";
import mail from "../../assets/images/mail-one.png";
const ContactUs = () => {
  let [gmap, setGmap] = useState("");

  let clickMap = () => {
    setGmap(
      "https://www.google.com/maps/place/3rd+Eye+Visions+Technology/@12.825614,77.6832802,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae6da4e8aa52d3:0x511a090b23285054!8m2!3d12.825614!4d77.6854689"
    );
  };
  return (
    <React.Fragment>
      <div
        className="container"
        style={{ marginTop: "5%", marginBottom: "10%" }}
      >
        <div className="row animated rollIn slower">
          <h1 className="contacthead animated zoomIn infinite slower">
            Contact Us
          </h1>

          <div className="col-md-4">
            <a href="tel:9538301143" className="gmapcard">
              <div className="card contactCard">
                <div className="card-body">
                  <div className="contactbody">
                    <a href="tel:9538301143">
                      {" "}
                      <img
                        src={phone}
                        className="mapImg"
                        alt="#"
                        width="100"
                        height="100"
                      />
                    </a>
                    <p>Phone Number</p>
                    <p className="conatctpara">
                      mobile :{" "}
                      <span className="numbercontact">+91-9538301143</span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a href="mailto: info@3eyevisions.com" className="gmapcard">
              {" "}
              <div className="card contactCard">
                <div className="card-body">
                  <div className="contactbody">
                    <a href="mailto: info@3eyevisions.com">
                      {" "}
                      <img
                        src={mail}
                        className="mapImg"
                        alt="#"
                        width="100"
                        height="100"
                      />
                    </a>
                    <p>Email Address</p>
                    <p className="conatctpara">info@3eyevisions.com</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4">
            <a href={gmap} target="_blank" className="gmapcard">
              <div className="card contactCard" onClick={clickMap}>
                <div className="card-body">
                  <div className="contactbody">
                    <a className="" href={gmap} target="_">
                      <img
                        src={map}
                        className="mapImg"
                        alt="#"
                        width="100"
                        height="100"
                      />
                    </a>
                    <p>Our Location</p>
                    <p className="conatctpara">
                      RK Layout, Vidyanagar, Bommasandra, Bangalore
                      <br />
                      Karnataka India-560100
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
