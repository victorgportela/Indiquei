import { createRouter, createWebHistory } from "vue-router/auto";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: () => import("@/layouts/default.vue"),
			children: [
				{
					path: "",
					component: () => import("@/pages/index.vue"),
				},
			],
		},
		{
			path: "/cliente",
			component: () => import("@/layouts/cliente.vue"),
			children: [
				{
					path: "",
					component: () => import("@/pages/clientes/index.vue"),
				},
			],
		},
	],
});

router.onError((err, to) => {
	if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
		if (!localStorage.getItem("vuetify:dynamic-reload")) {
			console.log("Reloading page to fix dynamic import error");
			localStorage.setItem("vuetify:dynamic-reload", "true");
			location.assign(to.fullPath);
		} else {
			console.error("Dynamic import error, reloading page did not fix it", err);
		}
	} else {
		console.error(err);
	}
});

router.isReady().then(() => {
	localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
