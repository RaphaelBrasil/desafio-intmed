import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Teste from "../pages/Teste";

const PrivateRoute = ({ children }) => {
	const { signed } = useAuth();
	return signed ? children : <Signin />;
};

const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/home"
					element={
						<PrivateRoute>
							<Home />
						</PrivateRoute>
					}
				/>
				<Route path="/signup" element={<Signup />} />
				<Route path="/teste" element={<Teste />} />
				<Route path="*" element={<Signin />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesApp;
