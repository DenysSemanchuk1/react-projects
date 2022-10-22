export default (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    case "INCREASE":
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    case "DECREASE": {
      let tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: tempCart };
    }
    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { amount, price } = cartItem;
          cartTotal.amount += amount;
          const total = price * amount;
          cartTotal.total += total;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      return { ...state, amount, total: parseFloat(total.toFixed(2)) };
    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };
    default:
      return state;
  }
};
