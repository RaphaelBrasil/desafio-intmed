import React from "react";
import * as S from "./styles";

const PopupSuccess = ({ open, onClose }) => {
	if (!open) {
		return null;
	}

	return (
		<S.PopupContainer>
			<S.PopupContent>
				<S.Title>Tudo certo!</S.Title>
				<S.Message>Seu registro foi concluído com sucesso.</S.Message>
				<S.CloseButton onClick={onClose}>
					Retornar à página de Login
				</S.CloseButton>
			</S.PopupContent>
		</S.PopupContainer>
	);
};

export default PopupSuccess;
