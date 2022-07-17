import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Usestate from './Components/Hooks/Usestate';
import Usereducer from './Components/Hooks/Usereducer';
import Useeffect from './Components/Hooks/Useeffect';
import Useref from './Components/Hooks/Useref';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/use-state' element={<Usestate />} />
        <Route path='/use-reducer' element={<Usereducer />} />
        <Route path='/use-effect' element={<Useeffect />} />
        <Route path='/use-ref' element={<Useref />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

