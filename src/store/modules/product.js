const CART_KEY = "cart";

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};
const defaultProduct = [
  {
    id: 1,
    series: "bamboo",
    cat: "boxer",
    code: 8028,
    color: "Grey & Dark Green",
    price: 11900,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8028/B.jpg"),
  },
  {
    id: 2,
    series: "bamboo",
    cat: "boxer",
    code: 8028,
    color: "Blue & Black",
    price: 11900,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8028/B1.jpg"),
  },
  {
    id: 3,
    series: "bamboo",
    cat: "boxer",
    code: 8028,
    color: "Dark Red & Brown",
    price: 11900,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8028/B2.jpg"),
  },
  {
    id: 4,
    series: "bamboo",
    cat: "boxer",
    code: 8028,
    color: "Light Steel Blue & Dark Green",
    price: 11900,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8028/B4.jpg"),
  },
  {
    id: 5,
    series: "bamboo",
    cat: "boxer",
    code: 8028,
    color: "Dark Green & Dark Grey",
    price: 11900,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8028/B3.jpg"),
  },
  {
    id: 6,
    series: "lycra",
    cat: "boxer",
    code: 8028,
    color: "Dark Green & Dark Grey",
    price: 11900,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8028/B3.jpg"),
  },
];

export default {
  state: {
    product: defaultProduct,
    cart: loadCartFromLocalStorage(),
    selectedCat: [],
    selectedSeries: [],
  },
  getters: {
    product: (state) => {
      return state.product;
    },
    cartItems: (state) => {
      return state.cart;
    },
    cartItemCount: (state) => {
      return state.cart.reduce((count, item) => count + item.quantity, 0);
    },
    totalPrice: (state) => {
      return state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    filteredProducts: (state) => {
      let filtered = state.product;

      if (state.selectedSeries.length > 0) {
        filtered = filtered.filter((product) =>
          state.selectedSeries.includes(product.series)
        );
      }

      if (state.selectedCat.length > 0) {
        filtered = filtered.filter((product) =>
          state.selectedCat.includes(product.cat)
        );
      }

      return filtered;
    },
  },
  mutations: {
    addToCart(state, product) {
      const itemInCart = state.cart.find(
        (item) => item.id == product.id && item.size == product.size
      );
      if (itemInCart) {
        itemInCart.quantity += product.quantity;
      } else {
        state.cart.push(product);
      }
      saveCartToLocalStorage(state.cart);
    },
    increaseQuantity(state, { id, size }) {
      const itemInCart = state.cart.find(
        (item) => item.id === id && item.size === size
      );
      if (itemInCart) {
        itemInCart.quantity++;
      }
      saveCartToLocalStorage(state.cart);
    },
    decreaseQuantity(state, { id, size }) {
      const itemInCart = state.cart.find(
        (item) => item.id === id && item.size === size
      );
      if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity--;
      } else {
        state.cart = state.cart.filter(
          (item) => !(item.id === id && item.size === size)
        );
      }
      saveCartToLocalStorage(state.cart);
    },
    removeFromCart(state, { id, size }) {
      state.cart = state.cart.filter(
        (item) => !(item.id === id && item.size === size)
      );
      saveCartToLocalStorage(state.cart);
    },
    setSelectedSeries(state, series) {
      state.selectedSeries = series;
    },
    setSelectedCat(state, cat) {
      state.selectedCat = cat;
    },
  },
  actions: {
    addToCart(context, product) {
      context.commit("addToCart", product);
    },
    increaseQuantity(context, payload) {
      context.commit("increaseQuantity", payload);
    },
    decreaseQuantity(context, payload) {
      context.commit("decreaseQuantity", payload);
    },
    removeFromCart(context, payload) {
      context.commit("removeFromCart", payload);
    },
    setSelectedSeries(context, series) {
      context.commit("setSelectedSeries", series);
    },
    setSelectedCat(context, cat) {
      context.commit("setSelectedCat", cat);
    },
  },
  modules: {},
};
