import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    pesticideName: "",
    farmSize: "",
  });
  const [responseText, setResponseText] = useState("");

  const pesticides = [
    {
      name: "Insecticide X",
      price: "$15.00 / kg",
      description: "A highly effective insecticide for controlling pests on crops.",
    },
    {
      name: "Fungicide Y",
      price: "$12.50 / kg",
      description: "Protect your crops from fungal infections with this powerful fungicide.",
    },
    {
      name: "Herbicide Z",
      price: "$18.00 / kg",
      description: "Ideal for controlling unwanted weeds in your fields.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { pesticideName, farmSize } = formData;

    const pesticide = pesticides.find((p) => p.name.toLowerCase() === pesticideName.toLowerCase());

    if (pesticide) {
      setResponseText(
        `You have requested information for ${pesticideName}. For a farm size of ${farmSize} acres, the price is ${pesticide.price}.`
      );
    } else {
      setResponseText(`No pesticide found by the name ${pesticideName}. Please enter a valid pesticide name.`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Agrown Mart</h1>
        <p>For Farmers - Pesticide Information & Pricing</p>
      </header>

      <section id="pesticides-info">
        <div className="container">
          <h2>Pesticide Information</h2>
          <div className="pesticide-list">
            {pesticides.map((pesticide, index) => (
              <div key={index} className="pesticide-card">
                <h3>{pesticide.name}</h3>
                <p><strong>Price:</strong> {pesticide.price}</p>
                <p><strong>Description:</strong> {pesticide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="query-form">
        <div className="container">
          <h2>Request Information</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="pesticide-name">Pesticide Name:</label>
            <input
              type="text"
              id="pesticide-name"
              name="pesticideName"
              placeholder="Enter pesticide name"
              value={formData.pesticideName}
              onChange={handleInputChange}
              required
            />
            
            <label htmlFor="farm-size">Farm Size (acres):</label>
            <input
              type="number"
              id="farm-size"
              name="farmSize"
              placeholder="Enter your farm size"
              value={formData.farmSize}
              onChange={handleInputChange}
              required
            />

            <button type="submit">Get Pricing Info</button>
          </form>

          <div id="query-response">
            <p>{responseText}</p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Agrown Mart | Empowering Farmers with Information</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
