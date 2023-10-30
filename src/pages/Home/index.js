import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
	Popover,
	PopoverTrigger,
	PopoverContent
} from "../../components/Popover";
import Button from "../../components/Button";
import NovaConsulta from "../../components/NovaConsulta";
import TabelaDeDados from "../../components/TabelaDeDados";
import Logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";
import * as S from "./styles";

const Home = () => {
	const columns = [
		{
			Header: "Especialidade",
			accessor: "medico.especialidade.nome"
		},
		{
			Header: "Profissional",
			accessor: "medico.nome"
		},
		{
			Header: "Data",
			accessor: "dia"
		},
		{
			Header: "Hora",
			accessor: "horario"
		},
		{
			Header: "",
			accessor: "id",
			Cell: ({ row }) => (
				<Button
					text="Desmarcar"
					type="transparent"
					size="small"
					icon={
						<FontAwesomeIcon
							icon={faXmark}
							style={{ marginRight: "8px", marginLeft: "2px" }}
						/>
					}
					onClick={() => handleDeleteConsulta(row.original.id)}
				/>
			)
		}
	];

	const { signout } = useAuth();
	const navigate = useNavigate();

	const [dados, setDados] = useState([]);
	const [user, setUser] = useState("");
	const fetchData = async () => {
		try {
			const userToken = JSON.parse(localStorage.getItem("user_token"));
			const response = await axios.get("/consultas", {
				headers: {
					Authorization: `Token ${userToken.accessToken}`
				}
			});
			setUser(userToken.username);
			setDados(response.data);
		} catch (error) {}
	};

	const handleDeleteConsulta = async (consultaId) => {
		try {
			const userToken = JSON.parse(localStorage.getItem("user_token"));
			await axios.delete(`/consultas/${consultaId}`, {
				headers: {
					Authorization: `Token ${userToken.accessToken}`
				}
			});
			// Após a exclusão bem-sucedida, chame a função para buscar os dados atualizados.
			fetchData();
		} catch (error) {}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<S.Container>
			<S.Content>
				<S.Header>
					<S.Img src={Logo} alt="Logo" />
					<S.Label>{user}</S.Label>
					<Button
						text="Desconectar"
						type="transparent"
						size="small"
						onClick={() => {
							signout();
							navigate("/");
						}}
					/>
				</S.Header>
				<S.Box>
					<S.Body>
						<S.Strong>Consulta Clínica</S.Strong>
						<Popover>
							<PopoverTrigger
								style={{
									background: "transparent",
									border: "none"
								}}
							>
								<S.Div>
									<FontAwesomeIcon
										icon={faPlus}
										style={{
											marginRight: "8px",
											marginLeft: "2px"
										}}
									/>
									Nova Consulta
								</S.Div>
							</PopoverTrigger>
							<PopoverContent>
								<NovaConsulta fetchData={fetchData} />
							</PopoverContent>
						</Popover>
					</S.Body>
					<TabelaDeDados columns={columns} data={dados} />
				</S.Box>
			</S.Content>
			<S.Footer></S.Footer>
		</S.Container>
	);
};

export default Home;
