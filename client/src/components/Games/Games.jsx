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
      <h1>{props.title}</h1>
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
              <button className="download-btn">
                Download Demo
                <img src={Download} alt="" className="Download" />
              </button>
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
            Our team combines people from a diverse set of backgrounds and
            expertise. By interacting in a respectful and honest manner we build
            goodwill among our team members and stakeholders and achieve our
            company objectives.
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
                text="Swift fighter, capable of striking decisive blows. Ultra-rational commander who is quick on the march."
                modelPath="models/Qaliel/Qaliel.glb"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GeneralCard
                title="RED SHIELD"
                text="Swift fighter, capable of striking decisive blows. Ultra-rational commander who is quick on the march."
                modelPath="models/RedShield/RedShield.glb"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GeneralCard
                title="GABRIEL"
                text="Swift fighter, capable of striking decisive blows. Ultra-rational commander who is quick on the march."
                modelPath="models/Gabriel/Gabriel.glb"
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
