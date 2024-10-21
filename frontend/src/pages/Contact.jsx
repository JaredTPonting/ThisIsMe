import "../styles/Contact.css";
import React, { useState } from "react";
import githubIcon from '../assets/img/github.ico'
import linkedinIcon from '../assets/img/linkedIn.ico'
import emailIcon from '../assets/img/email.ico'

function Contact() {

    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("jaredtponting@gmail.com")
        .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        })
        .catch(err => console.error("Failed to copy: ", err));
    };

    return (
    <div className="contact-container">
        <div className="contact-box">
            <h1 className="contact-header">Contact Me</h1>
            <ul className="contact-list">
                <li>
                    <img src={githubIcon} alt="GitHub" style={{width: '24px', marginRight: '8px'}}/>
                    <a href="https://github.com/JaredTPonting" target="_blank" rel="noopener noreferrer">
                    GitHub</a>
                </li>
                <li>
                    <img src={linkedinIcon} alt="LinkedIn" style={{width: '24px', marginRight: '8px'}}/>
                    <a href="https://www.linkedin.com/in/jared-ponting-19795815b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtjYNuMN2Q3mSvze87IKqIQ%3D%3D" target="_blank" rel="noopener noreferrer">
                    LinkedIn</a>
                </li>
                <li>
                    <img src={emailIcon} alt="Email" style={{width: '24px', marginRight: '8px'}}/>
                    <button className="email-button" onClick={handleCopyEmail}>
                        Copy Email
                    </button>
                    {copied && <div className="popup">Email Copied!</div>}
                </li>
            </ul>
        </div>

    </div>
)
}

export default Contact