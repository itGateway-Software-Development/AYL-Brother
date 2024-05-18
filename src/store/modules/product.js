const CART_STORAGE_KEY = "cart";

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem(CART_STORAGE_KEY);
  return cart ? JSON.parse(cart) : [];
};

export default {
  state: {
    items: loadCartFromLocalStorage(),
  },
  getters: {
    cartItems: (state) => state.items,
    cartTotal: (state) => {
      return state.items.reduce(
        (total, item) => total + item.p * item.quantity,
        0
      );
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
  },
  actions: {
    getProduct(context, item) {
      context.commit("getData", item);
    },
    increaseQuantity(context, itemid) {
      context.commit("increaseQuantity", itemid);
    },
    decreaseQuantity(context, itemid) {
      context.commit("decreaseQuantity", itemid);
    },
    removeItem(context, itemid) {
      context.commit("removeItem", itemid);
    },
  },
};
