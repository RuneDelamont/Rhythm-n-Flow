import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css'


function Footer() {
    return (
        <div className="profile-logos">
            <div className="git-hub-logo">
                <a className="logo-links" href='https://github.com/RuneDelamont'>
                    <i class="fa-brands fa-github fa-2xl"></i>
                </a>
            </div>
            <div className="linked-in-logo">
                <a className="logo-links" href='https://www.linkedin.com/in/brian-moore-2829b496/'>
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer;
