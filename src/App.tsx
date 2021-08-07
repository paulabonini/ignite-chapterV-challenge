import { lazy, Suspense } from "react";
import { SideBar } from "./components/SideBar";

import { MoviesContextProvider } from "./context/MoviesContext";

import "./styles/global.scss";

const Content = lazy(() => import("./components/Content"));

export function App() {
  return (
    <MoviesContextProvider>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />

        <Suspense fallback={<div>Loading...</div>}>
          <Content />
        </Suspense>
      </div>
    </MoviesContextProvider>
  );
}
