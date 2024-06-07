import { toast } from "vue3-toastify";
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
    series: "bamboo",
    cat: "brief",
    code: 8027,
    color: "Dark Green & Dark Grey",
    price: 11200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8027/A4.jpg"),
  },
  {
    id: 7,
    series: "bamboo",
    cat: "brief",
    code: 8027,
    color: "Light Steel Blue & Navy",
    price: 11200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8027/A3.jpg"),
  },
  {
    id: 8,
    series: "bamboo",
    cat: "brief",
    code: 8027,
    color: "Dark Red & Brown",
    price: 11200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8027/A2.jpg"),
  },
  {
    id: 9,
    series: "bamboo",
    cat: "brief",
    code: 8027,
    color: "Blue & Black",
    price: 11200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8027/A1.jpg"),
  },
  {
    id: 10,
    series: "bamboo",
    cat: "boxer",
    code: 8027,
    color: "Dark Green & Grey",
    price: 11200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8027/A.jpg"),
  },
  {
    id: 11,
    series: "bamboo",
    cat: "boxer",
    code: 8004,
    color: "Light Steel Blue & Navy",
    price: 11200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8004/d.jpg"),
  },
  {
    id: 12,
    series: "bamboo",
    cat: "boxer",
    code: 8004,
    color: "Blue & Light Grey",
    price: 11900,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8004/c.jpg"),
  },
  {
    id: 13,
    series: "bamboo",
    cat: "boxer",
    code: 8004,
    color: "Dark Grey & Black",
    price: 11900,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8004/a.jpg"),
  },
  {
    id: 14,
    series: "bamboo",
    cat: "boxer",
    code: 8004,
    color: "Dark Green & Brown",
    price: 11900,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8004/b.jpg"),
  },
  {
    id: 15,
    series: "bamboo",
    cat: "boxer",
    code: 8004,
    color: "Dark Red & Grey",
    price: 11900,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8004/0.jpg"),
  },
  {
    id: 16,
    series: "bamboo",
    cat: "boxer",
    code: 8004,
    color: "Blue & Light Grey",
    price: 11900,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8004/d.jpg"),
  },
  {
    id: 17,
    series: "bamboo",
    cat: "brief",
    code: 8003,
    color: "Blue & Light Grey",
    price: 11200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8003/c.jpg"),
  },
  {
    id: 18,
    series: "bamboo",
    cat: "brief",
    code: 8003,
    color: "Light Steel Blue & Navy",
    price: 11200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8003/AA.jpg"),
  },
  {
    id: 19,
    series: "bamboo",
    cat: "brief",
    code: 8003,
    color: "Dark Grey & Black",
    price: 11200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8003/d.jpg"),
  },
  {
    id: 20,
    series: "bamboo",
    cat: "brief",
    code: 8003,
    color: "Dark Green & Brown",
    price: 11200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8003/b.jpg"),
  },
  {
    id: 21,
    series: "bamboo",
    cat: "brief",
    code: 8003,
    color: "Dark Red & Grey",
    price: 11200,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8003/a.jpg"),
  },
  {
    id: 22,
    series: "bamboo",
    cat: "brief",
    code: 8017,
    color: "Dark Red & Grey",
    price: 12000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8017/AA.jpg"),
  },
  {
    id: 23,
    series: "bamboo",
    cat: "brief",
    code: 8017,
    color: "Black & Dark Grey",
    price: 12000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8017/a.jpg"),
  },
  {
    id: 24,
    series: "bamboo",
    cat: "brief",
    code: 8017,
    color: "Light Steel Blue & Navy",
    price: 12000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8017/b.jpg"),
  },
  {
    id: 25,
    series: "bamboo",
    cat: "brief",
    code: 8017,
    color: "Dark Green & Brown",
    price: 12000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8017/c.jpg"),
  },
  {
    id: 26,
    series: "bamboo",
    cat: "brief",
    code: 8017,
    color: "Blue & Light Grey",
    price: 12000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8017/d.jpg"),
  },
  {
    id: 27,
    series: "bamboo",
    cat: "boxer",
    code: 8018,
    color: "Dark Red & Grey",
    price: 12700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8018/d.jpg"),
  },
  {
    id: 28,
    series: "bamboo",
    cat: "boxer",
    code: 8018,
    color: "Black & Dark Grey",
    price: 12700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8018/c.jpg"),
  },
  {
    id: 29,
    series: "bamboo",
    cat: "boxer",
    code: 8018,
    color: "Light Steel Blue & Navy",
    price: 12700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8018/b.jpg"),
  },
  {
    id: 30,
    series: "bamboo",
    cat: "boxer",
    code: 8018,
    color: "Dark Green & Brown",
    price: 12700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8018/0.jpg"),
  },
  {
    id: 31,
    series: "bamboo",
    cat: "boxer",
    code: 8018,
    color: "Bluen & Light Grey",
    price: 12700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8018/a.jpg"),
  },
  {
    id: 32,
    series: "spandex",
    cat: "boxer",
    code: 5003,
    color: "Steel Blue & Grey",
    price: 10700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5003/b.jpg"),
  },
  {
    id: 33,
    series: "spandex",
    cat: "boxer",
    code: 5003,
    color: "White Smoke & Navy",
    price: 10700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5003/d.jpg"),
  },
  {
    id: 34,
    series: "spandex",
    cat: "boxer",
    code: 5003,
    color: "Light Green & Dark Red",
    price: 10700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5003/c.jpg"),
  },
  {
    id: 35,
    series: "spandex",
    cat: "boxer",
    code: 5003,
    color: "Green & Brown",
    price: 10700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5003/e.jpg"),
  },
  {
    id: 36,
    series: "spandex",
    cat: "boxer",
    code: 5003,
    color: "Dim Grey & Black",
    price: 10700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5003/0.jpg"),
  },
  {
    id: 37,
    series: "spandex",
    cat: "boxer",
    code: 5003,
    color: "Royal Blue & Dark Grey",
    price: 10700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5003/a.jpg"),
  },
  {
    id: 38,
    series: "spandex",
    cat: "brief",
    code: 5002,
    color: "Steel Blue & Grey",
    price: 10000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5002/1RO.jpg"),
  },
  {
    id: 39,
    series: "spandex",
    cat: "brief",
    code: 5002,
    color: "White Smoke & Navy",
    price: 10000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5002/1.jpg"),
  },
  {
    id: 40,
    series: "spandex",
    cat: "brief",
    code: 5002,
    color: "Light Green & Dark Red",
    price: 10000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5002/2.jpg"),
  },
  {
    id: 41,
    series: "spandex",
    cat: "brief",
    code: 5002,
    color: "Green & Brown",
    price: 10000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5002/3.jpg"),
  },
  {
    id: 42,
    series: "spandex",
    cat: "brief",
    code: 5002,
    color: "Dim Grey & Black",
    price: 10000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5002/4.jpg"),
  },
  {
    id: 43,
    series: "spandex",
    cat: "brief",
    code: 5002,
    color: "Royal Blue & Dark Grey",
    price: 10000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/5002/5.jpg"),
  },
  {
    id: 44,
    series: "lycra",
    cat: "boxer",
    code: 8077,
    color: "Light Gray & Navy",
    price: 11400,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8077/0.jpg"),
  },
  {
    id: 45,
    series: "lycra",
    cat: "boxer",
    code: 8077,
    color: "Black & Dark Gray",
    price: 11400,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8077/c.jpg"),
  },
  {
    id: 46,
    series: "lycra",
    cat: "boxer",
    code: 8077,
    color: "Brown & Dark Green",
    price: 11400,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8077/d.jpg"),
  },
  {
    id: 47,
    series: "lycra",
    cat: "boxer",
    code: 8077,
    color: "Blue & Light Grey",
    price: 11400,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8077/b.jpg"),
  },
  {
    id: 48,
    series: "lycra",
    cat: "boxer",
    code: 8077,
    color: "Dark Red & Grey",
    price: 11400,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8077/a.jpg"),
  },
  {
    id: 49,
    series: "lycra",
    cat: "brief",
    code: 8076,
    color: "Light Gray & Navy",
    price: 10700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8076/4.jpg"),
  },
  {
    id: 50,
    series: "lycra",
    cat: "brief",
    code: 8076,
    color: "Black & Dark Grey",
    price: 10700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8076/1.jpg"),
  },
  {
    id: 51,
    series: "lycra",
    cat: "brief",
    code: 8076,
    color: "Brown & Dark Green",
    price: 10700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8076/AA.jpg"),
  },
  {
    id: 52,
    series: "lycra",
    cat: "brief",
    code: 8076,
    color: "Blue & Light Grey",
    price: 10700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8076/2.jpg"),
  },
  {
    id: 53,
    series: "lycra",
    cat: "brief",
    code: 8076,
    color: "Dark Red & Grey",
    price: 10700,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/8076/3.jpg"),
  },
  {
    id: 54,
    series: "bamboo",
    cat: "brief",
    code: 9001,
    color: "-",
    price: 15000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/9001,9002/9001.jpg"),
  },
  {
    id: 55,
    series: "bamboo",
    cat: "brief",
    code: 9002,
    color: "-",
    price: 16000,
    pics: "1 Box in 2 PCS",
    img: require("@/assets/product/9001,9002/9002.jpg"),
  },
];

