import axios from "../api/axios";

const authInterceptor = () => {
	axios.interceptors.request.use(
		(config) => {
			const userToken = localStorage.getItem("user_token");

			if (userToken) {
				const { accessToken } = JSON.parse(userToken);
				config.headers.Authorization = `Token ${accessToken}`;
			}

			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);
};

export default authInterceptor;
