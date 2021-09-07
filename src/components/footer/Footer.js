import React from "react";
import "./Footer.css";
import whatsapp from "../../assets/images/WhatsApp.png";
import insta from "../../assets/images/insta.jpg";
import fb from "../../assets/images/facebook.png";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="section">
        <div className="row footermainall">
          <div className="col-md-3 footercontentone">
            <h1 className="footheader">WebsiteDesign Services</h1>
            <ul>
              <li className="footerlist">Static Website Design</li>
              <li className="footerlist">HTML Website Design </li>
              <li className="footerlist">Responsive Website Design</li>
              <li className="footerlist">Professional Website Design</li>
              <li className="footerlist">Small Business Web Design</li>
              <li className="footerlist">WordPress Development</li>
            </ul>
          </div>
          <div className="col-md-3 footercontenttwo">
            <h1 className="footheader">Development Services</h1>
            <ul>
              <li className="footerlist">Local SEO Service</li>
              <li className="footerlist">Search Engine Optimization</li>
              <li className="footerlist">E-commerce SEO Service</li>
              <li className="footerlist">Social Media Marketing</li>
              <li className="footerlist">Google Adwords / PPC</li>
              <li className="footerlist">Facebook Marketing</li>
            </ul>
          </div>
          <div className="col-md-3 footercontentthree">
            <h1 className="footheader">Marketing Services</h1>
            <ul className="footerlist">
              <li className="footerlist">ERP Software Development</li>
              <li className="footerlist">CRM Software Development</li>
              <li className="footerlist">Magento Web Development</li>
              <li className="footerlist">Custom Web Development</li>
              <li className="footerlist">Android App Development</li>
              <li className="footerlist">iOS App Development</li>
            </ul>
          </div>
          <div className="col-md-3 footercontentfour">
            <h1 className="footheader">Other Web Services</h1>
            <ul>
              <li className="footerlist">Domain Name Services</li>
              <li className="footerlist">Website Re-designing</li>
              <li className="footerlist">Html design</li>
              <li className="footerlist">Web Link Building</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="footer-info">
          <span>Copyright © 2021 3EyeVisions Technology</span>
          <p className="foo-text">Powered by 3EyeVisions Technology</p>
          <div className="reachme">
            <p style={{ marginTop: "25%", fontSize: "110%" }}>Reach Us</p>
            <a
              href="https://wa.me/9538301143"
              target="_blank"
              className="fooIcon"
            >
              <img src={whatsapp} alt="" width="40" height="40" />
            </a>
            <a
              href="https://www.facebook.com/3RdEyeVisionsTech/"
              target="_blank"
              className="fooIcon"
            >
              <img src={fb} alt="" width="35" height="30" />
            </a>
            <a
              href=" https://www.instagram.com/3rd_eye_visions_technology/ "
              target="_blank"
              className="fooIcon"
            >
              <img src={insta} alt="" width="30" height="30" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
