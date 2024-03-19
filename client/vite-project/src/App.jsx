import { useState } from 'react'
import './App.css'
import React from 'react';
import { useEffect } from 'react';

import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4000");

function App() {

  return (
    <>
      <div>
        <p>Hello World!</p>
      </div>

    </>
  );
}

export default App
