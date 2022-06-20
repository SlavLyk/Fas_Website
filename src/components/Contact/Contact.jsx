import "./Contact.css";
import Header from "../Header/Header.jsx";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
// maybe import header css here instead of in the header component so you can change it
function Contact() {
  return (
    <div className="Contact">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
