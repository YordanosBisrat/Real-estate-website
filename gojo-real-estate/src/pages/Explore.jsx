import { useEffect, useState } from "react";

export default function Explore() {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/properties")
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.log("Error fetching properties:", err));
  }, []);

  // filtering + searching + sorting
  const filteredProperties = properties
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase())
    )
    .filter(p =>
      location ? p.location.toLowerCase().includes(location.toLowerCase()) : true
    )
    .sort((a, b) => {
      const priceA = parseInt(a.price.replace(/,/g, ""));
      const priceB = parseInt(b.price.replace(/,/g, ""));

      if (sort === "low") return priceA - priceB;
      if (sort === "high") return priceB - priceA;
      return 0;
    });

  return (
    <>
      {/* Hero */}
      <section className="explore-hero">
        <div className="container">
          <h1>Explore Properties</h1>
          <p>Browse homes across Ethiopia</p>
        </div>
      </section>

      {/* Filters */}
      <section className="container" style={{ marginBottom: "30px" }}>
        <div
          className="filters-bar"
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            background: "#fff",
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
          }}
        >
          {/* Search */}
          <input
            type="text"
            placeholder="Search by title or location"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="filter-input"
            style={{
              flex: "1",
              padding: "12px 15px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "15px",
              outline: "none"
            }}
          />

          {/* Location */}
          <select
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="filter-select"
            style={{
              padding: "12px 15px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "15px",
              background: "#fff"
            }}
          >
            <option value="">All Locations</option>
            <option value="Addis Ababa">Addis Ababa</option>
            <option value="Adama">Adama</option>
            <option value="Bahir Dar">Bahir Dar</option>
            <option value="Hawassa">Hawassa</option>
            <option value="Gondar">Gondar</option>
            <option value="Bishoftu">Bishoftu</option>
          </select>

          {/* Sort */}
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="filter-select"
            style={{
              padding: "12px 15px",
              borderRadius: "6px",
              border: "1px solid #ddd",
              fontSize: "15px",
              background: "#fff"
            }}
          >
            <option value="">Sort by Price</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>
        </div>
      </section>

      {/* Listings */}
      <section className="container explore-filters">
        <div className="listings-grid">
          {filteredProperties.map(property => (
            <div className="listing-card" key={property.id}>
              <img
                src={`/images/${property.image}`}
                alt={property.title}
              />
              <div className="card-content">
                <h3>{property.title}</h3>
                <p>{property.location}</p>
                <span className="price">{property.price}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <p style={{ marginTop: "20px" }}>No properties found.</p>
        )}
      </section>
    </>
  );
}
