import React, { Suspense, useRef, useState } from "react";
import { useSwiper } from "swiper/react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Html,
  Environment,
  Stars,
  Cloud,
} from "@react-three/drei";
import General from "../ThreeComponents/General";
import "./Games.css";
import Michael from "../../icons/Michael.png";
import Arrow from "../../icons/SwipperButton2.svg";

import Header from "../Header/Header.jsx";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Nebula from "../../icons/Nebula.png";
import Title from "../../icons/Title.png";
import Download from "../../icons/Download.svg";
import Clock from "../../icons/Clock.svg";
import PaypalCheckout from "../PaypalCheckout/PayPalCheckout";

//Swiper.js carousel
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation, EffectCards } from "swiper";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "./swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./swiper.css";

SwiperCore.use([Navigation, Scrollbar]);

function GeneralText(props) {
  return (
    <div className="general-text">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

function GeneralCard({ modelPath, title, text }) {
  return (
    <div className="general">
      <Suspense fallback={null}>
        <div className="general-card">
          <Canvas id="card_canvas" gl={{ toneMappingExposure: 0.3 }}>
            <General modelPath={modelPath} />
          </Canvas>
        </div>
      </Suspense>
      <GeneralText title={title} text={text} />
    </div>
  );
}

function SlideNextButton({ title }) {
  const swiper = useSwiper();

  return (
    <button className={title} onClick={() => swiper.slideNext()}>
      <img src={Arrow} alt="" />
    </button>
  );
}

function SlidePrevButton({ title }) {
  const swiper = useSwiper();

  return (
    <button className={title} onClick={() => swiper.slidePrev()}>
      <img src={Arrow} alt="" />
    </button>
  );
}

function Games() {
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const displayText = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="Games">
      <Header active="Games" />
      <div className="bg1v3">
        <div className="heading">
          <h3>Gate of Golgotha</h3>
          <div className="line"></div>
        </div>
        <div className="games-container">
          <div className="wrapper-left">
            <div className="left-container">
              <div className="nebula">
                <img src={Title} alt="" className="Title" />
              </div>
              <div className="nebula-text">
                <h3>
                  The Apocalypse of John, 12th
                  <br /> Chapter - 7th verse
                </h3>
                <p>
                  Now war arose in heaven, Michael and his angels fighting
                  against the dragon. And the dragon and his angels fought
                  back...
                </p>
              </div>
              {
                <Link to="/PaypalCheckout">
                  <Button id="play-now-btn" btnImg={Download}>
                    Play Now
                  </Button>
                </Link>
              }
              {/* <script
                src="https://www.paypal.com/sdk/js?client-id=AU8JUtxLPN4aXVVFpEw5910rpSwPtrnHx6dDkeOA
QrWeFEKRtcPINeAx9Q2KiXmtyMzl0IrdyQf_vzo-&components=buttons"
              ></script> */}

              {/* secret = ED_g6scEBFhDcPBOm9GS-MEtqRj4ClLBZk8NkRQvG7zHvjsBtCS0Z7TpU7RwytOM-JG2zuyuOWqh4-OQ */}
              <div
                className={isActive ? "coming-soon-activated" : "coming-soon"}
              >
                <h4>Coming Soon... August 2023</h4>
              </div>
            </div>
          </div>
          <div className="wrapper-right">
            <img src={Michael} alt="" className="Michael" />
          </div>
        </div>
      </div>
      <div className="bg2">
        <div className="heading">
          <h3>Featured Video</h3>
        </div>
        <div className="video-container">
          <div className="video">
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/okmhsQy3ovI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="general-bg">
        <div className="flex-heading">
          <div className="banner"></div>
          <h1>Generals</h1>
        </div>
        <div className="container-4">
          <p>
            Generals can easily turn the tide of battle thanks to their unique
            abilities and skills. Some offer indirect support, while others join
            the fray of battle. Choose your generals to devastate your enemies!
          </p>
        </div>
        <div className="generals">
          <Swiper
            // navigation={true}
            spaceBetween={0}
            slidesPerView={"auto"}
            allowTouchMove={false}
            slidesPerGroup={1}
            slideToClickedSlide={true}
            centeredSlides={false}
            modules={[Scrollbar, Navigation]}
            // navigation={{
            //   clickable: true,
            //   nextEl: ".next1",
            //   prevEl: ".prev1",
            // }}
            scrollbar={{
              hide: false,
              dragSize: 200,
              draggable: true,
            }}
            breakpoints={{
              // when window width is >= 670px
              600: {
                slidesPerView: 2,
              },
              851: {
                slidesPerView: 3,
              },
              1162: {
                slidesPerView: 3,
              },
              1350: {
                slidesPerView: 3,
              },
              1650: {
                slidesPerView: 3,
              },
              1750: {
                slidesPerView: 3,
              },
              2000: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <GeneralCard
                title="QALIEL"
                text="A swift fighter who is the Commander of the Blue Falchion unit. With unparalleled marching speed. Here is one hawkish zealot, convinced of her adamantine convictions. But the war will change her…
                "
                modelPath="models/Qaliel/Qaliel.glb"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GeneralCard
                title="GABRIEL"
                text="The famous bearer of good news, Gabriel specialises in scouting and reconnaissance. Though lightly armoured, his shield can soak many a mighty blow, and he damages his foes with his axe. "
                modelPath="models/Gabriel/Gabriel.glb"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GeneralCard
                title="BATYA"
                text="The diminutive commander of the Red Shield unit. Though she tries to present herself as poised and cultivated, the epitome of shrewdness, she is prone to… outbursts in the heat of battle, among other things."
                modelPath="models/RedShield/RedShield.glb"
              />
            </SwiperSlide>
            <div className="navButtons">
              <SlidePrevButton title="prev" />
              <SlideNextButton title="next" />
            </div>
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Games;
