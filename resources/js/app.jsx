import './bootstrap';
import React from "react";
import { createRoot } from "react-dom/client";
import Main from "../../react/Main.jsx";

const root = createRoot(document.getElementById("app"));
root.render(
    <Main />
)
