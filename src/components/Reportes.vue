<template>
    <div class="contenido">
        <v-form class="cuadro2" fast-fail @submit.prevent>
          <v-card
                  class="login-card"
                  elevation="2" 
                  color="rgba(146, 139, 139, 0.85)" 
                  width="1400" 
                  height="800"
          >
                    <div class="titulo">
                        <h1 class="text">REPORTES</h1>
                    </div>
            <v-img class="reportes_icon" src="../assets/img/reportes.png"></v-img>
  
            <v-divider :thickness="1"class="linea border-opacity-100"></v-divider>
           
            <p class="parrafo">CANTIDAD DE USUARIOS SEGÚN RUTAS DE APRENDIZAJE</p>

            <v-text class="desa">Desarrollo Full Stack:</v-text>
            <v-text class="ciencia">Ciencia de Datos:</v-text>
            <v-text class="deweb">Desarrollo Web:</v-text>
            <v-text class="arqui">Arquitectura de</v-text>
            <v-text class="soft">Software:</v-text>

            <v-text class="defront">Desarrollo Front-End:</v-text>
            <v-text class="deapli">Desarrollo de</v-text>
            <v-text class="moviles">Aplicaciones Móviles:</v-text>


            <v-text class="ciber">Ciberseguridad:</v-text>

            <v-text-field disabled class="cant1"></v-text-field>
            <v-text-field disabled class="cant2"></v-text-field>
            <v-text-field disabled class="cant3"></v-text-field>
            <v-text-field disabled class="cant4"></v-text-field>
            <v-text-field disabled class="cant5"></v-text-field>
            <v-text-field disabled class="cant6"></v-text-field>
            <v-text-field disabled class="cant7"></v-text-field>


          </v-card>
        </v-form>
    </div>
  </template>
  
  
  <style scoped>
  
  .login-card {
          border-radius: 18px; /* Rounded corners */
          padding: 30px; /* Padding inside the card */
      left:13%;	
      margin-top:70px;
  }
  
  .contenido {
    /* Puedes ajustar las propiedades según tus necesidades */
    background-image: url("../assets/img/fondofinal.jpg");
    background-size: cover;
    background-position: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  
  .linea{
    margin-top: 36px;
    width: 94%;
    margin-left: 35px;
  }
  
  .titulo {
      display: flex;
      align-items: flex-start;
      position: absolute;
      left:46.3%;
      top: 12.2%;
      color: white;
  }
  
  .titulo,.text{
    font-size: 22px;
    font-weight:500;
    font-weight:bold;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;

  }
  .parrafo{
      font-weight:bold;
      font-style: italic;
      font-size: 22px;
      margin-top: 23px;
      margin-left: 10%;
  }

  .reportes_icon {
    margin: auto;
    top:-4px;
    width: 60px;
    padding-bottom: 10px;
  }
  
  .desa{
    font-size: 24px;
    font-weight:420;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:20%;
    top: 27%;
    color: white;
  }

  .ciencia{
    font-size: 24px;
    font-weight:420;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:20%;
    top: 37%;
    color: white;
  }

  .deweb{
    font-size: 24px;
    font-weight:420;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:20%;
    top: 46.5%;
    color: white;
  }

  .arqui{
    font-size: 24px;
    font-weight:420;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:20%;
    top: 54%;
    color: white;
  }

  .soft{
    font-size: 24px;
    font-weight:420;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:20%;
    top: 57.5%;
    color: white;
  }



  .defront{
    font-size: 24px;
    font-weight:420;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:20%;
    top: 65%;
    color: white;
  }

  .deapli{
    font-size: 24px;
    font-weight:420;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:20%;
    top: 73%;
    color: white;
  }
  .moviles{
    font-size: 24px;
    font-weight:420;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:20%;
    top: 76.4%;
    color: white;
  }



  .ciber{
    font-size: 24px;
    font-weight:420;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:20%;
    top: 84.5%;
    color: white;
  }

  .cant1{
    margin-top: 18PX;
    background-color: rgba(226, 226, 226, 1);
    width: 120px;
    height: 50px;
    margin-left: 36.6%;
    border-radius: 17px; 

  }

  .cant2{
    margin-top: 26PX;
    background-color: rgba(226, 226, 226, 1);
    width: 120px;
    height: 50px;
    margin-left: 36.6%;
    border-radius: 17px; 

  }

  .cant3{
    margin-top: 26PX;
    background-color: rgba(226, 226, 226, 1);
    width: 120px;
    height: 50px;
    margin-left: 36.6%;
    border-radius: 17px; 

  }

  .cant4{
    margin-top: 26PX;
    background-color: rgba(226, 226, 226, 1);
    width: 120px;
    height: 50px;
    margin-left: 36.6%;
    border-radius: 17px; 

  }

  .cant5{
    margin-top: 26PX;
    background-color: rgba(226, 226, 226, 1);
    width: 120px;
    height: 50px;
    margin-left: 36.6%;
    border-radius: 17px; 

  }

  .cant6{
    margin-top: 26PX;
    background-color: rgba(226, 226, 226, 1);
    width: 120px;
    height: 50px;
    margin-left: 36.6%;
    border-radius: 17px; 

  }

  .cant7{
    margin-top: 26PX;
    background-color: rgba(226, 226, 226, 1);
    width: 120px;
    height: 50px;
    margin-left: 36.6%;
    border-radius: 17px; 

  }
  </style>
  
  
  
  
  <script>
  export default {
    name: 'Reportes',
    
  };
  </script>
  