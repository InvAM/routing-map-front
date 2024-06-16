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
            <h1 class="text">INFORMACIÓN DEL USUARIO</h1>
        </div>
        <v-img class="reporentre_icon" src="../assets/img/reporentre.png"></v-img>

        <v-divider :thickness="1"class="linea border-opacity-100"></v-divider>
        <div class="caja1">
            <v-text-field
            class="edad"
            label="Edad"
            variant="solo"
            placeholder="Ingrese su edad" rounded="xl">
            </v-text-field>
        </div>
            <v-select
                class="habilidad"
                label="Habilidad de programación"
                variant="solo"
                chips
                :items="['Principiante','Intermedio','Avanzado']"
                placeholder="Habilidad" rounded="xl">
            </v-select>
            <v-select
                class="participacion"
                label="Participación de Tec"
                variant="solo"
                chips
                :items="['Si','no']"
                placeholder="Participación" rounded="xl">
            </v-select>
            <v-select
                class="condicion"
                label="Condición Estudiante"
                variant="solo"
                chips
                :items="['Cursando','Egresado']"
                rounded="xl">
            </v-select>
            <v-select
                class="habilidades"
                label="Habilidades blandas"
                variant="solo"
                chips
                :items="['Trabajo en equipo', 'Comunicación efectiva', 'Gestión del tiempo', 'Resolución de conflictos', 'Creatividad', 'Adaptabilidad', 'Liderazgo', 'Resolución de problemas', 'Pensamiento crítico', 'Aprendizaje rápido']"
                rounded="xl">
            </v-select>
            <v-select
                class="nivel"
                label="Nivel Académico"
                variant="solo"
                chips
                :items="['Estudiante','Graduado','Universitario']"
                placeholder="Nivel Académico" rounded="xl">
            </v-select>
            <v-select
                class="habilidadmate"
                label="Habilidad Matemáticas"
                variant="solo"
                :items="['Principiante', 'Intermedio','Avanzanddo']"
                multiple
                rounded="xl">
            </v-select>
            <v-text-field
                class="notapromedio"
                label="Nota Promedio"
                variant="solo"
                placeholder="Promedio" rounded="xl">
            </v-text-field>
            <v-select
                class="conolenguajes"
                label="Conocimientos Lenguajes"
                variant="solo"
                chips
                :items="['JavaScript', 'TypeScript', 'React', 'Angular', 'Python', 'Java', 'C++', 'HTML', 'CSS', 'Scala','Vue.js', 'Kotlin','Swift', 'C#']"
                multiple rounded="xl">
            </v-select >
            <v-select
                class="interes"
                label="Intereses"
                variant="solo"
                chips
                :items="['Desarrollo de aplicaciones web modernas', 'UI/UX Design', 'Machine Learning', 'Desarrollo de videojuegos', 'Diseño de páginas web', 'Desarrollo de aplicaciones empresariales', 'Gestión de proyectos', 'Desarrollo de aplicaciones web dinámicas', 'Diseño de interfaces intuitivas', 'Desarrollo de aplicaciones móviles', 'Seguridad informática', 'Bases de datos', 'Experiencia de usuario', 'Análisis forense digital', 'Implementación de microservicios con Kubernetes','Diseño de arquitecturas de sistemas distribuidos']"
                multiple rounded="xl">
            </v-select >

            <v-btn
                density="compact"
                elevation="20"
                class="btn-reentrenar"
                type="submit"
                width="290" 
                height="52"
                color="rgba(27, 18, 83, 1)"
                >PREDECIR RUTA
            </v-btn>
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
    left:33%;
    top: 11.8%;
    color: white;
}

.titulo,.text{
    font-size: 20px;
    font-weight:500;
    font-weight:bold;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;

}
/* ICONOS*/
.reporentre_icon {
    margin: auto;
    top:-10px;
    width: 70px;
    padding-bottom: 10px;
}

.btn-reentrenar{
    left: 30%;
    top:28px;
    border-radius: 15px;
    font-size: 16px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}
.edad{
    
    color: white;
    width: 250px;
    height: 100px;
    margin-left:10.5%;
    margin-top: 3%;

}
.habilidad{
    color: white;
    width: 250px;
    height: 100px;
    margin-left: 10.5%;

}
.participacion{
    width: 250px;
    height: 100px;
    margin-left: 10.5%;
}
.condicion{
    width: 250px;
    height: 100px;
    margin-left: 10.5%;
}
.habilidades{
    width: 250px;
    height: 100px;
    margin-left: 10.5%;
}
.nivel{
    width: 250px;
    height: 100px;
    margin-left: 55%;
    margin-top: -501px;
}
.habilidadmate{
    width: 250px;
    height: 100px;
    margin-left: 55%;

}
.notapromedio{
    width: 250px;
    height: 100px;
    margin-left: 55%;
}
.conolenguajes{
    width: 250px;
    height: 100px;
    margin-left: 55%;

}
.interes{
    width: 250px;
    height: 100px;
    margin-left: 55%;
}
.rounded{
    border-radius: 16px;
}
</style>


<script>
export default {
    name: 'Prediccion',
};

</script>