const defaultLocation = [
  {
    id: 1,
    location: "Yangon",
  },
  {
    id: 2,
    location: "Mandalay",
  },
  {
    id: 3,
    location: "Nay Pyi Taw",
  },
  {
    id: 4,
    location: "Chin State",
  },
  {
    id: 5,
    location: "Bago",
  },
  {
    id: 6,
    location: "Ayeyarwady",
  },
  {
    id: 7,
    location: "Sagaing",
  },
  {
    id: 8,
    location: "Kayin State",
  },
  {
    id: 9,
    location: "Magway Region",
  },
  {
    id: 10,
    location: "Shan",
  },
  {
    id: 11,
    location: "Tanintharyi Region",
  },
  {
    id: 12,
    location: "Rakhine",
  },
  {
    id: 13,
    location: "Kachin",
  },
  {
    id: 14,
    location: "Gate",
  },
];

const defaultsubLocation = {
  Yangon: [
    { id: 1, township: "Pazundaung", price: 1500 },
    { id: 2, township: "Pabedan", price: 1500 },
    { id: 3, township: "Kyauktada", price: 1500 },
    { id: 4, township: "Botahtaung", price: 1500 },
    { id: 5, township: "Mingala Taungnyunt", price: 1500 },
    { id: 6, township: "Latha", price: 1500 },
    { id: 7, township: "Kamayut Township", price: 3000 },
    { id: 8, township: "Kyimyindaing Township", price: 3000 },
    { id: 9, township: "Sanchaung Township", price: 3000 },
    { id: 10, township: "Tamwe Township", price: 3000 },
    { id: 11, township: "South Okkalapa", price: 3000 },
    { id: 12, township: "Dagon", price: 3000 },
    { id: 13, township: "Dawbon Township", price: 3000 },
    { id: 14, township: "Bahan", price: 3000 },
    { id: 15, township: "Mayangon", price: 3000 },
    { id: 16, township: "North Okkalapa", price: 3000 },
    { id: 17, township: "Yankin", price: 3000 },
    { id: 18, township: "Hlaing Township", price: 3000 },
    { id: 19, township: "Thingangyun", price: 3000 },
    { id: 20, township: "Tharkayta", price: 3000 },
    { id: 21, township: "Ahlone Township", price: 3000 },
    { id: 22, township: "Insein Township", price: 3000 },
    { id: 23, township: "Dagon Seikkan Township", price: 3000 },
    { id: 24, township: "East Dagon Township", price: 3000 },
    { id: 25, township: "North Dagon Township", price: 3000 },
    { id: 26, township: "South Dagon Township", price: 3000 },
    { id: 27, township: "Mingaladon Township", price: 3000 },
    { id: 28, township: "Shwepyitha Township", price: 3000 },
    { id: 29, township: "Hlaingthaya Township", price: 3000 },
    { id: 30, township: "Thanlyin", price: 3000 },
  ],
  Mandalay: [
    { id: 1, township: "Aungmyaythazan", price: 4000 },
    { id: 2, township: "Chanayethazan", price: 4000 },
    { id: 3, township: "Mahaaungmyay", price: 4000 },
    { id: 4, township: "Chanmyathazi", price: 4000 },
    { id: 5, township: "Pyigyitagon", price: 4000 },
  ],
};

