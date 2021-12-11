import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Registro from './components/Registro.vue';
import Login from './components/Login.vue';
import Inicio from './components/Inicio.vue';
import Frutas from './components/Frutas.vue';
import Verduras from './components/Verduras.vue';
import FrutosSecos from './components/FrutosSecos.vue';
import Bebidas from './components/Bebidas.vue';

const routes = [
	{
		path: '/',
		name: 'root',
		component: App,
	},
	{
		path: '/shop/registro',
		name: 'registro',
		component: Registro,
	},
	{
		path: '/shop/login',
		name: 'login',
		component: Login,
	},
	{
		path: '/shop/inicio',
		name: 'inicio',
		component: Inicio,
	},
	{
		path: '/shop/frutas',
		name: 'frutas',
		component: Frutas,
	},
	{
		path: '/shop/verduras',
		name: 'verduras',
		component: Verduras,
	},
	{
		path: '/shop/frutosSecos',
		name: 'frutosSecos',
		component: FrutosSecos,
	},
	{
		path: '/shop/bebidas',
		name: 'bebidas',
		component: Bebidas,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
