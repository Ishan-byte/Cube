import * as THREE from "three";

// SCENE for rendering graphics
const scene = new THREE.Scene();

// Camera for setting a viewpoint inside the Scene
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Renderer for displaying the sceen in the screen using WebGL
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Creating the Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "aquamarine" });
const cube = new THREE.Mesh(geometry, material);

// Adding the Cube object into the scene
scene.add(cube);
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
