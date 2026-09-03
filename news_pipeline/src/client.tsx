import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { RouterProvider } from "@tanstack/react-router";
import { createRouter } from "./router";

const router = createRouter();

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}
