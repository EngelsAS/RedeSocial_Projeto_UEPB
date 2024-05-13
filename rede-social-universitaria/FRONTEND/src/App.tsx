import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import { Container } from "react-bootstrap";
import RootEstructure from "./components/RootEstructure/RootEstructure";
import ForYou from "./pages/ForYou/ForYou";

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
    {
      path: "/home",
      element: <RootEstructure />,
      children: [
        {
          path: "for-you",
          element: <ForYou />,
        },
      ],
    },
  ]);

  return (
    <>
      <Container fluid style={{ height: "100%" }}>
        <RouterProvider router={router} />
      </Container>
    </>
  );
}

export default App;
