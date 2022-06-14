import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Stars,
  Cloud,
} from "@react-three/drei";
import { GeneralModel } from "./GeneralModel";

function General(props) {
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
        opacity={0.15}
        speed={0.4} // Rotation speed
        width={15} // Width of the full cloud
        depth={1.5} // Z-dir depth
        segments={20} // Number of particles
        color="#419ED5"
      />

      <Environment files="kloppenheim_02_1k.hdr" path="/" />

      <OrbitControls
        enableRotate={true}
        enablePan={false}
        enableZoom={false}
        target={[0, 1, 0]}
      />

      <PerspectiveCamera makeDefault fov={35} position={[-4, 1, 3]} />

      <GeneralModel modelPath={props.modelPath} />

      <ambientLight args={["#ffffff", 0.1]} />

      <color args={[0, 0, 0]} attach="background" />

      <directionalLight
        angle={0}
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
        rotation={[0, 180, 0]}
        color={"ffffff"}
        intensity={3}
        angle={10}
        penumbra={0.5}
        position={[-7, 5, 3]}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
  );
}

// function General() {
//   return (
//     <>
//       <GeneralScene />
//   <div className="general-text">
//     <h1>Qaliel</h1>
//     <p>
//       Swift fighter, capable of striking decisive blows. Ultra-rational
//       commander who is quick on the march.
//     </p>
//   </div>
//     </>
//   );
// }

export default General;
