import axios from "axios";

export default {
	name: "HelloWorld",

	data: () => ({
		nombres: [
			{ text: "Miguel", apellido: "Arone" },
			{ text: "Freddy", apellido: "Pachas" },
			{ text: "Carlos", apellido: "Alcedo" },
		],
		show1: false,
		show2: true,
		password: "ExamplePassword",
		rules: {
			required: (value) => !!value || "Ingresar Contraseña.",
			min: (v) => v.length >= 8 || "Min 8 characters",
			//emailMatch: () => `The email and password you entered don't match`,
		},
	}),

	methods: {
		enviarInformacion() {
			if (!this.nombres || this.nombres.length === 0) {
				alert("No hay datos para enviar.");
				return;
			}

			const url = "http://localhost:8000/ia/";
			const data = {
				nombres: this.nombres.map((persona) => ({
					nombre: persona.text,
					apellido: persona.apellido,
				})),
			};
			axios
				.post(url, data)
				.then((response) => {
					alert(
						"Información enviada correctamente: " +
							JSON.stringify(response.data)
					);
				})
				.catch((error) => {
					alert("Error al enviar la información: " + error.message);
				});
		},
	},
};
