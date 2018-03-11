import React from 'react';

const ContactInfo = ({ contact }) => (
        <div className="contactInfo">
            <div className="contactName">
                <div className={contact.gender === 'male' ? "avatar-boy avatar-large" : "avatar-girl avatar-large"}></div>
                <div className="contactFullname">{`${contact.firstname} ${contact.lastname}`}</div>
            </div>

            <div className="contactTable">
                <div className="contactInfoGroup">
                    <div className="contactLabel">First name</div>
                    <div className="contactValue">{contact.firstname}</div>
                </div>
                <div className="contactInfoGroup">
                    <div className="contactLabel">Last name</div>
                    <div className="contactValue">{contact.lastname}</div>
                </div>
                <div className="contactInfoGroup">
                    <div className="contactLabel">Email</div>
                    <div className="contactValue">{contact.email}</div>
                </div>
                <div className="contactInfoGroup">
                    <div className="contactLabel">Mobile</div>
                    <div className="contactValue">{contact.mobile}</div>
                </div>
                <div className="contactInfoGroup">
                    <div className="contactLabel">Gender</div>
                    <div className="contactValue">{contact.gender}</div>
                </div>
            </div>
        </div>
);

export default ContactInfo;