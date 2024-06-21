<template>
	<div class="forgotPassword">
		<div
			style="
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
                margin-right: 2%;
			">
			<v-icon
				style="
					background-color:rgba(146, 139, 139, 0.85);
					width: 680px;
					height: 100px;
					border-top-left-radius: 50px;
					border-top-right-radius: 50px;
				"
				>mdi-security</v-icon
			>
			<div
				style="
					background-color:rgba(146, 139, 139, 0.85);
					width: 680px;
					border-bottom-left-radius: 50px;
					border-bottom-right-radius: 50px;
					margin-top: 0px;
				">
				<h1
					style="text-align: center; margin-top: -6.5px; color: white"
					class="titulo1">
					RECUPERAR CONTRASEÑA
				</h1>
				<v-divider
					:thickness="1"
					class="border-opacity-100"
					style="width: 500px; margin: auto"></v-divider>
				<p
					style="
						width: 450px;
						margin: auto;
						margin-top: 15px;
						color: #ecfeff;
						text-align: center;
					"
					class="font-italic font-weight-thin">
					En esta opción te ayudaremos a reestablecer tu contraseña, debes
					proporcionarnos la información necesaria para tal propósito.
				</p>
				<v-text-field
					style="height: 100px"
					class="usuario"
					width="400"
					label="Usuario"
					variant="solo"
					v-model="username"></v-text-field>
					<v-text-field
					v-model="password"
					style="height: 100px"
					class="contra"
					width="400"
					label="Contraseña"
					variant="solo"
					:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
					:type="visible ? 'text' : 'password'"
					density="compact"
					prepend-inner-icon="mdi-lock-outline"
					@click:append-inner="visible = !visible"
					:rules="[passwordRule]"
				></v-text-field>
				<v-text-field
					v-model="password2"
					style="height: 100px; margin-bottom: 50px"
					class="contra2"
					width="400"
					label="Confirmar nueva contraseña"
					variant="solo"
					:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
					:type="visible ? 'text' : 'password'"
					density="compact"
					prepend-inner-icon="mdi-lock-outline"
					@click:append-inner="visible = !visible"
					:rules="[confirmPasswordRule]"
				></v-text-field>
			</div>
			<v-hover>
				<template v-slot:default="{ isHovering, props }">
					<v-btn
                        class="btn-aceptar"
                        height="45"
						@click="updatePassword"
						style="align-self: center; margin-top: -50px"
						v-bind="props"
						:color="isHovering ? '#14b8a6' : undefined"
						>Actualizar Contraseña</v-btn
					>
					<v-btn
                density="compact"
                class="btn-atraas"
                type="submit"
				width="120px"
				height="45px"
                color="rgba(236, 100, 82, 1)"
                @click="regresar2"
						>Atras <v-icon>mdi-arrow-left</v-icon></v-btn>
				</template>
			</v-hover>
		</div>
	</div>
</template>

<style>
	.forgotPassword {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #111827; /* Color de fondo para toda la página */
        background-image: url("../assets/img/fondofinal.jpg");
    background-size: cover;
    background-position: center;
    position: fixed;
    top: 0;
    left: 0;
	}

    .titulo1 {
    display: flex;
    align-items: flex-start;
    position: absolute;
    left:41.8%;
    top: 26.8%;
    color: white;
	font-size: 19px;
	width: bold;
	font-family:'Arial Black';
}

.usuario{
    color: white;
    width: 400px;
    height: 110px;
    margin-left: 22%;
    margin-top: 18px;
}

.contra{
    margin-top:-10px;
    color: white;
    width: 400px;
    height: 130px;
    margin-left: 22%;
}
.contra2{
    margin-top:-11px;
    color: white;
    width: 400px;
    height: 130px;
    margin-left: 22%;
}

	.custom-text-field .v-messages__message {
	font-size: 12px; /* Ajusta el tamaño de la fuente */
	color: #dc2626; /* Cambia el color del texto de error */
	text-align: center;
    margin-left: 91px;
	 /* Centra el texto */
}

.v-messages__message {
    margin-left: 91px;
    margin-top: -18px;
}



.btn-aceptar{
    top: -14px;
    left: -50px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}
.btn-atraas{
	border-radius: 15px;
    font-size: 14px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    left: 21.4%;
    top:-60px;
	
}

</style>

<script src="./Scripts/RecuperarContraUser.js"></script>
