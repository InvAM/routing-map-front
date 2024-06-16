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
                height="170"
                color="rgba(217, 217, 217, 1)"
                >
                <v-img class="home-icon" src="../assets/img/home.png"></v-img>
                <span class="btn-text">LOGIN</span>
                </v-btn>
                
                <v-btn
                class="btn-recucontra"
                rounded="ini"
                width="350" 
                height="170"
                color="rgba(217, 217, 217, 1)"
                >
                <v-img class="home-icon" src="../assets/img/recucontra.png"></v-img>
                <span class="btn-text">RECUPERAR CONTRASEÑA</span>
                </v-btn>

                <v-btn
                class="btn-cuentanow"
                rounded="ini"
                width="350" 
                height="170"
                color="rgba(217, 217, 217, 1)"
                >
                <v-img class="home-icon" src="../assets/img/crearcuenta.png"></v-img>
                <span class="btn-text">CREAR CUENTA NUEVA</span>
                </v-btn>



                <v-btn
                class="btn-admiia"
                rounded="ini"
                width="350" 
                height="170"
                color="rgba(217, 217, 217, 1)"
                >
                    <v-img class="ia-icon" src="../assets/img/admiia.png"></v-img>
                    <span class="btn-textia">ADMINISTRAR INTELIGENCIA ARTIFICIAL</span>
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
    left: 285px;
    top: 130px;
    border-radius: 20px; /* Rounded corners */

}

.btn-recucontra{
    left: 302px;
    top: 130px;
    border-radius: 20px; /* Rounded corners */

}


.btn-cuentanow{
    left: -415px;
    top: 325px;
    border-radius: 20px; /* Rounded corners */

}

.btn-admiia{
    left: 652px;
    top: 155px;
    display: flex;
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
    text-align: center;
    border-radius: 20px; /* Rounded corners */

}

.btn-text {
    font-size: 16px;
    font-weight: bold;
    font-family: 'Arial Black', sans-serif; /* Asegúrate de cargar esta fuente en tu proyecto */
    margin-top: 10px; /* Espacio entre la imagen y el texto, ajusta según sea necesario */
}

.btn-textia{
    font-size: 14px;
    font-weight: bold;
    font-family: 'Arial Black', sans-serif; /* Asegúrate de cargar esta fuente en tu proyecto */
    margin-top: 10px; /* Espacio entre la imagen y el texto, ajusta según sea necesario */

}

.home-icon {
  width: 65px;
  padding-bottom: 23px;
}

.ia-icon {
  width: 65px;
  padding-bottom: 23px;
}

</style>
<script >
	export default {
		name: "MenuAdmin",
	};

</script>
