import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Icon, NumberCount } from './about/index';

class About extends Component {
    render() {
        return (
            <section className="about-me t2 s3 shape-am position-relative" id="about">
                <div className="section-icons">
                    <Icon />
                </div>
                <div className="container">
                <div className="row position-relative">
                    <div className="col-lg-7 animate-element wow delay5 fadeInDown">
                        <div className="flat-title t2">
                            <h4 className="sub-title mg-b22">About Me</h4>
                            <h2 className="title-section color-d11 mg-b41">Who am I?</h2>
                            <div className="description">
                                <p className="color-d13 lt-sp01">
                                    I"m Moumen I study Computer Since and I'm already into Frontend Development.
                                </p>
                                <p className="color-d13 lt-sp01">
                                    I started my career as a Graphic Designer, I loved coding since i was a kid. After some years of working as a Graphic Designer, I decided to switch to Frontend Developer so I can achieve my passion
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="fact">
                        <NumberCount />
                        <div className="btn-contact bg-s2 text-center">
                            <h4 className="title color-d11">Let’s talk.</h4>
                            <Link to="#" className="email color-s2 color-d15">me@moumen.net</Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className="featured-post animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                <img src="images/section/51.png" alt="images" />
                </div>
            </section>
        );
    }
}

export default About;
