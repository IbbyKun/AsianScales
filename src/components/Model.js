import { useGLTF } from '@react-three/drei';
import { memo, useEffect } from 'react';
import * as THREE from 'three';

// Preload the models with absolute paths
useGLTF.preload('/models/model1.glb');
useGLTF.preload('/models/model2.glb');
useGLTF.preload('/models/model3.glb');

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  
  useEffect(() => {
    // Center the model using bounding box
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center); // Center the model
  }, [scene]);

  return (
    <primitive 
      object={scene} 
      scale={1.5} 
      position={[0, 0, 0]}
    />
  );
};

export default memo(Model); 