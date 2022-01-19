import React, {Suspense, useState} from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'
import Model from './Components/Model';

function App() {
  return (
    <div className="App">
      <Canvas >
        <Suspense fallback={<>loading</>}>
        <directionalLight position={[0, 10, 5]} intensity={0.7} />
        <directionalLight position={[-10, -10, -5]} intensity={0.2} />
          <Model />
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
