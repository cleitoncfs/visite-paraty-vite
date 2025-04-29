import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/global.css"; // Importação opcional aqui (caso prefira)

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
