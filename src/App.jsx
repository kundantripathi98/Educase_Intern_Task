import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Rootlayout from "./layout/Rootlayout";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: <Welcome/>
      },
      {
        path: "signup",
        element: <Signup/>
      },
      // {
      //   path: "*",
      //   element: <NotFound404/>
      // },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;