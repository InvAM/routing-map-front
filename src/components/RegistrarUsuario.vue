<template >
    <div class="contenido">
      <v-sheet 
      class=""
			width="480"
			height="400">
        <v-form class="cuadro1" fast-fail @submit.prevent>
          <v-card 
          class="mx-auto pa-12 pb-10"
					margin-right= "80"
					elevation="8"
					max-width="400"
					rounded="xl"
					max-height="400"
					height="400"
					color="#e8e1fa"> 
          
          <v-img
					class="mx-auto"
          margin-top= "5"
          margin-down= "100"
					max-width="40"
					src="../assets/usuario.png"
          ></v-img>
            <v-text>Nombres y Apellidos</v-text>
            <v-text-field label="" ></v-text-field >
            
            <v-text>Género</v-text>
            <v-text-field label="" ></v-text-field >
            
            <v-text>Edad</v-text>
            <v-text-field label="" ></v-text-field >
          </v-card>
        </v-form>
      </v-sheet>


      <v-sheet class="mx-auto pt-10 pl-10 pr-10 pb-10 form-login"
			width="480"
			height="400">
        <v-form class="cuadro2" fast-fail @submit.prevent>
          <v-card 
          class="mx-auto pa-12 pb-8"
					margin-right= "100"
					elevation="8"
					max-width="500"
					rounded="xl"
					max-height="500"
					height="300"
					color="#e8e1fa"> 
          
          <v-img
					class="mx-auto"
          margin-top= "5"
          margin-down= "200"
					max-width="60"
					src="../assets/sombrero.png"
          ></v-img>
            <v-text>Universidad</v-text>
            <v-text-field label="" ></v-text-field >
            
            <v-text>Carrera</v-text>
            <v-text-field label="" ></v-text-field >
            
            <v-text>Año de Graduación</v-text>
            <v-text-field label="" ></v-text-field >
          </v-card>
        </v-form>
      </v-sheet>
      
    </div>
</template>


<style scoped>
.contenido {
  /* Puedes ajustar las propiedades según tus necesidades */
  background-image: url('../assets/fondito.jpg');
  background-size: cover; /* Para ajustar el tamaño de la imagen al contenedor */
  background-position: center; /* Para centrar la imagen */
  width: 100vw;
  height: 100vh;
}
</style>


<!-- <template>
	<div class="fondo_login">
		<v-sheet
			class="mx-auto pt-10 pl-10 pr-10 pb-10 form-login"
			width="480"
			height="400">
			<v-form class="my-custom-form" fast-fail @submit.prevent  >
				<v-img
					class="mx-auto my-6"
					max-width="228"
					src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img>
				<v-card
			
					class="mx-auto pa-12 pb-8"
					margin-right= "100"
					elevation="8"
					max-width="500"
					rounded="xl"
					max-height="500"
					height="300"
					color="#262626"
					
					>
					<v-text-field label="Usuario" color="white" ></v-text-field >

					<v-text-field
						v-model="password"
						:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
						:rules="[rules.required]"
						:type="show1 ? 'text' : 'password'"
						hint="At least 8 characters"
						label="Código Estudiante"
						name="input-10-1"
						
						counter
						@click:append="show1 = !show1"></v-text-field>

					<v-btn density="compact" size="large" rounded="xl" elevation="20" class="mt-2" type="submit" color="#821902" block
						>Ingresar</v-btn
					>
					<v-btn density="compact" size="large" rounded="xl" elevation="20"  class="mt-2" type="submit" color="#821902" block
					>Crear Cuenta Nueva</v-btn
					>
				</v-card>
			</v-form>
		</v-sheet>
	</div>
</template> -->







<script>
export default {
  name: "RegistrarUsuario",
};
</script>