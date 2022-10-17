import React from 'react'
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './App.css'
import Stats from 'three/examples/jsm/libs/stats.module';
import matcapWhite from './assets/matcapWhite.jpg';
import Keyboard from './Keyboard';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas } from '@react-three/fiber';
import * as Tone from 'tone';

import {
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5,
  playNote,
} from './tone.jsx';
import { useState } from 'react';

function App() {
  useEffect(() => {

  //   const domEvents = new THREE.DomEvents(camera, view.domElement);

  //    const [note, setNote] = useState();


      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        1, 
        1000,
      );
        camera.position.set(0, 0, 30);
        const canvas = document.getElementById('threeCanvas');
        const renderer = new THREE.WebGLRenderer({
          canvas,
          antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        ambientLight.castShadow = true;
        scene.add(ambientLight);
        
        // const spotLight = new THREE.SpotLight(0xffffff, 1);
        // spotLight.castShadow = true;
        // spotLight.position.set(10, 20, 0);
        // scene.add(spotLight);
        
        const spotLight2 = new THREE.SpotLight(0x78ff00, 1, 3, Math.PI * 0.1, 0.25, 1);
        // spotLight2.castShadow = true;
        spotLight2.position.set(0, 2, 3);
        scene.add(spotLight2);

        const rectAreaLight = new THREE.RectAreaLight(0xccc000, 2, 1, 1);
        rectAreaLight.position.set(-1.5, 0, 1.5);
        // const helper = new THREE.rectAreaLightHelper();
        // rectAreaLight.add(helper)
        scene.add(rectAreaLight);

        const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 1);
        hemisphereLight.position.set(0, 2, 0);
        scene.add(hemisphereLight);

        const planeGeo = new THREE.PlaneGeometry(20, 20, 60, 60);
        const planeMat = new THREE.MeshPhysicalMaterial({
          color: 0xff3287,
          side: THREE.DoubleSide,
        });
        const plane = new THREE.Mesh(planeGeo, planeMat);
        plane.rotation.x = Math.PI / 2;
        plane.position.set(-1, -5, 0);
        scene.add(plane);

        // const plane = new THREE.Mesh({
        //   new THREE.MeshNormalMaterial(
        //     color: blue
        //   )
        // })

        // rectAreaLight.lookAt(new THREE.Vector3());
        const matcapW3 = new THREE.TextureLoader().load('./assets/matcapW9a.png');
        // const matcapW3 = new THREE.TextureLoader().load('./assets/matcapW7.png');
        // const matcapB2 = new THREE.TextureLoader().load('./assets/matcapB2.png');
        const matcapB3 = new THREE.TextureLoader().load('./assets/matcapB3.png');

        const boxGeometry = new THREE.BoxGeometry(2, 8, 1);
        const boxMaterial = new THREE.MeshMatcapMaterial();
        boxMaterial.matcap = matcapW3;
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh.position.set(-8.3, 0, 0);

        const boxMesh1 = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh1.position.set(-6.2, 0, 0);
        
        const boxMesh2 = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh2.position.set(-4.1, 0, 0);
        
        const boxMesh3 = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh3.position.set(-2, 0, 0);

        const boxMesh4 = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh4.position.set(0.1, 0, 0);

        const boxMesh5 = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh5.position.set(2.2, 0, 0);
        
        const boxMesh6 = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh6.position.set(4.3, 0, 0);

        const boxMesh7 = new THREE.Mesh(boxGeometry, boxMaterial);
        boxMesh7.position.set(6.4, 0, 0);

        const blackKeyGeo = new THREE.BoxGeometry(1, 4, 0.5);
        const blackKeyMat = new THREE.MeshMatcapMaterial();
        blackKeyMat.matcap = matcapB3;
        const blackKey = new THREE.Mesh(blackKeyGeo, blackKeyMat);
        blackKey.position.set(-7.25, 2, 0.75);

        const blackKey1 = new THREE.Mesh(blackKeyGeo, blackKeyMat);
        blackKey1.position.set(-5.15, 2, 0.75);

        const blackKey2 = new THREE.Mesh(blackKeyGeo, blackKeyMat);
        blackKey2.position.set(-1.15, 2, 0.75);

        const blackKey3 = new THREE.Mesh(blackKeyGeo, blackKeyMat);
        blackKey3.position.set(1.15, 2, 0.75);

        const blackKey4 = new THREE.Mesh(blackKeyGeo, blackKeyMat);
        blackKey4.position.set(3.25, 2, 0.75);
        blackKey4.onClick={playA4};

        scene.add(boxMesh, boxMesh1, boxMesh2, boxMesh3, boxMesh4, boxMesh5, boxMesh6, boxMesh7);
        scene.add(blackKey, blackKey1, blackKey2, blackKey3, blackKey4);
        // const pianoKey = new THREE.Mesh(
        //   new THREE.BoxGeometry(1, 1, 1),
        //   new THREE.MeshNormalMaterial({
        //     color: white,
        //   }),
        // );
        // scene.add(pianoKey);
        
        const controls = new OrbitControls(camera, renderer.domElement);
        
        const stats = Stats();
        document.body.appendChild(stats.dom);

        window.addEventListener('resize', () => 
          this.onWindowResize(), false);
      
        // document.addEventListener('click', () => {

          
          // boxMesh.addEventListener('click', playC4());
          // blackKey.addEventListener('click', playDb4());
          // boxMesh1.addEventListener('click', playD4());
          // blackKey1.addEventListener('click', playEb4());
          // boxMesh2.addEventListener('click', playE4());
          // boxMesh3.addEventListener('click', playF4());
          // blackKey2.addEventListener('click', playGb4());
          // boxMesh4.addEventListener('click', playG4());
          // blackKey3.addEventListener('click', playAb4());
          // boxMesh5.addEventListener('click', playA4());
          // blackKey4.addEventListener('click', playBb4());
          // boxMesh6.addEventListener('click', playB4());
          // boxMesh7.addEventListener('click', playC5());
        
        // }) 
          

        const animate = () => {
          stats.update();
          controls.update();
          // boxMesh.rotation.x += 0.01;
          // boxMesh.rotation.y += 0.01;
          renderer.render(scene, camera);
          window.requestAnimationFrame(animate);
        };
      animate();

//       const raycaster = new THREE.Raycaster(); // create once
//       const mouse = new THREE.Vector2(); // create once

//       function onMouseMove(event) {

        
//         mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
//         mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
//       }

//       window.addEventListener( 'mousemove', onMouseMove, false );        

// raycaster.setFromCamera( mouse, camera );

// const intersects = raycaster.intersectObjects( objects, recursiveFlag );

//       const [active, setActive] = useState(false);



    }, []);

  return (
    <div className="App">
      <canvas id="threeCanvas">
 
      </canvas>
    </div>
  )
}

export default App;
