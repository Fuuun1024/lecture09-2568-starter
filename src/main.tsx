import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./pages/CounterPage";
import { router } from "./routers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router = {router} />
    {/* <App /> */}
  </StrictMode>
);
