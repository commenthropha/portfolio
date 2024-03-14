import { useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

const Computer = () => {
  const gltf = useLoader(GLTFLoader, "computer.glb");

  const meshRef = useRef();

  return (
    <mesh ref={meshRef} position={[-9, 0, 0]} scale={[1, 1, 1]}>
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Computer;
