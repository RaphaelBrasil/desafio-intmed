import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

const Input = ({ type, placeholder, value, onChange }) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<S.Wrapper>
			{type === "password" ? (
				<S.ToggleButton onClick={handleTogglePassword}>
					<FontAwesomeIcon
						icon={showPassword ? faEyeSlash : faEye}
						style={{ color: "#a8a8a8" }}
					/>
				</S.ToggleButton>
			) : (
				<></>
			)}
			<S.Input
				value={value}
				onChange={onChange}
				type={type === "password" && showPassword ? "text" : type}
				placeholder={placeholder}
			/>
		</S.Wrapper>
	);
};

export default Input;
