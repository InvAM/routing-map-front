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
                class="btn-repoprecision"
                rounded="ini"
                width="360" 
                height="155"
                color="rgba(217, 217, 217, 1)"
                >
                <v-img class="home-icon" src="../assets/img/repoprecision.png"></v-img>
                <span class="btn-text">REPORTE DE PRECISIÓN</span>
                </v-btn>
                
                <v-btn
                class="btn-repoentre"
                rounded="ini"
                width="360" 
                height="155"
                color="rgba(217, 217, 217, 1)"
                >
                <v-img class="home-icon" src="../assets/img/repoentrenamiento.png"></v-img>
                <span class="btn-text">REPORTE DE ENTRENAMIENTO</span>
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
.btn-repoprecision{
    left: 270px;
    top: 230px;
    border-radius: 20px; /* Rounded corners */

}

.btn-repoentre{
    left: 290px;
    top: 230px;
    border-radius: 20px; /* Rounded corners */

}



.btn-text {
    font-size: 15px;
    font-weight: bold;
    font-family: 'Arial Black', sans-serif; /* Asegúrate de cargar esta fuente en tu proyecto */
    margin-top: 10px; /* Espacio entre la imagen y el texto, ajusta según sea necesario */
}


.home-icon {
  width: 60px;
  padding-bottom: 23px;
}

</style>
<script >
	export default {
		name: "AdministrarIA",
	};

</script>
