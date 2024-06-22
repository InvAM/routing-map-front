import axios from "axios";

export default {
	name: "HelloWorld",

	data: () => ({
		username: "",
		password: "",
		mensaje: "",
		dialogError: false,
		typemsg: "",
		credenciales: [],
		visible: false,
		mensajeError: "",
		rules: {
			required: (value) => !!value || "Ingresar Contraseña.",
			min: (v) => v.length >= 8 || "Min 8 characters",
			//emailMatch: () => `The email and password you entered don't match`,
		},
	}),

	mounted() {
		this.obtenerCredenciales();
	},

	methods: {
		passwordRule(value) {
			return (
				value.length >= 6 || "La contraseña debe tener al menos 6 caracteres"
			);
		},
		cerrar() {
			this.dialogError = false;
		},
		olvidaste_contra() {
			this.$router.push("/recucontrauser");
		},
		obtenerCredenciales() {
			axios
				.get("http://localhost:3000/credenciales")
				.then((res) => {
					this.credenciales = res.data;
				})
				.catch((error) => e);
		},
		verificar() {
			const credencial = this.credenciales.find(
				(credencial) =>
					credencial.username === this.username &&
					credencial.password === this.password
			);
			if (!credencial) {
				this.mensaje = "Verifique su usuario y contraseña";
				this.dialogError = true;
				this.typemsg = "error";
				console.log("Credenciales incorrectas");
			} else {
				console.log("Credenciales correctas");
			}
			return credencial;
		},
		async iniciarSesion() {
			this.verificar();
			var data = {
				username: this.username,
				password: this.password,
			};
			if (this.username === "" || this.password === "") {
				console.log(data.username);
				console.log(data.password);
				this.mensaje = "Faltan completar datos";
				this.typemsg = "error";
				this.dialogError = true;
			} else {
				try {
					const response = await axios.post(
						"http://localhost:3000/credenciales/validar",
						data
					);
					const user = response.data;
					localStorage.setItem("userId", user.IDUser);
					localStorage.setItem("username", user.username);

					this.$router.push("/menu");
				} catch (error) {
					if (error.response.data.errors) {
						const errors = error.response.data.errors;
						if (errors.username) {
							this.mensajeError =
								"El nombre de usuario ingresado es incorrecto";
						}
						if (errors.password) {
							this.mensajeError = "La contraseña ingresada es incorrecta";
						}
					}
				}
			}
		},
	},
};
