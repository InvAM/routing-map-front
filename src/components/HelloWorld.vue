<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<v-img
					:src="require('../assets/logo.svg')"
					class="my-3"
					contain
					height="200" />
			</v-col>

			<v-col class="mb-5">
				<h1 class="display-2 font-weight-bold mb-3">
					Bienvenido al curso de Sistemas Inteligentes
				</h1>

				<p class="subheading font-weight-regular">
					For help and collaboration with other Vuetify developers,
					<br />please join our online
					<a href="https://community.vuetifyjs.com" target="_blank"
						>Discord Community</a
					>
				</p>
			</v-col>

			<v-col class="mb-5" cols="12">
				<h2 class="headline font-weight-bold mb-5">What's next?</h2>

				<v-row justify="center">
					<a
						v-for="(next, i) in whatsNext"
						:key="i"
						:href="next.href"
						class="subheading mx-3"
						target="_blank">
						{{ next.text }}
					</a>
				</v-row>
			</v-col>

			<v-col class="mb-5" cols="12">
				<h2 class="headline font-weight-bold mb-5">Important Links</h2>

				<v-row justify="center">
					<a
						v-for="(link, i) in importantLinks"
						:key="i"
						:href="link.href"
						class="subheading mx-3"
						target="_blank">
						{{ link.text }}
					</a>
				</v-row>
			</v-col>

			<v-col class="mb-5" cols="12">
				<h2 class="headline font-weight-bold mb-5">Ecosystem</h2>

				<v-row justify="center">
					<a
						v-for="(eco, i) in ecosystem"
						:key="i"
						:href="eco.href"
						class="subheading mx-3"
						target="_blank">
						{{ eco.text }}
					</a>
				</v-row>
				<v-row justify="center">
					<a
						v-for="(eco, i) in nombres"
						:key="i"
						:href="eco.href"
						class="subheading mx-3"
						target="_blank">
						{{ eco.text }}
						{{ eco.apellido }}
					</a>
				</v-row>
				<v-row>
					<v-col>
						<v-btn color="primary" @click="enviarInformacion">
							Enviar Información
						</v-btn>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
	import axios from "axios";

	export default {
		name: "HelloWorld",

		data: () => ({
			nombres: [
				{ text: "Miguel", apellido: "Arone" },
				{ text: "Freddy", apellido: "Pachas" },
				{ text: "Carlos", apellido: "Alcedo" },
			],
		}),

		methods: {
			enviarInformacion() {
				if (!this.nombres || this.nombres.length === 0) {
					alert("No hay datos para enviar.");
					return;
				}

				const url = "http://localhost:8000/ia/";
				const data = {
					nombres: this.nombres.map((persona) => ({
						nombre: persona.text,
						apellido: persona.apellido,
					})),
				};
				axios
					.post(url, data)
					.then((response) => {
						alert(
							"Información enviada correctamente: " +
								JSON.stringify(response.data)
						);
					})
					.catch((error) => {
						alert("Error al enviar la información: " + error.message);
					});
			},
		},
	};
</script>
