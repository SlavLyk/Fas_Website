import React, { useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { useAnimations } from "@react-three/drei";
import * as THREE from "three";

export function GeneralModel({ modelPath }) {
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + modelPath);

  let mixer;
  if (gltf.animations.length) {
    mixer = new THREE.AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  useEffect(() => {
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.rotation.set(0, 5.3, 0);
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
