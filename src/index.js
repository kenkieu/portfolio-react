import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./reset.css";
import "./styles.css";
import { BrowserRouter,  } from "react-router-dom";

function CheckRender(){
  // useEffect(() => {
  //   console.log('Rendered successfully')
  // });

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<CheckRender />);
