import styled from "styled-components";

export const SelectWrapper = styled.div`
	position: relative;
	width: 100%;
`;

export const Select = styled.select`
	outline: none;
	padding: 5px 5px;
	height: 40px;
	width: 100%;
	border-radius: 4px;
	background-color: #ffffff;
	border: 1px solid;
	border-color: #a8a8a8;
	outline: none;
	cursor: pointer;

	&::-ms-expand {
		display: none;
	}

	&:focus {
		outline: 2px solid #49b4bb;
		outline-offset: -2px;
	}
`;
