import React from "react";
import { StyledButton } from "./styles";

const Button = ({
	text,
	onClick,
	type,
	theme = "primary",
	icon = <></>,
	size = "big",
	disabled
}) => {
	return (
		<StyledButton
			type={type}
			size={size}
			onClick={onClick}
			theme={theme}
			disabled={disabled}
		>
			{icon}
			{text}
		</StyledButton>
	);
};

export default Button;
