<template>
  <div class="contenido">
    <v-sheet class="user_data" width="420" height="70">
      <v-form class="cuadro1" fast-fail @submit.prevent>
        <v-card
          class="pa-10 pb-10"
          margin-right="10"
          elevation="8"
          rounded="cajas"
          style="margin-top: 130px"
          color="#8a8a8af3"
        >
          <v-img class="user_icon" src="../assets/usuario.png"></v-img>
          <v-text class="text-center">Nombres y Apellidos</v-text>
          <v-text-field label=""></v-text-field>

          <v-text class="text-center">Género</v-text>
          <v-text-field label=""></v-text-field>

          <v-text class="text-center">Edad</v-text>
          <v-text-field label=""></v-text-field>
        </v-card>
      </v-form>
    </v-sheet>

    <v-sheet class="university_data" width="420" height="50">
      <v-form class="cuadro2" fast-fail @submit.prevent>
        <v-card
          class="pa-10 pb-10"
          margin-right="10"
          elevation="8"
          rounded="cajas"
          style="margin-top: -70px"
          color="#8a8a8af3"
        >
          <v-img class="sombrero_icon" src="../assets/sombrero.png"></v-img>
          <v-text class="text-center">Universidad</v-text>
          <v-text-field label=""></v-text-field>

          <v-text class="text-center">Carrera</v-text>
          <v-text-field label=""></v-text-field>

          <v-text class="text-center">Año de Graduación</v-text>
          <v-text-field label=""></v-text-field>
        </v-card>
      </v-form>
    </v-sheet>

    <v-sheet class="intereses_data" width="420" height="50">
      <v-form class="cuadro3" fast-fail @submit.prevent>
        <v-card
          class="pa-10 pb-10"
          margin-right="10"
          elevation="8"
          rounded="cajas"
          style="margin-top: -50px"
          color="#8a8a8af3"
        >
          <v-img class="habi_icon" src="../assets/habilidades.png"></v-img>
          <v-text class="text-center">Habilidades</v-text>
          <v-text-field label=""></v-text-field>

          <v-text class="text-center">Intereses</v-text>
          <v-text-field label=""></v-text-field>

          <v-text class="text-center">Áreas de Estudio</v-text>
          <v-text-field label=""></v-text-field>
        </v-card>
      </v-form>
    </v-sheet>
    <v-btn
      class="btn_inicio centered-content"
      density="compact"
      size="large"
      rounded="ini"
      elevation="20"
      type="submit"
      color="#8a8a8af3"
    >
      <v-img class="home-icon" src="../assets/home.png"> </v-img>
      Inicio
    </v-btn>

    <v-btn
      class="btn_registrar centered-content2"
      density="compact"
      size="large"
      rounded="ini"
      elevation="20"
      type="submit"
      color="#8a8a8af3"
      depressed
    >
      <v-img class="registrar-icon" src="../assets/registrar.png"> </v-img>
      Registrar
    </v-btn>
  </div>
</template>


<style scoped>
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

/* PARA BORDES DE CAJAS Y BOTONES*/
.rounded-cajas {
  border-radius: 99px !important;
}

.rounded-ini {
  border-radius: 30px !important;
}

/* CUADROS DE INFORMACION*/
.user_data {
  background: none;
  margin-left: 80px;
  font-family: Tahoma !important;
  font-weight: bold;
}

.university_data {
  margin-left: 540px;
  background: none;
  font-family: Tahoma !important;
  font-weight: bold;
}

.intereses_data {
  margin-left: 1000px;
  background: none;
  font-family: Tahoma !important;
  font-weight: bold;
}

/* BOTONES*/
.btn_inicio {
  min-width: 15%;
  height: 45px;
  margin-top: 440px;
  margin-left: 480px;
  font-weight: bold;
}

.btn_registrar {
  min-width: 15%;
  height: 45px;
  margin-top: 440px;
  margin-left: 60px;
  font-weight: bold;
}

.centered-content {
  align-items: center;
  justify-content: center;
}

.centered-content .home-icon {
  margin-right: 8px; /* Ajusta el espacio entre el icono y el texto si es necesario */
}

.centered-content2 {
  align-items: center;
  justify-content: center;
}

.centered-content2 .registrar-icon {
  margin-right: 8px; /* Ajusta el espacio entre el icono y el texto si es necesario */
}

/* ICONOS*/
.user_icon {
  margin: auto;
  width: 40px;
  padding-bottom: 23px;
}

.sombrero_icon {
  margin: auto;
  width: 55px;
  padding-bottom: 10px;
}

.habi_icon {
  margin: auto;
  width: 40px;
  padding-bottom: 23px;
}

.home-icon {
  width: 24px; /* ajusta el tamaño según tu necesidad */
  height: 24px;
  margin-right: 50px; /* ajusta el margen según tu necesidad */
}

.registrar-icon {
  width: 24px; /* ajusta el tamaño según tu necesidad */
  height: 24px;
  margin-right: 50px; /* ajusta el margen según tu necesidad */
}

.text-center {
  display: flex;
  justify-content: center; /* Centra el contenido horizontalmente */
}
</style>

<script>
export default {
  name: "RegistrarUsuario",
};
</script>
