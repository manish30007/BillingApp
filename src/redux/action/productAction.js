import { ActionTypes } from "../constant/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_BILL,
    payload: products,
  };
};
export const sumproducts = (val) => {
  return {
    type: ActionTypes.SUM_BILL,
    payload: val,
  };
};

// export const selectedProduct = (product) => {
//   return {
//     type: ActionTypes.SELECTED_PRODUCT,
//     payload: product,
//   };
// };
// export const removeSelectedProduct = () => {
//   return {
//     type: ActionTypes.REMOVE_SELECTED_PRODUCT,
//   };
// };