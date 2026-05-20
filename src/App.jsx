import { useRef, useEffect } from "react";
import * as THREE from "three";

const App = () => {
  // Reference to the canvas element
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create the WebGL renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current, // attach renderer to canvas
      antialias: true, // smoother edges
    });

    // Set renderer size to full screen
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Improve rendering quality on high DPI screens
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create a scene (main container for all 3D objects)
    const scene = new THREE.Scene();

    // Create a perspective camera
    const camera = new THREE.PerspectiveCamera(
      75, // field of view
      window.innerWidth / window.innerHeight, // aspect ratio
      0.1, // near clipping plane
      100, // far clipping plane
    );

    // Move camera backwards so objects are visible
    camera.position.z = 5;

    // =========================
    // Cube Creation
    // =========================

    // Geometry defines the shape
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Material defines the appearance/color
    const material = new THREE.MeshBasicMaterial({
      color: 0xffa500, // orange color
    });

    // Mesh = geometry + material
    const cube = new THREE.Mesh(geometry, material);

    // Add cube to the scene
    scene.add(cube);

    // =========================
    // Stars Creation
    // =========================

    // Total number of stars
    const starCount = 2000;

    // Float32Array stores x, y, z for each star
    // 2000 stars × 3 coordinates
    const positions = new Float32Array(starCount * 3);

    // Generate random positions for stars
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100; // x position
      positions[i + 1] = (Math.random() - 0.5) * 100; // y position
      positions[i + 2] = (Math.random() - 0.5) * 100; // z position
    }

    // Create geometry for particles/stars
    const starGeometry = new THREE.BufferGeometry();

    // BufferAttribute reads 3 values at a time (x, y, z)
    const positionAttribute = new THREE.BufferAttribute(
      positions,
      3,
    );

    // Attach positions to geometry
    starGeometry.setAttribute(
      "position",
      positionAttribute,
    );

    // Material for stars
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff, // white stars
      size: 0.15, // size of each point
      sizeAttenuation: true, // far stars appear smaller
    });

    // Points object creates particle system
    const stars = new THREE.Points(
      starGeometry,
      starMaterial,
    );

    // Add stars to scene
    scene.add(stars);

    // =========================
    // Animation Loop
    // =========================

    let animationId;

    function animate() {
      // Request next animation frame
      animationId = requestAnimationFrame(animate);

      // Rotate cube continuously
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // Slowly rotate star field
      stars.rotation.x += 0.0001;
      stars.rotation.y += 0.0003;

      // Render scene from camera perspective
      renderer.render(scene, camera);
    }

    // Start animation
    animate();

    // =========================
    // Handle Window Resize
    // =========================

    function handleResize() {
      // Update camera aspect ratio
      camera.aspect =
        window.innerWidth / window.innerHeight;

      // Recalculate projection matrix
      camera.updateProjectionMatrix();

      // Resize renderer
      renderer.setSize(
        window.innerWidth,
        window.innerHeight,
      );
    }

    // Listen for browser resize
    window.addEventListener("resize", handleResize);

    // Run resize once initially
    handleResize();

    // =========================
    // Cleanup
    // =========================

    return () => {
      // Stop animation loop
      cancelAnimationFrame(animationId);

      // Dispose renderer resources
      renderer.dispose();

      // Dispose cube resources
      geometry.dispose();
      material.dispose();

      // Dispose stars resources
      starGeometry.dispose();
      starMaterial.dispose();

      // Remove resize listener
      window.removeEventListener(
        "resize",
        handleResize,
      );
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