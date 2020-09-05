import React, { useState, useEffect } from "react";

import Timer from "../components/Timer";
import Meditation from "../components/Meditation";
import History from "../components/History";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";




function Main(props) {
	const [loggedIn, setLoggedIn] = useState({
		data: [],
		id: ""
	});

	const { isAuthenticated, user } = useAuth0();
	function processResponse(response) {
		if (response.data.length === 0) {
			API.newUser({
				userName: user.name,
				email: user.email,
				sessions: []
			})
				.then(result => {
					console.log(result)
					setLoggedIn({ data: result.data.sessions, id: result.data._id })
				})
				.catch(err => console.log(err));;
		} else {
			setLoggedIn({ data: response.data[0].sessions, id: response.data[0]._id })
		}

	};


	useEffect(() => {
		setLoggedIn("No user loaded");
		if (isAuthenticated) {
			API.getUser(user.email)
				.then(results => {
					processResponse(results);
				})
		}
	}, [isAuthenticated]);

	return (
		<>
			<div className="container">
				<div className="wrapper">
					<Timer
						user={loggedIn}
					/>
				</div>
			</div>
			<div className="container">
				<Meditation />
			</div>
		</>
	);
}


export default Main;
