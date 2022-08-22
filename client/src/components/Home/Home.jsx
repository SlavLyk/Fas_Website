import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { useFrame, Canvas } from "@react-three/fiber";
import Header from "../Header/Header.jsx";
import { history } from "../../history.js";
import { Loader } from "@react-three/drei";

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

function FightScene() {
  useFrame(({ mouse, camera }) => {
    // camera.position.x = THREE.MathUtils.lerp(
    //   camera.position.x,
    //   mouse.x * 0.9,
    //   0.03
    // );
    // camera.position.y = THREE.MathUtils.lerp(
    //   camera.position.y,
    //   mouse.y * 0.8,
    //   0.01
    // );
    // camera.position.z = THREE.MathUtils.lerp(
    //   camera.position.z,
    //   Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
    //   0.001
    // );
    // camera.rotation.y = THREE.MathUtils.lerp(
    //   camera.rotation.y,
    //   mouse.x * -Math.PI * 0.025,
    //   0.001
    // );
  });
  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={7000}
        factor={6}
        saturation={0}
        fade
        speed={1}
      />
      <Cloud
        opacity={0.2}
        speed={0.4} // Rotation speed
        width={10} // Width of the full cloud
        depth={1.5} // Z-dir depth
        segments={20} // Number of particles
        color="#419ED5"
      />
      <Environment files="kloppenheim_02_1k.hdr" path="/" />
      <Html fullscreen>
        <div className="container">
          <p>
            Gate of Golgotha is an RTS with elements of third-person hack n
            slash, built in Unreal engine 4. The RTS battles emphasize scale and
            take inspiration from many eras of history.
          </p>
          <Button
            onClick={() => history.push("/games")}
            buttonStyle="btn--primary"
          >
            Continue Reading...
          </Button>
        </div>
      </Html>
      {/* <OrbitControls 
          target={[0, 0.35, 0]}
        /> */}
      <OrbitControls enablePan={false} enableZoom={false} target={[0, 1, 0]} />
      <PerspectiveCamera
        makeDefault
        fov={35}
        position={[0, 2, 3]}
        rotation-y={10}
      />
      {/* background */}
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
        angle={0.6}
        penumbra={0.5}
        position={[-7, 5, 3]}
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
      <div className="bg1">
        <div className="home">
          <div className="wrapperCenter">
            <div className="gameName"></div>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
      <div className="bg2">
        <div className="Experience1">
          {/* <Loader /> */}
          <Suspense fallback={null}>
            <div style={{ width: "100%", height: "100vh" }}>
              <Canvas mode="concurrent" gl={{ toneMappingExposure: 0.3 }}>
                <FightScene />
              </Canvas>
              <Footer />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Home;
