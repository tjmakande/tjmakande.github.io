import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

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
      </Router>
    </div>
  );
}

export default App;
