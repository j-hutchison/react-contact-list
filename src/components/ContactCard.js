import React, { useState } from "react";
import "./ContactCard.css";

const ContactCard = (props) => {
	const [showAge, setShowAge] = useState(true);
	const { avatarUrl, name, email, age } = props.contact;

	const handleClick = () => {
		setShowAge(() => !showAge);
	};

	return (
		<div className="contact-card">
			<div className="card-img">
				<img src="https://dummyimage.com/150x150/b5b5b5/fff" alt="" />
			</div>
			<div className="card-details">
				<h1 className="card-name font-md">Name: {name}</h1>
				<span className="card-email font-md">Email: {email}</span>
				<div className="card-age-details">
					<button className="card-show-age-btn" onClick={handleClick}>
						{showAge === false ? "Show" : "Hide"} Age
					</button>
					{showAge && <span className="card-age">{age}</span>}
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
