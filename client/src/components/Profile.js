import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
	const { user, isAuthenticated } = useAuth0();

	return (
		isAuthenticated && (
			<h3 className="given">
				Hello, {user.given_name}!
			</h3>
		)

	)
}

export default Profile