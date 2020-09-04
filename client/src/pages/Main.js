import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Timer from "../components/Timer";
import DataChart from "../components/Chart";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

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
			}).then(result => {
				setLoggedIn(result.userName)
			})
				.catch(err => console.log(err));;
		} else {
			setLoggedIn({ data: [...response.data[0].sessions], id: response.data[0]._id })
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
		<>
			<Wrapper>
				<Timer
					id={loggedIn}
				/>

			</Wrapper>
			<Wrapper>
				<DataChart
					data={loggedIn.data}
				/>
			</Wrapper>
		</>
	);
}


export default Main;
