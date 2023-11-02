import axios from "../api/axios";

const errorInterceptor = () => {
	axios.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			if (error.response && error.response.status === 401) {
				// Lidar com erros de autorização globalmente
				// Por exemplo, redirecionar o usuário para a página de login
			}
			return Promise.reject(error);
		}
	);
};

export default errorInterceptor;
