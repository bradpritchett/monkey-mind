import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./components/test";
import Main from "./pages/Main";

function App() {
	const [User, setUser] = useState({
		userName: "Brad",
		date: null,
		sessionDuration: 0,
		reportedAttention: null,
		reportedMindfulness: null

	});
	const {
		userName, date, sessionDuration, reportedAttention, reportedMindfulness
	} = User;
	return (
		<Router>
			<Switch>
				<Route exact path={["/"]}>
					<Test></Test>
					<h1>{userName}</h1>
					<Main />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
