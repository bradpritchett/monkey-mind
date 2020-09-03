import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Timer from "../components/Timer";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

const Wrapper = styled.div`
background: white;
margin: 30px auto;
opacity: .85;
max-width: 1000px;
width: 90%;
`;
function Main(props) {
	const [loggedIn, setLoggedIn] = useState({
		username: "",
		lastLogin: ""
	})
	const { isAuthenticated, user } = useAuth0();
	function processResponse(response) {
		console.log("PROCESSING RESPONSE");
		if (response.data.length === 0) {
			console.log("creating new user");
			API.newUser({
				userName: user.name,
				email: user.email,
				sessions: []
			}).then(result => {
				setLoggedIn(result.userName)
				console.log(response)
			})
				.catch(err => console.log(err));;
		} else {
			console.log("Hello, " + response.data[0].userName)
		}

	}
	useEffect(() => {
		setLoggedIn("loading");
		console.log(isAuthenticated)
		if (isAuthenticated) {
			console.log('getting user', user.email)
			API.getUser(user.email)
				.then(results => {
					processResponse(results);
				})
		}
	}, [isAuthenticated]);

	return (
		<Wrapper>
			<div className="wrapper container-fluid">
				<Timer />
			</div>
		</Wrapper>

	);
}


export default Main;
