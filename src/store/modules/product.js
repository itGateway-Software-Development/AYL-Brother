const CART_STORAGE_KEY = "cart";
const POINTS_STORAGE_KEY = "discountPoints";
const TOTAL_AVAILABLE_POINTS_KEY = "totalAvailablePoints";
const POINTS_TO_MMK_CONVERSION_RATE = 10;

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem(CART_STORAGE_KEY);
  return cart ? JSON.parse(cart) : [];
};

const savePointsToLocalStorage = (points) => {
  localStorage.setItem(POINTS_STORAGE_KEY, points);
};

const loadPointsFromLocalStorage = () => {
  const points = localStorage.getItem(POINTS_STORAGE_KEY);
  return points ? parseInt(points, 10) : 0;
};

const saveTotalAvailablePointsToLocalStorage = (points) => {
  localStorage.setItem(TOTAL_AVAILABLE_POINTS_KEY, points);
};

const loadTotalAvailablePointsFromLocalStorage = () => {
  const points = localStorage.getItem(TOTAL_AVAILABLE_POINTS_KEY);
  if (points === null) {
    const initialPoints = 1000; // Initialize to 1000 points if not set
    localStorage.setItem(TOTAL_AVAILABLE_POINTS_KEY, initialPoints);
    return initialPoints;
  }
  return parseInt(points, 10);
};

import { toast } from "vue3-toastify";

export default {
  state: {
    items: loadCartFromLocalStorage(),
    discountPoints: loadPointsFromLocalStorage(),
    totalAvailablePoints: loadTotalAvailablePointsFromLocalStorage(),
    deliveryPrice: 1500,
  },
  getters: {
    cartItems: (state) => state.items,
    cartTotal: (state) => {
      return state.items.reduce(
        (total, item) => total + item.p * item.quantity,
        0
      );
    },
    cartFinal: (state) => {
      const total = state.items.reduce(
        (total, item) => total + item.p * item.quantity,
        0
      );
      const discount = state.discountPoints * POINTS_TO_MMK_CONVERSION_RATE;
      return Math.max(0, total - discount);
    },
    deliveryPrice: (state) => {
      return state.deliveryPrice;
    },
    cartItemCount: (state) => {
      return state.items.reduce((count, item) => count + item.quantity, 0);
    },
    discountPoints: (state) => {
      return state.discountPoints;
    },

    totalAvailablePoints: (state) => {
      return state.totalAvailablePoints;
    },

    grandTotal: (state, getters) => {
      const cartTotalvalue = getters.cartFinal;
      const deliveryCharges = state.items.length > 0 ? state.deliveryPrice : 0;
      return cartTotalvalue + deliveryCharges;
    },
  },
  mutations: {
    getData(state, item) {
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        // If item already exists, increase the quantity
        existingItem.quantity += item.quantity;
      } else {
        state.items.push({ ...item, quantity: item.quantity });
      }
      saveCartToLocalStorage(state.items);
    },
    increaseQuantity(state, itemid) {
      const item = state.items.find((cartItem) => cartItem.id == itemid);
      if (item && item.quantity <= 10) {
        item.quantity++;
      }
      saveCartToLocalStorage(state.items);
    },
    decreaseQuantity(state, itemid) {
      const item = state.items.find((cartItem) => cartItem.id == itemid);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter((cartItem) => cartItem.id !== itemid);
      }
      saveCartToLocalStorage(state.items);
    },
    removeItem(state, itemid) {
      state.items = state.items.filter((cartItem) => cartItem.id !== itemid);
      saveCartToLocalStorage(state.items);
    },
    APPLY_DISCOUNT_POINTS(state, points) {
      state.discountPoints = points;
      state.totalAvailablePoints -= points;
      savePointsToLocalStorage(points);
      saveTotalAvailablePointsToLocalStorage(state.totalAvailablePoints);
    },
  },
  actions: {
    getProduct(context, item) {
      context.commit("getData", item);
      toast.success(`${item.name} added to cart`);
    },
    increaseQuantity(context, itemid) {
      context.commit("increaseQuantity", itemid);
    },
    decreaseQuantity(context, itemid) {
      context.commit("decreaseQuantity", itemid);
    },
    removeItem({ commit, state }, itemid) {
      const item = state.items.find((cartItem) => cartItem.id === itemid);
      if (item) {
        commit("removeItem", itemid);
        toast.error(`${item.name} removed from cart`);
      }
    },
    applyDiscountPoints({ commit, state }, points) {
      if (points > state.totalAvailablePoints) {
        toast.error(`You don't have enough discount points.`);
      } else {
        commit("APPLY_DISCOUNT_POINTS", points);
        toast.info(`Applied ${points} discount points`);
      }
    },
  },
};
