import React, { useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import { useFrame, Canvas } from "@react-three/fiber";
import Header from "../Header/Header.jsx";
import { history } from "../../history.js";
import { Loader } from "@react-three/drei";
import btnArrow from "../../icons/btnArrow.svg";
import { Hooks, useMediaQuery } from "../ThreeComponents/Hooks.jsx";

import gameBG from "../../icons/GameBG.png";

// import { Loader } from "./Loader.jsx";

// import '../../style.css';
import {
  OrbitControls,
  PerspectiveCamera,
  Html,
  Environment,
  Stars,
  Cloud,
} from "@react-three/drei";
import { QalielRedshield } from "../ThreeComponents/QalielRedshield.js";
import "./Home.css";
import Footer from "../Footer/Footer.jsx";
import Button from "../Button/Button.jsx";
import * as THREE from "three";

function Mobile() {
  const largeWindow = useMediaQuery("(min-width: 1162px)");

  if (largeWindow) {
    return (
      <>
        <Stars
          radius={100}
          depth={50}
          count={largeWindow ? 7000 : 0}
          factor={6}
          saturation={0}
          fade
          speed={3}
        />
        <Cloud
          opacity={0.2}
          speed={0.4} // Rotation speed
          width={6} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={20} // Number of particles
          color="#419ED5"
        />

        <spotLight
          color={[1, 0.25, 0.7]}
          intensity={0.5}
          angle={0.9}
          penumbra={0.5}
          position={[7, 5, -3]}
          castShadow
          shadow-bias={-0.0001}
        />
        <spotLight
          color={[0.14, 0.5, 1]}
          intensity={1}
          angle={1}
          penumbra={0.5}
          position={[-7, 5, 3]}
          castShadow
          shadow-bias={-0.0001}
        />
      </>
    );
  } else {
    return;
  }
}

function FightScene() {
  return (
    <>
      <Mobile />
      <Environment files="kloppenheim_02_1k.hdr" path="/" />
      <Html center zIndexRange={[1, 0]} fullscreen position={[2.6, 1, 7]}>
        <div className="html-div">
          <div className="container">
            <div className="heading">
              <h2>Our Story</h2>
              <div className="line"></div>
            </div>
            <h1>COME AND SEE</h1>
            <p>
              In 2018, the game production studio Floating Axe Studios was
              established. Our workforce is dispersed across the globe in places
              including Canada, Colombia, Mexico, the United States, and
              Ukraine. Our first and ongoing project is an Unreal Engine 4-based
              third-person hack and slash game with a narrative focus.
            </p>
            <button
              onClick={() => history.push("/games")}
              className="btnCanvas"
            >
              <div className="btnText">See the Demo</div>
              <div className="btnArrowContainer">
                <img src={btnArrow} alt="" className="btnArrow" />
              </div>
            </button>
          </div>
        </div>
      </Html>
      {/* <OrbitControls 
          target={[0, 0.35, 0]}
        /> */}
      {/* <OrbitControls enablePan={false} enableZoom={false} target={[0, 1, 0]} /> */}
      <PerspectiveCamera
        makeDefault
        fov={35}
        position={[0, 1, 3.85]}
        rotation-y={10}
      />

      <QalielRedshield />
      <ambientLight args={["#ffffff", 0.5]} />
      <color args={[0, 0, 0]} attach="background" />
      <directionalLight
        color={"ffffff"}
        intensity={1.5}
        penumbra={0.5}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
  );
}

function Home() {
  return (
    <div>
      <Header active="Home" />
      <div className="bg2">
        <div className="Experience1">
          <Suspense fallback={null}>
            <div className="canvas-div">
              <Canvas mode="concurrent" gl={{ toneMappingExposure: 0.3 }}>
                <FightScene />
              </Canvas>
            </div>
          </Suspense>
          <Loader />
        </div>
      </div>
      <div className="bg1">
        <div className="wrapperCenter">
          <div className="imgContainer">
            <img src={gameBG} className="gameBG" alt="game background" />
          </div>
          <div className="gameText">
            <div className="heading">
              <h2>Games</h2>
              <div className="line"></div>
            </div>
            <h1>
              Unless The Lord
              <br />
              Builds The House,The Builders Labor In Vain
            </h1>
            <button
              onClick={() => history.push("/about")}
              className="btnCanvas"
            >
              <div className="btnText">Our Story</div>
              <div className="btnArrowContainer">
                <img src={btnArrow} alt="" className="btnArrow" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
