import styled from "styled-components";

export const Strong = styled.strong`
	margin-top: 40px;
	margin-bottom: 25px;
	align-self: flex-start;
`;

export const PopoverContent = styled.div`
	gap: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	max-width: 420px;
	max-height: 480px;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	padding: 10px;
	min-width: 200px;
	border-radius: 4px;
	background-color: #ffffff;
	border: 1px solid #a8a8a8;
`;

export const SelectWrapper = styled.div`
	position: relative;
	gap: 15px;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	align-content: center;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	margin-bottom: 20px;
	outline: none;
`;

export const Select = styled.select`
	outline: none;
	padding: 5px 5px;
	height: 40px;
	width: 400px;
	border-radius: 4px;
	background-color: #ffffff;
	border: 1px solid #a8a8a8;
	cursor: pointer;

	&::-ms-expand {
		display: none;
	}
`;

export const Option = styled.option`
	outline: none;
	padding: 5px 5px;
	height: 40px;
	width: 100%;
	border-radius: 4px;
	background-color: #ffffff;
	border: 1px solid #a8a8a8;
	cursor: pointer;

	&::-ms-expand {
		display: none;
	}
`;
