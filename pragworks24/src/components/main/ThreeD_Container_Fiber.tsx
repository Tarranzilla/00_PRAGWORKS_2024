import { useState, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

import { useFBX, Html, useProgress, OrbitControls } from "@react-three/drei";

import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { useLoader } from "@react-three/fiber";

import { motion as m } from "framer-motion";

function GLTFScene() {
    const gltf = useLoader(GLTFLoader, "/Poimandres.gltf");
    return <primitive object={gltf.scene} />;
}

const GLTFModel = ({ modelPath, scale = 10, position = [0, 0, 0] }) => {
    const ref = useRef<any>();
    const gltf = useLoader(GLTFLoader, modelPath);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        ref.current.rotation.y += 0.001;
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
        <Suspense fallback={null}>
            <GLTFModel modelPath={modelPath} scale={scale} position={position} />
            <OrbitControls />
        </Suspense>
    );
};

function FBXScene() {
    const fbx = useFBX("/Poimandres.fbx");
    return <primitive object={fbx} />;
}

function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
}

export default function ThreeD_Container_Fiber() {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, type: "tween" }}
                className="LP_Section ThreeD_Container"
                id={"ThreeD_Container_id"}
                key={"ThreeD_Container_key"}
            >
                {loading && <div className="loading">Carregando Modelo 3D ...</div>}
                <Canvas>
                    <ambientLight intensity={0.1} />
                    <directionalLight color="#8e00ff" position={[5, 5, 0]} />
                    <directionalLight color="#00aaff" position={[-5, 5, 0]} />
                    <directionalLight color="#ffffff" position={[0, 0, 30]} />

                    <GLTFModelViewer modelPath="objects3D/robios_go/robios_go_3.gltf" scale={4} position={[0, 0, 0]} />
                </Canvas>
            </m.div>
        </>
    );
}
