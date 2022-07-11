import "./About.css";
import Header from "../Header/Header.jsx";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import SpaceShip from "../../icons/spaceship.png";
import PlaceHolder1 from "../../icons/placeholder1.png";
import PlaceHolder2 from "../../icons/placeholder2.png";
import Card from "../Card/Card.jsx";
import Avatar from "../../icons/avatar.png";

function About() {
  return (
    <div className="About">
      <Header active="About" />
      <div className="bg2">
        <div className="flex-container-main">
          <div className="container-1">
            <h1>OUR STORY</h1>
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
      <div className="blackBg">
        <div className="flex-container">
          <div className="container-2">
            <h1>Historical Aethetic</h1>
            <p>
              We aim to deliver our best game yet. Space opera filled with
              political intrigue, military strategy and a rich cast of
              characters, hero and villain alike, immersed in a complex web of
              conflicting motivations.
            </p>
          </div>
          <img
            src={PlaceHolder1}
            className="placeHolder1"
            alt="placeholder_image1"
          />
        </div>
      </div>
      <div className="bg1v2">
        <div className="flex-container">
          <div className="container-3">
            <h1>Epic Scale</h1>
            <p>
              We aim to deliver our best game yet. Space opera filled with
              political intrigue, military strategy and a rich cast of
              characters, hero and villain alike, immersed in a complex web of
              conflicting motivations.
            </p>
          </div>
        </div>
      </div>
      <div className="blackBg">
        <div className="flex-container">
          <img
            src={PlaceHolder2}
            className="placeHolder2"
            alt="placeholder_image2"
          />
          <div className="container-2">
            <h1>Immersive AI</h1>
            <p>
              We aim to deliver our best game yet. Space opera filled with
              political intrigue, military strategy and a rich cast of
              characters, hero and villain alike, immersed in a complex web of
              conflicting motivations.
            </p>
          </div>
        </div>
      </div>
      <div className="bg3v2">
        <div className="flex-container">
          <div className="container-3">
            <h1>Gripping Narative - Byzantine Space Opera</h1>
            <p>
              We aim to deliver our best game yet. Space opera filled with
              political intrigue, military strategy and a rich cast of
              characters, hero and villain alike, immersed in a complex web of
              conflicting motivations.
            </p>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="flex-heading">
          <div className="banner"></div>
          <h1>Our Team</h1>
        </div>
        <div className="container-4">
          <h2>Meet the amazing people working at Floating Axe Studios</h2>
          <p>
            Our team combines people from a diverse set of backgrounds and
            expertise. By interacting in a respectful and honest manner we build
            goodwill among our team members and stakeholders and achieve our
            company objectives.
          </p>
        </div>
        <div className="card-container">
          <Card
            title="Founder & CEO"
            img={Avatar}
            name="Gabrial Li"
            experience="Since 2018"
          />
          <Card
            title="Founder & CEO"
            img={Avatar}
            name="Gabrial Li"
            experience="Since 2018"
          />
          <Card
            title="Founder & CEO"
            img={Avatar}
            name="Gabrial Li"
            experience="Since 2018"
          />
          <Card
            title="Founder & CEO"
            img={Avatar}
            name="Gabrial Li"
            experience="Since 2018"
          />
          <Card
            title="Founder & CEO"
            img={Avatar}
            name="Gabrial Li"
            experience="Since 2018"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
