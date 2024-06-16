<template>
    <div class="fondo_login">
        <v-form class="cuadro1" fast-fail @submit.prevent>
			<v-card 
                class="login-card" 
                elevation="2" 
                color="rgba(146, 139, 139, 0.70)" 
                width="1400" 
                height="700"
                >					
                <v-btn
                margin-right="50"
                elevation="8"
                class="btn-login"
                rounded="ini"
                width="350" 
                height="150"
                color="rgba(217, 217, 217, 1)"
                >
                <v-img class="home-icon" src="../assets/img/home.png"></v-img>
                <span class="btn-text">LOGIN</span>
                </v-btn>
                
                <v-btn
                class="btn-actualizar"
                rounded="ini"
                width="350" 
                height="150"
                color="rgba(217, 217, 217, 1)"
                >
                <v-img class="home-icon" src="../assets/img/actualizar.png"></v-img>
                <span class="btn-text">ACTUALIZAR INFORMACIÓN</span>
                </v-btn>

                <v-btn
                class="btn-predic"
                rounded="ini"
                width="350" 
                height="150"
                color="rgba(217, 217, 217, 1)"
                >
                <v-img class="home-icon" src="../assets/img/prediccion.png"></v-img>
                <span class="btn-text">PREDICCIÓN</span>
                </v-btn>

                <v-btn
                class="btn-recucontra"
                rounded="ini"
                width="350" 
                height="150"
                color="rgba(217, 217, 217, 1)"
                >
                <v-img class="home-icon" src="../assets/img/recucontra.png"></v-img>
                <span class="btn-text">RECUPERAR CONTRASEÑA</span>
                </v-btn>

                <v-btn
                class="btn-repo"
                rounded="ini"
                width="350" 
                height="150"
                color="rgba(217, 217, 217, 1)"
                >
                    <v-img class="home-icon" src="../assets/img/reporte.png"></v-img>
                    <span class="btn-text">REPORTES</span>
                </v-btn>

		    </v-card>
        </v-form>
    </div>
</template>

<style>
.fondo_login {
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
        left:-10px;	
}
.btn-login{
    left: 120px;
    top: 130px;
    border-radius: 20px; /* Rounded corners */

}

.btn-actualizar{
    left: 140px;
    top: 130px;
    border-radius: 20px; /* Rounded corners */

}



.btn-predic{
    left: 160px;
    top: 130px;
    border-radius: 20px; /* Rounded corners */

}

.btn-recucontra{
    left: 300px;
    top: 155px;
    border-radius: 20px; /* Rounded corners */

}

.btn-text {
    font-size: 16px;
    font-weight: bold;
    font-family: 'Arial Black', sans-serif; /* Asegúrate de cargar esta fuente en tu proyecto */
    margin-top: 10px; /* Espacio entre la imagen y el texto, ajusta según sea necesario */
}

.btn-repo{
    left: 320px;
    top: 155px;
    border-radius: 20px; /* Rounded corners */

}

.home-icon {
  width: 65px;
  padding-bottom: 23px;
}

</style>
<script >
	export default {
		name: "MenuUser",
	};

</script>
