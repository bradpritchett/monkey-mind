import React, { useState, useEffect } from 'react';
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";
import UserContext from "../utils/GlobalState";
import moment from 'moment';

const History = () => {


	return (
		<UserContext.Consumer>
			{sessions =>
				<div className="app">
					<div className="row">
						<div className="col">
							<h2>Session History</h2>
							<table>
								<thead>
									<tr>
										<th>Date</th>
										<th>Reported Attention</th>
										<th>Reported Mindfullness</th>
										<th>Session Duration</th>
									</tr>
								</thead>
								<tbody>
									{sessions.sessions.map(session => {

										return <tr key={Math.random()}>
											<td>{moment(session.date).format("DD/MM/YYYY hh:mm")}</td>
											<td>{session.attention}</td>
											<td>{session.mindfullness}</td>
											<td>{session.sessionDuration}</td>
										</tr>
									})}

								</tbody>
							</table>
						</div>
					</div>
				</div>
			}
		</UserContext.Consumer>
	)
}

export default History