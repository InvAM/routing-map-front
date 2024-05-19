<!-- src/components/UserInterface.vue -->
<template>
  <div class="container">
    <v-sheet>
      <v-form class="cuadro1" fast-fail @submit.prevent>
        <div class="search-bar">
          <input type="text" placeholder="Buscar..." />
          <v-btn>
            <v-img class="registrar-icon" src="../assets/registrar.png"> </v-img>
            Buscar </v-btn>
        </div>
        <div class="content"></div>
      </v-form>
    </v-sheet>
    <v-btn class="btn_registrar centered-content2" density="compact" size="large" rounded="ini" elevation="20"
      type="submit" color="#8a8a8af3" depressed>
      <v-img class="registrar-icon" src="../assets/registrar.png"> </v-img>
      Editar Usuario
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


.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #ccc;
  border-radius: 10px;
  padding: 10px;
}

.search-bar input {
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 10px;
  border-radius: 5px;
}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
}

.content {
  width: 70%;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
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
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

</style>

<script>
export default {
  name: "BuscarUsuario",
};
</script>