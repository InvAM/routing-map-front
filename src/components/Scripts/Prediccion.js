import axios from "axios";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
export default {
	name: "Prediccion",
	data: () => ({
		infoPrediccion: null,
		selectedUser: null,
		isLoading: true,
		isLoadingPrediccion: false,
		isLoadingP: true,
		isLoadingD: false,
	}),
	props: {
		infoPrediccion: {
			type: Object,
			required: true,
		},
	},
	mounted() {
		this.getInfoUser();
	},
	methods: {
		getParticipacion(IDParticipacion) {
			return axios
				.get(`http://localhost:3000/participacion/${IDParticipacion}`)
				.then((res) => {
					return res.data.Descripcion_participacion;
				});
		},
		getNivelAcademico(IDNivelAcademico) {
			return axios
				.get(`http://localhost:3000/nivelacademico/${IDNivelAcademico}`)
				.then((res) => {
					return res.data.Descripcion_NivelAcademico;
				});
		},
		getHabPrg(IDHabilidadesprg) {
			return axios
				.get(`http://localhost:3000/habilidadesprg/${IDHabilidadesprg}`)
				.then((res) => {
					return res.data.Descripcion_Habilidadesprg;
				});
		},
		getHabMat(IDHabilidadesmat) {
			return axios
				.get(`http://localhost:3000/habilidadesmat/${IDHabilidadesmat}`)
				.then((res) => {
					return res.data.Descripcion_Habilidadesmat;
				});
		},
		getCondicion(IDCondicion) {
			return axios
				.get(`http://localhost:3000/condicion/${IDCondicion}`)
				.then((res) => {
					return res.data.Descripcion_Condicion;
				});
		},
		async getLenguaje(IDs) {
			const requests = IDs.map((ID) =>
				axios.get(`http://localhost:3000/lenguaje/${ID}`)
			);
			const responses = await Promise.all(requests);
			return responses.map((res) => res.data.Descripcion_Lenguaje);
		},
		async getHabBla(IDs) {
			const request = IDs.map((ID) =>
				axios.get(`http://localhost:3000/habilidadesbla/${ID}`)
			);
			const responses = await Promise.all(request);
			return responses.map((res) => res.data.Descripcion_Habilidadesbla);
		},
		async getIntereses(IDs) {
			const request = IDs.map((ID) =>
				axios.get(`http://localhost:3000/interes/${ID}`)
			);
			const responses = await Promise.all(request);
			return responses.map((res) => res.data.Descripcion_Interes);
		},
		regresar3() {
			this.$router.push("/menuuser");
		},
		async getInfoUser() {
			try {
				const ID = localStorage.getItem("userId");
				console.log("UserID from localStorage:", ID);

				if (!ID) {
					console.error("No UserID found in localStorage");
					return;
				}

				const response = await axios.get(`http://localhost:3000/users/${ID}`);
				const userData = response.data;
				console.log("User data from API:", userData);

				const firebaseConfig = {
					apiKey: "AIzaSyAdbxgtIebBfPyyIAUNiJIi870Z8DNBOuM",
					authDomain: "ucv-rec-api.firebaseapp.com",
					projectId: "ucv-rec-api",
					storageBucket: "ucv-rec-api.appspot.com",
					messagingSenderId: "355897289132",
					appId: "1:355897289132:web:f0dccd53d0e9d7aeaf7209",
				};

				const firebaseApp = initializeApp(firebaseConfig);
				const db = getFirestore(firebaseApp);

				if (!userData.IDia) {
					console.error("No IDia found in user data");
					return;
				}

				console.log("IA ID:", userData.IDia);

				const userRef = doc(db, "users-ia", userData.IDia);
				const docSnap = await getDoc(userRef);

				if (docSnap.exists()) {
					const firebaseData = docSnap.data();
					console.log("Data from Firebase:", firebaseData);
					const participacion = await this.getParticipacion(
						firebaseData.participacion_club_tecnologia
					);
					const desNivelA = await this.getNivelAcademico(
						firebaseData.nivel_academico
					);
					const habilidadesprg = await this.getHabPrg(
						firebaseData.habilidad_programacion
					);
					const habilidadesmat = await this.getHabMat(
						firebaseData.habilidad_matematicas
					);
					const condicion = await this.getCondicion(
						firebaseData.condicion_estudiante
					);
					const lenguaje = await this.getLenguaje(
						firebaseData.conocimiento_lenguajes
					);
					const habilidadesbla = await this.getHabBla(
						firebaseData.habilidades_blandas
					);
					const interes = await this.getIntereses(firebaseData.intereses);
					this.selectedUser = {
						...userData,
						...firebaseData,
						participacion,
						desNivelA,
						habilidadesprg,
						habilidadesmat,
						condicion,
						lenguaje,
						habilidadesbla,
						interes,
					};
					console.log(this.selectedUser);
					this.originalUser = { ...this.selectedUser };
				} else {
					console.log("No such document in Firebase");
				}
			} catch (error) {
				console.error("Error fetching user data or Firebase data:", error);
			} finally {
				this.isLoading = false; // Actualizar el estado de carga
			}
		},
		async predecir() {
			try {
				this.isLoadingP = false;
				this.isLoadingPrediccion = true; // Mostrar loader

				const ID = localStorage.getItem("userId");
				const response = await axios.get(`http://localhost:3000/users/${ID}`);
				const userData = response.data;
				const firebaseConfig = {
					apiKey: "AIzaSyAdbxgtIebBfPyyIAUNiJIi870Z8DNBOuM",
					authDomain: "ucv-rec-api.firebaseapp.com",
					projectId: "ucv-rec-api",
					storageBucket: "ucv-rec-api.appspot.com",
					messagingSenderId: "355897289132",
					appId: "1:355897289132:web:f0dccd53d0e9d7aeaf7209",
				};

				const firebaseApp = initializeApp(firebaseConfig);
				const db = getFirestore(firebaseApp);
				const userRef = doc(db, "users-ia", userData.IDia);
				const docSnap = await getDoc(userRef);

				if (docSnap.exists()) {
					const firebaseData = docSnap.data();
					const predeccion_send = await axios.post(
						"http://localhost:5000/predecir",
						firebaseData
					);
					const prediccion_res = predeccion_send.data;
					this.infoPrediccion = prediccion_res;
					console.log(this.infoPrediccion);
				}
			} catch (error) {
				console.error("Error al obtener la predicción:", error);
			} finally {
				this.isLoadingPrediccion = false;
				this.isLoadingD = true;
			}
		},
	},
};
