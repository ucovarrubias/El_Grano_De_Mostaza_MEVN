import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView.vue'
import HomeView from '../views/HomeView.vue'
import ProductosView from '../views/ProductosView.vue'
import CarritoView from '../views/CarritoView.vue'
import PedidoView from '../views/PedidoView.vue'
import PagoView from '../views/PagoView.vue'
import ConfirmacionView from '../views/ConfirmacionView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  },
  {
    path: '/home/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component: ProductosView
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: CarritoView
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: PedidoView
  },
  {
    path: '/pago',
    name: 'pago',
    component: PagoView
  },
  {
    path: '/confirmacion',
    name: 'confirmacion',
    component: ConfirmacionView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
