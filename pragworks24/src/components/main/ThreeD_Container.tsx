// Vanilla React Imports
import { useEffect, useState, forwardRef, useRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence, LayoutGroup } from "framer-motion";

//React Redux Imports
import { useDispatch } from "react-redux";
import { setActiveSection } from "../../context/main-context.tsx";

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";

const robiosGoUrl3 = "objects3D/robios_go/robios_go_3.gltf";

interface ThreeDContainerProps {
    ThreeD_URL: string;
}

const ThreeD_Container = forwardRef(function ThreeD_Container({ ThreeD_URL }: ThreeDContainerProps, ref: any) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const canvasContainer = document.getElementById("ThreeD_Container_id");

        if (canvasContainer) {
            const canvasContainer = document.getElementById("ThreeD_Container_id");
            const canvas = document.getElementById("ThreeD_Canvas_id");
            const aspectRatio = canvasContainer!.clientWidth / canvasContainer!.clientHeight;
            const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Melhor tipo para suavização de sombras

            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x4c4c4c);
            const camera = new THREE.PerspectiveCamera(50, aspectRatio, 1, 1000);
            camera.position.z = 2;
            camera.position.y = 0;

            function resizeCanvasToDisplaySize() {
                // look up the size the canvas is being displayed
                if (!canvasContainer) return;
                const width = canvasContainer.clientWidth;
                const height = canvasContainer.clientHeight;

                // adjust displayBuffer size to match

                if (renderer.clientWidth !== width || renderer.clientHeight !== height) {
                    // you must pass false here or three.js sadly fights the browser
                    renderer.setSize(width, height, false);
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();

                    // update any render target sizes here
                }
            }
            canvasContainer!.appendChild(renderer.domElement);
            window.addEventListener("resize", resizeCanvasToDisplaySize);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);

            const controls = new OrbitControls(camera, renderer.domElement);

            const gltfLoader = new GLTFLoader();
            let robiosModel;

            gltfLoader.load(ThreeD_URL, (gltfScene) => {
                robiosModel = gltfScene.scene;
                scene.add(robiosModel);
                robiosModel.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });
            });

            setLoading(false);

            const animate = () => {
                resizeCanvasToDisplaySize();

                // Adicione uma rotação ao modelo
                if (robiosModel) {
                    robiosModel.rotation.y += 0.01; // Ajuste a velocidade da rotação conforme necessário
                }

                controls.update();
                renderer.render(scene, camera);
                window.requestAnimationFrame(animate);
            };
            animate();
        }
    }, []);

    return (
        <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0, type: "tween" }}
            className="ThreeD_Container"
            id={"ThreeD_Container_id"}
            key={"ThreeD_Container_key"}
        >
            {loading && <div className="loading">Carregando Modelo 3D ...</div>}
            <canvas id={"ThreeD_Canvas_id"} className="ThreeD_Canvas"></canvas>
        </m.div>
    );
});

export default ThreeD_Container;
