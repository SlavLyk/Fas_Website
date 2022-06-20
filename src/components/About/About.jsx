import "./About.css";
import Header from "../Header/Header.jsx";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import SpaceShip from "../../icons/spaceship.png";
// maybe import header css here instead of in the header component so you can change it
function About() {
  return (
    <div className="About">
      <Header />
      <div className="bg1">
        <div className="flex-container-main">
          <div className="blur-container-1">
            <h1>Our Story</h1>
            <p>
              Floating Axe Studios is a game development studio founded in 2018.
              Our team is scattered all around the world in countries like:
              Canada, Columbia, Mexico, Ukraine, the United States.
            </p>
            <p>
              Our first and current project is a narrative driven, real time
              strategy and third-person hack-and slash game made using the
              Unreal Engine 4.
            </p>
          </div>
          <img className="spaceship" src={SpaceShip} alt="Logo" />
        </div>
      </div>
      <div className="bg2">
        <div className="flex-container">
          <div className="img1"></div>
          <div className="blur-container-2">
            <h1>Historical Aethetic</h1>
            <p>
              We aim to deliver our best game yet. Space opera filled with
              political intrigue, military strategy and a rich cast of
              characters, hero and villain alike, immersed in a complex web of
              conflicting motivations.
            </p>
          </div>
        </div>
        <div className="flex-container">
          <div className="blur-container-2">
            <h1>Immersive Ai</h1>
            <p>
              We aim to deliver our best game yet. Space opera filled with
              political intrigue, military strategy and a rich cast of
              characters, hero and villain alike, immersed in a complex web of
              conflicting motivations.
            </p>
          </div>
          <div className="img1"></div>
        </div>
      </div>
      <div className="bg2">
        <div className="flex-container">
          <div className="img1"></div>
          <div className="blur-container-2">
            <h1>Epic Scale</h1>
            <p>
              We aim to deliver our best game yet. Space opera filled with
              political intrigue, military strategy and a rich cast of
              characters, hero and villain alike, immersed in a complex web of
              conflicting motivations.
            </p>
          </div>
        </div>
        <div className="flex-container">
          <div className="blur-container-2">
            <h1>Gripping Narative - Byzantine Space Opera</h1>
            <p>
              We aim to deliver our best game yet. Space opera filled with
              political intrigue, military strategy and a rich cast of
              characters, hero and villain alike, immersed in a complex web of
              conflicting motivations.
            </p>
          </div>
          <div className="img1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
