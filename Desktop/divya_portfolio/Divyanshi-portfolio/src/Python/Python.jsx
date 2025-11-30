import React from 'react';
import './Python.css';
import PythonNavbar from './Python-Navbar/Python-Navbar';
import BasicTools from './Python-Basic/Python-Basic';

const PythonPage = () => {
  return (
    <div className='python'>
      <PythonNavbar />
      <BasicTools />
    </div>
  );
};

export default PythonPage;
