import React, { Suspense, useRef, useState } from "react";
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
import Header from "../Header/Header.jsx";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";

//Swiper.js carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./swiper.css";

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

function Games() {
  return (
    <div className="Games">
      <Header />
      <div className="bg1">
        <div className="games-container">
          <div className="wrapper-left">
            <div className="left-container">
              <h1>GATE OF GOLGOTHA</h1>
              <h2>
                “Now war arose in heaven, Michael and his angels fighting
                against the dragon. And the dragon and his angels fought
                back...”
              </h2>
              <p>-The Apocalypse of John, 12th Chapter, 7th verse</p>
              <Button buttonStyle="btn--secondary">Download Demo</Button>
            </div>
          </div>
          <div className="wrapper-right">
            <div className="characters"></div>
          </div>
        </div>
      </div>
      <div className="bg2">
        <div className="heading">
          <h3>Latest Media</h3>
        </div>
        <div className="video-container">
          <div className="video">
            <iframe
              width="80%"
              height="80%"
              src="https://www.youtube.com/embed/FPEP4waYQEU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg3">
        <div className="heading">
          <h3>Generals</h3>
        </div>
        <div className="generals">
          <Swiper
            // effect={"coverflow"}
            spaceBetween={50}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            navigation={true}
            scrollbar={{ draggable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 0,
              // slideShadows: true,
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <GeneralCard
                title="RedShield"
                text="Swift fighter, capable of striking decisive blows. Ultra-rational commander who is quick on the march."
                modelPath="models/RedShield/RedShield.glb"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GeneralCard
                title="Qaliel"
                text="Swift fighter, capable of striking decisive blows. Ultra-rational commander who is quick on the march."
                modelPath="models/Qaliel/Qaliel.glb"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GeneralCard
                title="Gabriel"
                text="Swift fighter, capable of striking decisive blows. Ultra-rational commander who is quick on the march."
                modelPath="models/FightScene/FightScene.glb"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GeneralCard
                title="Michael"
                text="Swift fighter, capable of striking decisive blows. Ultra-rational commander who is quick on the march."
                modelPath="models/FightScene/FightScene.glb"
              />
            </SwiperSlide>
            <SwiperSlide>
              <GeneralCard
                title="RedShield"
                text="Swift fighter, capable of striking decisive blows. Ultra-rational commander who is quick on the march."
                modelPath="models/FightScene/FightScene.glb"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Games;
