import { createContext, useEffect, useState } from "react";
import axios from "../api/axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const LOGIN_URL = "users/login";
	const SIGNUP_URL = "users";

	useEffect(() => {
		const userToken = localStorage.getItem("user_token");
		if (userToken) {
			const { username, accessToken } = JSON.parse(userToken);
			setUser({ username, accessToken });
		}
	}, []);

	const signin = async (username, password) => {
		try {
			const response = await axios.post(
				LOGIN_URL,
				JSON.stringify({ username, password }),
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true
				}
			);

			const accessToken = response?.data?.token;
			localStorage.setItem(
				"user_token",
				JSON.stringify({ username, accessToken })
			);
			setUser({ username, accessToken });
		} catch (err) {
			return "E-mail ou senha incorretos";
		}
	};

	const signup = async (username, email, password) => {
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
				return "Sem resposta do servidor";
			} else {
				return "Falha ao registrar";
			}
		}
	};

	const signout = () => {
		setUser(null);
		localStorage.removeItem("user_token");
	};

	const authValue = { user, signed: !!user, signin, signup, signout };

	return (
		<AuthContext.Provider value={authValue}>
			{children}
		</AuthContext.Provider>
	);
};
