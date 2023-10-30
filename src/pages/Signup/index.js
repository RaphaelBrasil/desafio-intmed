import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import Logo from "../../assets/logo.png";
import * as S from "./styles";

const Signup = () => {
	const { signup } = useAuth();
	const navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConf, setPasswordConf] = useState("");
	const [error, setError] = useState("");

	const handleInputChange = (setter, value) => {
		setter(value);
		setError("");
	};

	const handleSignup = () => {
		if (!name || !email || !password || !passwordConf) {
			setError("Preencha todos os campos");
		} else if (password !== passwordConf) {
			setError("As senhas não são iguais");
		} else {
			signup(name, email, password);
			navigate("/");
		}
	};

	const handleCancel = () => {
		navigate("/");
	};

	return (
		<S.Container>
			<S.Content>
				<S.Img src={Logo} alt="Logo" />
				<S.Label>Crie sua conta</S.Label>
				<Input
					type="name"
					placeholder="Nome"
					value={name}
					onChange={(e) => handleInputChange(setName, e.target.value)}
				/>
				<Input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) =>
						handleInputChange(setEmail, e.target.value)
					}
				/>
				<Input
					type="password"
					placeholder="Senha"
					value={password}
					onChange={(e) =>
						handleInputChange(setPassword, e.target.value)
					}
				/>
				<Input
					type="password"
					placeholder="Confirmar Senha"
					value={passwordConf}
					onChange={(e) =>
						handleInputChange(setPasswordConf, e.target.value)
					}
				/>
				<S.LabelError>{error}</S.LabelError>
				<S.FlexContainer>
					<Button
						text="Cancelar"
						onClick={handleCancel}
						type="secondary"
					/>
					<Button text="Inscrever-se" onClick={handleSignup} />
				</S.FlexContainer>
			</S.Content>
		</S.Container>
	);
};

export default Signup;
