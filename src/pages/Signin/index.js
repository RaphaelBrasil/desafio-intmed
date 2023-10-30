import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../assets/logo.png";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
	const { signin } = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	const handleLogin = async () => {
		if (!email || !password) {
			setError("Preencha todos os campos");
			return;
		}

		try {
			await signin(email, password);
			navigate("/home");
		} catch (err) {
			setError("E-mail ou senha incorretos");
		}
	};

	const handleSignup = () => {
		navigate("/signup");
	};

	return (
		<S.Container>
			<S.Content>
				<S.Img src={Logo} alt="Logo" />
				<Input
					type="email"
					placeholder="Email ou Login"
					value={email}
					onChange={(e) => [setEmail(e.target.value), setError("")]}
				/>
				<Input
					type="password"
					placeholder="Senha"
					value={password}
					onChange={(e) => [
						setPassword(e.target.value),
						setError("")
					]}
					showPassword={showPassword}
					onClick={handleTogglePassword}
				/>

				<S.CheckContainer>
					<Input
						type="checkbox"
						checked={rememberMe}
						onChange={(e) => setRememberMe(e.target.checked)}
					/>
					<S.Label>Lembrar minha senha</S.Label>
				</S.CheckContainer>

				<S.LabelError>{error}</S.LabelError>

				<S.ButtonContainer>
					<Button
						text="Criar Conta"
						onClick={handleSignup}
						type="secondary"
					/>
					<Button text="Acessar" onClick={handleLogin} />
				</S.ButtonContainer>
			</S.Content>
		</S.Container>
	);
};

export default Signin;
