import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

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
				<Route path="*" element={<Signin />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesApp;
