import AppLink from 'Components/AppLink';
import Cursor from 'Components/Cursor';
import ScrolllDown from 'Components/ScrollDown';
import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes as Switch
} from "react-router-dom";
import './App.css';

const HomePage = React.lazy(() => import('Pages/Home'));
const AboutMePage = React.lazy(() => import('Pages/AboutMe'));
const WorksPage = React.lazy(() => import('Pages/Works'));

function App () {
  return (
    <div className="App">
      <Cursor />
      <Router>
        <Switch>
          <Route path='/Home' element={
            <React.Suspense fallback={<></>}>
              <HomePage />
            </React.Suspense>
          }
          />
          <Route path='/About' element={
            <React.Suspense fallback={<></>}>
              <AboutMePage />
            </React.Suspense>
          }
          />
          <Route path='/Works' element={
            <React.Suspense fallback={<></>} >
              <WorksPage />
            </React.Suspense>
          }
          />
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
        <div style={{color: '#fff', zIndex: 9, position: 'absolute', mixBlendMode: 'difference', fontSize: 'clamp(16px, 2.5vw, 20px'}}>
          <AppLink url={'/Home'} redirectTo={'Home'}/>
          <AppLink url={'/Works'} redirectTo={'Works'}/>
          <AppLink url={'/About'} redirectTo={'About Me'}/>
          <AppLink url={"/Contact"} redirectTo={'Contact'} />
          <ScrolllDown />
        </div>

      </Router>



    </div>
  );
}

export default App;