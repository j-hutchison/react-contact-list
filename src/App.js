import React, { useEffect, useState } from "react";
import "./App.css";

import ContactList from "./components/ContactList";

function App() {
	const [contactData, setContactData] = useState([]);
	const numResults = process.env.REACT_APP_NUM_RESULTS;

	async function getContactData() {
		const response = await fetch(
			`https://randomuser.me/api/?results=${numResults}`
		);
		return response.json();
	}

	useEffect(() => {
		const data = getContactData().then((data) => {
			setContactData(() => data.results);
		});
	}, []);

	return (
		<div className="App">
			{contactData.length === 0 ? (
				<h2>Loading...</h2>
			) : (
				<ContactList list={contactData}></ContactList>
			)}
		</div>
	);
}

export default App;
