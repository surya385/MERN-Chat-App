import { RouterProvider } from "react-router-dom";
import Routers from "./Routes";

function App() {
  return (
    <>
      <RouterProvider router={Routers}/>
    </>
  );
}

export default App;
