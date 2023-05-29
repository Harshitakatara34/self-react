import {
  STUDENT_REQUEST_PENDING,
  STUDENT_REQUEST_SUCCESS,
} from "./actionTypes";

const initialstate = {
  isLoading: false,
  isError: false,
  students: [],
};
export const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case STUDENT_REQUEST_PENDING:
      return { ...state, isLoading: true };
    case STUDENT_REQUEST_SUCCESS:
      return { ...state, isLoading: false, students: payload };
    case STUDENT_REQUEST_PENDING:
      return { ...state, isLoading: false, isError: false };
    default:
      return state;
  }
};
