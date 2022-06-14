import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

export function QalielRedshield() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/FightScene/FightScene.glb"
  );

  useEffect(() => {
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.rotation.set(0, 1, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 3;
        object.material.aoMapIntensity = 10;
        object.material.emissiveIntensity = 3;
        object.frustumCulled = false;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} />;
}
