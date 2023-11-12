import { useEffect, useState, forwardRef } from "react";
import { motion as m } from "framer-motion";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

interface ThreeDContainerProps {
    ThreeD_URL: string;
    identifier: string;
}

const ThreeD_Container = forwardRef(function ThreeD_Container({ ThreeD_URL, identifier }: ThreeDContainerProps, ref: any) {
    const [loading, setLoading] = useState(true);
    let robiosModel;

    useEffect(() => {
        const canvasContainer = document.getElementById("ThreeD_Container_id" + identifier);

        if (canvasContainer) {
            const canvas = document.getElementById("ThreeD_Canvas_id" + identifier);
            const aspectRatio = canvasContainer.clientWidth / canvasContainer.clientHeight;

            const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
            renderer.setClearColor(0xffffff, 0.1);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(50, aspectRatio, 1, 1000);
            camera.position.z = 2;
            camera.position.y = 0;

            const resizeCanvasToDisplaySize = () => {
                const width = canvasContainer.clientWidth;
                const height = canvasContainer.clientHeight;

                if (renderer.clientWidth !== width || renderer.clientHeight !== height) {
                    renderer.setSize(width, height, false);
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                }
            };

            const setupScene = () => {
                canvasContainer.appendChild(renderer.domElement);
                window.addEventListener("resize", resizeCanvasToDisplaySize);
            };

            const setupRenderer = () => {
                // Additional renderer setup if needed
            };

            const setupCamera = () => {
                // Additional camera setup if needed
            };

            const setupLights = () => {
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
                scene.add(ambientLight);
            };

            const setupControls = () => {
                const controls = new OrbitControls(camera, renderer.domElement);
            };

            const loadModel = () => {
                const gltfLoader = new GLTFLoader();

                gltfLoader.load(
                    ThreeD_URL,
                    (gltfScene) => {
                        robiosModel = gltfScene.scene;
                        scene.add(robiosModel);
                        robiosModel.traverse((child) => {
                            if (child.isMesh) {
                                child.castShadow = true;
                                child.receiveShadow = true;
                            }
                        });
                    },
                    (xhr) => {
                        // handle progress
                    },
                    (error) => {
                        console.error("Error loading 3D model:", error);
                        setLoading(false);
                    }
                );
            };

            const animate = () => {
                resizeCanvasToDisplaySize();

                if (robiosModel) {
                    robiosModel.rotation.y += 0.01;
                }

                renderer.render(scene, camera);
                window.requestAnimationFrame(animate);
            };

            setupScene();
            setupRenderer();
            setupCamera();
            setupLights();
            setupControls();
            loadModel();
            setLoading(false);
            animate();

            return () => {
                window.removeEventListener("resize", resizeCanvasToDisplaySize);
            };
        }
    }, []);

    return (
        <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0, type: "tween" }}
            className="ThreeD_Container"
            id={"ThreeD_Container_id" + identifier}
            key={"ThreeD_Container_key"}
        >
            {loading && <div className="loading">Carregando Modelo 3D ...</div>}
            <canvas id={"ThreeD_Canvas_id" + identifier} className="ThreeD_Canvas"></canvas>
        </m.div>
    );
});

export default ThreeD_Container;
