import React from "react";
import { createRoot } from 'react-dom/client';

import "bootstrap/dist/css/bootstrap.css";
import App from "./app";



const rootDir = document.getElementById('root');
const root = createRoot(rootDir);
root.render(<App />);