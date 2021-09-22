import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menus from '../menus';
import bloglinks from '../bloglinks';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header id="header" className="header header-style4 has-menu-model">
                <div className="container">
                    <div className="flex-header d-flex justify-content-between align-items-center">
                        <div id="logo" className="logo">
                        <Link to="/" onClick={() => {window.location.href="/"}} title="Logo"><img src="images/logo/Moumen-Logo.png" alt="images" data-width={122} data-height={34} data-retina="images/logo/Moumen-Logo.png" /></Link>
                        </div>
                        <div dir="rtl" className="btn-menu mobile-header__menu-button">
                            <div className="line line-1" />
                            <div className="line line-2" />
                            <div className="line line-3" />
                            <div className="line line-4" />
                        </div>
                        <div className="content-menu d-lg-flex">
                            <div className="nav-wrap">
                                <nav id="mainnav" className="mainnav">
                                    <ul className="menu ace-responsive-menu" data-menu-style="horizontal">
                                        <li><Link to="/" className="active">Home</Link>
                                        </li>   
                                        {
                                            menus.map(menu => (
                                                <li key={menu.id}><Link to={menu.tomenu} className="click-model">{menu.namemenu}</Link></li>
                                            ))
                                        }                           
                                        <li><Link to="blog">Blog</Link>
                                            <ul className="sub-menu" >
                                                {
                                                    bloglinks.map(data => (
                                                        <li key={data.id}>
                                                            <Link to={data.toblog} onClick={() => {window.location.href=data.toblog}}>
                                                                {data.nameblog}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="socials-list-hd s3 hv2">
                            <Link to={{ pathname: "mailto:me@moumen.net" }} target="_blank" ><i className="fa fa-envelope" aria-hidden="true" /></Link>
                            <Link to={{ pathname: "https://wa.me/905384770122" }} target="_blank"><i className="fa fa-whatsapp" aria-hidden="true" /></Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
