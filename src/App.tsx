import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate
} from "react-router-dom";

import AppLink from 'Components/AppLink';


import './App.css';

const HomePage = React.lazy(() => import('Pages/Home'));
const AboutMePage = React.lazy(() => import('Pages/AboutMe'));
const WorksPage = React.lazy(() => import('Pages/Works/index'));
const ContactPage = React.lazy(() => import('Pages/Contact'));

function App() {
  console.log(window.location.pathname);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/Home' element={
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

          <Route path='/Contact' element={
            <React.Suspense fallback={<>...Loading</>}>
              <ContactPage />
            </React.Suspense>
          } />

          <Route path={'/'} element={<Navigate to={'/Home'}/>}/>

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Switch>
        <div style={{color: window.location.pathname.includes('Home') ? '#fff' : '#000', zIndex: 99, position: 'absolute', mixBlendMode: 'difference', fontSize: 'clamp(16px, 2.5vw, 20px'}}>
          <AppLink url={'/Home'} redirectTo={'Home'}/>
          <AppLink url={'/Works'} redirectTo={'Works'}/>
          <AppLink url={'/About'} redirectTo={'About Me'}/>
          <AppLink url={"/Contact"} redirectTo={'Contact'} />
        </div>
        
      </Router>

      

    </div>
  );
}

export default App;