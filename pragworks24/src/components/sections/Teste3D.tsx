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

const shibaUrl = "objects3D/shiba/scene.gltf";
const robiosGoUrl = "objects3D/robios_go/robios_go.gltf";
const robiosGoUrl2 = "objects3D/robios_go/robios_go_2.gltf";
const robiosGoUrl3 = "objects3D/robios_go/robios_go_3.gltf";

const Teste3D = forwardRef(function Section_Teste3D(props, ref: any) {
    useEffect(() => {
        const canvasContainer = document.getElementById("teste3dteste");

        if (canvasContainer) {
            const canvasContainer = document.getElementById("teste3dteste");
            const canvas = document.getElementById("Test3DCanvas");
            const aspectRatio = canvasContainer!.clientWidth / canvasContainer!.clientHeight;
            const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Melhor tipo para suavização de sombras

            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x3c3c3c);
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
                    console.log(camera.aspect, "camera.aspect");

                    // update any render target sizes here
                }
            }
            canvasContainer!.appendChild(renderer.domElement);
            window.addEventListener("resize", resizeCanvasToDisplaySize);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            ambientLight.castShadow = true;
            scene.add(ambientLight);

            const controls = new OrbitControls(camera, renderer.domElement);

            const gltfLoader = new GLTFLoader();
            let robiosModel;

            gltfLoader.load(robiosGoUrl3, (gltfScene) => {
                robiosModel = gltfScene.scene;
                scene.add(robiosModel);
                robiosModel.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                });
            });

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
            className="LP_Section"
            id="teste3dteste"
            key={"3dteste_key"}
        >
            <canvas id="Test3DCanvas"></canvas>
        </m.div>
    );
});

export default Teste3D;
