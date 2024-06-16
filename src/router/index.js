import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/registrarusuario",
		name: "RegistrarUsuario",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../components/RegistrarUsuario.vue"
			),
	},

	{
		path: "/mostrarinfousuario",
		name: "MostrarInfoUsuario",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../components/MostrarInfoUsuario.vue"
			),
	},

	{
		path: "/buscarusuario",
		name: "BuscarUsuario",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../components/BuscarUsuario.vue"),
	},
	{
		path: "/crearcuenta",
		name: "CrearCuenta",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../components/CrearCuenta.vue"),
	},

	{
		path: "/recucontrauser",
		name: "RecuperarContraUser",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../components/RecuperarContraUser.vue"
			),
	},
	{
		path: "/recucontraadmin",
		name: "RecuperarContraAdmin",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../components/RecuperarContraAdmin.vue"
			),
	},
	{
		path: "/prediccion",
		name: "Prediccion",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../components/Prediccion.vue"),
	},
	{
		path: "/actualizarinfo",
		name: "Actualizarinfo",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../components/Actualizarinfo.vue"
			),
	},
	{
		path: "/menu",
		name: "Menu",
		component: () =>
			import(/* webpackChunkName: "about" */ "../components/Menu.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
