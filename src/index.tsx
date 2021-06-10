import { render } from "react-dom";
import "./styles/global.css";
import { App } from "./App";

const root = document.createElement("Wrapper");
document.body.appendChild(root);

render(<App />, root);
