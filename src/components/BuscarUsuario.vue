<template>
  
  <div class="container">
    <v-sheet class="buscar_user" width="1000" height="400">
      <v-form  fast-fail @submit.prevent>
        <v-card
          class="pa-12 pb-10"
          margin-right="10"
          elevation="10"
          rounded="cajas"
          style="margin-top: 0px"
          color="#8a8a8af3">
          <div class="search-bar">
          <input type="text" placeholder="Buscar..." />
          <v-btn class="buscar-btn">
            <v-img class="buscar-icon" src="../assets/buscar.png"> </v-img> 
          </v-btn>
          </div>
      
        <div class="content"></div>

        </v-card>
      </v-form>
    </v-sheet>
    <v-btn class="btn_editarinfo centered-content2" density="compact" size="large" rounded="ini" elevation="20"
      type="submit" color="#8a8a8af3" depressed>
      <v-img class="editar-icon" src="../assets/editar.png"> </v-img>
      Editar Información
    </v-btn>
  </div>

</template>


<style scoped>
.container {
  /* Puedes ajustar las propiedades según tus necesidades */
  background-image: url("../assets/fondofinal.jpg");
  background-size: cover;
  background-position: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0f0f1f;
}

.buscar_user {
  background: none;
  margin-left:-50px;
  font-family: 'Poppins', sans-serif; /* Aplicar la fuente */
  font-weight: bold;
  width: 150%;
  margin-top: -450px;

}

/* BARRA DE BUSQUEDA */
.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #ccc;
  padding: 10px;
  border-radius: 25px;

}

.search-bar input {
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 10px;
  border-radius: 50px;
}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
}

.content {
  width: 100%;
  height: 450px;
  background-color: #fff;
  border-radius: 40px;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.action-button {
  background-color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}
div.v-card{
  border-radius: 50px;
}

.buscar-icon {
  width: 30px; /* ajusta el tamaño según tu necesidad */
  height: 35px;
}

.editar-icon{
  width: 30px; /* ajusta el tamaño según tu necesidad */
  height: 35px;
  margin-right: 10px;
}
.buscar.btn{
  margin-left: -30px; /* ajusta el margen según tu necesidad */
  border-radius: 80px;

}

.btn_editarinfo {
  min-width: 10%;
  height: 65px;
  margin-top: -300px;
  margin-left: 1430px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif; /* Aplicar la fuente */
  border-radius: 50px;

}
</style>

<script>
export default {
  name: "BuscarUsuario",
};
</script>