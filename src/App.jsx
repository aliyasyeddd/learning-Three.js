import { useRef, useEffect } from "react";
import * as THREE from "three";

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );
    camera.position.z = 5;

    //creating a cube

    // geometry - defines the shape of the cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // material - defines the appearance of the cube
    const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });

    // mesh - combines geometry and material to create a 3D object
    const cube = new THREE.Mesh(geometry, material);

    // add the cube to the scene
    scene.add(cube);

    // Animation loop
    let animationId;

    function animate() {
      animationId = requestAnimationFrame(animate);

      // Rotate the cube for some basic animation
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize to maintain aspect ratio and renderer size
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup function to dispose of resources and remove event listeners when the component unmounts
    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default App;
