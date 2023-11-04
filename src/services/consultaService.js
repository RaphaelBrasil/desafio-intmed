import axios from "../api/axios";
import authInterceptor from "../interceptors/authInterceptor";

authInterceptor();

export const ConsultaService = {
	fetchEspecialidades: async () => {
		try {
			const response = await axios.get("/especialidades");
			return response.data;
		} catch (err) {
			throw new Error("Erro ao buscar especialidades");
		}
	},

	fetchMedicos: async () => {
		try {
			const response = await axios.get("/medicos");
			return response.data;
		} catch (err) {
			throw new Error("Erro ao buscar médicos");
		}
	},

	fetchAgendas: async () => {
		try {
			const response = await axios.get("/agendas");
			return response.data;
		} catch (err) {
			throw new Error("Erro ao buscar agendas");
		}
	},

	createConsulta: async (diaSelecionado, HorarioSelecionado) => {
		try {
			await axios.post(
				"/consultas",
				{
					headers: {
						"Content-Type": "application/json"
					},
					withCredentials: true
				},
				JSON.stringify({ diaSelecionado, HorarioSelecionado })
			);
		} catch (err) {
			throw new Error("Erro ao criar consulta");
		}
	},
	fetchData: async () => {
		try {
			const userToken = JSON.parse(localStorage.getItem("user_token"));
			const response = await axios.get("/consultas", {
				headers: {
					"Content-Type": "application/json"
				},
				withCredentials: true
			});
			return { username: userToken.username, data: response.data };
		} catch (error) {
			throw new Error("Erro ao buscar dados");
		}
	},

	handleDeleteConsulta: async (consultaId) => {
		try {
			await axios.delete(`/consultas/${consultaId}`, {
				headers: {
					"Content-Type": "application/json"
				},
				withCredentials: true
			});
			// Após a exclusão bem-sucedida, chame a função para buscar os dados atualizados.
			//fetchData();
		} catch (error) {
			throw new Error("Erro ao deletar consulta");
		}
	}
};
