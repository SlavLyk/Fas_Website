import React, { useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

export function QalielRedshield() {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "models/FightScene/FightScene.glb"
  );

  useFrame(() => {
    gltf.scene.rotation.y += 0.002;
    // gltf.scene.rotation.z -= 0.001;
    // gltf.scene.rotation.z += 0.001;
  });

  useEffect(() => {
    gltf.scene.position.set(1.5, 0, 6.5);
    gltf.scene.rotation.set(0.1, -2, 0);
    // gltf.scene.position.set(0.7, -0.035, 0);
    // gltf.scene.rotation.set(0, 1, 0);
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
