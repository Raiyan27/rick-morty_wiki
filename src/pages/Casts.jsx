import { useEffect, useState } from "react";

import logo from "../assets/images/logo.png";
import castCard from "../assets/images/cast-card.png";
import "../assets/styles/casts.css";
import castTitle from "../assets/images/cast-title.png";
import { useNavigate } from "react-router-dom";

const Casts = () => {
  const [castData, setCastData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setCastData(data.results);
      } catch (error) {
        console.error("Error Fetching cast data:", error);
      }
    };

    fetchCasts();
  }, []);

  const handleClick = (id) => {
    navigate(`/cast/${id}`);
  };

  return (
    <div className="casts-page-container">
      <header className="casts-header">
        <div className="casts-logo-container">
          <img src={logo} alt="Rick and Morty Logo" className="casts-logo" />
        </div>
      </header>
      <section className="casts-section">
        <img src={castTitle} alt="Casts Title" className="casts-title-image" />
        <div className="casts-grid">
          {castData.map((character) => (
            <div
              key={character.id}
              className="character-card"
              style={{
                backgroundImage: `url(${castCard})`,
              }}
              onClick={() => handleClick(character.id)}
            >
              <img
                src={character.image}
                alt={character.name}
                className="character-card-image"
              />
              <p className="character-card-name">{character.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Casts;
