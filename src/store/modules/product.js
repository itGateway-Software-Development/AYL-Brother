import { ref } from "vue";
import { toast } from "vue3-toastify";
const CART_KEY = "cart";
const TOTAL_AVAILABLE_POINTS_KEY = "totalAvailablePoints";
const POINTS_TO_MMK_CONVERSION_RATE = 1;
const POINTS_STORAGE_KEY = "discountPoints";

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const savePointsToLocalStorage = (points) => {
  localStorage.setItem(POINTS_STORAGE_KEY, points);
};

const loadPointsFromLocalStorage = () => {
  const points = localStorage.getItem(POINTS_STORAGE_KEY);
  return points ? parseInt(points, 10) : 0;
};

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};
const saveTotalAvailablePointsToLocalStorage = (points) => {
  localStorage.setItem(TOTAL_AVAILABLE_POINTS_KEY, points);
};

const loadTotalAvailablePointsFromLocalStorage = () => {
  const points = localStorage.getItem(TOTAL_AVAILABLE_POINTS_KEY);
  return parseInt(points, 10) || 0;
};

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
    location: "Naypyidaw",
  },
  {
    id: 4,
    location: "Chin_State",
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
    location: "Kayin",
  },
  {
    id: 9,
    location: "Magway",
  },
  {
    id: 11,
    location: "Tanintharyi",
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
  {
    id: 15,
    location: "Mon",
  },
];

