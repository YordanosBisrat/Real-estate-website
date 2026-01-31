function PropertyCard({ title, location, price, image }) {
  return (
    <div className="listing-card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{location}</p>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

export default PropertyCard;
