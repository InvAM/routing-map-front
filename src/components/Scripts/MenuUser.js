export default {
	name: "MenuUser",
	data: () => ({}),
    methods:{
        recuperarContraseña(){
            this.$router.push("/recucontrauser")
        },
        login(){
            this.$router.push("/")
        }
    }
};
