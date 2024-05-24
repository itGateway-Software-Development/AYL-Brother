const CART_STORAGE_KEY = "cart";
const POINTS_STORAGE_KEY = "discountPoints";
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

import { toast } from "vue3-toastify";

export default {
  state: {
    items: loadCartFromLocalStorage(),
    discountPoints: loadPointsFromLocalStorage(),
    totalAvailablePoints: 1000,
    usePoints: false,
  },
  getters: {
    cartItems: (state) => state.items,
    cartTotal: (state) => {
      const total = state.items.reduce(
        (total, item) => total + item.p * item.quantity,
        0
      );
      const discount = state.discountPoints * POINTS_TO_MMK_CONVERSION_RATE;
      return Math.max(0, total - discount);
    },
    cartItemCount: (state) => {
      return state.items.reduce((count, item) => count + item.quantity, 0);
    },
    discountPoints: (state) => {
      return state.discountPoints;
    },
    usePoints: (state) => {
      return state.usePoints;
    },
    totalAvailablePoints: (state) => {
      return state.totalAvailablePoints;
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
      savePointsToLocalStorage(points); // Save discount points to localStorage
    },
    SET_USE_POINTS(state, usePoints) {
      state.usePoints = usePoints;
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
    setUsePoints({ commit }, usePoints) {
      commit("SET_USE_POINTS", usePoints);
    },
  },
};
