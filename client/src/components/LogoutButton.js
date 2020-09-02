import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
	const { logout, isAuthenticated, user } = useAuth0();
	return (

		isAuthenticated && (
			<>
				<img src={`${process.env.PUBLIC_URL}/images/profile.png`} alt="{user.given_name}" className="profile" />
				<button
					className="move logoutButton btn btn-light"
					onClick={logout}
				>
					Log Out
			</button>
			</>
		)
	)
}

export default LogoutButton;