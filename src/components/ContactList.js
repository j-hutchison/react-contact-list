import React from "react";
import ContactCard from "./ContactCard";
import "./ContactList.css";

const ContactList = (props) => {
	return (
		<div className="contact-list">
			{props.list.map((contact) => {
				return <ContactCard contact={contact}></ContactCard>;
			})}
		</div>
	);
};

export default ContactList;
