# 🌌 Three.js Space Scene with Rotating Cube

> A beginner-friendly 3D space scene built using React + Three.js featuring a rotating cube and animated star field rendered with WebGL.

---

## 📘 What I Learned

1. Setting up a Three.js scene in React  
2. Using `useRef` and `useEffect` with WebGL  
3. Creating 3D objects with geometries and materials  
4. Working with `BufferGeometry` and particle systems  
5. Building animation loops using `requestAnimationFrame`  
6. Handling responsive canvas resizing  
7. Proper cleanup of Three.js resources  

---

## 📝 Overview

This project creates an immersive 3D space environment using Three.js inside a React application. It features a rotating cube and a dynamic star field generated using thousands of particles.

It demonstrates core Three.js concepts like scene setup, camera positioning, meshes, materials, buffer geometry, animation loops, and responsive rendering.

---

## 🚀 Features

- 🧊 Rotating 3D cube animation  
- 🌌 Procedurally generated star field  
- ⚡ Real-time WebGL rendering  
- 📱 Fully responsive full-screen canvas  
- 🎥 Perspective camera setup  
- ♻️ Proper memory/resource cleanup  
- 🎨 High DPI display support  

---

## 🧱 Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js   | UI framework |
| Three.js   | 3D rendering engine |
| JavaScript | Application logic |
| WebGL      | GPU rendering |

---

## 🧩 How It Works

- A WebGLRenderer renders the scene inside a React canvas.
- A Scene holds all 3D objects.
- A PerspectiveCamera provides depth perception.
    - The cube is created using:
    - BoxGeometry
    - MeshBasicMaterial
    - Mesh
- Stars are generated using:
    - BufferGeometry
    - Float32Array
    - PointsMaterial
    - Points
- Animation runs using requestAnimationFrame.
- Window resize events update camera and renderer dynamically.


---

## 🖼️ Scene Breakdown
  ## 🧊 Cube
    - Orange cube
    - Rotates continuously on X and Y axis
  ## 🌌 Star Field
    - 2000 particles
    - Randomly distributed in 3D space
    - Slowly rotating for depth effect

---

## 💫 Author

Aliya — github.com/aliyasyeddd

“Build immersive experiences with code.”