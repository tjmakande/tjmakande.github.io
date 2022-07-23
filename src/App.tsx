import AppLink from 'Components/AppLink';
import Cursor from 'Components/Cursor';
import ScrollDown from 'Components/ScrollDown';
import React from 'react';
import {
  Navigate,
  Route,
  Routes as Switch
} from "react-router-dom";
import './App.css';

const HomePage = React.lazy(() => import('Pages/Home'));
const AboutMePage = React.lazy(() => import('Pages/AboutMe'));

function App () {
  return (
    <div className="App">
      <Cursor />
        <Switch>
          <Route path='/' element={
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
          <Route path={'*'} element={<Navigate to={'/'}/>}/>
        </Switch>
        <div style={{color: '#fff', zIndex: 9, position: 'absolute', mixBlendMode: 'difference', fontSize: 'clamp(19px, 2vw, 22px'}}>
          <AppLink url={'/'} redirectTo={'Home'}/>
          <AppLink url={'/About'} redirectTo={'About Me'}/>
          <AppLink url={"/Contact"} redirectTo={'Contact'} />
          <ScrollDown />
        </div>
    </div>
  );
}

export default App;