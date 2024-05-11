import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';
import './assets/scss/app.scss';


import RoutesGenerator from './routes/routesGenerator';
function App() {
  return (
    <div className="app" dir="rtl" lang='fa' >
       <RoutesGenerator />
    </div>
  );
}

export default App;
