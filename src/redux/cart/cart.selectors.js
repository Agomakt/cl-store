import { createSelector } from 'reselect';

// input selector
const selectCart = (state) => state.cart;

// specific selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);


export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

// specific selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);