import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <div className="tf-modal-content justify-content-end"> 
                <footer id="footer" className="footer footer-s4">
                    <div className="container">
                        <div id="footer-widget" className="footer-widget-s3 border-bottom-s2 position-relative">
                            <h3 className="widget-title larger lt-sp06 text-white text-center">Get in Touch!</h3>
                            <div className="site-list site-list-center text-center">
                                <Link to={{ pathname: "https://www.facebook.com/moumenMmH" }} target="_blank" className="facebook-color"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                                <Link to={{ pathname: "https://www.instagram.com/moumen.ha9/" }} target="_blank"  className="instagram-color"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                                <Link to={{ pathname: "https://www.linkedin.com/in/moumen-hallak" }} target="_blank" className="linkedin-color"><i className="fa fa-linkedin" aria-hidden="true" /></Link>
                                <Link to={{ pathname: "https://github.com/moumenha" }} target="_blank" className="github-color"><i className="fa fa-github" aria-hidden="true" /></Link>
                                <Link to={{ pathname: "mailto:me@moumen.net" }} target="_blank" className="gmail-color"><i className="fa fa-envelope" aria-hidden="true" /></Link>
                                <Link to={{ pathname: "https://wa.me/905384770122" }} target="_blank" className="whatsapp-color"><i className="fa fa-whatsapp" aria-hidden="true" /></Link>
                            </div>
                        </div> 
                    </div>
                    <div id="bottom" className="bottom-s3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 items-center">
                                    <div className="copyright lt-sp02">
                                        © 2021 All rights reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
