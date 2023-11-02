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

const Teste3D = forwardRef(function Section_Teste3D(props, ref: any) {
    useEffect(() => {
        const canvasContainer = document.getElementById("teste3dteste");

        if (canvasContainer) {
            const canvasContainer = document.getElementById("teste3dteste");
            const canvas = document.getElementById("Test3DCanvas");
            const aspectRatio = canvasContainer!.clientWidth / canvasContainer!.clientHeight;
            const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(50, aspectRatio, 1, 1000);
            camera.position.z = 4;

            function resizeCanvasToDisplaySize() {
                // look up the size the canvas is being displayed
                if (!canvasContainer) return;
                const width = canvasContainer.clientWidth;
                const height = canvasContainer.clientHeight;

                // adjust displayBuffer size to match
                if (canvas) {
                    if (canvas.clientWidth !== width || canvas.clientHeight !== height) {
                        // you must pass false here or three.js sadly fights the browser
                        renderer.setSize(width, height, false);
                        camera.aspect = width / height;
                        camera.updateProjectionMatrix();
                        console.log(camera.aspect, "camera.aspect");

                        // update any render target sizes here
                    }
                }
            }
            canvasContainer!.appendChild(renderer.domElement);
            window.addEventListener("resize", resizeCanvasToDisplaySize);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            ambientLight.castShadow = true;
            scene.add(ambientLight);

            const spotLight = new THREE.SpotLight(0xffffff, 1);
            spotLight.castShadow = true;
            spotLight.position.set(0, 64, 32);

            const controls = new OrbitControls(camera, renderer.domElement);

            const animate = () => {
                resizeCanvasToDisplaySize();
                controls.update();
                renderer.render(scene, camera);
                window.requestAnimationFrame(animate);
            };
            animate();

            const gltfLoader = new GLTFLoader();
            gltfLoader.load("objects3D/shiba/scene.gltf", (gltfScene) => {
                scene.add(gltfScene.scene);
            });
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
