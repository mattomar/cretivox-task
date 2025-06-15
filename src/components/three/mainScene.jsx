import React from "react";

export default function MainScene() {
    return (
        <>
            <mesh>
                <cylinderGeometry args={[1, 1, 0.02, 64]} />
                <meshStandardMaterial color={'white'} metalness={1} roughness={0.2} />
            </mesh>
        </>
    );
}
