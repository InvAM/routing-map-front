<template>
	<div v-if="isLoading">
		<div
			aria-label="Orange and tan hamster running in a metal wheel"
			role="img"
			class="wheel-and-hamster">
			<div class="wheel"></div>
			<div class="hamster">
				<div class="hamster__body">
					<div class="hamster__head">
						<div class="hamster__ear"></div>
						<div class="hamster__eye"></div>
						<div class="hamster__nose"></div>
					</div>
					<div class="hamster__limb hamster__limb--fr"></div>
					<div class="hamster__limb hamster__limb--fl"></div>
					<div class="hamster__limb hamster__limb--br"></div>
					<div class="hamster__limb hamster__limb--bl"></div>
					<div class="hamster__tail"></div>
				</div>
			</div>
			<div class="spoke"></div>
		</div>
	</div>
	<div v-else class="fondo_actualizar">
		<v-form class="cuadro2" fast-fail @submit.prevent>
			<v-card
				class="actualizarinfo-card"
				elevation="2"
				color="rgba(146, 139, 139, 0.85)"
				width="1600"
				height="850">
				<div class="titulo2">
					<h1 class="text">ACTUALIZAR INFORMACIÓN</h1>
				</div>
				<v-img
					class="actualizar_icon"
					width="1500"
					height="70"
					src="../assets/img/actualizarinfo.png"></v-img>
				<v-divider :thickness="1" class="linea border-opacity-100"></v-divider>

				<p class="nombre">Nombres:</p>
				<p class="genero">Género:</p>
				<p class="edad">Edad:</p>
				<p class="habilida_progra">
					<span class="habilidad">Habilidad en</span>
					<span class="programacion">programación:</span>
				</p>
				<p class="parti_tec">
					<span class="participacion">Participación de</span>
					<span class="club_tecnologia">Club_Tecnología:</span>
				</p>
				<p class="habilidad_blanda">
					<span class="habilidades">Habilidades</span>
					<span class="blancas">blandas:</span>
				</p>
				<p class="graduaciclo">
					<span class="graduacion">Año de graduación</span>
				</p>
				<p class="carrera">Ciclo:</p>
				<p class="nota">Nota promedio:</p>
				<p class="condicion">
					<span class="condi">Condición de</span>
					<span class="estu">Estudiante:</span>
				</p>
				<p class="interes">Intereses:</p>
				<p class="nivel">Nivel Académico:</p>
				<p class="habimate">
					<span class="habili">Habilidad en</span>
					<span class="mate">Matemáticas:</span>
				</p>
				<p class="conolenguaje">
					<span class="cono">Conocimiento de</span>
					<span class="lenguaje">Lenguajes:</span>
				</p>

				<v-text-field
					class="nombretext"
					placeholder="Ingresa su Nombre"
					variant="solo"
					rounded="xl"
					disabled
					v-model="this.selectedUser.Nombre"></v-text-field>
				<v-select
					class="generotxt"
					chips
					:items="generos.map((genero) => genero.Descripcion_Genero)"
					variant="solo"
					rounded="xl"

					placeholder="Seleccione su Género"
					v-model="this.selectedUser.genero.Descripcion_Genero"></v-select>
				<v-text-field
					class="edadtxt"
					placeholder="Ingresa su edad"
					variant="solo"
					rounded="xl"
					disabled
					v-model="this.selectedUser.Edad"></v-text-field>
				<v-select
					class="habiprogratxt"
					chips
					:items="
						habilidadesprg.map(
							(habilidadprg) => habilidadprg.Descripcion_Habilidadesprg
						)
					"
					variant="solo"
					rounded="xl"
					placeholder="Seleccione su Nivel"
					v-model="selectedUser.habilidadesprg"></v-select>
				<v-select
					class="parti_tectxt"
					chips
					:items="
						participaciones.map(
							(participacion) => participacion.Descripcion_participacion
						)
					"
					variant="solo"
					rounded="xl"
					placeholder="Seleccione su Participación"
					v-model="selectedUser.participacion"></v-select>
				<v-select
					class="habilidadestxt"
					variant="solo"
					chips
					placeholder="Seleccione sus Habilidades"
					:items="
						habilidadesbla.map(
							(habilidadbla) => habilidadbla.Descripcion_Habilidadesbla
						)
					"
					rounded="xl"
					multiple
					v-model="selectedUser.habilidadesbla"></v-select>
				<v-text-field
					class="graducaciontxt"
					variant="solo"
					rounded="xl"
					placeholder="Ingrese su Año de Graduación"
					disabled
					v-model="
						this.selectedUser.graduacion.Descripcion_Graduacion
					"></v-text-field>
				<v-text-field
					class="carrerastxt"
					variant="solo"
					rounded="xl"
					placeholder="Ingrese su Ciclo actual"
					disabled
					v-model="this.selectedUser.ciclo.Descripcion_Ciclo"></v-text-field>
				<v-text-field
					class="notapromediotxt"
					label=""
					variant="solo"
					rounded="xl"
					disabled
					placeholder="Ingrese su nota promedio"
					v-model="this.selectedUser.nota_promedio"></v-text-field>
				<v-select
					class="condiciontxt"
					chips
					:items="
						condiciones.map((condicion) => condicion.Descripcion_Condicion)
					"
					variant="solo"
					rounded="xl"
					placeholder="Seleccione su Condición"
					v-model="selectedUser.condicion"></v-select>
				<v-select
					class="interestxt"
					variant="solo"
					chips
					:items="intereses.map((interes) => interes.Descripcion_Interes)"
					multiple
					rounded="xl"
					placeholder="Seleccione su Intereses"
					v-model="selectedUser.interes"></v-select>
				<v-select
					class="nivelaca"
					variant="solo"
					chips
					:items="
						nivelesacademicos.map(
							(nivelacademico) => nivelacademico.Descripcion_NivelAcademico
						)
					"
					rounded="xl"
					placeholder="Seleccione su Nivel"
					v-model="selectedUser.desNivelA"></v-select>
				<v-select
					class="habilidadmate"
					variant="solo"
					chips
					:items="
						habilidadesmat.map(
							(habilidadmat) => habilidadmat.Descripcion_Habilidadesmat
						)
					"
					rounded="xl"
					placeholder="Seleccione su Nivel"
					v-model="selectedUser.habilidadesmat"></v-select>
				<v-select
					class="conolenguajes"
					label="Conocimientos Lenguajes"
					variant="solo"
					chips
					:items="lenguajes.map((lenguaje) => lenguaje.Descripcion_Lenguaje)"
					multiple
					rounded="xl"
					v-model="selectedUser.lenguaje"></v-select>

				<v-btn
					density="compact"
					elevation="20"
					class="btn-actualizar"
					type="submit"
					width="290"
					height="52"
					color="rgba(27, 18, 83, 1)"
					@click="saveChanges"
					>ACTUALIZAR</v-btn
				>
				<v-btn
					density="compact"
					elevation="20"
					class="btn-home"
					type="button"
					width="290"
					height="52"
					color="rgba(236, 100, 82, 1)"
					@click="regresar"
					>Atras <v-icon>mdi-arrow-left</v-icon></v-btn
				>
			</v-card>
		</v-form>
	</div>
	<v-dialog v-model="dialogVisible" :width="500">
		<v-card color="#47d847">
			<v-card-title>
				<span class="mx-auto" style="color: white"
					>¡Operacion realizada correctamente!</span
				>
			</v-card-title>
			<v-card-text>
				<v-alert v-if="mensaje !== ''" color="white" :type="typemsg" outlined>
					{{ mensaje }}
				</v-alert>
			</v-card-text>
			<v-card-actions style="display: flex; justify-content: center">
				<v-btn
					:disabled="isButtonDisabled"
					@click="aceptar"
					style="background-color: #033076; color: #ffffff">
					<template v-if="!isLoading">Aceptar</template>
					<v-progress-circular
						v-else
						indeterminate
						color="white"
						size="24"></v-progress-circular>
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
	<v-dialog v-model="dialogError" :width="500">
		<v-card color="#ec4a4a">
			<v-card-title>
				<span class="mx-auto" style="color: white"> !Error! </span>
			</v-card-title>
			<v-card-text>
				<v-alert v-if="mensaje !== ''" color="white" :type="typemsg" outlined>{{
					mensaje
				}}</v-alert>
			</v-card-text>
			<v-card-actions style="display: flex; justify-content: center">
				<v-btn
					style="background-color: #033076; color: #ffffff"
					@click="cerrar">
					cerrar
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<style scoped>
	.actualizarinfo-card {
		border-radius: 18px; /* Rounded corners */
		padding: 30px; /* Padding inside the card */
		right: -7.5%;

		margin-top: 40px;
	}
	.fondo_actualizar {
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
	.actualizar_icon {
		margin: auto;
		top: -10px;
		width: 20px;
		padding-bottom: 7px;
	}
	.titulo2 {
		display: flex;
		align-items: flex-start;
		position: absolute;
		left: 34%;
		top: 11%;
		color: white;
		font-size: 16px;
		width: bold;
		font-family: "Arial Black";
	}
	.linea {
		margin-top: 50px;
		width: 94%;
		margin-left: 40px;
	}

	.nombre {
		font-size: 20px;
		font-weight: 420;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
		position: absolute;
		left: 6%;
		top: 21.7%;
		color: white;
	}

	.genero {
		font-size: 20px;
		font-weight: 420;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
		position: absolute;
		left: 6%;
		top: 30%;
		color: white;
	}
	.edad {
		font-size: 20px;
		font-weight: 420;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
		position: absolute;
		left: 7%;
		top: 40%;
		color: white;
	}
	.habilida_progra {
		font-size: 20px;
		font-weight: 420;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
		position: absolute;
		left: 5%;
		top: 47%;
		color: white;
		display: block;
	}
	.parti_tec {
		font-size: 20px;
		font-weight: 420;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
		position: absolute;
		left: 5%;
		top: 58%;
		color: white;
		display: block;
	}
	.habilidad_blanda {
		font-size: 20px;
		font-weight: 420;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
		position: absolute;
		left: 5%;
		top: 71%;
		color: white;
		display: block;
	}
	.graduaciclo {
		font-size: 20px;
		font-weight: 420;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
		position: absolute;
		left: 35%;
		top: 21%;
		color: white;
		display: block;
	}
	.carrera {
		font-size: 20px;
		font-weight: 420;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
		position: absolute;
		left: 35%;
		top: 32%;
		color: white;
		display: block;
	}
	.nota {
		font-size: 20px;
		font-weight: 420;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
		position: absolute;
		left: 35%;
		top: 41%;
		color: white;
		display: block;
	}
	.condicion {
		font-size: 20px;
		font-weight: 420;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
		position: absolute;
		left: 35%;
		top: 49%;
		color: white;
		display: block;
	}
	.interes {
		font-size: 20px;
		font-weight: 420;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
		position: absolute;
		left: 35%;
		top: 60%;
		color: white;
		display: block;
	}

	.nivel {
		font-size: 20px;
		font-weight: 420;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
		position: absolute;
		left: 35%;
		top: 70%;
		color: white;
		display: block;
	}
	.habimate {
		font-size: 20px;
		font-weight: 420;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
		position: absolute;
		left: 67%;
		top: 20%;
		color: white;
		display: block;
	}
	.conolenguaje {
		font-size: 20px;
		font-weight: 420;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
		position: absolute;
		left: 67%;
		top: 30%;
		color: white;
		display: block;
	}

	.parti_tec .participacion,
	.parti_tec .club_tecnologia {
		display: block;
	}
	.habilida_progra .habilidad,
	.habilida_progra .programacion {
		display: block;
	}
	.habilidad_blanda .habilidades,
	.habilidad_blanda .blancas {
		display: block;
	}
	.graduaciclo .graduacion,
	.graduaciclo .ciclo {
		display: block;
	}
	.condicion .condi,
	.condicion .estu {
		display: block;
	}
	.habimate .habili,
	.habimate .mate {
		display: block;
	}
	.conolenguaje .cono,
	.conolenguaje .lenguaje {
		display: block;
	}

	.nombretext {
		width: 250px;
		height: 100px;
		margin-left: 16%;
		margin-top: 1%;
	}
	.generotxt {
		width: 250px;
		height: 100px;
		margin-left: 16%;
		margin-top: -1%;
	}
	.edadtxt {
		width: 250px;
		height: 100px;
		margin-left: 16%;
		margin-top: -1%;
	}
	.habiprogratxt {
		width: 250px;
		height: 100px;
		margin-left: 16%;
		margin-top: -1%;
	}
	.parti_tectxt {
		width: 250px;
		height: 100px;
		margin-left: 16%;
		margin-top: -1%;
	}
	.habilidadestxt {
		width: 250px;
		height: 100px;
		margin-left: 16%;
		margin-top: -1%;
	}
	.graducaciontxt {
		width: 250px;
		height: 100px;
		margin-left: 49%;
		margin-top: -34%;
	}
	.carreratxt {
		width: 250px;
		height: 100px;
		margin-left: 49%;
		margin-top: -37%;
	}
	.carrerastxt {
		width: 250px;
		height: 100px;
		margin-left: 49%;
		margin-top: -1%;
	}
	.notapromediotxt {
		width: 250px;
		height: 100px;
		margin-left: 49%;
		margin-top: -1%;
	}
	.condiciontxt {
		width: 250px;
		height: 100px;
		margin-left: 49%;
		margin-top: -1%;
	}
	.interestxt {
		width: 250px;
		height: 100px;
		margin-left: 49%;
		margin-top: -1%;
	}
	.nivelaca {
		width: 250px;
		height: 100px;
		margin-left: 49%;
		margin-top: -1%;
	}
	.habilidadmate {
		width: 250px;
		height: 100px;
		margin-left: 79%;
		margin-top: -34%;
	}
	.conolenguajes {
		width: 250px;
		height: 100px;
		margin-left: 79%;
		margin-top: -1%;
	}
	.btn-actualizar {
		left: 25%;
		top: 370px;
		border-radius: 15px;
		font-size: 16px;
		font-weight: bold;
		font-family: Arial, Helvetica, sans-serif;
	}
	.btn-home {
		border-radius: 15px;
		font-size: 16px;
		font-weight: bold;
		font-family: Arial, Helvetica, sans-serif;
		left: 35%;
		top: 370px;
	}
	.wheel-and-hamster {
		--dur: 1s;
		position: relative;
		width: 12em;
		height: 12em;
		font-size: 14px;
		margin-top: 400px;
	}

	.wheel,
	.hamster,
	.hamster div,
	.spoke {
		position: absolute;
	}

	.wheel,
	.spoke {
		border-radius: 50%;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.wheel {
		background: radial-gradient(
			100% 100% at center,
			hsla(0, 0%, 60%, 0) 47.8%,
			hsl(0, 0%, 60%) 48%
		);
		z-index: 2;
	}

	.hamster {
		animation: hamster var(--dur) ease-in-out infinite;
		top: 50%;
		left: calc(50% - 3.5em);
		width: 7em;
		height: 3.75em;
		transform: rotate(4deg) translate(-0.8em, 1.85em);
		transform-origin: 50% 0;
		z-index: 1;
	}

	.hamster__head {
		animation: hamsterHead var(--dur) ease-in-out infinite;
		background: hsl(30, 90%, 55%);
		border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
		box-shadow: 0 -0.25em 0 hsl(30, 90%, 80%) inset,
			0.75em -1.55em 0 hsl(30, 90%, 90%) inset;
		top: 0;
		left: -2em;
		width: 2.75em;
		height: 2.5em;
		transform-origin: 100% 50%;
	}

	.hamster__ear {
		animation: hamsterEar var(--dur) ease-in-out infinite;
		background: hsl(0, 90%, 85%);
		border-radius: 50%;
		box-shadow: -0.25em 0 hsl(30, 90%, 55%) inset;
		top: -0.25em;
		right: -0.25em;
		width: 0.75em;
		height: 0.75em;
		transform-origin: 50% 75%;
	}

	.hamster__eye {
		animation: hamsterEye var(--dur) linear infinite;
		background-color: hsl(0, 0%, 0%);
		border-radius: 50%;
		top: 0.375em;
		left: 1.25em;
		width: 0.5em;
		height: 0.5em;
	}

	.hamster__nose {
		background: hsl(0, 90%, 75%);
		border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
		top: 0.75em;
		left: 0;
		width: 0.2em;
		height: 0.25em;
	}

	.hamster__body {
		animation: hamsterBody var(--dur) ease-in-out infinite;
		background: hsl(30, 90%, 90%);
		border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
		box-shadow: 0.1em 0.75em 0 hsl(30, 90%, 55%) inset,
			0.15em -0.5em 0 hsl(30, 90%, 80%) inset;
		top: 0.25em;
		left: 2em;
		width: 4.5em;
		height: 3em;
		transform-origin: 17% 50%;
		transform-style: preserve-3d;
	}

	.hamster__limb--fr,
	.hamster__limb--fl {
		clip-path: polygon(0 0, 100% 0, 70% 80%, 60% 100%, 0% 100%, 40% 80%);
		top: 2em;
		left: 0.5em;
		width: 1em;
		height: 1.5em;
		transform-origin: 50% 0;
	}

	.hamster__limb--fr {
		animation: hamsterFRLimb var(--dur) linear infinite;
		background: linear-gradient(hsl(30, 90%, 80%) 80%, hsl(0, 90%, 75%) 80%);
		transform: rotate(15deg) translateZ(-1px);
	}

	.hamster__limb--fl {
		animation: hamsterFLLimb var(--dur) linear infinite;
		background: linear-gradient(hsl(30, 90%, 90%) 80%, hsl(0, 90%, 85%) 80%);
		transform: rotate(15deg);
	}

	.hamster__limb--br,
	.hamster__limb--bl {
		border-radius: 0.75em 0.75em 0 0;
		clip-path: polygon(
			0 0,
			100% 0,
			100% 30%,
			70% 90%,
			70% 100%,
			30% 100%,
			40% 90%,
			0% 30%
		);
		top: 1em;
		left: 2.8em;
		width: 1.5em;
		height: 2.5em;
		transform-origin: 50% 30%;
	}

	.hamster__limb--br {
		animation: hamsterBRLimb var(--dur) linear infinite;
		background: linear-gradient(hsl(30, 90%, 80%) 90%, hsl(0, 90%, 75%) 90%);
		transform: rotate(-25deg) translateZ(-1px);
	}

	.hamster__limb--bl {
		animation: hamsterBLLimb var(--dur) linear infinite;
		background: linear-gradient(hsl(30, 90%, 90%) 90%, hsl(0, 90%, 85%) 90%);
		transform: rotate(-25deg);
	}

	.hamster__tail {
		animation: hamsterTail var(--dur) linear infinite;
		background: hsl(0, 90%, 85%);
		border-radius: 0.25em 50% 50% 0.25em;
		box-shadow: 0 -0.2em 0 hsl(0, 90%, 75%) inset;
		top: 1.5em;
		right: -0.5em;
		width: 1em;
		height: 0.5em;
		transform: rotate(30deg) translateZ(-1px);
		transform-origin: 0.25em 0.25em;
	}

	.spoke {
		animation: spoke var(--dur) linear infinite;
		background: radial-gradient(
				100% 100% at center,
				hsl(0, 0%, 60%) 4.8%,
				hsla(0, 0%, 60%, 0) 5%
			),
			linear-gradient(
					hsla(0, 0%, 55%, 0) 46.9%,
					hsl(0, 0%, 65%) 47% 52.9%,
					hsla(0, 0%, 65%, 0) 53%
				)
				50% 50% / 99% 99% no-repeat;
	}

	/* Animations */
	@keyframes hamster {
		from,
		to {
			transform: rotate(4deg) translate(-0.8em, 1.85em);
		}

		50% {
			transform: rotate(0) translate(-0.8em, 1.85em);
		}
	}

	@keyframes hamsterHead {
		from,
		25%,
		50%,
		75%,
		to {
			transform: rotate(0);
		}

		12.5%,
		37.5%,
		62.5%,
		87.5% {
			transform: rotate(8deg);
		}
	}

	@keyframes hamsterEye {
		from,
		90%,
		to {
			transform: scaleY(1);
		}

		95% {
			transform: scaleY(0);
		}
	}

	@keyframes hamsterEar {
		from,
		25%,
		50%,
		75%,
		to {
			transform: rotate(0);
		}

		12.5%,
		37.5%,
		62.5%,
		87.5% {
			transform: rotate(12deg);
		}
	}

	@keyframes hamsterBody {
		from,
		25%,
		50%,
		75%,
		to {
			transform: rotate(0);
		}

		12.5%,
		37.5%,
		62.5%,
		87.5% {
			transform: rotate(-2deg);
		}
	}

	@keyframes hamsterFRLimb {
		from,
		25%,
		50%,
		75%,
		to {
			transform: rotate(50deg) translateZ(-1px);
		}

		12.5%,
		37.5%,
		62.5%,
		87.5% {
			transform: rotate(-30deg) translateZ(-1px);
		}
	}

	@keyframes hamsterFLLimb {
		from,
		25%,
		50%,
		75%,
		to {
			transform: rotate(-30deg);
		}

		12.5%,
		37.5%,
		62.5%,
		87.5% {
			transform: rotate(50deg);
		}
	}

	@keyframes hamsterBRLimb {
		from,
		25%,
		50%,
		75%,
		to {
			transform: rotate(-60deg) translateZ(-1px);
		}

		12.5%,
		37.5%,
		62.5%,
		87.5% {
			transform: rotate(20deg) translateZ(-1px);
		}
	}

	@keyframes hamsterBLLimb {
		from,
		25%,
		50%,
		75%,
		to {
			transform: rotate(20deg);
		}

		12.5%,
		37.5%,
		62.5%,
		87.5% {
			transform: rotate(-60deg);
		}
	}

	@keyframes hamsterTail {
		from,
		25%,
		50%,
		75%,
		to {
			transform: rotate(30deg) translateZ(-1px);
		}

		12.5%,
		37.5%,
		62.5%,
		87.5% {
			transform: rotate(10deg) translateZ(-1px);
		}
	}

	@keyframes spoke {
		from {
			transform: rotate(0);
		}

		to {
			transform: rotate(-1turn);
		}
	}
</style>

<script src="./Scripts/ActualizarInfo.js"></script>
