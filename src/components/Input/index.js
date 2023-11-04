import React, { useState, forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

const MyForwardedInput = (
	{ type, placeholder, name, value, onChange },
	ref
) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};

	return (
		<S.Wrapper>
			{type === "password" ? (
				<S.ToggleButton
					onClick={handleTogglePassword}
					tabIndex="-1"
					type="button"
				>
					<FontAwesomeIcon
						icon={showPassword ? faEyeSlash : faEye}
						style={{ color: "#a8a8a8" }}
					/>
				</S.ToggleButton>
			) : (
				<></>
			)}
			<S.StyledInput
				ref={ref}
				value={value}
				name={name}
				onChange={onChange}
				type={type === "password" && showPassword ? "text" : type}
				placeholder={placeholder}
			/>
		</S.Wrapper>
	);
};

export const Input = forwardRef(MyForwardedInput);

export default Input;
