import React from "react";
import "../services/Services.css";
import webdesign from "../../assets/images/webDesign1.jpg";
import digital from "../../assets/images/marketing.jpeg";
import mobile from "../../assets/images/mobileApplication.png";
import webapplication from "../../assets/images/webapplication1.jpg";

const Services = () => {
  return (
    <React.Fragment>
      <div className="servicetab">
        <div className="service-list">
          <ul className="serviceUl">
            <a href="#">
              {" "}
              <li className="serviceList">Web design</li>
            </a>
            <a href="#">
              {" "}
              <li className="serviceList">Mobile application</li>
            </a>
            <a href="#">
              {" "}
              <li className="serviceList">Web application</li>
            </a>
            <a href="#">
              {" "}
              <li className="serviceList">Digital marketing</li>
            </a>
          </ul>
        </div>
        <div className="section p-4">
          <div className="row">
            <div className="col webdetails">
              <h1 className="animated heartBeat infinite slower">Web design</h1>
              <p
                className="h3"
                style={{
                  opacity: "0.6",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                The 3rd Eye Visions Technology is the best web design company in
                Bangalore. We offer services like web design, web development
                and WordPress development. We follow the best coding standards
                and all our websites will be fully responsive. Our Services
                include:
              </p>
              <div className="responseweb">
                <div>Responsive Web Design</div>
                <div>Static Web Design</div>
                <div>Word press development</div>
                <a href="https://wa.me/9538301143" target="_blank">
                  {" "}
                  <div className="quotebtn">Get Quote</div>
                </a>
              </div>
            </div>
            <div className="col">
              <img
                src={webdesign}
                className="marketingImg animated heartBeat infinite slower"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="section p-4">
          <div className="row">
            <div className="col">
              <img
                src={mobile}
                className="marketingImg animated slideInLeft infinite slower"
                alt=""
              />
            </div>
            <div className="col webdetails">
              <h1 className=" animated rollIn infinite slower">
                Mobile Application
              </h1>
              <p
                className="h3"
                style={{
                  opacity: "0.6",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                The 3rd Eye Visions Technology is the best web development
                company in Coimbatore. We develop web applications like ERP,
                CRM, HRM and E-Commerce applications according to our client's
                requirements. Our Web Development services include:
              </p>
              <div className="responseweb">
                <div>ERP Development.</div>
                <div>ERP Development.</div>
                <div>ERP Development.</div>
                <a href="https://wa.me/9538301143" target="_blank">
                  {" "}
                  <div className="quotebtn">Get Quote</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section p-4">
          <div className="row">
            <div className="col webdetails">
              <h1 className="animated jello infinite slower">
                Web Application
              </h1>
              <p
                className="h3"
                style={{
                  opacity: "0.6",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                The 3rd Eye Visions Technology is the best web design company in
                Coimbatore. We offer services like web design, web development
                and WordPress development. We follow the best coding standards
                and all our websites will be fully responsive. Our Services
                include:
              </p>
              <div className="responseweb">
                <div>Responsive Web Design</div>
                <div>Static Web Design</div>
                <div>Word press development</div>
                <a href="https://wa.me/9538301143" target="_blank">
                  {" "}
                  <div className="quotebtn">Get Quote</div>
                </a>
              </div>
            </div>
            <div className="col">
              <img
                src={webapplication}
                className="marketingImg animated jello infinite slower"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="section p-4">
          <div className="row">
            <div className="col">
              <img
                src={digital}
                className="marketingImg animated zoomIn infinite slower"
                alt=""
              />
            </div>
            <div className="col webdetails">
              <h1 className="animated zoomIn infinite slower">
                Digital Marketing
              </h1>
              <p
                className="h3"
                style={{
                  opacity: "0.6",
                  fontSize: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                The 3rd Eye Visions Technology is the best web design company in
                Coimbatore. We offer services like web design, web development
                and WordPress development. We follow the best coding standards
                and all our websites will be fully responsive. Our Services
                include:
              </p>
              <div className="responseweb">
                <div>Responsive Web Design</div>
                <div>Static Web Design</div>
                <div>Word press development</div>
                <a href="https://wa.me/9538301143" target="_blank">
                  {" "}
                  <div className="quotebtn">Get Quote</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
