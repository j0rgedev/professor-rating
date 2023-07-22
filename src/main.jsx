import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/public/Login.jsx";
import GlobalStyles from "./styles/globalStyles.js";
import { AdminLayout } from "./pages/admin/AdminLayout.jsx";

import { Comments } from "./pages/admin/Comments.jsx";
import { Courses } from "./pages/admin/Courses.jsx";
import { Teachers } from "./pages/admin/Teachers.jsx";

import { Landing } from "./pages/public/Landing.jsx";
import { LandingLayout } from "./pages/public/LandingLayout.jsx";
import { TeacherList } from "./pages/public/TeacherList.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { TeacherProfile } from "./pages/public/TeacherProfile.jsx";
import { TeacherLayout } from "./pages/public/TeacherLayout.jsx";
import { TeacherTrajectory } from "./pages/public/TeacherTrajectory.jsx";
import { TeacherProfileLayout } from "./pages/public/TeacherProfileLayout.jsx";
import { TeacherComparison } from "./pages/public/TeacherComparison.jsx";
import { TeacherListCompare } from "./pages/public/TeacherListCompare.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "profesores",
        element: <TeacherLayout />,
        children: [
          {
            index: true,
            element: <TeacherList />,
          },
          {
            path: ":id",
            element: <TeacherProfileLayout />,
            children: [
              {
                index: true,
                element: <TeacherProfile />,
              },
              {
                path: "trayectoria",
                element: <TeacherTrajectory />,
              },
              {
                path: "curso/:cursoId",
                element: <TeacherProfile />,
              },
            ],
          },
          {
            path: "comparacion",
            element: <TeacherComparison />,
          },
          {
            path: "curso/:id",
            element: <TeacherListCompare />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "profesores",
        element: <Teachers />,
      },
      {
        path: "cursos",
        element: <Courses />,
      },
      {
        path: "comentarios",
        element: <Comments />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
