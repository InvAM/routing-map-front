<template>
    <div class="login">
      <div>
      </div>
      <div class="floating-rectangle">
        <div class="floating-rectan">
          <div style="margin-top: 80px">
            <v-container >
              <v-img
               
                max-height="330"
                max-width="250"
                style="margin-left: 80%;"></v-img>
              <v-container class="login-container" >
                <v-row>
                  <v-col cols="4" sm="3" md="2" lg="2"></v-col>
                  <v-col cols="12" sm="9" md="10" lg="10" class="d-flex align-center justify-end"></v-col>
                </v-row>
                <div>
                  <v-row align="center" style="margin-top: -10%;">
                    <v-col cols="12" sm="5" md="10">
                      <h2 class="identificarse-1 alinear" style="margin-bottom: 0.5rem;">
                        Identificarse
                        <h5 class="bienvenido-1 alinearbien" style="margin-top: 0.3rem; margin-bottom: 0.1rem;">Bienvenido</h5>
                      </h2>
                    </v-col>
                  </v-row>
                  <form @submit.prevent="iniciarSesion">
                    <v-row align="center" style="margin-top: 5%;">
                      <v-img
                        
                        max-height="330"
                        max-width="150"
                        style="margin-left: 25%;"
                      ></v-img>
                      <v-col cols="12">
                        
                        <p style="margin-bottom: 0.3rem;">Código</p>
                        <v-text-field
                          label=""
                          solo
                          v-model="DNI_Em"
                          :clearable="false"
                          dense
                          style="width: 100%"
                        ></v-text-field>
                        <p style="margin-bottom: 0.3rem;">Código de Estudiante</p>
                        <v-text-field
                        label=""
                        solo
                        v-model="nombreusuario"
                        :clearable="false"
                        dense
                        ></v-text-field>
                        
                        
                        <v-btn
                          type="submit"
                          class="button-1"
                          depressed
                          color="#821902"
                          block
                          elevation="13"
                          style="width: 100%;"
                        >
                          <span class="">Ingresar</span>
                        </v-btn>
                        <v-btn
                          type="submit"
                          class="button-1"
                          depressed
                          color="#821902"
                          block
                          elevation="13"
                          style="width: 100%;"
                        >
                          <span class="">Crear Cuenta Nueva</span>
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-row v-if="mensajeError" align="center">
                      <v-col cols="12" >
                        <v-alert type="error" class="mt-4">
                          {{ mensajeError }}
                        </v-alert>
                      </v-col>
                    </v-row>
                  </form>
                </div>
              </v-container>
            </v-container>
          </div>
        </div>
      </div>
    </div>
  </template>
  <style scoped>


  .login .bienvenido-1 {
    width: 400px;
    height: 60px;
    color: #033076;
    font-family: Tahoma!important;
    font-weight: 400;
    font-size: 20px;
    margin-top: 0%;
    text-align: center;
  }
  .login .identificarse-1 {
    width: 400px;
    height: 60px;
    margin-top: 0%;
    color: #000000;
    font-family: Tahoma!important;
    font-weight: bold;
    font-size: 30px;
    text-align: center;
  }
  .login .custom-image {
    margin-top: 0%;
    margin-right: 0%;
  }
  .login .button-1 {   
    background: #033076;
    margin-left: 0%!important;
    margin-top: 5% !important;
    width:350px;
    color: #ffffff;
    border-color: #232323;
    border-width: 1px;
    font-weight: 400;
    font-size: 24px;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    height:50px !important;
  }
  
  .login .floating-rectangle {
    position: absolute;
    left: 85%;
    transform: translateX(-50%);
    top: -0.5% !important;
    width: 45px;
    height: 700px;
    background-color: #33cc33;
    border: 4px solid #33cc33;
    padding: 10px;
  }
  .login .floating-rectan {
    position: absolute;
    left: 120%;
    transform: translateX(-50%);
    top: 0%;
    width: 400px;
    height: 750px;
    background-color: #ffffff;
    border: 4px solid #3ab12c;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .login .alinear{
    margin-left: -20%;
  }
  .login .alinearbien{
    margin-left: 0%;
  }
  </style>
  
<script>

export default {
  name: "Login",
  data() {
    return {
      DNI_Em: "",
      nombreusuario: "",
      contraseña: "",
      mensajeError: "",
    };
  },
  methods: {
    async iniciarSesion() {
      var data = {
        DNI_Em: this.DNI_Em,
        nombreusuario: this.nombreusuario,
        contraseña: this.contraseña,
      };
      try {
        await this.axios.post("/credenciales-empleado/validar", data);
        this.$router.push("/menu");
      } catch (error) {
        if (error.response.data.errors) {
          const errors = error.response.data.errors;
          if (errors.DNI_Em) {
            this.mensajeError = "El DNI ingresado es incorrecto";
          }
          if (errors.nombreusuario) {
            this.mensajeError = "El nombre de usuario ingresado es incorrecto";
          }
          if (errors.contraseña) {
            this.mensajeError = "La contraseña ingresada es incorrecta";
          }
        }
      }
    },
  },
};

</script>