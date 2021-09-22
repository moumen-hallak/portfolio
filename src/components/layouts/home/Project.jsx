import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Project extends Component {
    render() {
        return (
            <section className="get-project s4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="featured-post animate-element wow delay5 fadeZooming" data-wow-delay="0.5s">
                                <img className="my-pic" src="images/Moumen_Hallak_2.JPG" alt="images" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="content-inner animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <h2 className="title mg-b14 color-d11">Say Hello!</h2>
                                <div className="site-list has-border">
                                    <Link to={{ pathname: "https://www.facebook.com/moumenMmH" }} target="_blank" className="facebook-color"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                                    <Link to={{ pathname: "https://www.instagram.com/moumen.ha9/" }} target="_blank"  className="instagram-color"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                                    <Link to={{ pathname: "https://www.linkedin.com/in/moumen-hallak" }} target="_blank" className="linkedin-color"><i className="fa fa-linkedin" aria-hidden="true" /></Link>
                                    <Link to={{ pathname: "https://github.com/moumenha" }} target="_blank" className="github-color"><i className="fa fa-github" aria-hidden="true" /></Link>
                                    <Link to={{ pathname: "mailto:me@moumen.net" }} target="_blank" className="gmail-color"><i className="fa fa-envelope" aria-hidden="true" /></Link>
                                    <Link to={{ pathname: "https://wa.me/905384770122" }} target="_blank" className="whatsapp-color"><i className="fa fa-whatsapp" aria-hidden="true" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Project;
