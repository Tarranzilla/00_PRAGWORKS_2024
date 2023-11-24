import { useState, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { Html, useProgress, OrbitControls } from "@react-three/drei";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";

import { motion as m } from "framer-motion";
import { degToRad } from "three/src/math/MathUtils.js";

const GLTFModel = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
    const ref = useRef<any>();
    const gltf = useLoader(GLTFLoader, modelPath);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        ref.current.rotation.z += 0.001;
    });
    return (
        <primitive
            ref={ref}
            object={gltf.scene}
            scale={scale}
            position={position}
            onPointerOver={(e) => setHovered(true)}
            onPointerOut={(e) => setHovered(false)}
        />
    );
};

export const GLTFModelViewer = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
    return (
        <Suspense fallback={<Loader />}>
            <GLTFModel modelPath={modelPath} scale={scale} position={position} />
        </Suspense>
    );
};

function Loader() {
    const { progress } = useProgress();
    return <Html center>Carregando Modelo 3D</Html>;
}

export default function ThreeD_Container_Fiber({ modelPath }) {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, type: "tween" }}
                className="LP_Section ThreeD_Container"
                id={"ThreeD_Container"}
                key={"ThreeD_Container_key"}
            >
                {loading && <div className="loading">Carregando Modelo 3D ...</div>}
                <Canvas>
                    <ambientLight intensity={0.1} />
                    <directionalLight color="#8e00ff" position={[5, 5, 0]} />
                    <directionalLight color="#00aaff" position={[-5, 5, 0]} />
                    <directionalLight color="#ffffff" position={[0, 0, 30]} />
                    <group rotation-x={degToRad(270)}>
                        <GLTFModelViewer modelPath={modelPath} scale={3} position={[0, 0, 0]} />
                        <OrbitControls />
                    </group>
                </Canvas>
            </m.div>
        </>
    );
}