const defaultsubLocation = {
  Yangon: [
    { id: 1, township: "Pazundaung", price: 3000 },
    { id: 2, township: "Pabedan", price: 3000 },
    { id: 3, township: "Kyauktada", price: 3000 },
    { id: 4, township: "Botahtaung", price: 3000 },
    { id: 5, township: "Mingala Taungnyunt", price: 3000 },
    { id: 6, township: "Latha", price: 3000 },
    { id: 31, township: "Lanmadaw Township", price: 3000 },
    { id: 7, township: "Kamayut Township", price: 3500 },
    { id: 8, township: "Kyimyindaing Township", price: 3500 },
    { id: 9, township: "Sanchaung Township", price: 3500 },
    { id: 10, township: "Tamwe Township", price: 3500 },
    { id: 11, township: "South Okkalapa", price: 3500 },
    { id: 12, township: "Dagon", price: 3500 },
    { id: 13, township: "Dawbon Township", price: 3500 },
    { id: 14, township: "Bahan", price: 3500 },
    { id: 15, township: "Mayangon", price: 3500 },
    { id: 16, township: "North Okkalapa", price: 3500 },
    { id: 17, township: "Yankin", price: 3500 },
    { id: 18, township: "Hlaing Township", price: 3500 },
    { id: 19, township: "Thingangyun", price: 3500 },
    { id: 20, township: "Tharkayta", price: 3500 },
    { id: 21, township: "Ahlone Township", price: 3500 },
    { id: 22, township: "Insein Township", price: 3500 },
    { id: 23, township: "Dagon Seikkan Township", price: 3500 },
    { id: 24, township: "East Dagon Township", price: 3500 },
    { id: 25, township: "North Dagon Township", price: 3500 },
    { id: 26, township: "South Dagon Township", price: 3500 },
    { id: 27, township: "Mingaladon Township", price: 3500 },
    { id: 28, township: "Shwepyitha Township", price: 3500 },
    { id: 29, township: "Hlaingthaya Township", price: 3500 },
    { id: 30, township: "Thanlyin", price: 3500 },
    { id: 32, township: "Kawhmu", price: 4500 },
    { id: 33, township: "Kungyangon", price: 4500 },
    { id: 34, township: "Kyauktan", price: 4500 },
    { id: 35, township: "Khayan", price: 4500 },
    { id: 36, township: "Oak Kan", price: 4500 },
    { id: 37, township: "Taik Kyi", price: 4500 },
    { id: 38, township: "Twantay", price: 4500 },
    { id: 39, township: "Htauk Kyant", price: 4500 },
    { id: 40, township: "Dala Township", price: 4500 },
    { id: 41, township: "Hmawbi", price: 4500 },
    { id: 42, township: "Hlegu", price: 4500 },
    { id: 43, township: "Thongwa", price: 4500 },
  ],
  Mandalay: [
    { id: 1, township: "Mandalay", price: 4500 },
    { id: 2, township: "Chanayethazan", price: 4500 },
    { id: 3, township: "Chanmyathazi", price: 4500 },
    { id: 4, township: "Pyigyitagon", price: 4500 },
    { id: 5, township: "Mahaaungmyay", price: 4500 },
    { id: 6, township: "Aungmyaythazan", price: 4500 },
    { id: 7, township: "Amarapura", price: 4500 },
    { id: 8, township: "Kyaukpadaung", price: 4500 },
    { id: 9, township: "Kyaukse", price: 4500 },
    { id: 10, township: "Kume", price: 4500 },
    { id: 11, township: "Sintgaing", price: 4500 },
    { id: 12, township: "Singu", price: 4500 },
    { id: 13, township: "Za Yet Kwin", price: 4500 },
    { id: 14, township: "Nyaung-U", price: 4500 },
    { id: 15, township: "Tada-U", price: 4500 },
    { id: 16, township: "Taungtha", price: 4500 },
    { id: 17, township: "Natogyi", price: 4500 },
    { id: 18, township: "Pyin Oo Lwin", price: 4500 },
    { id: 19, township: "Pa Leik", price: 4500 },
    { id: 20, township: "Pyawbwe", price: 4500 },
    { id: 21, township: "Bagan", price: 4500 },
    { id: 22, township: "Patheingyi", price: 4500 },
    { id: 23, township: "Meiktila", price: 4500 },
    { id: 24, township: "Mogok", price: 4500 },
    { id: 25, township: "Myingyan", price: 4500 },
    { id: 26, township: "Myitnge", price: 4500 },
    { id: 27, township: "Mahlaing", price: 4500 },
    { id: 28, township: "Myittha", price: 4500 },
    { id: 29, township: "Madaya", price: 4500 },
    { id: 30, township: "Yamethin", price: 4500 },
    { id: 31, township: "Letpanhla", price: 4500 },
    { id: 32, township: "Wundwin", price: 4500 },
    { id: 33, township: "Thazi", price: 4500 },
    { id: 34, township: "Thea Daw", price: 4500 },
    { id: 35, township: "Han Myint Mo lann Kware", price: 4500 },
    { id: 36, township: "Ohn Chaw", price: 4500 },
  ],
  Chin_State: [{ id: 1, township: "Hakha", price: 8500 }],
  Naypyidaw: [
    { id: 1, township: "Nyaung Lunt", price: 4500 },
    { id: 2, township: "Tatkon", price: 4500 },
    { id: 3, township: "Naypyidaw", price: 4500 },
    { id: 4, township: "Pyinmana", price: 4500 },
    { id: 5, township: "Pyan Ka Paya", price: 4500 },
    { id: 6, township: "Lewe", price: 4500 },
  ],
  Bago: [
    { id: 1, township: "Gyobingauk", price: 4500 },
    { id: 2, township: "Kaytumathi myo thit", price: 4500 },
    { id: 3, township: "Kyauktaga", price: 4500 },
    { id: 4, township: "Swar", price: 4500 },
    { id: 5, township: "Zigon", price: 4500 },
    { id: 6, township: "Zeyawaddy", price: 4500 },
    { id: 7, township: "Nyaunglebin", price: 4500 },
    { id: 8, township: "Nyaung Chay Htauk", price: 4500 },
    { id: 9, township: "Oke Shit Pin", price: 4500 },
    { id: 10, township: "Taungoo", price: 4500 },
    { id: 11, township: "Taw Kywe Inn", price: 4500 },
    { id: 12, township: "Daik-U", price: 4500 },
    { id: 13, township: "Nattalin", price: 4500 },
    { id: 14, township: "Bago", price: 4500 },
    { id: 15, township: "Pyay", price: 4500 },
    { id: 16, township: "Paungde", price: 4500 },
    { id: 17, township: "Padigon", price: 4500 },
    { id: 18, township: "Penwegon", price: 4500 },
    { id: 19, township: "Pyuntasa", price: 4500 },
    { id: 20, township: "Paukkhaung", price: 4500 },
    { id: 21, township: "Phyu", price: 4500 },
    { id: 22, township: "Shwedaung", price: 4500 },
    { id: 23, township: "Yedashe", price: 4500 },
    { id: 24, township: "Shwegyin", price: 4500 },
    { id: 25, township: "Letpadan", price: 4500 },
    { id: 26, township: "Waw", price: 4500 },
    { id: 27, township: "Thegon", price: 4500 },
    { id: 28, township: "Thanatpin", price: 4500 },
    { id: 29, township: "Thar Ga Ya", price: 4500 },
    { id: 30, township: "Thonse", price: 4500 },
    { id: 31, township: "Thayarwaddy", price: 4500 },
    { id: 32, township: "Inma", price: 4500 },
    { id: 33, township: "Inn Ta Kaw", price: 4500 },
    { id: 34, township: "Okpho", price: 4500 },
    { id: 35, township: "Oktwin", price: 4500 },
    { id: 35, township: "OutMinHla", price: 4500 },
  ],
  Mon: [
    { id: 1, township: "Kyaikto", price: 4500 },
    { id: 2, township: "Kyaikkhami", price: 4500 },
    { id: 3, township: "Chaungzon", price: 4500 },
    { id: 4, township: "Zin Kyaik", price: 4500 },
    { id: 5, township: "Paung", price: 4500 },
    { id: 6, township: "Bilin", price: 4500 },
    { id: 7, township: "Mawlamyine", price: 4500 },
    { id: 8, township: "Moke Ta Ma", price: 4500 },
    { id: 9, township: "Mudon", price: 4500 },
    { id: 10, township: "Ye", price: 4500 },
    { id: 11, township: "Lamaing", price: 4500 },
    { id: 12, township: "Thanbyuzayat", price: 4500 },
    { id: 13, township: "Thaton", price: 4500 },
    { id: 14, township: "Thuwanawati", price: 4500 },
  ],
  Ayeyarwady: [
    { id: 1, township: "Kyonpyaw", price: 4500 },
    { id: 2, township: "Kyaiklat", price: 4500 },
    { id: 3, township: "Kyaunggon", price: 4500 },
    { id: 4, township: "Kyangin", price: 4500 },
    { id: 5, township: "Chaung Thar", price: 4500 },
    { id: 6, township: "Ngarthine Chaung", price: 4500 },
    { id: 7, township: "Dedaye", price: 4500 },
    { id: 8, township: "Zalun", price: 4500 },
    { id: 9, township: "Nyaungdon", price: 4500 },
    { id: 10, township: "Danubyu", price: 4500 },
    { id: 11, township: "Pathein", price: 4500 },
    { id: 12, township: "Pantanaw", price: 4500 },
    { id: 13, township: "Pyapon", price: 4500 },
    { id: 14, township: "Bogale", price: 4500 },
    { id: 15, township: "Maubin", price: 4500 },
    { id: 16, township: "Myaungmya", price: 4500 },
    { id: 17, township: "Myanaung", price: 4500 },
    { id: 18, township: "Mawgyun", price: 4500 },
    { id: 19, township: "Yegyi", price: 4500 },
    { id: 20, township: "Labutta", price: 4500 },
    { id: 21, township: "Wakema", price: 4500 },
    { id: 21, township: "Hinthada", price: 4500 },
    { id: 21, township: "Einme", price: 4500 },
  ],
  Sagaing: [
    { id: 1, township: "Kanbalu", price: 4500 },
    { id: 2, township: "Kyun Hla", price: 4500 },
    { id: 3, township: "Sagaing", price: 4500 },
    { id: 4, township: "Monywa", price: 4500 },
    { id: 5, township: "Shwebo", price: 4500 },
    { id: 6, township: "Indaw", price: 4500 },
    { id: 7, township: "Katha", price: 6000 },
    { id: 8, township: "Kawlin", price: 6000 },
    { id: 9, township: "Tamu", price: 6000 },
    { id: 10, township: "Tigyaing", price: 6000 },
  ],
  Kayin: [
    { id: 1, township: "Hpa-An", price: 4500 },
    { id: 2, township: "Myaing Ka Lay", price: 4500 },
    { id: 3, township: "Myawaddy", price: 4500 },
    { id: 4, township: "Payathonzu", price: 4500 },
    { id: 5, township: "Hlaingbwe", price: 4500 },
    { id: 6, township: "EinDu", price: 4500 },
  ],
  Magway: [
    { id: 1, township: "Chauk", price: 4500 },
    { id: 2, township: "Saku", price: 4500 },
    { id: 3, township: "Salin", price: 4500 },
    { id: 4, township: "Seikphyu", price: 4500 },
    { id: 5, township: "Sin Hpyu", price: 4500 },
    { id: 6, township: "Sin Hpyu Kyun", price: 4500 },
    { id: 7, township: "Sat Thwar", price: 4500 },
    { id: 8, township: "Taungdwingyi", price: 4500 },
    { id: 9, township: "Natmauk", price: 4500 },
    { id: 10, township: "Pakokku", price: 4500 },
    { id: 11, township: "Pwintbyu", price: 4500 },
    { id: 12, township: "Magway", price: 4500 },
    { id: 13, township: "Minbu", price: 4500 },
    { id: 14, township: "Yenangyaung", price: 4500 },
    { id: 15, township: "Yesagyo", price: 4500 },
    { id: 16, township: "Lelkaing", price: 4500 },
    { id: 17, township: "Thayet", price: 4500 },
    { id: 18, township: "Minhla", price: 4500 },
    { id: 18, township: "Aunglan", price: 4500 },
  ],
  Tanintharyi: [
    { id: 1, township: "Kawthoung", price: 6000 },
    { id: 2, township: "Dawei", price: 6000 },
    { id: 3, township: "Myeik", price: 6000 },
    { id: 4, township: "Maungmagan", price: 6000 },
    { id: 5, township: "Yebyu", price: 6000 },
  ],
  Rakhine: [
    { id: 1, township: "Kyaukpyu", price: 6000 },
    { id: 2, township: "Kyauktaw", price: 6000 },
    { id: 3, township: "Gwa", price: 6000 },
    { id: 4, township: "Ngapali", price: 6000 },
    { id: 5, township: "Sittwe", price: 6000 },
    { id: 6, township: "Toungup", price: 6000 },
    { id: 7, township: "Ponnagyun", price: 6000 },
    { id: 8, township: "Pauktaw", price: 6000 },
    { id: 9, township: "Buthidaung", price: 6000 },
    { id: 10, township: "Minbya", price: 6000 },
    { id: 11, township: "Mrauk-U", price: 6000 },
    { id: 12, township: "Maungdaw", price: 6000 },
    { id: 13, township: "Ramree", price: 6000 },
    { id: 14, township: "Thandwe", price: 6000 },
  ],
  Kachin: [
    { id: 1, township: "Sinkhan", price: 6000 },
    { id: 2, township: "Nanmati", price: 6000 },
    { id: 3, township: "Bhamo", price: 6000 },
    { id: 4, township: "Myitkyina", price: 6000 },
    { id: 5, township: "Mongkawng", price: 6000 },
    { id: 6, township: "Monghnyin", price: 6000 },
    { id: 7, township: "Shwegu", price: 6000 },
    { id: 8, township: "Lwegel", price: 6000 },
    { id: 9, township: "Waimaw", price: 6000 },
    { id: 10, township: "Hopin", price: 6000 },
    { id: 11, township: "Indawgyi", price: 6000 },
    { id: 12, township: "Danai", price: 8500 },
    { id: 13, township: "Hpakan", price: 8500 },
    { id: 14, township: "Mansi", price: 8500 },
    { id: 15, township: "Lawng Hkang", price: 8500 },
  ],
  Gate: [
    { id: 1, township: "Dagon Ayeyar", price: 2000 },
    { id: 2, township: "Aung Mingalar", price: 2000 },
    { id: 3, township: "Aung San ", price: 2000 },
  ],
};

