export default {
  state: {
    items: [],
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
    },
    increaseQuantity(state, itemid) {
      const item = state.items.find((cartItem) => cartItem.id == itemid);
      if (item && item.quantity <= 10) {
        item.quantity++;
      }
    },
    decreaseQuantity(state, itemid) {
      const item = state.items.find((cartItem) => cartItem.id == itemid);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        state.items = state.items.filter((cartItem) => cartItem.id !== itemid);
      }
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
      console.log(itemid);
    },
  },
};
