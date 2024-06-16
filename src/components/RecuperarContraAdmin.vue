<template>
    <div class="contenido">
        <v-form class="cuadro2" fast-fail @submit.prevent>
          <v-card
                class="login-card"
                elevation="2" 
                color="rgba(146, 139, 139, 0.85)" 
                width="850" 
                height="650">
            <div class="titulo">
                <h1 class="text">RECUPERAR CONTRASEÑA ADMIN</h1>
            </div>
            <v-img class="recuadmin_icon" src="../assets/img/recuadmin.png"></v-img>
  
            <v-divider :thickness="1"class="linea border-opacity-100"></v-divider>

            <p class="parrafo">En esta opción te ayudaremos a reestablecer tu contraseña, debes proporcionarnos la información necesaria para tal propósito.</p>

            <v-text-field
                class="usuario"
                label="Usuario"
                variant="solo">
            </v-text-field>

            <v-text-field
                class="contra"
                label="Contraseña"
                variant="solo"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Ingresa tu contraseña"
                prepend-inner-icon="mdi-lock-outline"
                @click:append-inner="visible = !visible">
            </v-text-field>

            <v-text-field
                class="contra2"
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
                class="btn-aceptar"
                type="submit"
                width="290" 
                height="52"
                color="rgba(27, 18, 83, 1)">ACEPTAR</v-btn> 
          </v-card>
        </v-form>
    </div>
  </template>

<style scoped>
.login-card {
    border-radius: 18px; /* Rounded corners */
    padding: 30px; /* Padding inside the card */
    left:27.5%;	
    margin-top:145px;
}
  
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
  
.linea{
    margin-top: 13px;
    width: 90%;
    margin-left: 35px;
}
  
.titulo {
    display: flex;
    align-items: flex-start;
    position: absolute;
    left:30.4%;
    top: 14%;
    color: white;
}
  
.titulo,.text{
    font-size: 19px;
    font-weight:bold;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
}

  /* ICONOS*/
.recuadmin_icon {
    margin: auto;
    top:-10px;
    width: 77px;
    padding-bottom: 10px;
    left: -3%;
}
  
.usuario{
  color: white;
  width: 400px;
  height: 110px;
  margin-left: 24%;
  margin-top: 30px;
}
.contra{
  margin-top:-15px;
  color: white;
  width: 400px;
  height: 130px;
  margin-left: 24%;
}

.contra2{
  margin-top:-30px;
  color: white;
  width: 400px;
  height: 130px;
  margin-left: 24%;
}

.parrafo{
    font-style: italic;
    display: flex;
    justify-content: center; /* Centra horizontalmente */
    align-items: center; /* Centra verticalmente */
    text-align: center;       
    font-size: 18px;
    margin-top: 20px;
    margin-left: 14%;
    margin-right: 16.7%;
}

.btn-aceptar{
    margin-top: -15px;
    left: 30.7%;
    border-radius: 17px;
    font-size: 16px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}
</style>

<script>
export default {
    data: () => ({
    visible: false,
    }),
}
</script>