
<template>
    <div class="contenido">
            <v-form class="cuadro2" fast-fail @submit.prevent>
            <v-card
            class="actualizarinfo-card"
            elevation="2" 
            color="rgba(146, 139, 139, 0.85)" 
            width="1600" 
            height="850">

            <div class="titulo">
            <h1 class="text">ACTUALIZAR INFORMACIÓN</h1>
            </div>

            <v-img  class="actualizar_icon" width="1500" height="70"  src="../assets/img/actualizar.png"></v-img>
            <v-divider :thickness="1"class="linea border-opacity-100"></v-divider>

            <v-text class="nombre">Nombres:</v-text>
            <v-text class="genero">Género:</v-text>
            <v-text class="edad">Edad:</v-text>
                <v-text class="habilida_progra">
                    <span class="habilidad">Habilidad en</span>
                    <span class="programacion">programación:</span>
                </v-text>
            <v-text class="parti_tec">
                <span class="participacion">Participación de</span>
                <span class="club_tecnologia">Club_Tecnología:</span>
            </v-text>
            <v-text class="habilidad_blanda">
                <span class="habilidades">Habilidades</span>
                <span class="blancas">blandas:</span>
            </v-text>
            <v-text class="graduaciclo">
                <span class="graduacion">Año de graduación</span>
                <span class="ciclo">o ciclo:</span>
            </v-text>
            <v-text class="carrera">Carrera:</v-text>
            <v-text class="nota">Nota promedio:</v-text>
            <v-text class="condicion">
                <span class="condi">Condición de</span>
                <span class="estu">Estudiante:</span>
            </v-text>
            <v-text class="interes">Interess:</v-text>
            <v-text class="nivel">Nivel Académico:</v-text>
            <v-text class="habimate">
                <span class="habili">Habilidad en</span>
                <span class="mate">Matemáticas:</span>
            </v-text>
            <v-text class="conolenguaje">
                <span class="cono">Conocimiento de</span>
                <span class="lenguaje">Lenguajes:</span>
            </v-text>

            <v-text-field
                class="nombretext"
                label="Ingrese su Nombre"
                variant="solo"
                rounded="xl">
            </v-text-field>
            <v-select
                class="generotxt"
                chips
                :items="['Masculino', 'Femenino']"
                variant="solo"
                rounded="xl">
            </v-select>
            <v-text-field
                class="edadtxt"
                label="Ingrese su edad"
                variant="solo"
                rounded="xl">
            </v-text-field>
            <v-select
                class="habiprogratxt"
                chips
                :items="['Principiante', 'Intermedio','Avanzado']"
                variant="solo"
                rounded="xl">
            </v-select>
            <v-select
                class="parti_tectxt"
                chips
                :items="['Si', 'No']"
                variant="solo"
                rounded="xl">
            </v-select>
            <v-select
                class="habilidadestxt"
                label="Habilidades blandas"
                variant="solo"
                chips
                :items="['Trabajo en equipo', 'Comunicación efectiva', 'Gestión del tiempo', 'Resolución de conflictos', 'Creatividad', 'Adaptabilidad', 'Liderazgo', 'Resolución de problemas', 'Pensamiento crítico', 'Aprendizaje rápido']"
                rounded="xl">
            </v-select>

            <v-text-field
                class="graducaciontxt"
                label=""
                variant="solo"
                rounded="xl">
            </v-text-field>

            <v-text-field
                class="carrerastxt"
                label=""
                variant="solo"
                rounded="xl">
            </v-text-field>

            <v-text-field
                class="notapromediotxt"
                label=""
                variant="solo"
                rounded="xl">
            </v-text-field>
            
            <v-select
                class="condiciontxt"
                chips
                :items="['Cursando', 'Egresado']"
                variant="solo"
                rounded="xl">
            </v-select>
            <v-select
                class="interestxt"
                label="Intereses"
                variant="solo"
                chips
                :items="['Desarrollo de aplicaciones web modernas', 'UI/UX Design', 'Machine Learning', 'Desarrollo de videojuegos', 'Diseño de páginas web', 'Desarrollo de aplicaciones empresariales', 'Gestión de proyectos', 'Desarrollo de aplicaciones web dinámicas', 'Diseño de interfaces intuitivas', 'Desarrollo de aplicaciones móviles', 'Seguridad informática', 'Bases de datos', 'Experiencia de usuario', 'Análisis forense digital', 'Implementación de microservicios con Kubernetes','Diseño de arquitecturas de sistemas distribuidos']"
                multiple rounded="xl">
            </v-select >
            <v-select
                class="nivelaca"
                label="Nivel Académico"
                variant="solo"
                chips
                :items="['Estudiante','Graduado','Universitario']"
                rounded="xl">
            </v-select>
            <v-select
                class="habilidadmate"
                label="Habilidad Matemáticas"
                variant="solo"
                :items="['Principiante', 'Intermedio','Avanzanddo']"
                multiple
                rounded="xl">
            </v-select>
            
            <v-select
                class="conolenguajes"
                label="Conocimientos Lenguajes"
                variant="solo"
                chips
                :items="['JavaScript', 'TypeScript', 'React', 'Angular', 'Python', 'Java', 'C++', 'HTML', 'CSS', 'Scala','Vue.js', 'Kotlin','Swift', 'C#']"
                multiple rounded="xl">
            </v-select >
            <v-btn
                density="compact"
                elevation="20"
                class="btn-actualizar"
                type="submit"
                width="290" 
                height="52"
                color="rgba(27, 18, 83, 1)"
                >ACTUALIZAR
            </v-btn>
            <v-btn
                density="compact"
                elevation="20"
                class="btn-home"
                type="submit"
                width="290" 
                height="52"
                color="rgba(236, 100, 82, 1)"
                >HOME
            </v-btn>
            </v-card>
        </v-form>

    </div>

