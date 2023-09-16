import "./App.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Gigs from "./pages/gigs/Gigs.jsx";
import Gig from "./pages/gig/Gig.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Create from "./pages/create/Create.jsx";
import Orders from "./pages/orders/Orders.jsx";
import Messages from "./pages/messages/Messages.jsx";
import Message from "./pages/message/Message.jsx";
import MyGigs from "./pages/myGigs/MyGigs.jsx";

//React Router enables "client side routing"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// An <Outlet> should be used in parent route elements to render their child
//route elements.This allows nested UI to show up when child routes are rendered.
//If the parent route matched exactly, it will render a child index route or nothing
//if there is no index route.

function App() {
  //here we create a custom layout which means in every page there will be <Navbar />
  // and <Footer /> but the <Outlet /> will be replaced with something else
  // inside children property there are differents routes / paths defined
  // whichever path is requested, that Component will be rendered in place of <Outlet />
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  //create a Browser Router which takes an array of Route objects with
  // nested routes on the children property.
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/gigs",
          element: <Gigs />,
        },
        {
          path: "/myGigs",
          element: <MyGigs />,
        },
        {
          path: "/gig/:id",
          element: <Gig />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
