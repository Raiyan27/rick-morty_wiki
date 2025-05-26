import { useEffect, useRef, useState } from "react";
import "../assets/styles/Home.css";
import backgroundImage from "../assets/images/bg.png";
import smallBackgroundImage from "../assets/images/small-bg.png";
import portalGun from "../assets/images/gun.png";
import ricksHead from "../assets/images/portal.png";
import logo from "../assets/images/logo.png";
// import castCard from "../assets/images/cast-card.png"; // No longer needed directly for inline styles
// import smallCard from "../assets/images/small-card.png"; // No longer needed directly for inline styles
// import star1 from "../assets/images/star1.png";
// import topGlow from "../assets/images/top-glow.png";
// import BottomGlow from "../assets/images/bottom-glow.png";
// import star2 from "../assets/images/star2.png";
import bubble from "../assets/images/bubble.png";
import bar from "../assets/images/bar.png";
import play from "../assets/images/play.png";
import Arrow from "../assets/images/left-arrow.png";
import { Link } from "react-router-dom";

const portalGunImage = portalGun;

const Home = () => {
  const castScrollRef = useRef(null);
  const episodesScrollRef = useRef(null);
  const locationsScrollRef = useRef(null);
  const [locationsData, setLocationData] = useState([]);
  const [castData, setCastData] = useState([]);
  const [episodesData, setEpisodesData] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  // State for arrow visibility
  const [showCastLeftArrow, setShowCastLeftArrow] = useState(false);
  const [showCastRightArrow, setShowCastRightArrow] = useState(false);
  const [showEpisodesLeftArrow, setShowEpisodesLeftArrow] = useState(false);
  const [showEpisodesRightArrow, setShowEpisodesRightArrow] = useState(false);
  const [showLocationsLeftArrow, setShowLocationsLeftArrow] = useState(false);
  const [showLocationsRightArrow, setShowLocationsRightArrow] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    console.log("Width:", width);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

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

    const fetchEpisodes = async () => {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/episode");
        const data = await response.json();
        setEpisodesData(data.results);
      } catch {
        console.error("Error Fetching episode data");
      }
    };

    const fetchLocations = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/location"
        );
        const data = await response.json();
        setLocationData(data.results);
      } catch {
        console.error("Error Fetching location data");
      }
    };

    fetchLocations();
    fetchCasts();
    fetchEpisodes();
  }, []);

  useEffect(() => {
    const scrollElement = castScrollRef.current;
    const handleScrollOrResize = () => {
      updateArrowVisibility(
        castScrollRef,
        setShowCastLeftArrow,
        setShowCastRightArrow
      );
    };

    if (scrollElement) {
      handleScrollOrResize();
      scrollElement.addEventListener("scroll", handleScrollOrResize);
      window.addEventListener("resize", handleScrollOrResize);

      return () => {
        scrollElement.removeEventListener("scroll", handleScrollOrResize);
        window.removeEventListener("resize", handleScrollOrResize);
      };
    }
  }, [castData]);

  useEffect(() => {
    const scrollElement = episodesScrollRef.current;
    const handleScrollOrResize = () => {
      updateArrowVisibility(
        episodesScrollRef,
        setShowEpisodesLeftArrow,
        setShowEpisodesRightArrow
      );
    };

    if (scrollElement) {
      handleScrollOrResize();
      scrollElement.addEventListener("scroll", handleScrollOrResize);
      window.addEventListener("resize", handleScrollOrResize);

      return () => {
        scrollElement.removeEventListener("scroll", handleScrollOrResize);
        window.removeEventListener("resize", handleScrollOrResize);
      };
    }
  }, [episodesData]);

  useEffect(() => {
    const scrollElement = locationsScrollRef.current;
    const handleScrollOrResize = () => {
      updateArrowVisibility(
        locationsScrollRef,
        setShowLocationsLeftArrow,
        setShowLocationsRightArrow
      );
    };

    if (scrollElement) {
      handleScrollOrResize();
      scrollElement.addEventListener("scroll", handleScrollOrResize);
      window.addEventListener("resize", handleScrollOrResize);

      return () => {
        scrollElement.removeEventListener("scroll", handleScrollOrResize);
        window.removeEventListener("resize", handleScrollOrResize);
      };
    }
  }, [locationsData]);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const goTo = () => {
    window.location.href =
      "https://www.youtube.com/watch?v=KQ9Cgdsa9tc&feature=youtu.be";
  };

  const updateArrowVisibility = (scrollRef, setShowLeft, setShowRight) => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const threshold = 5;
      if (scrollWidth <= clientWidth + threshold) {
        setShowLeft(false);
        setShowRight(false);
      } else {
        setShowLeft(scrollLeft > threshold);
        setShowRight(scrollLeft < scrollWidth - clientWidth - threshold);
      }
    } else {
      setShowLeft(false);
      setShowRight(false);
    }
  };
  const bigBg = { backgroundImage: `url(${backgroundImage})` };
  const smallBg = { backgroundImage: `url(${smallBackgroundImage})` };
  const style = window.innerWidth > 500 ? bigBg : smallBg;
  return (
    <div style={style} className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="rick-and-morty-top-title">
          <img src={logo} alt="" />
        </div>
        <div className="hero-content">
          <div className="hero-title-area">
            <div className="main-title">
              <div>
                <span className="title-diff">THE</span>
                <span>
                  <img
                    src={ricksHead}
                    alt="Rick's Head"
                    className="rick-head-logo"
                  />
                </span>
                <span className="title-rick-morty">
                  <span className="glow">RICK &</span> <br /> MORTY{" "}
                </span>
                <span className="title-diff">WIKI</span>
              </div>
            </div>
            <div className="title-wiki"></div>
          </div>
          <div className="hero-actions">
            <button className="watch-now-button">
              <img onClick={goTo} src={play} alt="" /> Watch Now
            </button>
            <p className="hero-description">
              Brilliant but boozy scientist Rick hijacks his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>
          </div>
        </div>
        <img
          src={portalGunImage}
          alt="Portal Gun"
          className="portal-gun-image"
        />
      </header>
      {/* Meet The Cast Section */}
      <section className="content-section">
        <div className="section-header">
          <h2>Meet The Cast</h2>
          <Link to="/casts" className="view-all-button">
            View All
          </Link>
        </div>
        <div className="scrollable-list-container">
          {showCastLeftArrow && (
            <button
              className="scroll-arrow left-arrow arrow-rotated"
              onClick={() => scroll(castScrollRef, -1)}
              aria-label="Scroll left"
            >
              <img src={Arrow} alt="Scroll left" />
            </button>
          )}
          <div className="scrollable-list" ref={castScrollRef}>
            {castData.map((character) => (
              <div key={character.id} className="cast-card-item">
                <img
                  src={character.image}
                  alt={character.name}
                  className="cast-card-image"
                />
                <p className="cast-card-p">{character.name}</p>
              </div>
            ))}
          </div>
          {showCastRightArrow && (
            <button
              className="scroll-arrow right-arrow"
              onClick={() => scroll(castScrollRef, 1)}
              aria-label="Scroll right"
            >
              <img src={Arrow} alt="Scroll right" />
            </button>
          )}
        </div>
      </section>
      {/* Episodes Section */}
      <section className="content-section">
        <div className="section-header">
          <h2>Episodes</h2>
        </div>
        <div className="scrollable-list-container">
          {showEpisodesLeftArrow && (
            <button
              className="scroll-arrow left-arrow arrow-rotated arrow-vertical-margin"
              onClick={() => scroll(episodesScrollRef, -1)}
              aria-label="Scroll left"
            >
              <img src={Arrow} alt="Scroll left" />
            </button>
          )}
          <div className="scrollable-list" ref={episodesScrollRef}>
            {episodesData.map((episode) => (
              <div className="small-card-item" key={episode.id}>
                <div className="card-container">
                  <span className="small-card-title">{episode.episode}</span>
                  <br />
                  <span className="small-card-name">{episode.name}</span>
                </div>
              </div>
            ))}
          </div>
          {showEpisodesRightArrow && (
            <button
              className="scroll-arrow right-arrow arrow-vertical-margin"
              onClick={() => scroll(episodesScrollRef, 1)}
              aria-label="Scroll right"
            >
              <img src={Arrow} alt="Scroll right" />
            </button>
          )}
        </div>
      </section>
      {/* Locations Section */}
      <section className="content-section">
        <div className="section-header">
          <h2>Locations</h2>
        </div>
        <div className="scrollable-list-container">
          {showLocationsLeftArrow && (
            <button
              className="scroll-arrow left-arrow arrow-rotated arrow-vertical-margin"
              onClick={() => scroll(locationsScrollRef, -1)}
              aria-label="Scroll left"
            >
              <img src={Arrow} alt="Scroll left" />
            </button>
          )}
          <div className="scrollable-list" ref={locationsScrollRef}>
            {locationsData.map((location) => (
              <div className="small-card-item" key={location.id}>
                <div className="card-container">
                  <span className="small-card-title">#{location.id}</span>
                  <br />
                  <span className="small-card-name">{location.name}</span>
                </div>
              </div>
            ))}
          </div>
          {showLocationsRightArrow && (
            <button
              className="scroll-arrow right-arrow arrow-vertical-margin"
              onClick={() => scroll(locationsScrollRef, 1)}
              aria-label="Scroll right"
            >
              <img src={Arrow} alt="Scroll right" />
            </button>
          )}
        </div>
      </section>

      <div className="star bubble">
        <img src={bubble} alt="" />
      </div>
      <div className="star bar">
        <img src={bar} alt="" />
      </div>
    </div>
  );
};

export default Home;
