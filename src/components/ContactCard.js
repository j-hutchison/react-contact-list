import React, { useState } from "react";
import "./ContactCard.css";

const ContactCard = (props) => {
	const [showAge, setShowAge] = useState(false);
	const {
		picture: { large: avatarUrl },
		name: { first, last },
		email,
		dob: { age },
	} = props.contact;

	const handleClick = () => {
		setShowAge(() => !showAge);
	};

	return (
		<div className="contact-card">
			<div className="card-img">
				<img src={avatarUrl} alt="" />
			</div>
			<div className="card-details">
				<h1 className="card-name font-md">
					Name: {first} {last}
				</h1>
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
