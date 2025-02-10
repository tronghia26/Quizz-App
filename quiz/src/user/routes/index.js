import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Error404 from "../pages/Error404";
import PrivateRoutes from "../../components/PrivateRoutes";
import Answer from "../pages/Answer";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import Topic from "../pages/Topic";
import Logout from "../pages/Logout";
import Introduce from "../pages/Introduce";
import Document from "../pages/Document";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import CreateQuestion from "../pages/CreateQuiz";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/introduce",
        element: <Introduce />,
      },
      {
        path: "/document",
        element: <Document />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
      {
        path: "create-quiz",
        element: <CreateQuestion />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "answers",
            element: <Answer />,
          },
          {
            path: "quiz/:id",
            element: <Quiz />,
          },
          {
            path: "result/:id",
            element: <Result />,
          },
          {
            path: "topic",
            element: <Topic />,
          },
        ],
      },
    ],
  },
];
