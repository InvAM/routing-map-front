<template class="fondo_menu">
	<v-app-bar
		style="
			background: rgb(228, 0, 0);
			background: linear-gradient(
				90deg,
				rgba(228, 0, 0, 1) 3%,
				rgba(0, 40, 85, 1) 5%,
				rgba(228, 0, 0, 1) 10%,
				rgba(29, 35, 74, 1) 13%,
				rgba(228, 0, 0, 1) 17%,
				rgba(0, 40, 85, 1) 20%
			);
		"
		dense
		dark
		height="80">
		<v-container fluid>
			<v-row align="center" justify="end" no-gutters>
				<v-col cols="auto">
					<v-speed-dial location="left center" transition="slide-x-transition">
						<template v-slot:activator="{ props: activatorProps }">
							<v-fab
								v-bind="activatorProps"
								size="large"
								icon="mdi-account"
								style="margin-right: 80px"></v-fab>
						</template>

						<v-btn key="1" icon="mdi-logout" @click="logout"></v-btn>
					</v-speed-dial>
				</v-col>
				<v-col cols="auto">
					<v-img src="" max-height="100" max-width="50"></v-img>
				</v-col>
			</v-row>
		</v-container>
	</v-app-bar>
	<div class="fondo_menu">
		<v-form class="cuadro1" fast-fail @submit.prevent>
			<v-card
				class="login-card"
				elevation="2"
				color="rgba(146, 139, 139, 0.70)"
				width="1400"
				height="700">
				<v-btn
					margin-right="50"
					elevation="8"
					class="btn-login"
					rounded="ini"
					width="350"
					height="150"
					color="rgba(217, 217, 217, 1)"
					@click="login">
					<span class="btn-text">LOGIN</span>
					<v-img class="home-icon" src="../assets/img/home.png"></v-img>
				</v-btn>

				<v-btn
					class="btn-actualizar"
					rounded="ini"
					width="350"
					height="150"
					color="rgba(217, 217, 217, 1)"
					@click="actualizarinf">
					<span class="btn-text">ACTUALIZAR INFORMACIÓN</span>
					<v-img
						class="home-icon"
						src="../assets/img/menuactualizar.png"></v-img>
				</v-btn>

				<v-btn
					class="btn-predic"
					rounded="ini"
					width="350"
					height="150"
					color="rgba(217, 217, 217, 1)"
					@click="predic">
					<span class="btn-text">PREDICCIÓN</span>
					<v-img class="home-icon" src="../assets/img/prediccion.png"></v-img>
				</v-btn>

				<v-btn
					class="btn-recucontra"
					rounded="ini"
					width="350"
					height="150"
					color="rgba(217, 217, 217, 1)"
					@click="recuperarContraseña">
					<span class="btn-text">RECUPERAR CONTRASEÑA</span>
					<v-img class="home-icon" src="../assets/img/recucontra.png"></v-img>
				</v-btn>
			</v-card>
		</v-form>
	</div>
	<v-footer color="#233559" app height="60">
		<v-row align="center" justify="center">
			<v-col cols="12" class="text-subtitle-2 text-center">
				&copy; 2024 Routing Map Todos los derechos reservados.
			</v-col>
		</v-row>
	</v-footer>
</template>

<style>
	.fondo_menu {
		background-image: url("../assets/img/fondofinal.jpg");
		background-size: cover;
		background-position: center;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.login-card {
		border-radius: 10px; /* Rounded corners */
		padding: 30px; /* Padding inside the card */
		left: -10px;
	}
	.btn-login {
		left: 303px;
		top: 147px;
		border-radius: 30px; /* Rounded corners */
	}

	.btn-actualizar {
		left: 330px;
		top: 147px;
		border-radius: 30px; /* Rounded corners */
	}

	.btn-predic {
		left: -19px;
		top: 322px;
		border-radius: 30px; /* Rounded corners */
	}

	.btn-recucontra {
		left: 303px;
		top: 174px;
		border-radius: 30px; /* Rounded corners */
	}

	.btn-text {
		font-size: 16px;
		font-weight: bold;
		font-family: "Arial Black", sans-serif; /* Asegúrate de cargar esta fuente en tu proyecto */
		margin-top: 10px; /* Espacio entre la imagen y el texto, ajusta según sea necesario */
	}

	.btn-repo {
		left: 320px;
		top: 155px;
		border-radius: 30px; /* Rounded corners */
	}

	.home-icon {
		width: 45px;
		padding-bottom: 23px;
	}
</style>
<script src="./Scripts/MenuUser.js"></script>
