import React, { useState, useEffect } from 'react';
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";

const History = (params) => {
	const [history, setHistory] = useState({
		data: []
	})

	useEffect(() => {
		console.log(params.user)
		setHistory({ data: params.user })
	}, [params])


	return (
		<div className="app">
			<div className="row">
				<div className="col">
					<h2>User History</h2>
					{history.data && history.data.map(session => (
						<li key={Math.random()}>
							{session}
						</li>
					))}

				</div>
			</div>
		</div>

	)
}

export default History