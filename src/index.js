import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider} from "react-router-dom";

import { Plan } from './plan';
import { Admin } from './admin';
import { UpdatePlan } from './updatePlan';


import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebase-config';
import { Suspense } from 'react';


let rutas= [
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/senderoOso",
    element: <Plan id= {['01']} />
  },
  {
    path:"/andes",
    element: <Plan id={['02']} />
  },
  {
    path:"/nevadoSantaIsabel",
    element: <Plan id={['03']} />
  },
  {
    path:"/senderoPaz",
    element: <Plan id={['04']} />
  },
  {
    path:"/farallones",
    element: <Plan id={['05']} />
  },
  {
    path:"/admin",
    element: <Admin titulo={['Farallones de Sutatausa']} />
  }

];

// AGREGAMOS TODAS LAS RUTAS DE LOS UPDATE PLAN
for (let i = 0; i<30; i++){
  // Rutas para actualizar los planes con cada id
  rutas.push({
    path:"/update-plan-"+(i<10?'0'+String(i):String(i)),
    element: <UpdatePlan id={[i<10?'0'+String(i):String(i)]} />
  });
  //console.log('RUTAS:', rutas);
}

// AGREGAMOS TODAS LAS RUTAS DE LOS PLANES
for (let i = 0; i<30; i++){
  // Rutas para actualizar los planes con cada id
  rutas.push({
    path:"/plan-"+(i<10?'0'+String(i):String(i)),
    element: <Plan id={[i<10?'0'+String(i):String(i)]} />
  });
  //console.log('RUTAS:', rutas);
}

let router = createBrowserRouter(rutas);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig} >
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  </FirebaseAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
