import React, {Suspense} from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei'
import Model from './Components/Model';
import LandingPage from './Components/LandingPage'

function App() {
  return (
    <div className="App">
      <Canvas style={{position: 'absolute', width: '100vw', height: '100vh'}}>
        <Suspense fallback={<>loading</>}>
        <directionalLight position={[0, 10, 5]} intensity={0.7} />
        <directionalLight position={[-10, -10, -5]} intensity={0.2} />
          <Model />
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
      <LandingPage />

    </div>
  );
}

export default App;
