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
	<div v-else class="contenido">
		<v-form class="cuadro2" fast-fail @submit.prevent>
			<v-card
				class="login-card"
				elevation="2"
				color="rgba(146, 139, 139, 0.85)"
				width="800"
				height="800">
				<div class="titulo">
					<h1 class="text">INFORMACIÓN DEL USUARIO</h1>
				</div>
				<v-img
					class="reporentre_icon"
					src="../assets/img/reporentre.png"></v-img>
				<v-divider :thickness="1" class="linea border-opacity-100"></v-divider>
				<div class="caja1">
					<v-text-field
						class="edad"
						label="Edad"
						variant="solo"
						disabled
						v-model="selectedUser.Edad"
						placeholder="Ingrese su edad"
						rounded="xl">
					</v-text-field>
				</div>
				<v-select
					class="habilidad"
					label="Habilidad de programación"
					variant="solo"
					chips
					disabled
					v-model="selectedUser.habilidadesprg"
					placeholder="Habilidad"
					rounded="xl">
				</v-select>
				<v-select
					class="participacion"
					label="Participación de Tec"
					variant="solo"
					v-model="selectedUser.participacion"
					chips
					disabled
					placeholder="Participación"
					rounded="xl">
				</v-select>
				<v-select
					class="condicion"
					label="Condición Estudiante"
					variant="solo"
					chips
					v-model="selectedUser.condicion"
					disabled
					rounded="xl">
				</v-select>
				<v-select
					class="habilidades"
					label="Habilidades blandas"
					variant="solo"
					chips
					multiple
					disabled
					v-model="selectedUser.habilidadesbla"
					rounded="xl">
				</v-select>
				<v-select
					class="nivel"
					label="Nivel Académico"
					variant="solo"
					chips
					disabled
					v-model="selectedUser.desNivelA"
					placeholder="Nivel Académico"
					rounded="xl">
				</v-select>
				<v-select
					class="habilidadmate"
					label="Habilidad Matemáticas"
					variant="solo"
					disabled
					v-model="selectedUser.habilidadesmat"
					rounded="xl">
				</v-select>
				<v-text-field
					class="notapromedio"
					label="Nota Promedio"
					variant="solo"
					placeholder="Promedio"
					disabled
					v-model="this.selectedUser.nota_promedio"
					rounded="xl">
				</v-text-field>
				<v-select
					class="conolenguajes"
					label="Conocimientos Lenguajes"
					v-model="selectedUser.lenguaje"
					variant="solo"
					chips
					disabled
					multiple
					rounded="xl">
				</v-select>
				<v-select
					class="interes"
					label="Intereses"
					disabled
					variant="solo"
					chips
					multiple
					v-model="selectedUser.interes"
					rounded="xl">
				</v-select>

				<v-btn
					density="compact"
					elevation="20"
					class="btn-reentrenar"
					type="submit"
					width="290"
					height="52"
					color="rgba(27, 18, 83, 1)"
					@click="predecir"
					>PREDECIR RUTA
				</v-btn>
				<v-btn
					density="compact"
					elevation="20"
					class="btn-atraas"
					type="submit"
					width="290px"
					height="52px"
					color="rgba(236, 100, 82, 1)"
					@click="regresar3"
					>Atras <v-icon>mdi-arrow-left</v-icon></v-btn
				>
			</v-card>
		</v-form>
		<div v-if="isLoadingP">
			<v-card
				class="prediccion-card"
				elevation="2"
				color="rgba(146, 139, 139, 0.85)"
				width="800"
				height="800">
				<div class="container_SevMini">
					<div class="SevMini">
						<svg
							width="74"
							height="90"
							viewBox="0 0 74 90"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M40 76.5L72 57V69.8615C72 70.5673 71.628 71.2209 71.0211 71.5812L40 90V76.5Z"
								fill="#396CAA"></path>
							<path
								d="M34 75.7077L2 57V69.8615C2 70.5673 2.37203 71.2209 2.97892 71.5812L34 90V75.7077Z"
								fill="#396DAC"></path>
							<path d="M34 76.5H40V90H34V76.5Z" fill="#396CAA"></path>
							<path
								d="M3.27905 55.593L35.2806 37.5438C36.3478 36.9419 37.6522 36.9419 38.7194 37.5438L70.721 55.593C71.7294 56.1618 71.7406 57.6102 70.7411 58.1945L39.2712 76.593C37.8682 77.4133 36.1318 77.4133 34.7288 76.593L3.25887 58.1945C2.25937 57.6102 2.27061 56.1618 3.27905 55.593Z"
								fill="#163C79"
								stroke="#396CAA"></path>
							<path
								d="M40 79L72 60V70.4001C72 71.1151 71.6183 71.7758 70.9987 72.1329L40 90V79Z"
								fill="#173D7A"></path>
							<path d="M34 79L3 61V71.5751L34 90V79Z" fill="#0665B2"></path>
							<path
								id="strobe_color1"
								d="M58 72.5L60.5 71V74L58 75.5V72.5Z"
								fill="#FF715E"></path>
							<path
								id="strobe_color2"
								d="M63 69.5L65.5 68V71L63 72.5V69.5Z"
								fill="#17e300b4"></path>
							<path d="M68 66.5L70.5 65V68L68 69.5V66.5Z" fill="#FF715E"></path>
							<path
								d="M40 58.5L72 39V51.8615C72 52.5673 71.628 53.2209 71.0211 53.5812L40 72V58.5Z"
								fill="#396CAA"></path>
							<path
								d="M34 57.7077L2 39V51.8615C2 52.5673 2.37203 53.2209 2.97892 53.5812L34 72V57.7077Z"
								fill="#396DAC"></path>
							<path d="M34 58.5H40V72H34V58.5Z" fill="#396CAA"></path>
							<path
								d="M3.27905 37.593L35.2806 19.5438C36.3478 18.9419 37.6522 18.9419 38.7194 19.5438L70.721 37.593C71.7294 38.1618 71.7406 39.6102 70.7411 40.1945L39.2712 58.593C37.8682 59.4133 36.1318 59.4133 34.7288 58.593L3.25887 40.1945C2.25937 39.6102 2.27061 38.1618 3.27905 37.593Z"
								fill="#163C79"
								stroke="#396CAA"></path>
							<path
								d="M40 61L72 42V52.4001C72 53.1151 71.6183 53.7758 70.9987 54.1329L40 72V61Z"
								fill="#173D7A"></path>
							<path d="M34 61L3 43V53.5751L34 72V61Z" fill="#0665B2"></path>
							<path d="M58 54.5L60.5 53V56L58 57.5V54.5Z" fill="#FF715E"></path>
							<path d="M63 51.5L65.5 50V53L63 54.5V51.5Z" fill="black"></path>
							<path
								id="strobe_color1"
								d="M63 51.5L65.5 50V53L63 54.5V51.5Z"
								fill="#FF715E"></path>
							<path d="M68 48.5L70.5 47V50L68 51.5V48.5Z" fill="#FF715E"></path>
							<path
								d="M40 40.5L72 21V33.8615C72 34.5673 71.628 35.2209 71.0211 35.5812L40 54V40.5Z"
								fill="#396CAA"></path>
							<path
								d="M34 39.7077L2 21V33.8615C2 34.5673 2.37203 35.2209 2.97892 35.5812L34 54V39.7077Z"
								fill="#396DAC"></path>
							<path d="M34 40.5H40V54H34V40.5Z" fill="#396CAA"></path>
							<path
								d="M3.27905 19.593L35.2806 1.54381C36.3478 0.941872 37.6522 0.941872 38.7194 1.54381L70.721 19.593C71.7294 20.1618 71.7406 21.6102 70.7411 22.1945L39.2712 40.593C37.8682 41.4133 36.1318 41.4133 34.7288 40.593L3.25887 22.1945C2.25937 21.6102 2.27061 20.1618 3.27905 19.593Z"
								fill="#124E89"
								stroke="#396CAA"></path>
							<path
								d="M40 43L72 24V34.4001C72 35.1151 71.6183 35.7758 70.9987 36.1329L40 54V43Z"
								fill="#173D7A"></path>
							<path d="M34 43L3 25V35.5751L34 54V43Z" fill="#0665B2"></path>
							<path d="M68 30.5L70.5 29V32L68 33.5V30.5Z" fill="#FF715E"></path>
							<path
								id="strobe_color3"
								d="M58 36.5L60.5 35V38L58 39.5V36.5Z"
								fill="#FF715E"></path>
							<path d="M63 33.5L65.5 32V35L63 36.5V33.5Z" fill="#FF715E"></path>
							<path
								d="M20.1902 22.0719C18.8101 21.3026 18.8252 19.3119 20.2168 18.5636L36.1054 10.0189C37.2884 9.3827 38.7116 9.3827 39.8946 10.0189L55.7832 18.5636C57.1748 19.3119 57.1899 21.3026 55.8098 22.0719L40.4345 30.6429C38.9211 31.4865 37.0789 31.4865 35.5655 30.6429L20.1902 22.0719Z"
								fill="#396CAA"></path>
							<path
								d="M11 52.755C11 51.9801 11.8432 51.4997 12.5098 51.8947L23.5196 58.419C24.1273 58.7792 24.5 59.4332 24.5 60.1396V60.245C24.5 61.0199 23.6568 61.5003 22.9902 61.1053L11.9804 54.581C11.3727 54.2208 11 53.5668 11 52.8604V52.755Z"
								fill="#396CAA"></path>
							<mask
								id="mask0_2_176"
								style="mask-type: alpha"
								maskUnits="userSpaceOnUse"
								x="11"
								y="51"
								width="14"
								height="11">
								<path
									d="M11 52.755C11 51.9801 11.8432 51.4997 12.5098 51.8947L23.5196 58.419C24.1273 58.7792 24.5 59.4332 24.5 60.1396V60.245C24.5 61.0199 23.6568 61.5003 22.9902 61.1053L11.9804 54.581C11.3727 54.2208 11 53.5668 11 52.8604V52.755Z"
									fill="#396CAA"></path>
							</mask>
							<g mask="url(#mask0_2_176)">
								<path
									d="M11.5 52.7417C11.5 51.9803 12.3349 51.5138 12.9833 51.9128L23.5482 58.4143C24.1397 58.7783 24.5 59.4231 24.5 60.1176V61.5L12.4598 54.4195C11.8651 54.0698 11.5 53.4315 11.5 52.7417V52.7417Z"
									fill="#163874"></path>
							</g>
							<mask
								id="mask1_2_176"
								style="mask-type: alpha"
								maskUnits="userSpaceOnUse"
								x="19"
								y="9"
								width="38"
								height="23">
								<path
									d="M20.1902 22.0719C18.8101 21.3026 18.8252 19.3119 20.2168 18.5636L36.1054 10.0189C37.2884 9.3827 38.7116 9.3827 39.8946 10.0189L55.7832 18.5636C57.1748 19.3119 57.1899 21.3026 55.8098 22.0719L40.4345 30.6429C38.9211 31.4865 37.0789 31.4865 35.5655 30.6429L20.1902 22.0719Z"
									fill="#396CAA"></path>
							</mask>
							<g mask="url(#mask1_2_176)">
								<path
									d="M18 21.3115L36.167 11.9451C37.3171 11.3521 38.6829 11.3521 39.833 11.9451L58 21.3115L40.3567 30.7405C38.8841 31.5275 37.1159 31.5275 35.6433 30.7405L18 21.3115Z"
									fill="#173D7A"></path>
							</g>
							<path
								d="M37.447 21.565L35 19.9799L37.6941 18.66L40.141 20.245L37.447 21.565Z"
								fill="#FF715E"></path>
							<path
								d="M48.9738 30.8646L47.0741 29.7745L49.1792 28.684L51.0789 29.7741L48.9738 30.8646Z"
								fill="#173E7B"></path>
							<path
								d="M52.0661 29.0093L50.1635 27.9242L52.2657 26.8282L54.1682 27.9133L52.0661 29.0093Z"
								fill="#173E7B"></path>
							<path
								id="strobe_led1"
								d="M55.1521 27.1464L53.2538 26.054L55.3602 24.9661L57.2585 26.0586L55.1521 27.1464Z"
								fill="#3A6DAB"></path>
						</svg>
					</div>
					<div class="Ghost">
						<svg
							width="60"
							height="36"
							viewBox="0 0 60 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1.96545 19.4296C0.643777 18.6484 0.658726 16.7309 1.99242 15.9705L28.0186 1.12982C29.2467 0.429534 30.7533 0.429533 31.9814 1.12982L58.0076 15.9704C59.3413 16.7309 59.3562 18.6484 58.0346 19.4296L32.5442 34.4962C30.9749 35.4238 29.0251 35.4238 27.4558 34.4962L1.96545 19.4296Z"
								fill="#3C4F6D"></path>
						</svg>
					</div>
				</div>
				<div class="terminal">
					<div class="terminal-header">
						<div class="buttons">
							<span class="close"></span>
							<span class="minimize"></span>
							<span class="maximize"></span>
						</div>
						<div class="title">Status</div>
					</div>
					<div class="terminal-body">
						<div class="terminal-loader">
							<span class="loader-text"
								>¿Deseas saber tu ruta de aprendizaje?</span
							>
							<span id="dot1" class="dot">.</span>
							<span id="dot2" class="dot">.</span>
							<span id="dot3" class="dot">.</span>
						</div>
					</div>
				</div>
			</v-card>
		</div>
		<div v-if="isLoadingPrediccion">
			<v-card
				class="prediccion-card"
				elevation="2"
				color="rgba(146, 139, 139, 0.85)"
				width="800"
				height="800">
				<div class="container_SevMini">
					<div class="SevMini">
						<svg
							width="74"
							height="90"
							viewBox="0 0 74 90"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M40 76.5L72 57V69.8615C72 70.5673 71.628 71.2209 71.0211 71.5812L40 90V76.5Z"
								fill="#396CAA"></path>
							<path
								d="M34 75.7077L2 57V69.8615C2 70.5673 2.37203 71.2209 2.97892 71.5812L34 90V75.7077Z"
								fill="#396DAC"></path>
							<path d="M34 76.5H40V90H34V76.5Z" fill="#396CAA"></path>
							<path
								d="M3.27905 55.593L35.2806 37.5438C36.3478 36.9419 37.6522 36.9419 38.7194 37.5438L70.721 55.593C71.7294 56.1618 71.7406 57.6102 70.7411 58.1945L39.2712 76.593C37.8682 77.4133 36.1318 77.4133 34.7288 76.593L3.25887 58.1945C2.25937 57.6102 2.27061 56.1618 3.27905 55.593Z"
								fill="#163C79"
								stroke="#396CAA"></path>
							<path
								d="M40 79L72 60V70.4001C72 71.1151 71.6183 71.7758 70.9987 72.1329L40 90V79Z"
								fill="#173D7A"></path>
							<path d="M34 79L3 61V71.5751L34 90V79Z" fill="#0665B2"></path>
							<path
								id="strobe_color1"
								d="M58 72.5L60.5 71V74L58 75.5V72.5Z"
								fill="#FF715E"></path>
							<path
								id="strobe_color2"
								d="M63 69.5L65.5 68V71L63 72.5V69.5Z"
								fill="#17e300b4"></path>
							<path d="M68 66.5L70.5 65V68L68 69.5V66.5Z" fill="#FF715E"></path>
							<path
								d="M40 58.5L72 39V51.8615C72 52.5673 71.628 53.2209 71.0211 53.5812L40 72V58.5Z"
								fill="#396CAA"></path>
							<path
								d="M34 57.7077L2 39V51.8615C2 52.5673 2.37203 53.2209 2.97892 53.5812L34 72V57.7077Z"
								fill="#396DAC"></path>
							<path d="M34 58.5H40V72H34V58.5Z" fill="#396CAA"></path>
							<path
								d="M3.27905 37.593L35.2806 19.5438C36.3478 18.9419 37.6522 18.9419 38.7194 19.5438L70.721 37.593C71.7294 38.1618 71.7406 39.6102 70.7411 40.1945L39.2712 58.593C37.8682 59.4133 36.1318 59.4133 34.7288 58.593L3.25887 40.1945C2.25937 39.6102 2.27061 38.1618 3.27905 37.593Z"
								fill="#163C79"
								stroke="#396CAA"></path>
							<path
								d="M40 61L72 42V52.4001C72 53.1151 71.6183 53.7758 70.9987 54.1329L40 72V61Z"
								fill="#173D7A"></path>
							<path d="M34 61L3 43V53.5751L34 72V61Z" fill="#0665B2"></path>
							<path d="M58 54.5L60.5 53V56L58 57.5V54.5Z" fill="#FF715E"></path>
							<path d="M63 51.5L65.5 50V53L63 54.5V51.5Z" fill="black"></path>
							<path
								id="strobe_color1"
								d="M63 51.5L65.5 50V53L63 54.5V51.5Z"
								fill="#FF715E"></path>
							<path d="M68 48.5L70.5 47V50L68 51.5V48.5Z" fill="#FF715E"></path>
							<path
								d="M40 40.5L72 21V33.8615C72 34.5673 71.628 35.2209 71.0211 35.5812L40 54V40.5Z"
								fill="#396CAA"></path>
							<path
								d="M34 39.7077L2 21V33.8615C2 34.5673 2.37203 35.2209 2.97892 35.5812L34 54V39.7077Z"
								fill="#396DAC"></path>
							<path d="M34 40.5H40V54H34V40.5Z" fill="#396CAA"></path>
							<path
								d="M3.27905 19.593L35.2806 1.54381C36.3478 0.941872 37.6522 0.941872 38.7194 1.54381L70.721 19.593C71.7294 20.1618 71.7406 21.6102 70.7411 22.1945L39.2712 40.593C37.8682 41.4133 36.1318 41.4133 34.7288 40.593L3.25887 22.1945C2.25937 21.6102 2.27061 20.1618 3.27905 19.593Z"
								fill="#124E89"
								stroke="#396CAA"></path>
							<path
								d="M40 43L72 24V34.4001C72 35.1151 71.6183 35.7758 70.9987 36.1329L40 54V43Z"
								fill="#173D7A"></path>
							<path d="M34 43L3 25V35.5751L34 54V43Z" fill="#0665B2"></path>
							<path d="M68 30.5L70.5 29V32L68 33.5V30.5Z" fill="#FF715E"></path>
							<path
								id="strobe_color3"
								d="M58 36.5L60.5 35V38L58 39.5V36.5Z"
								fill="#FF715E"></path>
							<path d="M63 33.5L65.5 32V35L63 36.5V33.5Z" fill="#FF715E"></path>
							<path
								d="M20.1902 22.0719C18.8101 21.3026 18.8252 19.3119 20.2168 18.5636L36.1054 10.0189C37.2884 9.3827 38.7116 9.3827 39.8946 10.0189L55.7832 18.5636C57.1748 19.3119 57.1899 21.3026 55.8098 22.0719L40.4345 30.6429C38.9211 31.4865 37.0789 31.4865 35.5655 30.6429L20.1902 22.0719Z"
								fill="#396CAA"></path>
							<path
								d="M11 52.755C11 51.9801 11.8432 51.4997 12.5098 51.8947L23.5196 58.419C24.1273 58.7792 24.5 59.4332 24.5 60.1396V60.245C24.5 61.0199 23.6568 61.5003 22.9902 61.1053L11.9804 54.581C11.3727 54.2208 11 53.5668 11 52.8604V52.755Z"
								fill="#396CAA"></path>
							<mask
								id="mask0_2_176"
								style="mask-type: alpha"
								maskUnits="userSpaceOnUse"
								x="11"
								y="51"
								width="14"
								height="11">
								<path
									d="M11 52.755C11 51.9801 11.8432 51.4997 12.5098 51.8947L23.5196 58.419C24.1273 58.7792 24.5 59.4332 24.5 60.1396V60.245C24.5 61.0199 23.6568 61.5003 22.9902 61.1053L11.9804 54.581C11.3727 54.2208 11 53.5668 11 52.8604V52.755Z"
									fill="#396CAA"></path>
							</mask>
							<g mask="url(#mask0_2_176)">
								<path
									d="M11.5 52.7417C11.5 51.9803 12.3349 51.5138 12.9833 51.9128L23.5482 58.4143C24.1397 58.7783 24.5 59.4231 24.5 60.1176V61.5L12.4598 54.4195C11.8651 54.0698 11.5 53.4315 11.5 52.7417V52.7417Z"
									fill="#163874"></path>
							</g>
							<mask
								id="mask1_2_176"
								style="mask-type: alpha"
								maskUnits="userSpaceOnUse"
								x="19"
								y="9"
								width="38"
								height="23">
								<path
									d="M20.1902 22.0719C18.8101 21.3026 18.8252 19.3119 20.2168 18.5636L36.1054 10.0189C37.2884 9.3827 38.7116 9.3827 39.8946 10.0189L55.7832 18.5636C57.1748 19.3119 57.1899 21.3026 55.8098 22.0719L40.4345 30.6429C38.9211 31.4865 37.0789 31.4865 35.5655 30.6429L20.1902 22.0719Z"
									fill="#396CAA"></path>
							</mask>
							<g mask="url(#mask1_2_176)">
								<path
									d="M18 21.3115L36.167 11.9451C37.3171 11.3521 38.6829 11.3521 39.833 11.9451L58 21.3115L40.3567 30.7405C38.8841 31.5275 37.1159 31.5275 35.6433 30.7405L18 21.3115Z"
									fill="#173D7A"></path>
							</g>
							<path
								d="M37.447 21.565L35 19.9799L37.6941 18.66L40.141 20.245L37.447 21.565Z"
								fill="#FF715E"></path>
							<path
								d="M48.9738 30.8646L47.0741 29.7745L49.1792 28.684L51.0789 29.7741L48.9738 30.8646Z"
								fill="#173E7B"></path>
							<path
								d="M52.0661 29.0093L50.1635 27.9242L52.2657 26.8282L54.1682 27.9133L52.0661 29.0093Z"
								fill="#173E7B"></path>
							<path
								id="strobe_led1"
								d="M55.1521 27.1464L53.2538 26.054L55.3602 24.9661L57.2585 26.0586L55.1521 27.1464Z"
								fill="#3A6DAB"></path>
						</svg>
					</div>
					<div class="Ghost">
						<svg
							width="60"
							height="36"
							viewBox="0 0 60 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1.96545 19.4296C0.643777 18.6484 0.658726 16.7309 1.99242 15.9705L28.0186 1.12982C29.2467 0.429534 30.7533 0.429533 31.9814 1.12982L58.0076 15.9704C59.3413 16.7309 59.3562 18.6484 58.0346 19.4296L32.5442 34.4962C30.9749 35.4238 29.0251 35.4238 27.4558 34.4962L1.96545 19.4296Z"
								fill="#3C4F6D"></path>
						</svg>
					</div>
				</div>
				<div class="terminal">
					<div class="terminal-header">
						<div class="buttons">
							<span class="close"></span>
							<span class="minimize"></span>
							<span class="maximize"></span>
						</div>
						<div class="title">Status</div>
					</div>
					<div class="terminal-body">
						<div class="terminal-loader">
							<span class="loader-text">Prediciendo</span>
							<span id="dot1" class="dot">.</span>
							<span id="dot2" class="dot">.</span>
							<span id="dot3" class="dot">.</span>
						</div>
					</div>
				</div>
			</v-card>
		</div>
		<div v-if="isLoadingD">
			<v-card
				class="prediccion-card"
				elevation="2"
				color="rgba(146, 139, 139, 0.85)"
				width="800"
				height="800">
				<div class="info-container" style="padding: 20px;">
					<v-card >
						<v-card-title>Datos Analizados</v-card-title>
						<v-card-text>
							<v-list>
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>Edad</v-list-item-title>
										<v-list-item-subtitle>{{
											this.infoPrediccion.datos_nuevos[0].edad
										}}</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>Nivel Académico</v-list-item-title>
										<v-list-item-subtitle>{{
											this.infoPrediccion.datos_nuevos[0].nivel_academico
										}}</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title
											>Habilidad Programación</v-list-item-title
										>
										<v-list-item-subtitle>{{
											this.infoPrediccion.datos_nuevos[0].habilidad_programacion
										}}</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>Habilidad Matemática</v-list-item-title>
										<v-list-item-subtitle>{{
											this.infoPrediccion.datos_nuevos[0].habilidad_matematicas
										}}</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title
											>Participa en Club de Tecnología</v-list-item-title
										>
										<v-list-item-subtitle>{{
											this.infoPrediccion.datos_nuevos[0]
												.participacion_club_tecnologia
												? "Sí"
												: "No"
										}}</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>Nota Promedio</v-list-item-title>
										<v-list-item-subtitle>{{
											this.infoPrediccion.datos_nuevos[0].nota_promedio
										}}</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>Condición Estudiante</v-list-item-title>
										<v-list-item-subtitle>{{
											this.infoPrediccion.datos_nuevos[0].condicion_estudiante
										}}</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title
											>Conocimiento de Lenguajes</v-list-item-title
										>
										<v-list-item-subtitle>
											<v-chip
												v-for="(lenguaje, index) in this.infoPrediccion
													.datos_nuevos[0].conocimiento_lenguajes"
												:key="index"
												color="primary"
												text-color="white"
												label>
												{{ lenguaje }}
											</v-chip>
										</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>Habilidades Blandas</v-list-item-title>
										<v-list-item-subtitle>
											<v-chip
												v-for="(habilidad, index) in this.infoPrediccion
													.datos_nuevos[0].habilidades_blandas"
												:key="index"
												color="primary"
												text-color="white"
												label>
												{{ habilidad }}
											</v-chip>
										</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>Intereses</v-list-item-title>
										<v-list-item-subtitle>
											<v-chip
												v-for="(interes, index) in this.infoPrediccion
													.datos_nuevos[0].intereses"
												:key="index"
												color="primary"
												text-color="white"
												label>
												{{ interes }}
											</v-chip>
										</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
							</v-list>
						</v-card-text>
					</v-card>
					<v-card style="margin-top: 10px;">
						<v-card-title>Predicción</v-card-title>
						<v-card-text>
							<v-list>
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title>Predicción</v-list-item-title>
										<v-list-item-subtitle>{{
											this.infoPrediccion.predicciones[0]
										}}</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
							</v-list>
						</v-card-text>
					</v-card>
				</div>
			</v-card>
		</div>
	</div>
