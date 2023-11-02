// styles.js
import styled from "styled-components";

export const PopupContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(
		0,
		0,
		0,
		0.5
	); /* Fundo escuro para destacar o pop-up */
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999; /* Para manter o pop-up na parte superior */
`;

export const PopupContent = styled.div`
	background-color: #fff; /* Fundo branco */
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
	padding: 20px;
	border-radius: 5px;
	text-align: center;
	max-width: 400px;
	width: 100%;
	font-family: "Roboto-Regular", Helvetica;
	font-size: 13px;
	font-weight: 400;
	line-height: normal;
	color: #444; /* Cor preta */
	position: relative;
`;

export const CloseButton = styled.button`
	background: none;
	border: none;
	font-family: "Roboto-Bold", Helvetica;
	font-size: 18px;
	font-weight: 700;
	line-height: normal;
	cursor: pointer;
	color: #49b4bb; /* Cor primária */
	margin-top: 20px;
`;

export const Title = styled.h2`
	font-size: 24px;
	color: #444; /* Cor preta */
	margin-bottom: 10px;
`;

export const Message = styled.p`
	font-size: 16px;
	color: #a8a8a8; /* Cor cinza-2 */
	margin-bottom: 20px;
`;

// Adicione outros estilos conforme necessário
