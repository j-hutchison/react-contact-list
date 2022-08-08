import React from "react";
import ContactCard from "./ContactCard";
import "./ContactList.css";

const ContactList = (props) => {
	return (
		<ul className="contact-list">
			{props.list.map((contact) => {
				return (
					<li key={Math.floor(Math.random() * 1000)}>
						<ContactCard contact={contact}></ContactCard>
					</li>
				);
			})}
		</ul>
	);
};

export default ContactList;
