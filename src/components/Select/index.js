import React from "react";
import * as S from "./styles";

const Select = ({ options, ...rest }) => {
	return (
		<S.SelectWrapper>
			<S.Select {...rest}>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</S.Select>
		</S.SelectWrapper>
	);
};

export default Select;
