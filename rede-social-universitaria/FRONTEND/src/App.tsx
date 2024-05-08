import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import { Container } from "react-bootstrap";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
  ]);

  return (
    <>
      <Container fluid>
        <RouterProvider router={router} />
      </Container>
    </>
  );
}

export default App;
