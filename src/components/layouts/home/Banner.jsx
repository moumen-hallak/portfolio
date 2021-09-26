import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Banner extends Component {
    render() {
        return (
            <section className="banner-section s4 two-home" id="home">
                <div className="container">
                    <div className="content-text position-relative">
                        <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.3s">
                            <div className="tag color-d1 lt-sp53 mg-b34">Frontend Developer</div>
                            <h1 className="cd-headline clip is-full-width title color-d11 mg-b41">
                                <span>Hey,</span>
                                <span className="cd-words-wrapper color-d6">
                                <b className="is-visible"> I’m Moumen!</b>
                                <b style={{fontSize: "78px"}}>Frontend Developer</b>
                                </span>
                            </h1>
                            <p className="color-d13 lt-sp02 mg-b51">
                                Hi, i'm Moumen, frontend developer <br /> I have 8 years of experience in the web field. <br />I'm more than happy to work with you.
                            </p>
                        </div>
                        <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.3s">
                            <div className="fl-btn btn-general color-s2 btn-hv-border">
                                <Link to={{ pathname: "uploads/resume/CV_Moumen_Hallak.pdf" }} target="_blank" className="f-w500 color-d6 border-corner5 lt-sp01 text-two">Download Resume</Link>
                            </div>
                        </div>
                    </div>
                    <div className="featured-post border-corner-bl">
                        <img src="images/section/Moumen_Hallak.webp" alt="images" />
                        <div className="site-list has-border text-center animate-element wow delay5 fadeInUp" data-wow-delay="0.3s">
                            <Link to={{ pathname: "https://www.facebook.com/moumenMmH" }} target="_blank" className="facebook-color"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                            <Link to={{ pathname: "https://www.instagram.com/moumen.ha9/" }} target="_blank"  className="instagram-color"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                            <Link to={{ pathname: "https://www.linkedin.com/in/moumen-hallak" }} target="_blank" className="linkedin-color"><i className="fa fa-linkedin" aria-hidden="true" /></Link>
                            <Link to={{ pathname: "https://github.com/moumenha" }} target="_blank" className="github-color"><i className="fa fa-github" aria-hidden="true" /></Link>
                            <Link to={{ pathname: "mailto:me@moumen.net" }} target="_blank" className="gmail-color"><i className="fa fa-envelope" aria-hidden="true" /></Link>
                            <Link to={{ pathname: "https://wa.me/905384770122" }} target="_blank" className="whatsapp-color"><i className="fa fa-whatsapp" aria-hidden="true" /></Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Banner;
