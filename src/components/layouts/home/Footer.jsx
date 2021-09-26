import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <div className="tf-modal-content justify-content-end"> 
                <footer id="experienced" className="footer footer-s4">
                    <div className="container">
                        <div id="footer-widget" className="footer-widget-s3 border-bottom-s2 position-relative">
                            <h3 className="widget-title larger lt-sp06 text-white text-center">Experienced in</h3>
                            <div className="row ml-5 mr-5">
                                <div className="col-12 d-flex justify-content-between align-items-center mb-4">
                                <img src="images/logos/react.svg" alt="react" width="50px"/>
                                <img src="images/logos/redux.svg" alt="redux" width="50px"/>
                                <img src="images/logos/javascript.svg" alt="javascript" width="50px"/>
                                <img src="images/logos/css.svg" alt="css" width="50px"/>
                                <img src="images/logos/html.svg" alt="html" width="50px"/>
                                <img src="images/logos/bootstrap.svg" alt="bootstrap" width="50px"/>
                                <img src="images/logos/jest.svg" alt="jest" width="50px"/>
                                <img src="images/logos/sass.svg" alt="sass" width="50px"/>
                                </div>
                                <div className="col-12 d-flex justify-content-between align-items-center">
                                <img src="images/logos/firebase.svg" alt="firebase" width="50px"/>
                                <img src="images/logos/i18.png" alt="i18" width="50px"/>
                                <img src="images/logos/photoshop.svg" alt="photoshop" width="50px"/>
                                <img src="images/logos/Illustrator.svg" alt="Illustrator" width="50px"/>
                                <img src="images/logos/xd.svg" alt="xd" width="50px"/>
                                <img src="images/logos/indesign.svg" alt="indesign" width="50px"/>
                                <img src="images/logos/github.svg" alt="github" width="50px"/>
                                <img src="images/logos/wordpress.svg" alt="wordpress" width="50px"/>

                                </div>

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
