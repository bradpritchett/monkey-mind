import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import "./style.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
	const { isLoading } = useAuth0;
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
	if (isLoading) return <div>Loading! One moment, please!</div>
	return (
		<Router>
			<Switch>
				<Route exact path={["/"]}>
					<h1>Monkey Mind</h1>
					<LoginButton />
					<LogoutButton />
					<Profile />
					<Main />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
