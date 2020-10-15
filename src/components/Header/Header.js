import React from 'react';
import './Header.css';
import Logo from './logo.png';


/**
 * Class Header is used to View and Control the following:
 * 1. Account Section
 * 2. Logo Section
 * 3. Contact Us Section
 */
class Header extends React.Component {
    getPhoneNumber() {
        return '+1(888) 777 666';
    }

    getTelephoneLink() {
        return 'tel:' + this.getPhoneNumber();
    }

    getEmailAddress() {
        return 'someone@yoursite.com';
    }

    getMailingTo() {
        let mailToStr = 'mailto:';
        mailToStr += this.getEmailAddress();
        mailToStr += '?subject=Mail from Our Site';
        return mailToStr;
    }

    getWhatsaAppLink() {
        let str = '';
        str = 'https://wa.me/';
        str += this.getPhoneNumber();
        str += '?text=Hello Meher Motors';

        return str;
    }

    render() {
        return (
            <div className="header">
                <div className="account-panel">
                    <div>
                        <h3>My Account</h3>
                    </div>
                </div>
                <div className="home-logo">
                    <img src={Logo} alt="Meher Motors HomePage"/>
                </div>
                <div className="csDetails">
                    <div>
                        <span>Contact Us</span>
                    </div>
                    <div className="callUs">
                        <a href={this.getTelephoneLink()} aria-label="Support Phone" target="_blank" rel="noopener noreferrer" >
                            <i className="phoneIcon"></i>
                        </a>
                        <a href={this.getTelephoneLink()} target="_blank" rel="noopener noreferrer" className="franchisePhone">{this.getPhoneNumber()}</a>
                    </div>
                    <div className="whatsApp">
                        <a href={this.getWhatsaAppLink()} aria-label="Support Whatsapp" target="_blank" rel="noopener noreferrer" >
                            <i className="whatsAppIcon"></i>
                        </a>
                        <a href={this.getWhatsaAppLink()} target="_blank" rel="noopener noreferrer" className="franchiseWhatsapp">{this.getPhoneNumber()}</a>
                    </div>
                    <div className="csMail">
                        <a href={this.getMailingTo()} aria-label="Support Mail">
                            <i className="mailIcon"></i>
                        </a>
                        <a href={this.getMailingTo()} className="franchiseEmail">{this.getEmailAddress()}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;