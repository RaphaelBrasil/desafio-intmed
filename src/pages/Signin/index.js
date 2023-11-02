import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../assets/logo.png";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
	const { signin } = useAuth();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors }
	} = useForm();
	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	const onSubmit = async (data) => {
		try {
			await signin(data.email, data.password);
			navigate("/home");
		} catch (err) {
			setError("password", {
				message: "E-mail ou senha incorretos"
			});
		}
	};

	const handleSignup = () => {
		navigate("/signup");
	};

	return (
		<S.Container>
			<S.FormContent onSubmit={handleSubmit(onSubmit)}>
				<S.Img src={Logo} alt="Logo" />
				<Input
					type="text"
					placeholder="Email ou Login"
					{...register("email")}
				/>

				<Input
					type="password"
					placeholder="Senha"
					{...register("password")}
					showPassword={showPassword}
					onClick={handleTogglePassword}
				/>

				<S.CheckContainer>
					<Input type="checkbox" {...register("rememberMe")} />
					<S.Label>Lembrar minha senha</S.Label>
				</S.CheckContainer>

				<S.LabelError>{errors.password?.message}</S.LabelError>

				<S.ButtonContainer>
					<Button
						text="Criar Conta"
						type="button"
						onClick={handleSignup}
						theme="secondary"
					/>
					<Button text="Acessar" type="submit" />
				</S.ButtonContainer>
			</S.FormContent>
		</S.Container>
	);
};

export default Signin;
