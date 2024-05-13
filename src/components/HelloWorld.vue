<template>
	<div class="fondo_login">
		<v-sheet
			class="mx-auto pt-10 pl-10 pr-10 pb-10 form-login"
			width="480"
			height="400">
			<v-form class="my-custom-form" fast-fail @submit.prevent  >
				<v-img
					class="mx-auto my-6"
					max-width="228"
					src="../assets/img/logoSI.png"></v-img>
				<v-card
			
					class="mx-auto pa-12 pb-8"
					margin-right= "100"
					elevation="8"
					max-width="500"
					rounded="xl"
					max-height="500"
					height="300"
					color="#262626"
					
					>
					<v-text-field label="Usuario" color="white" ></v-text-field >

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

					<v-btn density="compact" size="large" rounded="xl" elevation="20" class="mt-2" type="submit" color="#821902" block
						>Ingresar</v-btn
					>
					<v-btn density="compact" size="large" rounded="xl" elevation="20"  class="mt-2" type="submit" color="#821902" block
					>Crear Cuenta Nueva</v-btn
					>
				</v-card>
			</v-form>
		</v-sheet>
	</div>
</template>
<style>
	body,
	html {
		margin: 0;
		padding: 0;
		height: 100%;
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
	}

	.form-login {
		margin-top: 5%;
		background: none;
		
	}
	.my-custom-form{
		margin-right: 10px;


	}
	
	
	
	
</style>
<script src="./Scripts/login.js"></script>
