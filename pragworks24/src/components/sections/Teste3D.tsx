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
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);

        camera.position.z = 96;
        const canvas = document.getElementById("Test3DCanvas");
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        const canvasContainer = document.getElementById("Teste3dSectionContent");

        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasContainer.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        ambientLight.castShadow = true;
        scene.add(ambientLight);

        const spotLight = new THREE.SpotLight(0xffffff, 1);
        spotLight.castShadow = true;
        spotLight.position.set(0, 64, 32);

        const controls = new OrbitControls(camera, renderer.domElement);

        const stats = Stats();
        canvasContainer.appendChild(stats.dom);

        window.addEventListener("resize", () => this.onWindowResize(), false);

        const animate = () => {
            stats.update();
            controls.update();
            renderer.render(scene, camera);
            window.requestAnimationFrame(animate);
        };
        animate();

        const gltfLoader = new GLTFLoader();
        gltfLoader.load("../../assets/files3d/shiba/scene.gltf", (gltfScene) => {
            scene.add(gltfScene.scene);
        });
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
            <h1 className="LP_Section_Title">Teste 3D</h1>
            <div className="LP_Section_Content" id="Teste3dSectionContent">
                <canvas id="Test3DCanvas"></canvas>
            </div>
        </m.div>
    );
});

export default Teste3D;
