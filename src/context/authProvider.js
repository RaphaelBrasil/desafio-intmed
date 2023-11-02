import { createContext, useState } from "react";
import { AuthService } from "../services/authService";
import { SignupService } from "../services/signupService";
import authInterceptor from "../services/authInterceptor";

authInterceptor();

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const signin = async (username, password) => {
		try {
			const userData = await AuthService.signin(username, password);
			setUser(userData);
		} catch (err) {
			return err.message;
		}
	};

	const signup = async (username, email, password) => {
		try {
			await SignupService.signup(username, email, password);
		} catch (err) {
			return err.message;
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
