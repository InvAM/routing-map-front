import axios from 'axios'
export default {
    name: "RecuperarContraUser",
    data:() => ({
		username: "",
		password: "",
		password2:"",
		visible: false,
	}),
    methods: {
		passwordRule(value) {
			return value.length >= 6 || 'La contraseña debe tener al menos 6 caracteres';
		},
		confirmPasswordRule(value) {
			return value === this.password || 'Las contraseñas no coinciden';
		},
		updatePassword() {
			if (this.password === this.password2) {
				const userId = localStorage.getItem('userId');
				if (!userId) {
					alert('No se pudo obtener la información del usuario');
					return;
				}
		
				const data = {
					password: this.password
				};
		
				axios.patch(`http://localhost:3000/credenciales/${userId}`, data)
					.then(() => {
						alert('Contraseña actualizada correctamente');
					})
					.catch(error => {
						console.error('Error al actualizar la contraseña', error);
						alert('Hubo un error al actualizar la contraseña');
					});
			} else {
				alert('Las contraseñas no coinciden');
			}
		},
		regresar2() {
			this.$router.push("/");
		}
		
	},


}