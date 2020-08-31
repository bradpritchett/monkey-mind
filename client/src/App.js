import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
					<Main />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
