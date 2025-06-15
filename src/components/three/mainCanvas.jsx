import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import MainScene from './mainScene';
import React from 'react';

export default function MainCanvas() {
    return (
        <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0 }}
      >
       
        <MainScene />

        <OrbitControls/>     
        <Environment files="/images/boom.exr" />
      </Canvas>
    );
}
