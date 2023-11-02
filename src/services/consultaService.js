// consultaService.js
import axios from "../api/axios";

export const ConsultaService = {
	fetchEspecialidades: async (userToken) => {
		try {
			const response = await axios.get("/especialidades", {
				headers: {
					Authorization: `Token ${userToken.accessToken}`
				}
			});
			return response.data;
		} catch (error) {
			throw new Error("Erro ao buscar especialidades");
		}
	},

	fetchMedicos: async (userToken) => {
		try {
			const response = await axios.get("/medicos", {
				headers: {
					Authorization: `Token ${userToken.accessToken}`
				}
			});
			return response.data;
		} catch (error) {
			throw new Error("Erro ao buscar médicos");
		}
	},

	fetchAgendas: async (userToken) => {
		try {
			const response = await axios.get("/agendas", {
				headers: {
					Authorization: `Token ${userToken.accessToken}`
				}
			});
			return response.data;
		} catch (error) {
			throw new Error("Erro ao buscar agendas");
		}
	},

	createConsulta: async (userToken, selectedDia, selectedHorario) => {
		try {
			await axios.post(
				"/consultas",
				JSON.stringify({ selectedDia, selectedHorario }),
				{
					headers: {
						Authorization: `Token ${userToken.accessToken}`,
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
