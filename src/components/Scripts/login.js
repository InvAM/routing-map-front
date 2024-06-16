import axios from "axios";

export default {
	name: "HelloWorld",

	data: () => ({
		username: "",
		password: "",
		mensajeError: "",
		mensaje: "",
		dialogError: false,
		typemsg: "",
		credenciales: [],
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
		cerrar() {
			this.dialogError = false;
		},
		crear_cuenta() {
			this.$router.push("/crearcuenta");
		},
		obtenerCredenciales() {
			axios
				.get("http://localhost:3000/users")
				.then((res) => {
					this.credenciales = res.data;
				})
				.catch((error) => e);
		},
		verificar() {
			if (this.username !== "" && this.password !== "") {
				const credencial = this.credenciales.some(
					(credencial) =>
						credencial.username !== this.username ||
						credencial.password !== this.password
				);
				if (credencial) {
					(this.mensaje = "Verifique su usuario y contraseña"),
						(this.dialogError = true);
					this.typemsg = "error";
				}
			}
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
					await axios.post("http://localhost:3000/users/validate", data);
					this.$router.push("/registrarusuario");
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
