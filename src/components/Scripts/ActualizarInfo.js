export default {
	name: "Actualizarinfo",
	data() {
	  return {
		nombre: '',
		genero: '',
		edad: '',
		habilidadProgramacion: '',
		participacionClubTecnologia: '',
		habilidadesBlandas: [],
		añoGraduacion: '',
		ciclo: '',
		notaPromedio: '',
		condicionEstudiante: '',
		intereses: [],
		nivelAcademico: '',
		habilidadMatematicas: '',
		conocimientosLenguajes: [],
	  };
	},
	methods: {
	  actualizarInformacion() {
	  },
	  regresar() {
		// Lógica para regresar a la página anterior
		this.$router.push("/menuuser");
	  },
	},
  };


