import { useParams } from "react-router-dom";
import bg from "../assets/images/cast-bg.png";
import logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";
import "../assets/styles/cast-details.css";
import castProfileCard from "../assets/images/cast-profile/cast-profile-card.png";
import statusCard from "../assets/images/cast-profile/status-card.png";
import genderCard from "../assets/images/cast-profile/gender-card.png";
import speciesCard from "../assets/images/cast-profile/species-card.png";
import originCard from "../assets/images/cast-profile/origin-card.png";
import episodesCard from "../assets/images/cast-profile/episodes-card.png";
import locationCard from "../assets/images/cast-profile/location-card.png";

const Cast = () => {
  const { id } = useParams();
  const [castData, setCastData] = useState([]);
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await response.json();
        setCastData(data);
      } catch {
        console.error("Error Fetching cast data");
      }
    };
    fetchCast();
  }, [id]);
  console.log(castData);
  return (
    <div
      style={{
        backgroundImage: `
      
        url(${bg})
      `,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        zIndex: "",
        minHeight: "100vh",
      }}
      className="home-container"
    >
      <header>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <img src={logo} alt="" />
        </div>
      </header>
      <main>
        <div>
          <h1>{castData.name}</h1>
          <div
            style={{
              backgroundImage: `url(${castProfileCard})`,
              backgroundRepeat: "no-repeat",
            }}
            className="profile-card"
          >
            <img src={castData.image} alt="" />
          </div>
        </div>
        <div>
          <div
            id="cast-status"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "800px",
              height: "175px",
              gap: "36px",
              marginBottom: "36px",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${statusCard})`,
                backgroundRepeat: "no-repeat",
                minHeight: "174px",
                minWidth: "245px",
              }}
            >
              <div style={{ padding: "60px 0px 0px 40px" }}>
                <h3>Status</h3>
                <h6>{castData.status}</h6>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${speciesCard})`,
                backgroundRepeat: "no-repeat",
                minHeight: "174px",
                minWidth: "245px",
              }}
            >
              <div style={{ padding: "60px 0px 0px 40px" }}>
                <h3>Species</h3>
                <h6>{castData.species}</h6>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${genderCard})`,
                backgroundRepeat: "no-repeat",
                minHeight: "174px",
                minWidth: "245px",
              }}
            >
              <div style={{ padding: "60px 0px 0px 40px" }}>
                <h3>Gender</h3>
                <h6>{castData.gender}</h6>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "36px",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${originCard})`,
                backgroundRepeat: "no-repeat",
                minWidth: "800px",
                minHeight: "174px",
              }}
            >
              <div style={{ padding: "60px 0px 0px 40px" }}>
                <h3>Origin</h3>
                <h6>{castData?.origin?.name}</h6>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${locationCard})`,
                backgroundRepeat: "no-repeat",
                minWidth: "800px",
                minHeight: "174px",
              }}
            >
              <div style={{ padding: "60px 0px 0px 40px" }}>
                <h3>Last Known Location</h3>
                <h6>{castData?.location?.name}</h6>
              </div>
            </div>
            <div
              style={{
                backgroundImage: `url(${episodesCard})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minWidth: "800px",
                minHeight: "417px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  padding: "120px 0px 0px 40px",
                  overflowY: "auto",
                  maxHeight: "240px",
                }}
              >
                <ul
                  style={{
                    padding: 0,
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  {castData.episode?.map((episode) => (
                    <li key={episode} style={{ marginBottom: "4px" }}>
                      <h6 className="eps-list">{episode}</h6>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cast;
