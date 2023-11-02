import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Teste from "../pages/Teste";

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Signin />} />
				<Route path="/home/*" element={<PrivateRoute />}>
					<Route index element={<Home />} />
				</Route>
				<Route path="/signup" element={<Signup />} />
				<Route path="/teste" element={<Teste />} />
			</Routes>
		</BrowserRouter>
	);
};

const PrivateRoute = () => {
	const { signed } = useAuth();

	if (!signed) {
		// Redirecionando o usuário para a página de login se não estiver autenticado.
		return (
			<Routes>
				<Route path="/" element={<Signin />} />
			</Routes>
		);
	}

	return <Outlet />;
};

export default RoutesApp;
