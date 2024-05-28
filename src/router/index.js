import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/product/ProductView.vue";
import CartView from "../views/CartView.vue";
import ProductDetail from "../views/product/ProductDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/productDetail/:id",
    name: "productDetail",
    component: ProductDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
