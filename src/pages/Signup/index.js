import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../assets/logo.png";
import PopupSuccess from "../../components/PopupSuccess";
import * as S from "./styles";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
	const { signup } = useAuth();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors }
	} = useForm();
	const [showSuccessPopup, setShowSuccessPopup] = useState(false);

	const onSubmit = (data) => {
		if (!data.name || !data.email || !data.password || !data.passwordConf) {
			setError("name", {
				type: "required",
				message: "Campo Nome é obrigatório"
			});
			setError("email", {
				type: "required",
				message: "Campo Email é obrigatório"
			});
			setError("password", {
				type: "required",
				message: "Campo Senha é obrigatório"
			});
			setError("passwordConf", {
				type: "required",
				message: "Campo Confirmar Senha é obrigatório"
			});
		} else if (data.password !== data.passwordConf) {
			setError("passwordConf", {
				type: "validate",
				message: "As senhas não são iguais"
			});
		} else {
			signup(data.name, data.email, data.password);
			setShowSuccessPopup(true);
		}
	};

	const handleCancel = () => {
		navigate("/");
	};

	const handleCloseSuccessPopup = () => {
		setShowSuccessPopup(false);
		navigate("/");
	};

	return (
		<S.Container>
			<S.FormContent onSubmit={handleSubmit(onSubmit)}>
				<S.Img src={Logo} alt="Logo" />
				<S.Label>Crie sua conta</S.Label>
				<Input type="name" placeholder="Nome" {...register("name")} />
				<Input
					type="email"
					placeholder="Email"
					{...register("email")}
				/>
				<Input
					type="password"
					placeholder="Senha"
					{...register("password")}
				/>
				<Input
					type="password"
					placeholder="Confirmar Senha"
					{...register("passwordConf")}
				/>
				<S.LabelError>
					{Object.keys(errors).map((key) => (
						<p key={key}>{errors[key].message}</p>
					))}
				</S.LabelError>
				<S.FlexContainer>
					<Button
						text="Cancelar"
						onClick={handleCancel}
						type="button"
						theme="secondary"
					/>
					<Button text="Inscrever-se" type="submit" />
				</S.FlexContainer>
			</S.FormContent>
			<PopupSuccess
				open={showSuccessPopup}
				onClose={handleCloseSuccessPopup}
			/>
		</S.Container>
	);
};

export default Signup;
