import "./About.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer";
import SpaceShip from "../../icons/spaceship.png";
import PlaceHolder1 from "../../icons/placeholder1.png";
import PlaceHolder2 from "../../icons/placeholder2.png";
import Card from "../Card/Card.jsx";
import Avatar from "../../icons/avatar.png";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./swiper.css";

SwiperCore.use([Navigation, Scrollbar]);

function About() {
  return (
    <div className="About">
      <Header active="About" />
      <div className="nebula-3">
        <div className="flex-container-main">
          <div className="container-1">
            <h1>Our Story</h1>
            <p>
              Floating Axe Studios is an independent game developer founded in
              2018. Its team is scattered all around the world in countries
              like: Canada, Columbia, Mexico, Ukraine and the United States.
              <br />
              <br />
              We are happy to present our first and current project: a
              narrative-driven RTS with hack-n-slash elements, made in Unreal
              Engine 4™.
            </p>
          </div>
          <img className="spaceship" src={SpaceShip} alt="Logo" />
        </div>
      </div>
      <div className="blackBg">
        <div className="flex-container">
          <div className="text-img-1">
            <h1>Historical Aesthetic</h1>
            <p>
              History is a treasure trove filled with so many practical and
              beautiful designs. We could not help by appreciate them by paying
              homage and incorporating them into our own in-game armour, weapons
              and environments
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
          <div className="container-5">
            <h1>Sense of Scale</h1>
            <p>
              Across the multiverse, a cosmic war is waged across the span of
              Creation’s history. Manage the battle operations of your myriad
              hosts and the supply trains that feed them, or get lost in the
              midst of a battle in the void that dwarfs you.
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
          <div className="text-img-2">
            <h1>Immersive AI</h1>
            <p>
              Test your mettle against generals who deploy an array of tactics,
              strategy and doctrines from real world history, from modernity to
              antiquity, both simple and complex.
            </p>
          </div>
        </div>
      </div>
      <div className="bg3v2">
        <div className="flex-container">
          <div className="container-3">
            <h1>Gripping Narrative – Byzantine Space Opera</h1>
            <p>
              Experience a story filled with political intrigue, military
              manoeuvrings, and aristocratic scheming -a complex web of
              conflicting motivations from a rich cast of characters, hero and
              villain alike. We've sought to give the neglected idea of the
              single player compaign the care and attention that it deserves.
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
            We have brought together a group of people from diverse backgrounds
            and areas of expertise. By interacting in a respectful and honest
            manner, we build goodwill among our team members and external
            stakeholders, achieving our company.
          </p>
        </div>

        <div className="card-container">
          <button className="prev"></button>
          <Swiper
            spaceBetween={0}
            slidesPerView={10}
            modules={[Scrollbar, Navigation]}
            navigation={{
              clickable: true,
              nextEl: ".next",
              prevEl: ".prev",
            }}
            scrollbar={{
              hide: false,
              dragSize: 50,
              draggable: true,
            }}
            breakpoints={{
              // when window width is >= 670px
              450: {
                slidesPerView: 8,
              },
              500: {
                slidesPerView: 2,
              },
              670: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
              1150: {
                slidesPerView: 4,
              },
              1350: {
                slidesPerView: 5,
              },
              1650: {
                slidesPerView: 5,
              },
              1750: {
                slidesPerView: 6,
              },
              2000: {
                slidesPerView: 7,
              },
            }}
          >
            <div className="card-spacing">
              <SwiperSlide>
                <Card
                  title="Founder & CEO"
                  img={Avatar}
                  name="Gabrial Li"
                  experience="Since 2018"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  title="Lead Desginer/ Web Designer"
                  img={Avatar}
                  name="Slav Lykhosherstov"
                  experience="Since 2018"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  title="Programmer"
                  img={Avatar}
                  name="Stas Bakalo"
                  experience="Since 2018"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  title="Lead Programmer"
                  img={Avatar}
                  name="Navneeth Nair"
                  experience="Since 2020"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  title="3d Animator"
                  img={Avatar}
                  name="Max Shepelenko"
                  experience="Since 2019"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  title="Lead 3d Animator"
                  img={Avatar}
                  name="Dmitry Tunik"
                  experience="Since 2019"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  title="Tech Artist"
                  img={Avatar}
                  name="Max Fedorin"
                  experience="Since 2019"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Card
                  title="Level Artist"
                  img={Avatar}
                  name="Ian Chan"
                  experience="Since 2019"
                />
              </SwiperSlide>
            </div>
          </Swiper>
          <button className="next"></button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
