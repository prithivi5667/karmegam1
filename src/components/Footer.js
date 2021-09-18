import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaYoutube,FaFacebook } from "react-icons/fa";
class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark text-white mt-5 p-4 text-center">
        KARMEGAM&copy; {new Date().getFullYear()}
        
        <a href="https://youtube.com/channel/UCQSNI5XBDCX-9rY1EnFo_dA"><small className="footeryoutube"><FaYoutube /></small></a>
        <a href="https://www.facebook.com/Karmegam-Collective-Farmers-Producer-Company-Limited-100905669020643/"><small className="footeryoutube"><FaFacebook /></small></a>
      </footer>
    );
  }
}

export default Footer;
