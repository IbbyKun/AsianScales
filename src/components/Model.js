import { useGLTF } from '@react-three/drei';
import { memo } from 'react';

// Preload the models with absolute paths
useGLTF.preload('/models/model1.glb');
useGLTF.preload('/models/model2.glb');
useGLTF.preload('/models/model3.glb');

const Model = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
};

export default memo(Model); 