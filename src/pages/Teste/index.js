import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledButton, StyledInput } from "../../styles/global";

const Teste = () => {
	const [output, setOutput] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = (data) => {
		setOutput(JSON.stringify(data, null, 2));
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<StyledInput
				autoComplete="false"
				type="text"
				placeholder="Email ou Login"
				{...register("email")}
			/>
			<StyledInput
				autoComplete="false"
				type="password"
				placeholder="Senha"
				{...register("password")}
			/>
			<StyledButton type="submit">teste</StyledButton>
			{errors.exampleRequired && <span>This field is required</span>}
			<pre>{output}</pre>
		</form>
	);
};

export default Teste;
