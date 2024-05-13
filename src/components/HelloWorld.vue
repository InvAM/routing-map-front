<template>
	<div class="fondo_login">
		<div class="login-content">
			<div class="login-form">
				<v-form class="my-custom-form form-login" fast-fail @submit.prevent>
					<v-card class="login-card" elevation="8" color="#262626">
						<v-text-field label="Usuario" color="white"></v-text-field>
						<v-text-field
							v-model="password"
							:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
							:rules="[rules.required]"
							:type="show1 ? 'text' : 'password'"
							hint="At least 8 characters"
							label="Código Estudiante"
							name="input-10-1"
							counter
							@click:append="show1 = !show1"></v-text-field>
						<v-btn
							density="compact"
							size="large"
							rounded="xl"
							elevation="20"
							class="mt-2"
							type="submit"
							color="#821902"
							block
							>Ingresar</v-btn
						>
						<v-btn
							density="compact"
							size="large"
							rounded="xl"
							elevation="20"
							class="mt-2"
							type="submit"
							color="#821902"
							block
							>Crear Cuenta Nueva</v-btn
						>
					</v-card>
				</v-form>
			</div>
			<div class="titulo">
				<h1>BIENVENIDO(A) A</h1>
			</div>
			<div class="login-image">
				<v-img src="../assets/img/logoSI.png"></v-img>
			</div>
		</div>
	</div>
</template>

<style>
	.titulo {
		display: flex;
		align-items: flex-start;
		position: absolute;
		left: 58%;
		top: 25%;
		color: white;
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
		background-image: url("../assets/img/Fondo_2.jpg");
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
		max-width: 960px; /* You can adjust this value */
	}

	.login-form {
		flex: 1;
		padding-right: 20px; /* Space between the form and the image */
	}

	.login-image {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.my-custom-form {
		width: 350px;
		margin-top: 90px;
	}

	.login-card {
		width: 100%;
		border-radius: 10px; /* Rounded corners */
		padding: 24px; /* Padding inside the card */
	}

	.v-img {
		max-width: 100%;
	}
</style>
<script src="./Scripts/login.js"></script>