const sizeList = [
  {
    id: 1,
    size: "M",
    category: "normal",
  },
  {
    id: 2,
    size: "L",
    category: "normal",
  },
  {
    id: 3,
    size: "XL",
    category: "normal",
  },
  {
    id: 4,
    size: "XXL",
    category: "normal",
  },
  {
    id: 5,
    size: "3XL",
    size: [
      {
        id: 1,
        size: "3XL",
      },
      {
        id: 2,
        size: "4XL",
      },
    ],
  },
  {
    id: 6,
    size: "4XL",
    size: [
      {
        id: 1,
        size: "3XL",
      },
      {
        id: 2,
        size: "4XL",
      },
    ],
  },
];

export default {
  state: {
    cart: loadCartFromLocalStorage(),
    selectedCat: [],
    selectedSeries: [],
    locations: defaultLocation,
    subLocations: defaultsubLocation,
    selectedLocation: null,
    selectedSubLocation: null,
    deliveryPrice: 0,
    discountPoints: loadPointsFromLocalStorage(),
    totalAvailablePoints: 0,
    isLogin: ref(),
    sizes: sizeList,
  },
  getters: {
    products: (state) => {
      return state.products;
    },
    isLogin: (state) => {
      return state.isLogin;
    },
    sizes: (state) => {
      return state.sizes;
    },
    discountPoints: (state) => {
      return state.discountPoints;
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
    getMiniImagesByProductId: (state) => (id) => {
      const product = state.products.find((product) => product.id === id);
      return product ? product.miniImages : [];
    },
    getImageUrlByTab: (state) => (id, tab) => {
      const product = state.products.find((product) => product.id === id);
      const miniImage = product?.miniImages.find((image) => image.id === tab);
      return miniImage ? miniImage.url : product?.mainImage;
    },
    filteredProducts: (state) => {
      let filtered = state.products;

      if (state.selectedSeries.length > 0) {
        filtered = filtered.filter((product) =>
          state.selectedSeries.includes(product.series)
        );
      }

      return filtered;
    },
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === parseInt(id));
    },
    randomProducts: (state) => (count) => {
      let sliceProduct = state.randomProducts;
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
      const total = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      // const total = state.cart.reduce(
      //   (total) => total + state.deliveryPrice + itemTotal,
      //   0
      // );
      const finalTotal = Math.max(0, total + state.deliveryPrice);

      if (state.discountPoints) {
        const discount = state.discountPoints * POINTS_TO_MMK_CONVERSION_RATE;
        return Math.max(0, finalTotal - discount);
      }
      return finalTotal;
    },
    totalAvailablePoints: (state) => {
      return state.totalAvailablePoints;
    },
    discountPrice: (state) => {
      return state.discountPoints * POINTS_TO_MMK_CONVERSION_RATE || 0;
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
    // setSelectedCode(state, code) {
    //   state.selectedCode = code;
    // },
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

    APPLY_DISCOUNT_POINTS(state, points) {
      state.discountPoints = points;

      savePointsToLocalStorage(points);
    },
    returnPoint(state, points) {
      state.discountPoints = points;

      savePointsToLocalStorage(points);
    },
    changeisLogin(state, value) {
      state.isLogin = value;
    },
    clearCart(state) {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearDiscountPoints(state) {
      state.discountPoints = 0;
      localStorage.setItem(
        "discountPoints",
        JSON.stringify(state.discountPoints)
      );
    },
    saveAvaliablePoints(state, points) {
      state.totalAvailablePoints = points;
      saveTotalAvailablePointsToLocalStorage(points);
    },
    usePoints(state, points) {
      let avaliablePoints = state.totalAvailablePoints;
      state.totalAvailablePoints = avaliablePoints - points;
      let usePoint = avaliablePoints - points;
      saveTotalAvailablePointsToLocalStorage(usePoint);
    },
    savePoints(state, points) {
      state.totalAvailablePoints = points;
      saveTotalAvailablePointsToLocalStorage(state.totalAvailablePoints);
    },
    assignDeliveryPrice(state, price) {
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
    // setSelectedCat(context, code) {
    //   context.commit("setSelectedCode", code);
    // },
    chooseLocation({ commit }, location) {
      commit("SET_LOCATION", location);
    },
    chooseSubLocation({ commit }, subLocation) {
      commit("SET_SUB_LOCATION", subLocation);
    },
    calculateDeliveryPrice({ commit, state }) {
      const location = state.selectedLocation?.location;
      const subLocation = state.selectedSubLocation;
      if (!location || !subLocation) {
        commit("SET_DELIVERY_PRICE", 0);
        return;
      }

      const locationSubLocations = state.subLocations[location];
      if (!locationSubLocations) {
        commit("SET_DELIVERY_PRICE", 0);
        return;
      }

      const subLocationObj = locationSubLocations.find(
        (subLoc) => subLoc.township === subLocation
      );

      const deliveryPrice = subLocationObj ? subLocationObj.price : 0;

      commit("SET_DELIVERY_PRICE", deliveryPrice);
    },
    applyDiscountPoints({ commit, state }, points) {
      if (points > state.totalAvailablePoints) {
        toast.error(`You don't have enough discount points.`);
      } else {
        commit("APPLY_DISCOUNT_POINTS", points);
        toast.info(`Applied ${points} discount points`);
      }
    },
    changeisLogin({ commit }, value) {
      commit("changeisLogin", value);
    },
    returnPoint({ commit }, points) {
      commit("returnPoint", points);
    },
    clearCart({ commit }) {
      commit("clearCart");
    },
    clearDiscount({ commit }) {
      commit("clearDiscountPoints");
    },
    saveAvaliabePoints({ commit }, points) {
      commit("saveAvaliablePoints", points);
    },
    usePoints({ commit }, points) {
      commit("usePoints", points);
    },
    savePoints({ commit }, points) {
      commit("savePoints", points);
    },
    assignDeliveryPrice({ commit }, price) {
      commit("assignDeliveryPrice", price);
    },
  },
  modules: {},
};
