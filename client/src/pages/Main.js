import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Timer from "../components/Timer";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

const Wrapper = styled.div`
background: white;
margin: 30px auto;
max-width: 1000px;
width: 90%;`;

function Main(props) {
	const [loggedIn, setLoggedIn] = useState({
		username: "",
		id: ""
	});

	const { isAuthenticated, user } = useAuth0();
	function processResponse(response) {
		if (response.data.length === 0) {
			API.newUser({
				userName: user.name,
				email: user.email,
				sessions: []
			}).then(result => {

				setLoggedIn({ userName: result.userName, id: result._id })

			})
				.catch(err => console.log(err));;
		} else {
			setLoggedIn({ userName: response.data[0].userName, id: response.data[0]._id })
		}

	};

	useEffect(() => {
		setLoggedIn("loading");
		if (isAuthenticated) {
			API.getUser(user.email)
				.then(results => {
					processResponse(results);
				})
		}
	}, [isAuthenticated]);

	return (
		<Wrapper>
			<div className="wrapper container-fluid">
				<Timer
					id={loggedIn}
				/>
			</div>
		</Wrapper>

	);
}


export default Main;
