<template>
  <div class="contenido">

    <v-sheet class="user_data" width="840" height="100">
      <v-form class="cuadro1" fast-fail @submit.prevent>
        <v-card
          class="pa-10 pb-10"
          margin-right="10"
          elevation="8"
          rounded="cajas"
          style="margin-top: 40px"
          color="#8a8a8af3"
        >
          <v-img class="user_icon" src="../assets/usuario.png"></v-img>
 
  <v-container class="cuadro-name">  
    <v-row class="text-names" align="center">
      <v-col cols="auto">
        <v-text>Nombres y Apellidos</v-text>
      </v-col>
      <v-col cols="auto" >
        <v-text-field class="nombres" label=""></v-text-field>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row class="text-genyeadad" align="center">
      <v-col cols="auto">
        <v-text>Género</v-text>
      </v-col>
      <v-col cols="auto" >
        <v-text-field class="generos" label=""></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-text>Edad</v-text>
      </v-col>
      <v-col cols="auto" >
        <v-text-field class="edad" label=""></v-text-field>
      </v-col>
    </v-row>
  </v-container>
 

        </v-card>
      </v-form>
    </v-sheet>

    <v-sheet class="university_data" width="840" height="50">
      <v-form class="cuadro2" fast-fail @submit.prevent>
        <v-card
          class="pa-10 pb-10"
          margin-right="50"
          elevation="8"
          rounded="cajas"
          style="margin-top: 260px"
          color="#8a8a8af3"
        >
          <v-img class="sombrero_icon" src="../assets/sombrero.png"></v-img>
  
  <v-container>
    <v-row class="text-uni-carrera" align="center">
      <v-col cols="auto">
        <v-text>Universidad</v-text>
      </v-col>
      <v-col cols="auto" >
        <v-text-field class="universidad" label=""></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-text>Carrera</v-text>
      </v-col>
      <v-col cols="auto" >
        <v-text-field class="carrera" label=""></v-text-field>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row class="text-nivel" align="center">
      <v-col cols="auto">
        <v-text>Año de Graduación</v-text>
      </v-col>
      <v-col cols="auto" >
        <v-text-field class="año" label=""></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-text>Nivel Académico</v-text>
      </v-col>
      <v-col cols="auto" >
        <v-text-field class="nivel" label=""></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-text>Condición de Estudiante</v-text>
      </v-col>
      <v-col cols="auto" >
        <v-text-field class="condi" label=""></v-text-field>
      </v-col>
    </v-row>
  </v-container>
          
        </v-card>
      </v-form>
    </v-sheet>

    <v-sheet class="intereses_data" width="490" height="20">
      <v-form class="cuadro3" fast-fail @submit.prevent>
        <v-card
          class="pa-10 pb-10"
          margin-right="10"
          elevation="8"
          rounded="cajas"
          style="margin-top: -410px"
          color="#8a8a8af3"
        >
          <v-img class="habi_icon" src="../assets/habilidades.png"></v-img>

          
          <v-text class="text-center">Habilidades</v-text>
          <v-text-field label=""></v-text-field>

          <v-text class="text-center">Intereses</v-text>
          <v-text-field label=""></v-text-field>

          <v-text class="text-center">Áreas de Estudio</v-text>
          <v-text-field label=""></v-text-field>

          <v-text class="text-center">Nota Promedio</v-text>
          <v-text-field label=""></v-text-field>

          <v-text class="text-center">Habilidades Blandas</v-text>
          <v-text-field label=""></v-text-field>

          <v-text class="text-center">Habilidad en Programación</v-text>
          <v-text-field label=""></v-text-field>

          <v-text class="text-center">Habilidad en Matemáticas</v-text>
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
  margin-left: 260px;
  font-family: 'Poppins', sans-serif; /* Aplicar la fuente */
  font-weight: bold;
}

.university_data {
  margin-left: 260px;
  background: none;
  font-family: 'Poppins', sans-serif; /* Aplicar la fuente */
  font-weight: bold;
}

.intereses_data {
  margin-left: 1130px;
  background: none;
  font-family: 'Poppins', sans-serif; /* Aplicar la fuente */
  font-weight: bold;
}

/* BOTONES*/
.btn_inicio {
  min-width: 12%;
  height: 65px;
  margin-top: 280px;
  margin-left: 1645px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif; /* Aplicar la fuente */
}

.btn_registrar {
  min-width: 12%;
  height: 65px;
  margin-top: 20px;
  margin-left: 1645px;
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
  width: 50px;
  padding-bottom: 23px;
}

.sombrero_icon {
  margin: auto;
  width: 60px;
  padding-bottom: 10px;
}

.habi_icon {
  margin: auto;
  width: 60px;
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

/* LABELS DEL CUADRO DE USER */
.nombres{
  width: 530px;

}
.generos{
  width: 250px;

}
.edad{
  width: 140px;
}

.universidad{
  width: 250px;
}
.carrera{
  width: 250px;
}

.año{
  width: 100px;
}
.nivel{
  width: 150px;
}
.condi{
  width: 250px;
}


.cuadro-name{
  padding: 0%;
}

.text-genyeadad{
  margin-left: 60px;
}

.text-center{
  display: flex;
  justify-content: center; /* Centra el contenido horizontalmente */
}

</style>

<script>
export default {
  name: "RegistrarUsuario",
};
</script>
