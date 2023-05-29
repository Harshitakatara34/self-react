import React from "react";

type Todo = {
  id?: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
  deletehandler: (id: number) => void;
  likehandler: (id: number) => void;
  disLikehandler: (id: number) => void;
};

export const ProductCard = ({
  id,
  name,
  brand,
  price,
  image,
  like,
  dislike,
  deletehandler,
  likehandler,
  disLikehandler,
}: Todo) => {
  const ID = Number(id);
  return (
    <div className={`product-card`}>
      <img src={image} style={{ width: "100%" }} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-brand">{brand}</p>
      <p className="product-price">{price}</p>
      <button onClick={() => likehandler(ID)} data-testid="like-button">
        Like
      </button>
      <p className="product-like">{like}</p>
      <button onClick={() => disLikehandler(ID)} data-testid="dislike-button">
        DisLike
      </button>
      <p className="product-dislike">{dislike}</p>
      <button onClick={() => deletehandler(ID)} data-testid="delete-button">
        Delete
      </button>
    </div>
  );
};
