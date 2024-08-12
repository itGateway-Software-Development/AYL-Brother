import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/product/ProductView.vue";
import CartView from "../views/CartView.vue";
import ProductDetail from "../views/product/ProductDetail.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../components/LoginForm/Login.vue";
import Register from "../components/LoginForm/Register.vue";
import Bamboo from "../views/product/Bamboo.vue";
import ContactUs from "../views/ContactUs.vue";
import CheckOut from "../views/CheckOut.vue";
import AboutUs from "../views/AboutUs.vue";
import Profile from "../views/Profile.vue";
import Favourite from "../views/Favourite.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
  {
    path: "/product/productDetail/:id",
    name: "productDetail",
    component: ProductDetail,
    props: (route) => ({ id: Number(route.params.id) }),
  },
  {
    path: "/products/:categories",
    component: ProductView,
    props: true,
  },
  {
    path: "/products/:categories/:series",
    component: ProductView,
    props: true,
  },

  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactUs,
  },
  {
    path: "/cart/checkout",
    name: "checkout",
    component: CheckOut,
  },
  {
    path: "/about-us",
    name: "aboutus",
    component: AboutUs,
  },
  {
    path: "/myprofile",
    name: "myprofile",
    component: Profile,
  },
  {
    path: "/favourite",
    name: "favourite",
    component: Favourite,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name === "Login" && from.fullPath) {
//     next({ name: "Login", query: { redirect: from.fullPath } });
//   } else {
//     next();
//   }
// });

export default router;
