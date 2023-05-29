import {
  PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  PRODUCT_REQUEST,
  EDIT_VALUE,
  ADD_VALUE,
} from "./actionType";

const initialState = {
  loading: false,
  error: false,
  product: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        product: payload,
      };
    }
    case PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case EDIT_VALUE: {
      return {
        ...state,
        loading:false,
      
      };
    }
    case ADD_VALUE: {
      return {
        ...state,
        product: [...state.product, payload],
      };
    }

    default: {
      return state;
    }
  }
};