export default {
  state: {
    products: defaultProduct,
    cart: loadCartFromLocalStorage(),
    selectedCat: [],
    selectedSeries: [],
    locations: defaultLocation,
    subLocations: defaultsubLocation,
    selectedLocation: null,
    selectedSubLocation: null,
    deliveryPrice: 0,
  },
  getters: {
    products: (state) => {
      return state.products;
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
      let filtered = state.products;

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
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === parseInt(id));
    },
    randomProducts: (state) => (count) => {
      let sliceProduct = state.products;
      sliceProduct = sliceProduct.sort(() => 0.5 - Math.random());
      return sliceProduct.slice(0, count);
    },
    getSubLocations: (state) => {
      if (!state.selectedLocation) return [];
      return state.subLocations[state.selectedLocation.location] || [];
    },

    locations: (state) => {
      return state.locations;
    },
    deliveryPrice: (state) => state.deliveryPrice,

    grandTotal: (state) => {
      return state.cart.reduce(
        (total, item) =>
          total + item.price * item.quantity + state.deliveryPrice,
        0
      );
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
    SET_LOCATION(state, location) {
      state.selectedLocation = location;
      state.selectedSubLocation = null; // Reset sub-location when location changes
    },
    SET_SUB_LOCATION(state, subLocation) {
      state.selectedSubLocation = subLocation;
    },
    SET_DELIVERY_PRICE(state, price) {
      // Mutation to set delivery price
      state.deliveryPrice = price;
    },
  },
  actions: {
    addToCart(context, product) {
      context.commit("addToCart", product);
      toast.success(
        `Product Code:${product.code} of Size:${product.size} is added to Bag`
      );
    },
    increaseQuantity(context, payload) {
      context.commit("increaseQuantity", payload);
    },
    decreaseQuantity(context, payload) {
      context.commit("decreaseQuantity", payload);
    },
    removeFromCart(context, payload) {
      context.commit("removeFromCart", payload);
      toast.error(
        `Product Code:${payload.code} of Size:${payload.size} is remove from Bag`
      );
    },
    setSelectedSeries(context, series) {
      context.commit("setSelectedSeries", series);
    },
    setSelectedCat(context, cat) {
      context.commit("setSelectedCat", cat);
    },
    chooseLocation({ commit }, location) {
      commit("SET_LOCATION", location);
    },
    chooseSubLocation({ commit }, subLocation) {
      commit("SET_SUB_LOCATION", subLocation);
    },
    calculateDeliveryPrice({ commit, state }) {
      console.log("calculateDeliveryPrice action called");
      const location = state.selectedLocation?.location;
      const subLocation = state.selectedSubLocation;
      console.log("Location:", location);
      console.log("SubLocation:", subLocation);
      if (!location || !subLocation) {
        commit("SET_DELIVERY_PRICE", 0);
        return;
      }

      const locationSubLocations = state.subLocations[location];
      console.log("Location SubLocations:", locationSubLocations);
      if (!locationSubLocations) {
        commit("SET_DELIVERY_PRICE", 0);
        return;
      }

      const subLocationObj = locationSubLocations.find(
        (subLoc) => subLoc.township === subLocation
      );

      const deliveryPrice = subLocationObj ? subLocationObj.price : 0;

      console.log(deliveryPrice);
      commit("SET_DELIVERY_PRICE", deliveryPrice);
    },
  },
  modules: {},
};
