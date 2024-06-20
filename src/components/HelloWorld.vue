<template>
	<div class="fondo_login">
		<div class="login-content">
			<div class="login-form">
				<v-form class="my-custom-form form-login" fast-fail @submit.prevent>
					<v-card class="login-card" elevation="8" color="#262626">
						<v-text-field v-model="username" label="Usuario" color="white"></v-text-field>
						<v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
							:rules="[rules.required]" :type="show1 ? 'text' : 'password'" hint="At least 8 characters"
							label="Código Estudiante" name="input-10-1" counter
							@click:append="show1 = !show1"></v-text-field>
						<v-btn density="compact" size="large" rounded="xl" elevation="20" class="mt-2" type="submit"
							color="#821902" @click="iniciarSesion" block>Ingresar</v-btn>
						<v-btn  
						class="btn-olvidaste" 
						block 
						@click="olvidaste_contra"
						elevation="0">
						¿Olvidaste tu contraseña?</v-btn>
					</v-card>
					<v-row v-if="mensajeError" align="center">
						<v-col cols="12">
							<v-alert type="error" class="mt-4">
								{{ mensajeError }}
							</v-alert>
						</v-col>
					</v-row>
				</v-form>
			</div>
			<div class="titulo">
				<h1>BIENVENIDO A</h1>
			</div>
			<div class="login-image">
				<v-img src="../assets/img/logoSI.png"></v-img>
			</div>
		</div>
		<v-dialog v-model="dialogError" :width="500">
			<v-card color="#ec4a4a">
				<v-card-title>
					<span class="mx-auto" style="color: white"> ¡Verifique! </span>
				</v-card-title>
				<v-card-text>
					<v-alert v-if="mensaje !== ''" color="white" :type="typemsg" outlined>{{ mensaje }}</v-alert>
				</v-card-text>
				<v-card-actions style="display: flex; justify-content: center">
					<v-btn style="background-color: #033076; color: #ffffff" @click="cerrar">
						Cerrar
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<style>
.titulo {
	display: flex;
	align-items: flex-start;
	position: absolute;
	left: 56.2%;
	top: 29%;
	color: white;
	font-size: 18px;;
	width: bold;
	font-family:'Arial Black';
}

body,
html {
	margin: 0;
	padding: 0;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.fondo_login {
	background-image: url("../assets/img/fondolouser.png");
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

.login-content {
	display: flex;
	width: 100%;
	max-width: 960px;
	/* You can adjust this value */
}

.login-form {
	flex: 1;
	padding-right: 20px;
	/* Space between the form and the image */
}

.login-image {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}

.my-custom-form {
	width: 350px;
	margin-top: 35px;
}

.btn-olvidaste{
	background-color: transparent !important; /* Elimina el fondo */
	box-shadow: none; /* Elimina la sombra */
	color: inherit; /* Mantiene el color del texto */
	font-size: 12px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
	top:15px;

}
.login-card {
	width: 100%;
	border-radius: 30px;
	/* Rounded corners */
	padding: 30px;
	top: 15px;
	/* Padding inside the card */
}

.v-img {
	left: 10px;
	width: 400px;
	top: -3%;

}
</style>
<script src="./Scripts/login.js"></script>
