import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 10px;
	height: 100vh;
`;

export const FormContent = styled.form`
	gap: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	background-color: white;
	max-width: 350px;
	border-radius: 5px;
`;

export const Img = styled.img`
	height: 50px;
	width: auto;
	align-self: flex-start;
`;

export const Label = styled.label`
	font-size: 13px;
	color: #a8a8a8;
	display: flex;
	align-items: center;
	flex-direction: row;
	width: 1000%;
`;

export const LabelError = styled.label`
	font-size: 13px;
	color: red;
`;

export const Strong = styled.strong`
	cursor: pointer;

	a {
		text-decoration: none;
		color: #a8a8a8;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	outline: none;
`;
export const CheckContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	outline: none;
`;
