import React from 'react';

const Contact = ({contact, selectContact }) => (
    <div onClick={ () => selectContact(contact)} className="contact">
        <div className={contact.gender === 'male' ? "avatar-boy avatar-small" : "avatar-girl avatar-small"}></div>
        <div className="contactName">{`${contact.firstname} ${contact.lastname}`}</div>
    </div>
);

export default Contact;