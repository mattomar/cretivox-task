import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function CDModel({ modelRef }) {
  const { scene } = useGLTF('/models/cd.glb');
  return <primitive ref={modelRef} object={scene} scale={1} />;
}

export default function CDScene() {
  const modelRef = useRef();

  useEffect(() => {
    if (!modelRef.current) return;

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        // Spin on Y axis as you scroll
        modelRef.current.rotation.y = self.progress * Math.PI * 2;
      },
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <Canvas
      style={{ height: '100vh', width: '100vw' }}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <CDModel modelRef={modelRef} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}