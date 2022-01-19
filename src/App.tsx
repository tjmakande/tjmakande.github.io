import React, {Suspense} from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei'
import Model from './Components/Model';
import LandingPage from './Sections/LandingPage';
import AboutMe from './Sections/AboutMe';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Canvas style={{position: 'fixed', width: '100vw', height: '100vh', zIndex: 0}}>
        <Suspense fallback={<>loading</>}>
        <directionalLight position={[0, 10, 5]} intensity={0.7} />
        <directionalLight position={[-10, -10, -5]} intensity={0.2} />
          <Model />
          {/* <OrbitControls /> */}
        </Suspense>
      </Canvas>
      <Page>
        <LandingPage />
        <AboutMe />
      </Page>

    </div>
  );
}

export default App;


const Page = styled.div`
  width: 100vw;
  background-color: #00000021;
  z-index: 2;
  padding: 2vw;
  display: flex;
  flex-direction: column;
`;