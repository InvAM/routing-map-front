import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/menuuser",
		name: "MenuUser",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../components/MenuUser.vue"
			),
	},
	{
		path: "/menuadmin",
		name: "MenuAdmin",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../components/MenuAdmin.vue"
			),
	},
	{
		path: "/loginadmin",
		name: "LoginAdmin",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../components/LoginAdmin.vue"
			),
	},
	{
		path: "/repoentrenamiento",
		name: "RepoEntrenamiento",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../components/RepoEntrenamiento.vue"
			),
	},
	{
		path: "/repoprediccion",
		name: "RepoPrediccion",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../components/RepoPrediccion.vue"
			),
	},
	{
		path: "/reportes",
		name: "Reportes",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../components/Reportes.vue"
			),
	},
	{
		path: "/nuevorecu",
		name: "NuevoRecu",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../components/NuevoRecu.vue"
			),
	},

	{
		path: "/prediction",
		name: "prediction",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../components/prediction.vue"
			),
	},
	{
		path: "/administraria",
		name: "AdministrarIA",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "about" */ "../components/AdministrarIA.vue"
			),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
