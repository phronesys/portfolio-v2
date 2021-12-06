import * as THREE from "three";

let camera, scene, renderer, material;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

function init(id) {
  camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    2,
    2000
  );
  camera.position.z = 500;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x000000, 0.001);

  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  const sprite = new THREE.TextureLoader().load(
    "light.png"
  );

  for (let i = 0; i < 10000; i++) {
    const x = 3000 * Math.random() - 1000;
    const y = 3000 * Math.random() - 1000;
    const z = 3000 * Math.random() - 1000;

    vertices.push(x, y, z);
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  material = new THREE.PointsMaterial({
    size: 40,
    sizeAttenuation: true,
    map: sprite,
    alphaTest: 0.5,
    transparent: true,
  });
  material.color.setRGB(1, 0, 20);

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  const container = document.querySelector(id);
  container.appendChild(renderer.domElement);

  document.body.style.touchAction = "none";
  document.body.addEventListener("pointermove", onPointerMove);
  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onPointerMove(event) {
  if (event.isPrimary === false) return;
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

let increaseCameraZ = true;

function render() {
  camera.position.x += (mouseX - camera.position.x) * 0.001;
  camera.position.y += (-mouseY - camera.position.y) * 0.001;
  if (increaseCameraZ) {
    camera.position.z += 0.08;
    if (camera.position.z >= 1000) increaseCameraZ = false;
  } else {
    camera.position.z -= 0.08;
    if (camera.position.z <= 0) increaseCameraZ = true;
  }

  camera.lookAt(scene.position);
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

export const useThree = (id) => {
  init(id);
  render();
}

