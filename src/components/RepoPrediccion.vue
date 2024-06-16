<template>
    <div class="contenido">
        <v-form class="cuadro2" fast-fail @submit.prevent>
          <v-card
                  class="login-card"
                  elevation="2" 
                  color="rgba(146, 139, 139, 0.85)" 
                  width="800" 
                  height="800"
          >
                    <div class="titulo">
                        <h1 class="text">Reporte de Precisión de Predicciones</h1>
                    </div>
            <v-img class="reporpredi_icon" src="../assets/img/reporpredi.png"></v-img>
  
            <v-divider :thickness="1"class="linea border-opacity-100"></v-divider>
           
          </v-card>
        </v-form>
    </div>
  </template>
  
  
  <style scoped>
  
  .login-card {
          border-radius: 18px; /* Rounded corners */
          padding: 30px; /* Padding inside the card */
      left:29%;	
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
    margin-top: 24px;
    width: 90%;
    margin-left: 35px;
  }
  
  .titulo {
      display: flex;
      align-items: flex-start;
      position: absolute;
      left:30%;
      top: 12%;
      color: white;
  }
  
  .titulo,.text{
    font-size: 19px;
    font-weight:500;
  }
  /* ICONOS*/
  .reporpredi_icon {
    margin: auto;
    top:-10px;
    width: 71px;
    padding-bottom: 10px;
  }
  
  </style>
  
  
  
  
  <script>
  export default {
    name: 'RepoPrediccion',
    
  };
  </script>
  