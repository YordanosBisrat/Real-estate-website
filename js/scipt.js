/* =========================
   1. NAVBAR HAMBURGER TOGGLE
========================= */

// Create hamburger button dynamically
const nav = document.querySelector(".nav");

if (nav) {
  const hamburger = document.createElement("div");
  hamburger.innerHTML = "☰";
  hamburger.className = "hamburger";
  nav.parentElement.appendChild(hamburger);

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
}

/* =========================
   2. CONTACT FORM VALIDATION
========================= */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.querySelector("input[type='text']");
    const email = contactForm.querySelector("input[type='email']");
    const message = contactForm.querySelector("textarea");

    if (
      name.value.trim() === "" ||
      email.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Message sent successfully! We will contact you soon.");
    contactForm.reset();
  });
}

/* =========================
   3. DYNAMIC PROPERTY LISTINGS
========================= */

const listingsGrid = document.querySelector(".properties .listings-grid");

if (listingsGrid) {
  const properties = [
    {
      title: "Modern Villa",
      location: "Addis Ababa • 3 Bedrooms",
      price: "45,220,000 ETB",
      image: "images/house4.jpg"
    },
    {
      title: "Luxury Family Home",
      location: "Adama • 7 Bedrooms",
      price: "67,310,000 ETB",
      image: "images/house5.jpg"
    },
    {
      title: "Modern Apartment",
      location: "Bahir Dar • 3 Bedrooms",
      price: "44,160,000 ETB",
      image: "images/house6.jpg"
    },
    {
      title: "City Condo",
      location: "Hawassa • 5 Bedrooms",
      price: "68,120,000 ETB",
      image: "images/house7.jpg"
    }
  ];

  listingsGrid.innerHTML = "";

  properties.forEach(property => {
    const card = document.createElement("div");
    card.className = "listing-card";

    card.innerHTML = `
      <img src="${property.image}" alt="${property.title}">
      <div class="card-content">
        <h3>${property.title}</h3>
        <p>${property.location}</p>
        <span class="price">${property.price}</span>
      </div>
    `;

    listingsGrid.appendChild(card);
  });
}
