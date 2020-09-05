import React, { useState, useEffect } from 'react';
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";

const History = (params) => {
	const history = params;
	console.log(params.sessions.data)
	return (
		<div>

		</div>

	)
}

export default History