</template>

<style scoped>
	/* Terminal Window */
	.terminal {
		margin-left: 150px;
		width: 500px;
		background-color: #000;
		color: #0f0;
		font-family: "Courier New", Courier, monospace;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
	}

	/* Terminal Header */
	.terminal-header {
		background-color: #333;
		padding: 5px;
		display: flex;
		align-items: center;
		color: #fff;
	}

	.buttons {
		display: flex;
		margin-right: 15px;
	}

	.buttons span {
		height: 15px;
		width: 15px;
		border-radius: 50%;
		display: inline-block;
		margin-right: 5px;
	}

	.close {
		background-color: #ff605c;
	}
	.minimize {
		background-color: #ffbd44;
	}
	.maximize {
		background-color: #00ca4e;
	}

	.title {
		flex-grow: 1;
		text-align: center;
	}

	/* Terminal Body */
	.terminal-body {
		padding: 10px;
	}

	.terminal-loader {
		display: inline-flex;
		align-items: center;
	}

	.loader-text {
		margin-right: 5px;
	}

	.dot {
		opacity: 0;
		animation: dotFadeInOut 1.5s infinite;
	}

	@keyframes dotFadeInOut {
		0%,
		100% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
	}

	#dot1 {
		animation-delay: 0.5s;
	}

	#dot2 {
		animation-delay: 0.6s;
	}

	#dot3 {
		animation-delay: 0.7s;
	}

	.container_SevMini {
		margin-top: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.Ghost {
		transform: translate(0px, -25px);
		z-index: -1;
		animation: opacidad 4s infinite ease-in-out;
	}

	@keyframes opacidad {
		0% {
			opacity: 1;
			scale: 1;
		}

		50% {
			opacity: 0.5;
			scale: 0.9;
		}

		100% {
			opacity: 1;
			scale: 1;
		}
	}

	@keyframes estroboscopico {
		0% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}

		51% {
			opacity: 1;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes rebote {
		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-10px);
		}
	}

	@keyframes estroboscopico1 {
		0%,
		50%,
		100% {
			fill: rgb(255, 95, 74);
		}

		25%,
		75% {
			fill: rgb(16, 53, 115);
		}
	}

	@keyframes estroboscopico2 {
		0%,
		50%,
		100% {
			fill: #17e300;
		}

		25%,
		75% {
			fill: #17e300b4;
		}
	}

	.SevMini {
		animation: rebote 4s infinite ease-in-out;
	}

	#strobe_led1 {
		animation: estroboscopico 0.5s infinite;
	}

	#strobe_color1 {
		animation: estroboscopico2 0.8s infinite;
	}

	#strobe_color3 {
		animation: estroboscopico1 0.8s infinite;
		animation-delay: 3s;
	}

	.login-card {
		border-radius: 18px; /* Rounded corners */
		padding: 30px; /* Padding inside the card */
		left: 5%;
		margin-top: 70px;
	}
	.prediccion-card {
		border-radius: 18px;
		left: 52%;
		top: -784px;
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

	.linea {
		margin-top: 24px;
		width: 90%;
		margin-left: 35px;
	}
	.titulo {
		display: flex;
		align-items: flex-start;
		position: absolute;
		left: 33%;
		top: 11.8%;
		color: white;
	}

	.titulo,
	.text {
		font-size: 20px;
		font-weight: 500;
		font-weight: bold;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
			Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
			sans-serif, sans-serif;
	}
	/* ICONOS*/
	.reporentre_icon {
		margin: auto;
		top: -10px;
		width: 70px;
		padding-bottom: 10px;
	}

	.btn-reentrenar {
		left: 8%;
		top: 28px;
		border-radius: 15px;
		font-size: 16px;
		font-weight: bold;
		font-family: Arial, Helvetica, sans-serif;
	}
	.btn-atraas {
		left: 12%;
		top: 27px;
		border-radius: 15px;
		font-size: 16px;
		font-weight: bold;
		font-family: Arial, Helvetica, sans-serif;
	}
	.edad {
		color: white;
		width: 250px;
		height: 100px;
		margin-left: 10.5%;
		margin-top: 3%;
	}
	.habilidad {
		color: white;
		width: 250px;
		height: 100px;
		margin-left: 10.5%;
	}
	.participacion {
		width: 250px;
		height: 100px;
		margin-left: 10.5%;
	}
	.condicion {
		width: 250px;
		height: 100px;
		margin-left: 10.5%;
	}
	.habilidades {
		width: 250px;
		height: 100px;
		margin-left: 10.5%;
	}
	.nivel {
		width: 250px;
		height: 100px;
		margin-left: 55%;
		margin-top: -501px;
	}
	.habilidadmate {
		width: 250px;
		height: 100px;
		margin-left: 55%;
	}
	.notapromedio {
		width: 250px;
		height: 100px;
		margin-left: 55%;
	}
	.conolenguajes {
		width: 250px;
		height: 100px;
		margin-left: 55%;
	}
	.interes {
		width: 250px;
		height: 100px;
		margin-left: 55%;
	}
	.rounded {
		border-radius: 16px;
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

<script src="./Scripts/Prediccion.js"></script>
