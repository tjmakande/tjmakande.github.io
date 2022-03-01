import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import './App.css';
import HomePage from 'Pages/Home';
import AboutMePage from 'Pages/AboutMe';
// const HomePage = React.lazy(() => import('Pages/Home'));
// const AboutMePage = React.lazy(() => import('Pages/AboutMe'));


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' element={<HomePage />}/>
          <Route path='/About' element={<AboutMePage />} />
          <Route path='/Works' element={<div>Works</div>} />

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
