import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './view/Main';
import Detail from './components/Detail';
import Update from './components/Update';
import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Main/>} path="/home" default />
            <Route element={<Detail/>} path="/people/:id" />
            <Route element={<Update/>} path="/people/edit/:id" />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
