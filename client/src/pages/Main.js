import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Timer from "../components/Timer";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import DataChart from "../components/Chart";

const Wrapper = styled.div`
background: white;
margin: 30px auto;
max-width: 1000px;
width: 90%;`;

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
		<Wrapper>
			<div className="wrapper container-fluid">
				<Timer
					user={loggedIn}
				/>
				{console.log(isAuthenticated)}
				{isAuthenticated ? <DataChart data={loggedIn.data} /> : <DataChart />}

			</div>
		</Wrapper>

	);
}


export default Main;
