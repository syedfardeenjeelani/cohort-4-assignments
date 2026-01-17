import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera( 85, window.innerWidth / window.innerHeight, 0.1, 1000 );
const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

const scene = new THREE.Scene();


renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById("leftParent").appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: `#E9E9E9` } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
function animate() {
  cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");