import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import { Form, Row, Col } from "react-bootstrap";

const Profile = (params) => {
	const [userInfo, setUserInfo] = useState({
		userName: "",
		userEmail: ""
	})
	const { user, isAuthenticated } = useAuth0();
	useEffect(() => {
		setUserInfo({ userName: params.user.name, userEmail: params.user.email })
	}, [params]);
	const handleSubmit = () => {

	};
	return (
		isAuthenticated && (
			<div className="app">
				<div className="row">
					<div className="col">
						<h3 className="given">
							Hello, {user.email}!
						</h3>
						<p><LogoutButton /></p>
						<Form noValidate onSubmit={handleSubmit}>
							<Form.Group as={Row}>
								<Form.Label column md="2">Name</Form.Label>
								<Col md="10">
									<Form.Control type="text" placeholder={userInfo.userName} disabled />
								</Col>
							</Form.Group>
							<Form.Group as={Row}>
								<Form.Label column md="2">Email address</Form.Label>
								<Col md="10">
									<Form.Control type="email" placeholder={userInfo.userEmail} disabled />
								</Col>
							</Form.Group>


						</Form>
					</div>
				</div>

			</div>
		)

	)
}

export default Profile