import { createBrowserRouter } from "react-router-dom";
import Chats from "../Pages/Chats";
import Login from "../Pages/Login";

const Routers = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/chats",
    element: <Chats />,
  },
];

export default Routers;
