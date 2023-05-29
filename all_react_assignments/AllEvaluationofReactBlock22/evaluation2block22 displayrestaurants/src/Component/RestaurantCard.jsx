function RestaurantCard({ name, image,type,rating,price_starts_from,number_of_votes }) {
 
  return (
  <div data-testid="restaurant-card" >
   {/* display the props */}
   <b data-testid="restaurant-card-name">{name}</b>
   <b data-testid="restaurant-card-type">{type}</b>
  <img data-testid="restaurant-card-image" src={image} alt={name} />
   <b data-testid="restaurant-card-rating" >{rating}</b>
   <b data-testid = "restaurant-card-votes">{number_of_votes}</b> 
    <b data-testid = "restaurant-card-price">{price_starts_from}</b>

    </div>
  );
}

export default RestaurantCard;
