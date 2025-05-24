import { useEffect, useState } from "react";
import bg from "../assets/images/bg-cast.png";
import logo from "../assets/images/logo.png";
import castCard from "../assets/images/cast-card.png";

import castTitle from "../assets/images/cast-title.png";
import { useNavigate } from "react-router-dom";

const Casts = () => {
  const [castData, setCastData] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCasts = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setCastData(data.results);
      } catch {
        console.error("Error Fetching cast data");
      }
    };

    fetchCasts();
  }, []);

  const handleClick = (id) => {
    navigate(`/cast/${id}`);
  };
  return (
    <div
      style={{
        backgroundImage: `
  
    url(${bg})
  `,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",

        minHeight: "100vh",
      }}
      className="home-container"
    >
      <header>
        <div style={{ textAlign: "center", marginBottom: "110px" }}>
          <img src={logo} alt="" />
        </div>
      </header>
      <section style={{ maxWidth: "1700px", margin: "0 auto" }}>
        <img
          style={{ marginLeft: "35px", fontFamily: "poppins" }}
          src={castTitle}
          alt=""
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "40px",
            padding: "20px",
          }}
        >
          {castData.map((character) => (
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${castCard})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                backdropFilter: "blur(3.5px)",
                cursor: isHovered ? "pointer" : "default",
              }}
              onClick={() => handleClick(character.id)}
            >
              <img
                src={character.image}
                alt={character.name}
                style={{
                  marginTop: "12px",
                  marginLeft: "5px",
                  width: "258px",
                  height: "230px",
                  borderRadius: "12px",
                }}
              />
              <p
                className="cast-card-p"
                style={{
                  textAlign: "start",
                  alignSelf: "start",
                  marginLeft: "25px",
                }}
              >
                {character.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Casts;
