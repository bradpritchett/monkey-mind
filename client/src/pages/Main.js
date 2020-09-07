import React, { useState, useEffect } from "react";
import { Tabs, Tab } from 'react-bootstrap';
import Timer from "../components/Timer";
import Meditation from "../components/Meditation";
import History from "../components/History";
import Profile from "../components/Profile";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

function Main(props) {
	const [loggedIn, setLoggedIn] = useState({
		data: [],
		id: ""
	});
	const [key, setKey] = useState('home');

	const { isAuthenticated, user } = useAuth0();

	useEffect(() => {
		setLoggedIn("No user loaded");
		if (isAuthenticated) {
			API.getUser(user.email)
				.then(results => {
					processResponse(results);
				})
		}
	}, [isAuthenticated]);

	function processResponse(response) {
		if (response.data.length === 0) {
			newUser(response);
		} else {
			setLoggedIn({ data: response.data[0].sessions, id: response.data[0]._id, name: response.data[0].userName, email: response.data[0].email })
		}
	};

	const newUser = (response) => {
		API.newUser({
			userName: user.name,
			email: user.email,
			sessions: []
		})
			.then(result => {
				setLoggedIn({ data: result.data.sessions, id: result.data._id, name: response.data[0].userName, email: response.data[0].email })
				window.location.reload();
			})
			.catch(err => console.log(err));;
		console.log("new user")
	}

	const renderProfile = () => {
		if (isAuthenticated) {
			return <Tab eventKey="profile" title="Profile">
				<Profile
					user={loggedIn}
				/>
			</Tab>
		}
	};

	const renderHistory = () => {
		if (isAuthenticated) {
			return <Tab eventKey="history" title="History">
				<History
					user={loggedIn.data}
				/>
			</Tab>
		}
	};

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
				<Tabs defaultActiveKey="home">
					<Tab eventKey="home" title="Home">
						<Meditation />
					</Tab>
					{renderProfile()}
					{/* {renderHistory()} */}
				</Tabs>

			</div>
		</>
	);
}


export default Main;
