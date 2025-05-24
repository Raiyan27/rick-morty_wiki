import { useParams } from "react-router-dom";
import bg from "../assets/images/cast-bg.png";
import logo from "../assets/images/logo.png";

const Cast = () => {
  const { id } = useParams();

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
      <h1>Cast ID: {id}</h1>
    </div>
  );
};

export default Cast;
