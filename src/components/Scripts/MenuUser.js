export default {
	name: "MenuUser",
	data: () => ({}),
    methods:{
        login(){
            this.$router.push("/")
        },
        
        recuperarContraseña(){
            this.$router.push("/recucontrauser")
        },

        actualizarinf(){
            this.$router.push("/actualizarinfo")

        },
        predic(){
            this.$router.push("/prediccion")

        },

    }
};
