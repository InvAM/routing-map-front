<template>
	<div class="fondo_login">
		<div class="login-content">
			<div class="login-form">
				<v-form class="my-custom-form form-login" fast-fail @submit.prevent>
					<v-card class="login-card" 
          margin-right="60"
          elevation="8"
          rounded="cajas"
          style="margin-top: 10px"  color="#262626">
						
				<v-img  class="logo-icon" src="../assets/img/logoSI.png"></v-img>
			
						
						<v-text-field label="Usuario" color="white"></v-text-field>
                        <v-text-field v-model="password"
							:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
							:rules="[rules.required]"
							:type="show1 ? 'text' : 'password'"
							hint="At least 8 characters" 
                            label="Contraseña" color="white"
                            @click:append="show1 = !show1"></v-text-field>

                            <v-text-field v-model="password"
							:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
							:rules="[rules.required]"
							:type="show1 ? 'text' : 'password'"
							hint="At least 8 characters" 
                            label="Confirmar Contraseña" color="white"
                            ></v-text-field>
						
					
						<v-btn
							density="compact"
							size="large"
							rounded="xl"
							elevation="20"
							class="mt-2"
							type="submit"
							color="#821902"
							block
							>Crear Cuenta</v-btn
						>
					</v-card>
				</v-form>
			</div>
			
			
		</div>
	</div>
</template>
<style> 
.titulo {
		display: flex;
		align-items: flex-start;
		position: absolute;
		left:40%;
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
		max-width: 660px; /* You can adjust this value */
	}

	.login-form {
		flex: 1;
		padding-right: 60px; /* Space between the form and the image */
		margin-left: 60px;
	}

	.login-image {
		align-items: center;
		margin-left: -65px;
		left: 40%;
		margin-top: -80px;


	}

	.my-custom-form {
		width: 350px;
		margin-top: 35px;
	}

	.login-card {
		margin-left: 75px;
		width: 100%;
		border-radius: 30px; /* Rounded corners */
		padding: 30px; /* Padding inside the card */
	}

	.v-img {
		max-width: 70%;
		left: 70px;

	}
	.logo-icon{
		margin:-30px;
		width: 260px;
		padding-bottom: 0px;
	}
</style>
<script src="./Scripts/login.js"></script>