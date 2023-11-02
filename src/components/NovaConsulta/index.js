import React, { useState, useEffect } from "react";
import * as S from "./styles";
import Button from "../../components/Button";
import { ConsultaService } from "../../services/consultaService";

const NovaConsulta = ({ fetchData }) => {
	const [selectedEspecialidade, setSelectedEspecialidade] = useState("");
	const [selectedMedico, setSelectedMedico] = useState("");
	const [selectedDia, setSelectedDia] = useState("");
	const [selectedHorario, setSelectedHorario] = useState("");
	const [especialidades, setEspecialidades] = useState([]);
	const [medicos, setMedicos] = useState([]);
	const [agendas, setAgendas] = useState([]);

	const handleEspecialidadeChange = (event) => {
		setSelectedEspecialidade(event.target.value);
		setSelectedMedico("");
		setSelectedDia("");
		setSelectedHorario("");
	};

	const handleMedicoChange = (event) => {
		setSelectedMedico(event.target.value);
		setSelectedDia("");
		setSelectedHorario("");
	};

	const handleDiaChange = (event) => {
		setSelectedDia(event.target.value);
		setSelectedHorario("");
	};

	const handleHorarioChange = (event) => {
		setSelectedHorario(event.target.value);
	};

	const handleCancelar = () => {
		setSelectedEspecialidade("");
		setSelectedMedico("");
		setSelectedDia("");
		setSelectedHorario("");
	};

	const handleConfirmar = async () => {
		try {
			await ConsultaService.createConsulta(selectedDia, selectedHorario);
			fetchData();
		} catch (error) {
			console.error(error);
		}
	};

	const medicosFiltrados = medicos.filter(
		(medico) => medico.especialidade.id === Number(selectedEspecialidade)
	);

	const datasDisponiveis = agendas.filter(
		(data) => data.medico.id === Number(selectedMedico)
	);

	useEffect(() => {
		try {
			const fetchEspecialidades = async () => {
				const especialidadesData =
					await ConsultaService.fetchEspecialidades();
				setEspecialidades(especialidadesData);
			};

			const fetchMedicos = async () => {
				const medicosData = await ConsultaService.fetchMedicos();
				setMedicos(medicosData);
			};

			const fetchAgendas = async () => {
				const agendasData = await ConsultaService.fetchAgendas();
				setAgendas(agendasData);
			};

			fetchEspecialidades();
			fetchMedicos();
			fetchAgendas();
		} catch (error) {
			console.error(error);
		}
	}, []);

	return (
		<S.PopoverContent>
			<S.SelectWrapper>
				<S.Strong>Nova Consulta</S.Strong>
				<S.Select
					id="especialidadeSelect"
					value={selectedEspecialidade}
					onChange={handleEspecialidadeChange}
				>
					<option value="">Selecione uma especialidade</option>
					{especialidades.map((especialidade) => (
						<option key={especialidade.id} value={especialidade.id}>
							{especialidade.nome}
						</option>
					))}
				</S.Select>
				<S.Select
					id="medicoSelect"
					value={selectedMedico}
					onChange={handleMedicoChange}
					disabled={!selectedEspecialidade}
				>
					<option value="">Selecione um Médico</option>
					{medicosFiltrados.map((medico) => (
						<option key={medico.id} value={medico.id}>
							{medico.nome}
						</option>
					))}
				</S.Select>
				<S.Select
					id="diaSelect"
					value={selectedDia}
					onChange={handleDiaChange}
					disabled={!selectedMedico}
				>
					<option value="">Selecione um Dia</option>
					{datasDisponiveis.map((data) => (
						<option key={data.dia} value={data.dia}>
							{data.dia}
						</option>
					))}
				</S.Select>
				<S.Select
					id="horarioSelect"
					value={selectedHorario}
					onChange={handleHorarioChange}
					disabled={!selectedDia}
				>
					<option value="">Selecione um Horário</option>
					{datasDisponiveis.map((data) =>
						data.horarios.map((horario) => (
							<option key={horario} value={horario}>
								{horario}
							</option>
						))
					)}
				</S.Select>
				<S.ButtonWrapper>
					<Button
						text="Cancelar"
						theme="secondary"
						onClick={handleCancelar}
					/>
					<Button
						text="Confirmar"
						type="submit"
						onClick={handleConfirmar}
					/>
				</S.ButtonWrapper>
			</S.SelectWrapper>
		</S.PopoverContent>
	);
};

export default NovaConsulta;
