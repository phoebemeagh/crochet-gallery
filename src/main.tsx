import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import App from "./App";
import "@fontsource/homemade-apple";
import "@fontsource/cedarville-cursive";
import "@fontsource/gaegu";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
