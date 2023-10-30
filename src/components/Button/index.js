import React from "react";
import * as S from "./styles";

const Button = ({
	text,
	onClick,
	type = "primary",
	icon = <></>,
	size = "big"
}) => {
	return (
		<S.Button type={type} size={size} onClick={onClick}>
			{icon}
			{text}
		</S.Button>
	);
};

export default Button;
