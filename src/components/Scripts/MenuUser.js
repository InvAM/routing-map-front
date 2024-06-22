export default {
	name: "MenuUser",
	data: () => ({}),
	mounted() {
		this.verificacionLogin();
	},
	methods: {
		login() {
			localStorage.clear();
			sessionStorage.clear();
			this.$router.push("/");
		},

		recuperarContraseña() {
			this.$router.push("/recucontrauser");
		},

		actualizarinf() {
			this.$router.push("/actualizarinfo");
		},
		predic() {
			this.$router.push("/prediccion");
		},
		logout() {
			localStorage.clear();
			sessionStorage.clear();
			this.$router.push("/");
		},
		verificacionLogin() {
			const userid = localStorage.getItem("userId");
			const username = localStorage.getItem("username");
			if (!userid && !username) {
				this.$router.push("/");
			}
		},
	},
};
