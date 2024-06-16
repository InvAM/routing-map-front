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
              <h1 class="text">Reporte de Entrenamiento</h1>
            </div>
          <v-img class="reporentre_icon" src="../assets/img/reporentre.png"></v-img>

          <v-divider :thickness="1"class="linea border-opacity-100"></v-divider>
          <v-btn
							density="compact"
							elevation="20"
							class="btn-reentrenar"
							type="submit"
							width="290" 
              height="52"
              color="rgba(130, 25, 2, 1)"
							>REENTRENAR</v-btn>
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
	left:36%;
	top: 11.8%;
	color: white;
}

.titulo,.text{
  font-size: 19px;
  font-weight:500;
}
/* ICONOS*/
.reporentre_icon {
  margin: auto;
  top:-10px;
  width: 70px;
  padding-bottom: 10px;
}

.btn-reentrenar{
  left: 220px;
  top:75%;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
</style>


<script>
export default {
  name: 'RepoEntrenamiento',
  
};
</script>
