import React from "react";
import GlobalStyle from "./styles/global";
import RoutesApp from "./routes";
import { AuthProvider } from "./context/authProvider";

// import { Container } from './styles';

const App = () => {
	return (
		<AuthProvider>
			<RoutesApp />
			<GlobalStyle />
		</AuthProvider>
	);
};

export default App;
