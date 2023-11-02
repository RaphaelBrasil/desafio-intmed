import axios from "../api/axios";
import authInterceptor from "../services/authInterceptor";

authInterceptor();

export const ConsultaService = {
	fetchEspecialidades: async () => {
		try {
			const response = await axios.get("/especialidades");
			return response.data;
		} catch (error) {
			throw new Error("Erro ao buscar especialidades");
		}
	},

	fetchMedicos: async () => {
		try {
			const response = await axios.get("/medicos");
			return response.data;
		} catch (error) {
			throw new Error("Erro ao buscar médicos");
		}
	},

	fetchAgendas: async () => {
		try {
			const response = await axios.get("/agendas");
			return response.data;
		} catch (error) {
			throw new Error("Erro ao buscar agendas");
		}
	},

	createConsulta: async (selectedDia, selectedHorario) => {
		try {
			await axios.post(
				"/consultas",
				JSON.stringify({ selectedDia, selectedHorario }),
				{
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true
				}
			);
		} catch (error) {
			throw new Error("Erro ao criar consulta");
		}
	}
};
