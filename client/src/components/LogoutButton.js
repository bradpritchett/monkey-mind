import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
	const { logout, isAuthenticated } = useAuth0();
	return (

		isAuthenticated && (
			<>
				<button
					className="move logoutButton btn btn-primary"
					onClick={logout}
				>
					Log Out
			</button>
			</>
		)
	)
}

export default LogoutButton;