</template>
<style scoped>
.actualizarinfo-card {
    border-radius: 18px; /* Rounded corners */
    padding: 30px; /* Padding inside the card */
    right:-7.5%;

    margin-top:40px;
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
.actualizarinfo_icon {
    top:-30px;
    padding-bottom: 10px;
    margin-left: 40px;
    right: 20%;
}
.titulo {
    display: flex;
    align-items: flex-start;
    position: absolute;
    left:35%;
    top: 11.8%;
    color: white;
    
}
.linea{
    margin-top: 50px;
    width: 94%;
    margin-left: 40px;
}

.nombre{
    font-size: 20px;
    font-weight:420;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:6%;
    top: 21.7%;
    color: white;
} 

.genero{
    font-size: 20px;
    font-weight: 420;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:6%;
    top: 30%;
    color: white;
}
.edad{
    font-size: 20px;
    font-weight: 420;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:7%;
    top: 40%;
    color: white;
}
.habilida_progra{
    font-size: 20px;
    font-weight: 420;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:5%;
    top: 47%;
    color: white;
    display: block;
}
.parti_tec{
    font-size: 20px;
    font-weight: 420;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:5%;
    top: 58%;
    color: white;
    display: block;
}
.habilidad_blanda{
    font-size: 20px;
    font-weight: 420;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:5%;
    top: 71%;
    color: white;
    display: block;
}
.graduaciclo{
    font-size: 20px;
    font-weight: 420;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:35%;
    top: 20%;
    color: white;
    display: block;
}
.carrera{
    font-size: 20px;
    font-weight: 420;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:35%;
    top: 32%;
    color: white;
    display: block;
}
.nota{
    font-size: 20px;
    font-weight: 420;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:35%;
    top: 41%;
    color: white;
    display: block;
}
.condicion{
    font-size: 20px;
    font-weight: 420;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:35%;
    top: 49%;
    color: white;
    display: block;

}
.interes{
    font-size: 20px;
    font-weight: 420;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:35%;
    top: 60%;
    color: white;
    display: block;
}

.nivel{
    font-size: 20px;
    font-weight: 420;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:35%;
    top: 70%;
    color: white;
    display: block;
}
.habimate{
    font-size: 20px;
    font-weight: 420;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:67%;
    top: 20%;
    color: white;
    display: block;
}
.conolenguaje{
    font-size: 20px;
    font-weight: 420;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    position: absolute;
    left:67%;
    top: 30%;
    color: white;
    display: block;
}






.parti_tec .participacion,
.parti_tec .club_tecnologia {
    display: block;
}
.habilida_progra .habilidad,
.habilida_progra .programacion{
    display: block;
}
.habilidad_blanda .habilidades,
.habilidad_blanda .blancas{
    display: block;
    
}
.graduaciclo .graduacion,
.graduaciclo .ciclo{
    display: block;
}
.condicion .condi,
.condicion .estu{
    display: block;
}
.habimate .habili,
.habimate .mate{
    display: block;
}
.conolenguaje .cono,
.conolenguaje .lenguaje{
    display: block;
}


.nombretext{
    width: 250px;
    height: 100px;
    margin-left: 16%;
    margin-top: 1%;
}
.generotxt{
    width: 250px;
    height: 100px;
    margin-left: 16%;
    margin-top: -1%;

}
.edadtxt{
    width: 250px;
    height: 100px;
    margin-left: 16%;
    margin-top: -1%;

}
.habiprogratxt{
    width: 250px;
    height: 100px;
    margin-left: 16%;
    margin-top: -1%;
}
.parti_tectxt{
    width: 250px;
    height: 100px;
    margin-left: 16%;
    margin-top: -1%;
}
.habilidadestxt{
    width: 250px;
    height: 100px;
    margin-left: 16%;
    margin-top: -1%;
}
.graducaciontxt{
    width: 250px;
    height: 100px;
    margin-left: 49%;
    margin-top: -34%;

}
.carreratxt{
    width: 250px;
    height: 100px;
    margin-left: 49%;
    margin-top: -37%;

}
.carrerastxt{
    width: 250px;
    height: 100px;
    margin-left: 49%;
    margin-top: -1%;
}
.notapromediotxt{
    width: 250px;
    height: 100px;
    margin-left: 49%;
    margin-top: -1%;
}
.condiciontxt{
    width: 250px;
    height: 100px;
    margin-left: 49%;
    margin-top: -1%;
}
.interestxt{
    width: 250px;
    height: 100px;
    margin-left: 49%;
    margin-top: -1%;
}
.nivelaca{
    width: 250px;
    height: 100px;
    margin-left: 49%;
    margin-top: -1%;
}
.habilidadmate{
    width: 250px;
    height: 100px;
    margin-left: 79%;
    margin-top: -34%;
}
.conolenguajes{
    width: 250px;
    height: 100px;
    margin-left: 79%;
    margin-top: -1%;

}
.btn-actualizar{
    left: 25%;
    top:370px;
    border-radius: 15px;
    font-size: 16px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}
.btn-home{
    border-radius: 15px;
    font-size: 16px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    left: 35%;
    top:370px;

}



</style>

<script>
export default {
    name: 'Actualizarinfo',
};

</script>