import axios from "axios";
import React from "react";
interface List {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
}

export const ProductCard = ({
  name,
  brand,
  price,
  image,
  like,
  dislike,
  id,
}: List) => {
  const [likeCount, setLikeCount] = React.useState(like);
  const [dislikeCount, setDislikeCount] = React.useState(dislike);

  function handleLike(id: number | React.MouseEvent<HTMLButtonElement>) {
    setLikeCount(likeCount + 1);

    axios.patch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`,
      {
        like: likeCount + 1,
      }
    );
  }
  function handleDislike(id: number | React.MouseEvent<HTMLButtonElement>) {
    setDislikeCount(dislikeCount + 1);

    axios.patch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`,
      {
        dislike: dislikeCount + 1,
      }
    );
  }
  function handleDelete(id: number | React.MouseEvent<HTMLButtonElement>) {
    axios.delete(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`
    );
    
  }

  return (
    <div className={`product-card`}>
      <img className="product-image" src={image} alt={name} width="70%" />
      <p className="product-name">{name}</p>
      <p className="product-name">{price}</p>
      <p className="product-name">{brand}</p>
      <button data-testid="like-button" onClick={() => handleLike(id)}>
        Like
      </button>
      <p className="product-like">{likeCount}</p>
      <button data-testid="dislike-button" onClick={() => handleDislike(id)}>
        Dislike
      </button>
      <p className="product-dislike">{dislikeCount}</p>
      <button data-testid="delete-button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};
