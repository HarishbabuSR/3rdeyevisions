import React, { useState } from "react";
import newone from "../../assets/images/laptop1.jpg";
import responsive from "../../assets/images/responsive2.png";
import cleancode from "../../assets/images/cleanCode3.jpg";
import dailyScrum from "../../assets/images/dailyScrum.png";
import "./About.css";

const About = () => {
  const [state, setstate] = useState({
    image: responsive,
    color: {},
  });
  var imageChanges = (e1, e2) => {
    console.log(e1);
    return setstate({
      ...state,
      image: e1,
      color: e2,
    });
  };
  return (
    <React.Fragment>
      <div className="section">
        <img className="aboutone" src={newone} alt="#" />
        <div className="abtcontent">
          <h1>
            The <span style={{ color: "red", fontSize: "40px" }}>3</span>{" "}
            <sup>rd</sup> EyeVision technology is the most trusted Web Design
            Company in Bangalore
          </h1>
          <p>
            We create a human connection through our web designs that tells your
            story to your customers
          </p>
          <div>
            <span className="about" style={{ color: "red" }}></span>
            <h4 style={{ textDecoration: "underline" }}> Clients Served</h4>
            Over the years, we had catered our services to over clients across
            India and gained a reputation as the best web design company in
            Bangalore.
          </div>
          <div>
            <span className="about" style={{ color: "red" }}>
              {" "}
              2+
            </span>
            <h4 style={{ textDecoration: "underline" }}> Years </h4>
            3rd Eye Visions Technology is over 2 years old, which makes it one
            of the best web design companies in Bangalore.
          </div>
        </div>
      </div>

      <div className="cardmenu p-4 mt-4">
        <div className="row cardheader">
          <h1>
            Our Team follows standard web design process that <br /> results in
            a better output.
          </h1>
        </div>
        <div className="row  cardcontentmenu">
          <div className="col">
            <div className="card cardcontentone mt-4">
              <div className="card-body">
                <div>
                  <i
                    className="fa fa-bell"
                    style={{
                      color: "yellow",
                      fontSize: "50px",
                      marginBottom: "12px",
                    }}
                  />
                  <h1>Agile Methodolgy</h1>
                </div>
                <div className="card-content">
                  <p>
                    We take one step at a time and follow continuous testing
                    throughout the development cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardcontenttwo mt-4">
              <div className="card-body">
                <div>
                  <i
                    className="fa fa-refresh"
                    style={{
                      color: "red",
                      fontSize: "50px",
                      marginBottom: "12px",
                    }}
                  />
                  <h1>CI/CD Mechanism</h1>
                </div>
                <div className="card-content">
                  <p>
                    We follow Continuous Integration and Continuous Deployment
                    so that our clients can witness how their web applications
                    take shape.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card cardcontentthree mt-4">
              <div className="card-body">
                <div>
                  <i
                    className="fa fa-cube"
                    style={{
                      color: "green",
                      fontSize: "50px",
                      marginBottom: "12px",
                    }}
                  />
                  <h1 style={{ fontSize: "30px", color: "black" }}>
                    Frequent Communication
                  </h1>
                </div>
                <div className="card-content">
                  <p>
                    Our team will be regularly connected with the client and
                    will update the progress daily. We can provide daily stand
                    up if necessary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row carddetails mt-4">
          <div className="col-md-5">
            <h3> WE ARE GIVING BEST SERVICES TO OUR CLIENTS</h3>
          </div>
          <div className="col-md-7">
            <p>
              {" "}
              Our core expertise focus is on web design, web development, mobile
              application development and digital marketing and in particular
              where they all meet
            </p>
          </div>
        </div>

        <div className="row designdetails">
          <div className="col-lg-4 ">
            <div className={`card designcolor`}>
              <div
                className="card-body animated jello"
                style={state.color}
                onClick={imageChanges.bind(this, responsive)}
              >
                <h2>Responsive Design</h2>
                <p>
                  80% of today's web traffic is coming through mobile devices.
                  So we never compromise on the responsive design of our web
                  applications.
                </p>
              </div>
            </div>
            <div className="card designcolor">
              <div
                className="card-body animated jello"
                style={state.color}
                onClick={imageChanges.bind(this, cleancode)}
              >
                <h2>Clean Code</h2>
                <p>
                  We do regular code reviews and check-ins to ensure our codes
                  are clean and follow all standard procedures.
                </p>
              </div>
            </div>
            <div className="card designcolor">
              <div
                className="card-body animated jello"
                style={state.color}
                onClick={imageChanges.bind(this, dailyScrum)}
              >
                <h2>Daily Scrum</h2>
                <p>
                  Our team will meet daily and report to the scrum master who
                  will clear away obstacles that the developer may face. This
                  planned process ensures the efficient utilization of resources
                  and quick delivery of the application.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 designcolornew">
            <img
              src={state.image ? state.image : null}
              style={{ height: "80%", width: "130%" }}
              className="displayImg animated jello"
              alt=""
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
