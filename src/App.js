import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
  ]);
  return (
    <div className="App">
      <h2 className="text-3xl">Hall Management</h2>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
