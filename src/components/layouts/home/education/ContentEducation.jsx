import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class TopEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contenttop : [
                {
                    id: 1,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.3s',
                    year: 'UoPeople',
                    title: 'Bachelor of Computer Science',
                    text: ''
                },
                {
                    id: 2,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.5s',
                    year: 'Flatiron School & Re:Coded',
                    title: 'Front-end Web Development Bootcamp',
                    text: 'Collaboration between Flatiron School and Re:Coded'
                },
                {
                    id: 3,
                    classname: 'experience-box t3',
                    datawow: '0.7s',
                    year: 'Udacity',
                    title: 'Front-end Development Track',
                    text: 'As part of the 1 Million Arab Coders Initiative, I completed the Udacity course for Front-End Development.'
                }
            ],
            contentbot : [
                {
                    id: 1,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.8s',
                    year: '2014 - 2016',
                    title: 'Marketing Coordinator at',
                    office: 'Watan Foundation',
                    text: 'I used to get tasks about Graphic Design, Social Media Managment, Photography, and Creating short Videos.'
                },
                {
                    id: 2,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '1s',
                    year: '2016 - 2017',
                    title: 'Director of Advocacy at',
                    office: 'Orange Organization',
                    text: 'I used to get tasks about creating Humanitarian campaigns, Designing Campaigns, and Social Media Management.'
                },
                {
                    id: 2,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '1s',
                    year: '2018 - Present',
                    title: 'Media Consultant at',
                    office: 'Trust Consultancy',
                    text: 'I give consultants and help with finalizing the media products including Graphic Design, and the companny website.'
                },
                {
                    id: 3,
                    classname: 'experience-box t3',
                    datawow: '1.2s',
                    year: '2017 - Present',
                    title: 'Wordpress Developer at',
                    office: 'Andalus Media Company',
                    text: "I work as a WordPress developer, responsible for the work progress and finalizing the products to the client."
                }
            ]
        }
    }
    
    render() {
        return (
            <div className="animate-element delay5 fadeInUp">
                <div className="padding-bottom">
                    <div className="row">
                        {
                            this.state.contenttop.map(data => (
                                <div className="col-lg-4 col-12 last-col animate-element wow delay5 fadeIn" data-wow-delay={data.datawow} key={data.id}>
                                    <div className={data.classname}>
                                        <div className="box-inner">
                                        <h3 className="f-info bg-s2 color-d6">{data.year}</h3>
                                        <div className="exp-wrap">
                                            <div className="s-info color-d11 mg-b11">{data.title}</div>
                                            <p className="color-d13">
                                            {data.text}
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.contentbot.map(data => (
                            <div className="col-lg-4 col-12 last-col animate-element wow delay5 fadeIn" data-wow-delay={data.datawow} key={data.id}>
                                <div className={data.classname}>
                                    <div className="box-inner">
                                    <h3 className="f-info bg-s2 color-d6">{data.year}</h3>
                                    <div className="exp-wrap">
                                        <div className="s-info color-d11 mg-b11">{data.title} <Link to="#">{data.office}</Link></div>
                                        <p className="color-d13">
                                            {data.text} 
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default TopEducation;
