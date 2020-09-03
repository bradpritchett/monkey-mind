import axios from "axios";

export default {
	getUser: function (email) {
		return axios.get("/api/user/" + email);
	},
	newUser: function (postData) {
		return axios.post("/api/user/", postData);
	},
	saveSession: function (postData) {
		return axios.put("/api/user/" + postData.id, postData);
	}
};
