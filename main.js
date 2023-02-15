import './style.css'
import { setupCounter } from './counter.js'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui';


// Các thành phần cơ bản của 1 3D texture: 
// scene, camera, renderer 

// Scene: thành phần chính để chứa các thành phần như 1 tờ giấy trắng 
const scene = new THREE.Scene();

// Camera: Thành phần điều chỉnh camera cho 3D
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Thành phần chính và quan trọng nhất => render các thành phần lên website 
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

// Thực hiện tạo các thuộc tính camera, vị trí phông nền vân vân
// Cần phải xem lại
renderer.setPixelRatio(window.devicePixelRatio);

renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const axesHelper = new THREE.AxesHelper(20);
scene.add(axesHelper);


// // dat.gui 
// const gui = dat.GUI();

// const options = {
//   torusColor: "#312866"
// };

// gui.addColor(options, 'torusColor').onChange((e) => {
//   torus.material.color.set(e);
// });
const earthTexture = new THREE.TextureLoader().load('earthmap.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');
const geometry = new THREE.SphereGeometry(12, 64, 32);
const material = new THREE.MeshStandardMaterial({
  map: earthTexture,
  normalMap: normalTexture
});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(15, 20, 20);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);



const controls = new OrbitControls(camera, renderer.domElement);


function animate() {
  requestAnimationFrame(animate);

  torus.rotation.y += 0.005;


  moon.rotation.x += 0.005
  moon.rotation.y += 0.01;
  controls.update();

  renderer.render(scene, camera)
};

function addStart() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(500));

  star.position.set(x, y, z);
  scene.add(star);
}

const spaceTexture = new THREE.TextureLoader().load('space.jpg');

scene.background = spaceTexture;

const moonTexture = new THREE.TextureLoader().load('moon.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture
  }),
);
moon.position.z = 30
moon.position.setX(-40);
scene.add(moon);

// Function move camera

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;


  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera

Array(400).fill().forEach(addStart);

animate();
