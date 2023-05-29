export const CartPage = ({thumbnail, title, brand, price, discountPercentage}) => {

  return <div data-testid="cart-list">{/* Map through cart store  */}
 <img className="product-image" src={thumbnail} alt={title} />
       <h3 className="product-title">{title}</h3>
       <p className="product-brand">{brand}</p>
       <p className="product-price">{price}</p>
       <p className="product-discount">{discountPercentage}</p>

  </div>;
};
