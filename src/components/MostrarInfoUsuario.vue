<template>
	<div class="contenido">
		<v-container style="margin-left: 545px">
			<v-card class="user-info-card">
				<v-card-subtitle>
					<v-row>
						<v-col cols="14" class="avatar-col">
							<v-avatar size="40">
								<v-icon size="40">mdi-account</v-icon>
							</v-avatar>
						</v-col>
					</v-row>
					<v-card-title class="headline">Informacion General</v-card-title>
					<v-row class="info-row">
						<v-col cols="6" class="info-label">Nombres y Apellidos:</v-col>
						<v-col cols="6" class="info-value"
							>Gina Nahil Cuenca Bonifacio</v-col
						>
					</v-row>
					<v-row class="info-row">
						<v-col cols="6" class="info-label">Género:</v-col>
						<v-col cols="6" class="info-value">Femenino</v-col>
					</v-row>
					<v-row class="info-row">
						<v-col cols="6" class="info-label">Edad:</v-col>
						<v-col cols="6" class="info-value">20</v-col>
					</v-row>
					<v-row class="info-row">
						<v-col cols="6" class="info-label">Universidad:</v-col>
						<v-col cols="6" class="info-value">Universidad César Vallejo</v-col>
					</v-row>
					<v-row class="info-row">
						<v-col cols="6" class="info-label">Carrera:</v-col>
						<v-col cols="6" class="info-value">Ingenieria de Sistemas</v-col>
					</v-row>
					<v-row class="info-row">
						<v-col cols="6" class="info-label">Año de Graduación:</v-col>
						<v-col cols="6" class="info-value">2020</v-col>
					</v-row>
					<v-row class="info-row">
						<v-col cols="6" class="info-label">Nivel académico:</v-col>
						<v-col cols="6" class="info-value">Ingeniería de Sistemas</v-col>
					</v-row>
          <v-row class="info-row">
						<v-col cols="6" class="info-label">Condición del Estudiante:</v-col>
						<v-col cols="6" class="info-value">Bueno</v-col>
					</v-row>
          <v-row class="info-row">
						<v-col cols="6" class="info-label">Habilidades:</v-col>
						<v-col cols="6" class="info-value">Matemáticas</v-col>
					</v-row>
          <v-row class="info-row">
						<v-col cols="6" class="info-label">Intereses:</v-col>
						<v-col cols="6" class="info-value">Ingenieía de Sistemas</v-col>
					</v-row>
          <v-row class="info-row">
						<v-col cols="6" class="info-label">Áreas de Estudio:</v-col>
						<v-col cols="6" class="info-value">Ingeniería de Sistemas</v-col>
					</v-row>
          <v-row class="info-row">
						<v-col cols="6" class="info-label">Nota Promedio:</v-col>
						<v-col cols="6" class="info-value">04</v-col>
					</v-row>
          <v-row class="info-row">
						<v-col cols="6" class="info-label">Habilidades Blandas:</v-col>
						<v-col cols="6" class="info-value">Ingeniería de Sistemas</v-col>
					</v-row>
          <v-row class="info-row">
						<v-col cols="6" class="info-label">Habilidad en Programación:</v-col>
						<v-col cols="6" class="info-value">Java básico</v-col>
					</v-row>
          <v-row class="info-row">
						<v-col cols="6" class="info-label">Habilidad en Matemáticas:</v-col>
						<v-col cols="6" class="info-value">Secundia</v-col>
					</v-row>
				</v-card-subtitle>
				<v-card-actions>
					<v-btn
						color="FF4343"
						size="large"
						class="v-boton"
						rounded="xl"
						elevation="20"
						@click="editInfo"
						>Editar Información</v-btn
					>
					<v-btn
						color="error"
						size="large"
						rounded="xl"
						class="v-boton"
						elevation="20"
						@click="logout"
						>Cerrar Sesión</v-btn
					>
				</v-card-actions>
			</v-card>
		</v-container>
	</div>
</template>

<style>
	/* FONDO */
	.contenido {
		/* Puedes ajustar las propiedades según tus necesidades */
		background-image: url("../assets/fondofinal.jpg");
		background-size: cover;
		background-position: center;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	.user-info-card {
		max-width: 740px;
		padding: 25px;
		background-color: #fff;
		border-radius: 50px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		
	}
	.headline {
		text-align: center;
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 5px;
	}
	.avatar-col {
		display: flex;
		justify-content: center;
		margin-top: 5px;
	}
	.info-row {
		margin-bottom: 4px;
	}
	.info-label {
		font-weight: bold;
		color: #333;
	}
	.info-value {
		color: #666;
	}
	.v-boton {
		font-weight: bold;
		margin-left: 100px;
    margin-bottom: 5px;
	}
</style>



<script>
	export default {
		name: "MostrarInfoUsuario",
	};
</script>