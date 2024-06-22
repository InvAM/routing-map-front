import axios from "axios";

import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";
export default {
	name: "Actualizarinfo",
	data() {
		return {
			IDUser: "",
			isSubmitting: false,
			isSubmitting: true,
			isButtonDisabled: true,
			isLoading: true,
			nombre: "",
			genero: "",
			edad: "",
			habilidadProgramacion: "",
			participacionClubTecnologia: "",
			habilidadesBlandas: [],
			añoGraduacion: "",
			ciclo: "",
			notaPromedio: "",
			condicionEstudiante: "",
			intereses: [],
			nivelAcademico: "",
			habilidadMatematicas: "",
			conocimientosLenguajes: [],
			selectedUser: {}, // Inicialmente null
			isLoading: true,
			ciclos: [],
			participaciones: [],
			nivelesacademicos: [],
			habilidadesprg: [],
			habilidadesmat: [],
			condiciones: [],
			lenguajes: [],
			habilidadesbla: [],
			intereses: [],
			generos: [],
			graduaciones: [],
			dialogVisible: false,
			dialogError: false,
			mensaje: "",
			typemsg: "success",
			originalUser: null,
		};
	},
	watch: {
		"selectedUser.genero.Descripcion_Genero"(val) {
			if (val) {
				const genero = this.generos.find((g) => g.Descripcion_Genero === val);
				if (genero) {
					this.selectedUser.IDGenero = genero.IDGenero;
				}
			}
		},
		"selectedUser.graduacion.Descripcion_Graduacion"(val) {
			if (val) {
				const graduacion = this.graduaciones.find(
					(g) => g.Descripcion_Graduacion === val
				);
				if (graduacion) {
					this.selectedUser.IDGraduacion = graduacion.IDGraduacion;
				}
			}
		},
		"selectedUser.ciclo.Descripcion_Ciclo"(val) {
			if (val) {
				const ciclo = this.ciclos.find((g) => g.Descripcion_Ciclo === val);
				if (ciclo) {
					this.selectedUser.IDCiclo = ciclo.IDCiclo;
				}
			}
		},
		"selectedUser.participacion"(val) {
			if (val) {
				const participacion = this.participaciones.find(
					(g) => g.Descripcion_participacion === val
				);
				if (participacion) {
					this.selectedUser.IDParticipacion = participacion.IDParticipacion;
				}
			}
		},
		"selectedUser.desNivelA"(val) {
			if (val) {
				const niveleacademico = this.nivelesacademicos.find(
					(g) => g.Descripcion_NivelAcademico === val
				);
				if (niveleacademico) {
					this.selectedUser.IDNivelAcademico = niveleacademico.IDNivelAcademico;
				}
			}
		},
		"selectedUser.habilidadesprg"(val) {
			if (val) {
				const habilidadprg = this.habilidadesprg.find(
					(g) => g.Descripcion_Habilidadesprg === val
				);
				if (habilidadprg) {
					this.selectedUser.IDHabilidadesprg = habilidadprg.IDHabilidadesprg;
				}
			}
		},
		"selectedUser.habilidadesmat"(val) {
			if (val) {
				const habilidadmat = this.habilidadesmat.find(
					(g) => g.Descripcion_Habilidadesmat === val
				);
				if (habilidadmat) {
					this.selectedUser.IDHabilidadesmat = habilidadmat.IDHabilidadesmat;
				}
			}
		},
		"selectedUser.condicion"(val) {
			if (val) {
				const condicion = this.condiciones.find(
					(g) => g.Descripcion_Condicion === val
				);
				if (condicion) {
					this.selectedUser.IDCondicion = condicion.IDCondicion;
				}
			}
		},
		"selectedUser.lenguaje"(val) {
			if (val && val.length > 0) {
				const selectedIds = val
					.map((descripcion) => {
						const lenguaje = this.lenguajes.find(
							(l) => l.Descripcion_Lenguaje === descripcion
						);
						return lenguaje ? lenguaje.IDLenguaje : null;
					})
					.filter((id) => id !== null);

				this.selectedUser.conocimiento_lenguajes = selectedIds; // Almacena los IDs seleccionados
			} else {
				this.selectedUser.conocimiento_lenguajes = [];
			}
		},
		"selectedUser.habilidadesbla"(val) {
			if (val && val.length > 0) {
				const selectedIds = val
					.map((descripcion) => {
						const habilidad = this.habilidadesbla.find(
							(h) => h.Descripcion_Habilidadesbla === descripcion
						);
						return habilidad ? habilidad.IDHabilidadesbla : null;
					})
					.filter((id) => id !== null);

				this.selectedUser.habilidades_blandas = selectedIds; // Almacena los IDs seleccionados
			} else {
				this.selectedUser.habilidades_blandas = [];
			}
		},
		"selectedUser.interes"(val) {
			if (val && val.length > 0) {
				const selectedIds = val
					.map((descripcion) => {
						const interes = this.intereses.find(
							(i) => i.Descripcion_Interes === descripcion
						);
						return interes ? interes.IDInteres : null;
					})
					.filter((id) => id !== null);

				this.selectedUser.IDInteres = selectedIds; // Almacena los IDs seleccionados
			} else {
				this.selectedUser.IDInteres = [];
			}
		},
	},
	created() {
		this.getGenero();
		this.getGraduacion();
		this.getCiclo();
		this.getParti();
		this.getNivelA();
		this.getHabilidadesprg();
		this.getHabilidadesmat();
		this.getCon();
		this.getLeng();
		this.getHabilidadesbla();
		this.getInteres();
		this.getInfoUser();
	},
	methods: {
		getGraduacion() {
			axios
				.get("http://localhost:3000/graduacion")
				.then((res) => {
					this.graduaciones = res.data;
				})
				.catch((e) => e);
		},
		getCiclo() {
			axios
				.get("http://localhost:3000/ciclo")
				.then((res) => {
					this.ciclos = res.data;
				})
				.catch((error) => e);
		},
		getParti() {
			axios
				.get("http://localhost:3000/participacion")
				.then((res) => {
					this.participaciones = res.data;
				})
				.catch((e) => e);
		},
		getNivelA() {
			axios
				.get("http://localhost:3000/nivelacademico")
				.then((res) => {
					this.nivelesacademicos = res.data;
				})
				.catch((r) => r);
		},
		getHabilidadesprg() {
			axios
				.get("http://localhost:3000/habilidadesprg")
				.then((res) => {
					this.habilidadesprg = res.data;
				})
				.catch((r) => r);
		},
		getHabilidadesmat() {
			axios
				.get("http://localhost:3000/habilidadesmat")
				.then((res) => {
					this.habilidadesmat = res.data;
				})
				.catch((r) => r);
		},
		getCon() {
			axios
				.get("http://localhost:3000/condicion")
				.then((res) => {
					this.condiciones = res.data;
				})
				.catch((r) => r);
		},
		getLeng() {
			axios
				.get("http://localhost:3000/lenguaje")
				.then((res) => {
					this.lenguajes = res.data;
				})
				.catch((r) => r);
		},
		getHabilidadesbla() {
			axios
				.get("http://localhost:3000/habilidadesbla")
				.then((res) => {
					this.habilidadesbla = res.data;
				})
				.catch((r) => r);
		},
		getInteres() {
			axios
				.get("http://localhost:3000/interes")
				.then((res) => {
					this.intereses = res.data;
				})
				.catch((r) => r);
		},
		getGenero() {
			try {
				axios.get("http://localhost:3000/genero").then((res) => {
					this.generos = res.data;
				});
			} catch (error) {
				return []; // En caso de error, devuelve un array vacío
			}
		},
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

		saveChanges() {
			this.isSubmitting = true;
			this.isButtonDisabled = true;
			this.isLoading = true;
			const cambios = {};
			for (const key in this.selectedUser) {
				if (this.selectedUser[key] !== this.originalUser[key]) {
					cambios[key] = this.selectedUser[key];
				}
			}
			// Agregar el IDGenero al objeto de cambios si ha cambiado
			if (this.selectedUser.IDGenero !== this.originalUser.IDGenero) {
				cambios["IDGenero"] = this.selectedUser.IDGenero;
			}
			if (this.selectedUser.IDGraduacion !== this.originalUser.IDGraduacion) {
				cambios["IDGraduacion"] = this.selectedUser.IDGraduacion;
			}
			if (this.selectedUser.IDCiclo !== this.originalUser.IDCiclo) {
				cambios["IDCiclo"] = this.selectedUser.IDCiclo;
			}
			if (
				this.selectedUser.IDParticipacion !== this.originalUser.IDParticipacion
			) {
				cambios["IDParticipacion"] = this.selectedUser.IDParticipacion;
			}
			if (
				this.selectedUser.IDNivelAcademico !==
				this.originalUser.IDNivelAcademico
			) {
				cambios["IDNivelAcademico"] = this.selectedUser.IDNivelAcademico;
			}
			if (
				this.selectedUser.IDHabilidadesprg !==
				this.originalUser.IDHabilidadesprg
			) {
				cambios["IDHabilidadesprg"] = this.selectedUser.IDHabilidadesprg;
			}
			if (
				this.selectedUser.IDHabilidadesmat !==
				this.originalUser.IDHabilidadesmat
			) {
				cambios["IDHabilidadesmat"] = this.selectedUser.IDHabilidadesmat;
			}
			if (this.selectedUser.IDCondicion !== this.originalUser.IDCondicion) {
				cambios["IDCondicion"] = this.selectedUser.IDCondicion;
			}
			if (this.selectedUser.IDLenguaje !== this.originalUser.IDLenguaje) {
				cambios["IDLenguaje"] = this.selectedUser.IDLenguaje;
			}
			if (
				this.selectedUser.IDHabilidadesbla !==
				this.originalUser.IDHabilidadesbla
			) {
				cambios["IDHabilidadesbla"] = this.selectedUser.IDHabilidadesbla;
			}
			if (this.selectedUser.IDInteres !== this.originalUser.IDInteres) {
				cambios["IDInteres"] = this.selectedUser.IDInteres;
			}

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
			var data = {
				edad: this.selectedUser.Edad,
				nivel_academico: this.selectedUser.IDNivelAcademico,
				habilidad_programacion: this.selectedUser.IDHabilidadesprg,
				habilidad_matematicas: this.selectedUser.IDHabilidadesmat,
				participacion_club_tecnologia: this.selectedUser.IDParticipacion,
				nota_promedio: this.selectedUser.nota_promedio,
				condicion_estudiante: this.selectedUser.IDCondicion,
				conocimiento_lenguajes: this.selectedUser.conocimiento_lenguajes,
				habilidades_blandas: this.selectedUser.habilidades_blandas,
				intereses: this.selectedUser.IDInteres,
			};
			const userId = this.selectedUser.IDia;
			console.log("ID IA", userId);
			for (const key in data) {
				if (
					data[key] === "" ||
					(Array.isArray(data[key]) && data[key].length === 0)
				) {
					this.mensaje = `Faltan campos por completar`;
					this.typemsg = "error";
					this.dialogError = true;
					this.isSubmitting = false;
					this.isButtonDisabled = false;
					this.isLoading = false;
					return;
				}
			}

			try {
				setDoc(doc(db, "users-ia", userId), data);
			} catch (error) {
				this.mensaje = "Error al agregar el documento a Firebase";
				this.typemsg = "error";
				this.dialogError = true;
				this.isSubmitting = false;
				this.isButtonDisabled = false;
				this.isLoading = false;
				return;
			} finally {
				this.isSubmitting = false; // Termina el envío, sea exitoso o con error
			}
			var data_backend = {
				Nombre: this.selectedUser.Nombre,
				Apellido: this.selectedUser.Apellido,
				DNI: this.selectedUser.DNI,
				Edad: this.selectedUser.Edad,
				IDGenero: this.selectedUser.IDGenero,
				IDGraduacion: this.selectedUser.IDGraduacion,
				IDCiclo: this.selectedUser.IDCiclo,
			};
			for (const key in data_backend) {
				if (
					data_backend[key] === "" ||
					(Array.isArray(data_backend[key]) && data_backend[key].length === 0)
				) {
					this.mensaje = `Faltan campos por completar`;
					this.typemsg = "error";
					this.dialogError = true;
					this.isSubmitting = false;
					this.isButtonDisabled = false;
					this.isLoading = false;
					return;
				}
			}
			try {
				const ID = localStorage.getItem("userId");
				const response = axios.patch(
					`http://localhost:3000/users/${ID}`,
					data_backend
				);
				this.mensaje = `Se registró correctamente al cliente`;
				this.typemsg = "success";
				this.dialogVisible = true;
			} catch (error) {
				this.mensaje = "Error al enviar datos al backend";
				this.typemsg = "error";
				this.dialogError = true;
			} finally {
				this.isSubmitting = false;
				this.isButtonDisabled = false;
				this.isLoading = false;
			}
		},
		regresar() {
			// Lógica para regresar a la página anterior
			this.$router.push("/menuuser");
		},
		closeEditDialog() {
			this.editDialog = false;
		},
		aceptar() {
			this.dialogVisible = false;
			window.location.reload();
		},
		cerrar() {
			this.dialogError = false;
		},
	},
};
