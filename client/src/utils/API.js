import axios from "axios";

export default {
	// Gets all user stats
	getUser: function (id) {
		return axios.get("/api/user/" + id);
	}
};
