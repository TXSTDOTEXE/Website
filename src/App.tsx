import type { ReactElement } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function App(): ReactElement
{
   return (
      <>
         <NavBar />
         <Outlet /> {/* Renders the element based on the route from `createBrowserRouter` in `main.tsx`. */}
         {/* TODO: Add a Footer component here later, if desired. */}
      </>
   );
}

export default App;