import React, { useState } from "react";
import "./App.css";
import data from "./data/data.json";

import ContactList from "./components/ContactList";

function App() {
	return (
		<div className="App">
			<ContactList list={data}></ContactList>
		</div>
	);
}

export default App;
