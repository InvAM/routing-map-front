<template>
	<div class="fondo_login">
		<v-sheet
			class="mx-auto pt-10 pl-10 pr-10 pb-10 form-login"
			width="450"
			height="400">
			<v-form fast-fail @submit.prevent>
				<v-img
					class="mx-auto my-6"
					max-width="228"
					src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"></v-img>
				<v-card
					class="mx-auto pa-12 pb-8"
					elevation="8"
					max-width="500"
					rounded="lg"
					max-height="500"
					height="300"
					color="#262626">
					<v-text-field label="Nombre usuario"></v-text-field>

					<v-text-field
						v-model="password"
						:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
						:rules="[rules.required]"
						:type="show1 ? 'text' : 'password'"
						hint="At least 8 characters"
						label="Normal with hint text"
						name="input-10-1"
						counter
						@click:append="show1 = !show1"></v-text-field>

					<v-btn class="mt-2" type="submit" block style="color: black"
						>Submit</v-btn
					>
				</v-card>
			</v-form>
		</v-sheet>
	</div>
</template>
<style>
	body,
	html {
		margin: 0;
		padding: 0;
		height: 100%;
	}

	.fondo_login {
		background-image: url("../assets/img/fondo_login.jpg");
		background-size: cover;
		background-position: center;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.form-login {
		margin-top: 4%;
		background: none;
	}
</style>
<script src="./Scripts/login.js"></script>
