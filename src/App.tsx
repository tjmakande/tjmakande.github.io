import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';

import './App.css';

const HomePage = React.lazy(() => import('Pages/Home'));
const AboutMePage = React.lazy(() => import('Pages/AboutMe'));
const WorksPage = React.lazy(() => import('./Pages/Works/index'));


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' element={
            <React.Suspense fallback={<>...Loading</>}>
              <HomePage />
            </React.Suspense>
          }
          />
          <Route path='/About' element={
            <React.Suspense fallback={<>...Loading</>}>
              <AboutMePage />
            </React.Suspense>
          } 
          />
          <Route path='/Works' element={
            <React.Suspense fallback={<>...Loading</>} >
              <WorksPage />
            </React.Suspense>
          } 
          />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Switch>
        <WorksLink to={'/Works'}>Works</WorksLink>
        <AboutLink to={'/About'}>About Me</AboutLink>
      </Router>

      

    </div>
  );
}

export default App;


const AboutLink = styled(Link)`
  position: fixed;
  font-size: clamp(16px, 2.5vw, 20px);
  top: 3vh;
  left: 2vw;
  z-index: 7;
  margin: 0;
  color: rgb(229, 229, 229);
  font-weight: 600;
`;

const WorksLink = styled(Link)`
  position: fixed;
  font-size: clamp(16px, 2.5vw, 20px);
  top: 3vh;
  right: 2vw;
  z-index: 7;
  margin: 0;
  color: rgb(229, 229, 229);
  font-weight: 600;
`;