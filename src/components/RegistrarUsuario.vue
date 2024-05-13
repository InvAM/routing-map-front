<template>
	<div class="contenido">
		<v-sheet class="user_data" width="480" height="400">
			<v-form class="cuadro1" fast-fail @submit.prvent>
				<v-card
					class="mx-auto pa-12 pb-10"
					margin-right="80"
					elevation="8"
					rounded="xl"
					height="450"
					color="#e8e1fa">
					<v-img class="user_icon" src="../assets/usuario.png"></v-img>
					<v-text class="text-center">Nombres y Apellidos</v-text>
					<v-text-field label=""></v-text-field>

					<v-text class="text-center">Género</v-text>
					<v-text-field label=""></v-text-field>

					<v-text class="text-center">Edad</v-text>
					<v-text-field label=""></v-text-field>
				</v-card>
			</v-form>
		</v-sheet>

		<v-sheet class="university_data" width="480" height="400">
			<v-form class="cuadro2" fast-fail @submit.prevent>
				<v-card
					class="pa-10 pb-8"
					margin-right="100"
					elevation="8"
					rounded="xl"
					height="450"
					style="margin-top: -300px"
					color="#e8e1fa">
					<v-img
						class="mx-auto"
						margin-top="5"
						margin-down="200"
						max-width="60"
						src="../assets/sombrero.png"></v-img>
					<v-text class="text-center">Universidad</v-text>
					<v-text-field label=""></v-text-field>

					<v-text class="text-center">Carrera</v-text>
					<v-text-field label=""></v-text-field>

					<v-text class="text-center">Año de Graduación</v-text>
					<v-text-field label=""></v-text-field>
				</v-card>
			</v-form>
		</v-sheet>
	</div>
</template>

<style scoped>
	.contenido {
		/* Puedes ajustar las propiedades según tus necesidades */
		background-image: url("../assets/fondito.jpg");
		background-size: cover; /* Para ajustar el tamaño de la imagen al contenedor */
		background-position: center; /* Para centrar la imagen */
		width: 100vw;
		height: 100vh;
	}
	.user_data {
		background: none;
	}
	.university_data {
		margin-left: 554px;
		background: none;
	}
	.user_icon {
		margin: auto;
		width: 40px;
		padding-bottom: 23px;
	}
	.text-center {
		display: flex;
		justify-content: center; /* Centra el contenido horizontalmente */
	}
</style>

<script>
	export default {
		name: "RegistrarUsuario",
	};
</script>
