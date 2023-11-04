import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
	Popover,
	PopoverTrigger,
	PopoverContent
} from "../../components/Popover";
import Button from "../../components/Button";
import FormularioNovaConsulta from "../../components/FormularioNovaConsulta";
import TabelaDeDados from "../../components/TabelaDeDados";
import Logo from "../../assets/logo.png";
import useAuth from "../../hooks/useAuth";
import * as S from "./styles";
import { ConsultaService } from "../../services/consultaService";

function capitalizeFirstLetter(string) {
	return string.replace(/^\w/, (match) => match.toUpperCase());
}

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
					theme="transparent"
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
	const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
	const [consultaIdToDelete, setConsultaIdToDelete] = useState(null);

	const fetchData = async () => {
		try {
			const result = await ConsultaService.fetchData();
			setUser(result.username);
			setDados(result.data);
		} catch (error) {}
	};

	const handleDeleteConsulta = (consultaId) => {
		// Configure o ID da consulta que será excluída e mostre o popup de confirmação
		setConsultaIdToDelete(consultaId);
		setShowConfirmationPopup(true);
	};

	const confirmDeleteConsulta = async () => {
		try {
			await ConsultaService.handleDeleteConsulta(consultaIdToDelete);
			// Após a exclusão bem-sucedida, chame a função para buscar os dados atualizados.
			fetchData();
		} catch (error) {
			// Lida com erros, se necessário
		} finally {
			// Fecha o popup de confirmação
			setShowConfirmationPopup(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<S.Container>
			<S.Content>
				<S.Header>
					<S.Img src={Logo} alt="Logo" />
					<S.UserLabel>{capitalizeFirstLetter(user)}</S.UserLabel>
					<Button
						text="Desconectar"
						theme="transparent"
						size="small"
						onClick={() => {
							signout();
							navigate("/");
						}}
					/>
				</S.Header>
				<S.WrapperBody>
					<S.Body>
						<S.StyledStrong>Consulta Clínica</S.StyledStrong>
						<Popover>
							<PopoverTrigger
								style={{
									background: "transparent",
									border: "none"
								}}
							>
								<S.StyledPseudoButton>
									<FontAwesomeIcon
										icon={faPlus}
										style={{
											marginRight: "8px",
											marginBottom: "2px"
										}}
									/>
									Nova Consulta
								</S.StyledPseudoButton>
							</PopoverTrigger>
							<PopoverContent>
								<FormularioNovaConsulta fetchData={fetchData} />
							</PopoverContent>
						</Popover>
					</S.Body>
					<TabelaDeDados columns={columns} data={dados} />
				</S.WrapperBody>
			</S.Content>{" "}
			{showConfirmationPopup && (
				<S.ConfirmationPopup>
					<S.ConfirmationMessage>
						{`Deseja realmente desmarcar a consulta ${consultaIdToDelete}?`}
						<S.ConfirmationWrapper>
							<Button
								text="Cancelar"
								theme="secondary"
								onClick={() => setShowConfirmationPopup(false)}
							/>
							<Button
								text="Confirmar"
								theme="primary"
								onClick={confirmDeleteConsulta}
							/>
						</S.ConfirmationWrapper>
					</S.ConfirmationMessage>
				</S.ConfirmationPopup>
			)}
			<S.Footer />
		</S.Container>
	);
};

export default Home;
