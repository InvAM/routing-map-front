<template>
	<div class="fondo_login">
		<div class="login-content">
			<div class="login-form">
				<v-form class="my-custom-form form-login" >
                    <v-card class="login-card" 
                            elevation="2" 
                            color="rgba(10, 9, 9, 0.97)" 
                            width="600" 
                            height="960">

                            <v-text-field 
                            class="usuario" 
                            label="Nombre de Usuario"
                            ></v-text-field>

                            <v-text-field
                            class="contra"
							v-model="password"
							:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
							:rules="[rules.required]"
							:type="show1 ? 'text' : 'password'"
							hint="At least 8 characters"
							label="Contraseña"
							name="input-10-1"
							counter></v-text-field>
						<v-btn
							density="compact"
							elevation="20"
							class="btn-ingresar"
							type="submit"
							width="290" 
                            height="52"
                            color="rgba(130, 25, 2, 1)"
							>INGRESAR</v-btn
						>
                        <div class="olvidaste">
				        <h1>¿Olvidaste tu contraseña?</h1>
			            </div>

                        <div class="registrate">
				        <h1>¿No tienes una cuenta? Registrate aquí</h1>
			            </div>
					</v-card>

				</v-form>
			</div>
			<div class="bien">
				<h1>Bien</h1>
			</div>
            <div class="venido">
				<h1>venido</h1>
			</div>
			<div class="login-image">
				<v-img src="../assets/img/logoSI.png"></v-img>
			</div>
		</div>
	</div>
</template>

<style>
	.bien {
		display: flex;
		align-items: flex-start;
		position: absolute;
		left: 78.3%;
		top: 18%;
		color: white;
        font-size: 16px;
        font-weight: bold;
        font-family: 'Arial Black', sans-serif; 
	}
	.venido {
		display: flex;
		align-items: flex-start;
		position: absolute;
		left: 82.4%;
		top: 18%;
		color: rgba(0, 143, 255, 1);
        font-size: 16px;
        font-weight: bold;
        font-family: 'Arial Black', sans-serif; 
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
		background-image: url("../assets/img/fondoloadmin.png");
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

    .usuario{
        margin-top: 200PX;
        color: white;
        width: 400px;
        height: 110px;
        margin-left: 15px;
    }

    .contra{
        margin-top: 0PX;
        color: white;
        width: 400px;
        height: 110px;
        margin-left: 15px;
    }
    .btn-ingresar{
        left: 60px;
        border-radius: 30px;
        font-size: 16px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
    }

    .olvidaste{
        font-family:Verdana;
        font-weight: lighter;
        display: flex;
		align-items: flex-start;
		position: absolute;
		left: 28%;
		top: 60.2%;
		color: rgba(255, 245, 245, 1);
        font-size: 8px;
    }


    .registrate{
        font-family:Verdana;
        font-weight: lighter;
        display: flex;
		align-items: flex-start;
		position: absolute;
		left:17%;
		top: 24%;
		color: rgba(255, 245, 245, 1);
        font-size: 7px;
    }
	.login-card {
		padding: 85PX; /* Padding inside the card */
        left: 825px;
        border-radius: 0px; 
	}

	.v-img {
		right: 550px;
        width: 660px;
        top: 7%;
	}
</style>
<script src="./Scripts/login.js"></script>

