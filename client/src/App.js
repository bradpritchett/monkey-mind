import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import "./style.css";
import LoginButton from "./components/LoginButton";

import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
	const { isLoading } = useAuth0;

	if (isLoading) return <div>Loading! One moment, please!</div>
	return (
		<Router>
			<Switch>
				<Route exact path={["/"]}>
					<h1>Monkey Mind</h1>
					{/* <img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="Monkey Mind" className="monkey" /> */}
					<LoginButton />
					<Main />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
