import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	align-content: space-around;
	flex-direction: column;
	margin-top: 15px;
`;

export const Content = styled.div`
	gap: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	background-color: white;
	max-width: 700px;
	border-radius: 5px;
	overflow: hidden;
`;

export const Img = styled.img`
	height: 50px;
	width: 181px;
	align-self: flex-start;
`;

export const Label = styled.label`
	font-size: 13px;
	color: #a8a8a8;
	display: flex;
	align-items: center;
	flex-direction: row;
	height: 20px;
`;

export const Strong = styled.strong`
	//cursor: pointer;

	a {
		text-decoration: none;
		color: #a8a8a8;
	}
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	align-coontent: center;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	outline: none;
`;

export const Footer = styled.div`
	margin: 20px;
	z-index: -1;
`;

export const Box = styled.div`
	height: 100%;
	width: 99%;
	background-color: #ffffff;
	border-radius: 4px;
	box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
	display: flex;
	flex-direction: column;
	outline: none;
	margin: 2px;
`;

export const Body = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	gap: 10px;
	margin-top: 20px;
	padding: 10px;
`;

export const TableWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	padding: 5px;
	margin-top: 20px;
`;

export const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	outline: none;
	border: none;
	border-radius: 8px;
	height: 40px;
	width: 160px;
	cursor: pointer;
	font-weight: ${(props) => (props.size === "small" ? "" : "700")};
	font-size: ${(props) => (props.size === "small" ? "15px" : "18px")};
	background-color: ${(props) =>
		props.type === "secondary"
			? "white"
			: props.type === "transparent"
			? "transparent"
			: "#49b4bb"};
	color: ${(props) =>
		props.type === "secondary" || props.type === "transparent"
			? "#49b4bb"
			: "white"};

	&:hover {
		background-color: ${(props) =>
			props.type === "secondary"
				? "#D9F1F3"
				: props.type === "transparent"
				? "transparent"
				: "#90D3D7"};
	}
`;
