import * as THREE from "three";

function App() {
  // Canvas
  const canvas = document.querySelector("canvas.webgl");

  // Scene
  const scene = new THREE.Scene();

  // Object (Adding a red cube, square in this case)
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
  const mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh); //gotta add the mesh to the scene

  // Sizes of objects
  const sizes = {
    width: 800,
    height: 600,
  };

  // Camera
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
  camera.position.z = 3; // Takes the camera in front of the object
  scene.add(camera); //gotta add the camera to the scene

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera); // Have to render both 

  return (
    <>
      <h1>Learning Three.js</h1>
    </>
  );
}

export default App;
