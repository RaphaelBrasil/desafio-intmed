import React from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const PopupSuccess = ({
	open,
	onClose,
	isSuccess = true,
	title,
	message,
	closeButton
}) => {
	if (!open) {
		return null;
	}

	return (
		<S.PopupContainer>
			<S.PopupContent>
				<S.StyledIcon>
					<FontAwesomeIcon
						icon={isSuccess ? faThumbsUp : faThumbsDown}
						size="2xl"
					/>
				</S.StyledIcon>
				<S.Message>{message}</S.Message>
				<S.CloseButton onClick={onClose}>{closeButton}</S.CloseButton>
			</S.PopupContent>
		</S.PopupContainer>
	);
};

export default PopupSuccess;
