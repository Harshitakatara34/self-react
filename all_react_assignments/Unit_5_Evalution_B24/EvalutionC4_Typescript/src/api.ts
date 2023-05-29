import axios, { AxiosResponse } from "axios";
export type Todo = {
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
};
export const addProduct = (newObj: Todo) => {
  axios
    .post(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`,
      newObj
    )
    .then((res) => console.log(res));
};

export const getProducts = () => {
  const res = axios.get(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`
  );
  return res;
};

export const updateLike = (id: number) => {
  // console.log(id);
  const res = axios.patch(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`,
    {
      like: (pre: number) => pre + 1,
    }
  );
  return res;
};

export const updateDisLike = (id: number) => {
  // Update dislike functionality
  const res = axios.patch(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`,
    {
      dislike: (prev: number) => prev + 1,
    }
  );
  return res;
};

export const deleteProduct = (id: number) => {
  const res = axios.delete(
    `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`
  );
  return res;
  // Delete functionality
};
