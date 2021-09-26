import React, { Component } from 'react';
class CaseStudy extends Component {
    render() {
        return (
            <section className="flat-case-study s3" id="portfolio">
                <div className="container">
                    <div className="d-md-flex">
                        <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                            <div className="image-link t2">
                                <div className="featured-post">
                                    <a href="https://keep-our-seas-clean-project.netlify.app/" target="_blank" rel="noreferrer"><img src="images/portfolio/keep-our-seas-clean.png" alt="images" /></a>
                                </div>
                                <div className="portfolio-template-link text-center">
                                    <a href="https://keep-our-seas-clean-project.netlify.app/" target="_blank" rel="noreferrer" className="text-white">Keep our Seas Clean</a>
                                </div>
                            </div>
                            <div className="image-link t2">
                                <div className="featured-post">
                                    <a href="https://moumen.net/oop-movie/" target="_blank" rel="noreferrer"><img src="images/portfolio/movie-project.jpg" alt="images" /></a>
                                </div>
                                <div className="portfolio-template-link text-center">
                                    <a href="https://moumen.net/oop-movie/" target="_blank" rel="noreferrer" className="text-white">The Movie Project</a>
                                </div>
                            </div>
                        </div>
                        <div className="flat-spacer" data-desktop={0} data-mobile={100} data-smobile={100} />
                        <div className="col-right animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                            <div className="flat-title t2 mg-b60">
                                <h4 className="sub-title mg-b13">Portfolio</h4>
                                <h2 className="title-section color-d11 mg-b20">Few selected works.</h2>
                            </div>
                            <div className="pd-right">
                                <div className="image-link t2">
                                    <div className="featured-post">
                                        <a href="https://board-project.netlify.app/" target="_blank" rel="noreferrer"><img src="images/portfolio/board-project.jpg" alt="images" /></a>
                                    </div>
                                    <div className="portfolio-template-link text-center">
                                        <a href="https://board-project.netlify.app/" target="_blank" rel="noreferrer" className="text-white">The Board Project</a>
                                    </div>
                                </div>
                                <div className="image-link t2">
                                    <div className="featured-post">
                                        <a href="https://moumen.net/madlibs/" target="_blank" rel="noreferrer"><img src="images/portfolio/mad-libs.jpg" alt="images" /></a>
                                    </div>
                                    <div className="portfolio-template-link text-center">
                                        <a href="https://moumen.net/madlibs/" target="_blank" rel="noreferrer" className="text-white">Mad Libs Game</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CaseStudy;
