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
import smallBackgroundImage from "../assets/images/small-bg.png";
import separator from "../assets/images/seperator.png";

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

  const bigBg = { backgroundImage: `url(${bg})` };
  const smallBg = { backgroundImage: `url(${smallBackgroundImage})` };
  const style = window.innerWidth > 500 ? bigBg : smallBg;
  return (
    <div style={style} className="home-container">
      <header>
        <div className="header-logo-container">
          <img src={logo} alt="" />
        </div>
      </header>
      <main>
        <div className="main">
          <h1>{castData.name}</h1>
          <div
            style={{
              backgroundImage: `url(${castProfileCard})`,
            }}
            className="profile-card"
          >
            <img src={castData.image} alt="" />
          </div>
        </div>
        <div>
          <div id="cast-status">
            <div
              className="info-card-item"
              style={{
                backgroundImage: `url(${statusCard})`,
              }}
            >
              <div className="info-card-content">
                <h3>Status</h3>
                <h6>{castData.status}</h6>
              </div>
            </div>
            <div
              className="info-card-item"
              style={{
                backgroundImage: `url(${speciesCard})`,
              }}
            >
              <div className="info-card-content">
                <h3>Species</h3>
                <h6>{castData.species}</h6>
              </div>
            </div>
            <div
              className="info-card-item"
              style={{
                backgroundImage: `url(${genderCard})`,
              }}
            >
              <div className="info-card-content">
                <h3>Gender</h3>
                <h6>{castData.gender}</h6>
              </div>
            </div>
          </div>
          <div className="details-column">
            <div
              className="large-info-card"
              style={{
                backgroundImage: `url(${originCard})`,
              }}
            >
              <div className="info-card-content">
                <h3>Origin</h3>
                <h6>{castData?.origin?.name}</h6>
              </div>
            </div>
            <div
              className="large-info-card"
              style={{
                backgroundImage: `url(${locationCard})`,
              }}
            >
              <div className="info-card-content">
                <h3>Last Known Location</h3>
                <h6>{castData?.location?.name}</h6>
              </div>
            </div>
            <div
              className="episodes-card-container"
              style={{
                backgroundImage: `url(${episodesCard})`,
              }}
            >
              <div className="episodes-card-content">
                <ul className="episodes-list-ul">
                  {castData.episode?.map((episode) => (
                    <li key={episode}>
                      <h6 className="eps-list">{episode}</h6>
                      {/* <h6 className="eps-list">
                        {episode.length > 15
                          ? episode.substring(0, 20) + "..."
                          : episode}
                      </h6> */}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="star separator">
        <img src={separator} alt="" />
      </div>
    </div>
  );
};

export default Cast;
