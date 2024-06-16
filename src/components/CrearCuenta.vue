<template>
    <div class="contenido">
		<div class="login-content">
			<div class="login-form">
        <v-form class="my-custom-form form-crearcuenta" fast-fail @submit.prevent>
        <v-card
            class="login-card"
            elevation="2" 
            color="rgba(114, 117, 126, 0.88)" 
            width="760" 
            height="600"
        >
            <div class="titulo">
                <h1 class="text">CREAR CUENTA NUEVA</h1>
            </div>
            <v-img class="user_icon" src="../assets/img/usuario.png"></v-img>
			

            <v-divider :thickness="1"class="linea border-opacity-100"></v-divider>
            
            <v-text-field
            class="nombre"
            label="Nombres"
            variant="solo"
            placeholder="Ingrese su nombre">
            </v-text-field>

            <v-text-field
                class="apellido"
                label="Apellidos"
                variant="solo"
                placeholder="Ingrese su Apellido">
            </v-text-field>

            <v-text-field
                class="dni"
                label="DNI"
                variant="solo"
                placeholder="Ingrese su DNI">
            </v-text-field>

            <v-text-field
                class="edad"
                label="Edad"
                variant="solo"
                placeholder="Ingrese su Edad">
            </v-text-field>

			<v-text-field
                class="usuario"
                label="Usuario"
                variant="solo">
            </v-text-field>

			<v-text-field
                class="contra1"
                label="Contraseña"
                variant="solo"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Ingresa tu contraseña"
                prepend-inner-icon="mdi-lock-outline"
                @click:append-inner="visible = !visible">
            </v-text-field>
            

            <v-btn
                density="compact"
                elevation="20"
                class="btn-crear"
                type="submit"
                width="290" 
                height="52"
                color="rgba(191, 44, 12, 1)"
                >CREAR CUENTA</v-btn>
				
        </v-card>

        </v-form>
			</div>
		<div >
				<v-img class="logo-img" src="../assets/img/logoSI1.png"></v-img>
			</div>
		</div>
    </div>
</template>

<style scoped>

.login-card {
    border-radius: 30px; /* Rounded corners */
    padding: 30px; /* Padding inside the card */
    left:85%;	
    margin-top:160px;
}

.contenido {
    /* Puedes ajustar las propiedades según tus necesidades */
    background-image: url("../assets/img/fondoloadmin.png");
    background-size: cover;
    background-position: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.linea{
    margin-top: 26px;
    width: 90%;
    margin-left: 35px;
	
}
.titulo {
    display: flex;
    align-items: flex-start;
    position: absolute;
    left:36.4%;
    top: 16.5%;
    color: white;
	
}

.titulo,.text{
    font-size: 19px;
    font-weight:500;
	font-weight:bold;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
}
/* ICONOS*/
.user_icon {
    margin: auto;
    top:-10px;
    width: 70px;
    padding-bottom: 10px;
}

.btn-crear{
    left: 28%;
    top:-8px;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}
.nombre{
    color: white;
    width: 250px;
    height: 100px;
    margin-left:8.5%;
    margin-top: 40px;
	

}
.apellido{
    color: white;
    width: 250px;
    height: 100px;
    margin-left: 8.5%;

}
.dni{
    width: 250px;
    height: 100px;
    margin-left: 8.5%;
}
.edad{
    width: 250px;
    height: 100px;
    margin-left: 55%;
	margin-top: -300px;
}
.usuario{
	color: white;
	width: 250px;
	height: 100px;
	margin-left: 55%;
}
.contra1{
	color: white;
	margin-top: 0%;
	width: 250px;
	height: 115px;
	margin-left: 55%;
}
.logo-img{
	
	
    width: 760px;
    top:8%;
	left: 97%;
	

	
	
}

</style>


<script>

export default {
    data: () => ({
    visible: false,
    }),
}
</script>