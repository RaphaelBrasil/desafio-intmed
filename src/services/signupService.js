import axios from "../api/axios";

const SIGNUP_URL = "users";

export const SignupService = {
	signup: async (username, email, password) => {
		try {
			await axios.post(
				SIGNUP_URL,
				JSON.stringify({ username, email, password }),
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true
				}
			);
		} catch (err) {
			if (!err?.response) {
				throw new Error("Sem resposta do servidor");
			} else {
				throw new Error("Falha ao registrar");
			}
		}
	}
};
