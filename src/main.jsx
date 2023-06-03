import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Login} from "./pages/Login.jsx";
import GlobalStyles from "./styles/globalStyles.js";
import {AdminLayout} from "./pages/admin/AdminLayout.jsx";
import {Teachers} from "./pages/admin/Teachers.jsx";
import {Comments} from "./pages/admin/Comments.jsx";
import {Landing} from "./pages/Landing.jsx";
import {LandingLayout} from "./pages/LandingLayout.jsx";
import {TeacherList} from "./pages/TeacherList.jsx";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
		path: '/login',
		element: <Login/>,
    },
	{
		path: '/',
		element: <LandingLayout/>,
		children: [
			{
				index: true,
				element: <Landing/>,
			},
			{
				path: 'profesores',
				element: <TeacherList/>,
			}
		]
	},
	{
		path: '/admin',
		element: <AdminLayout/>,
		children: [
			{
				path: 'profesores',
				element: <Teachers/>,
			},
			{
				path: 'comentarios',
				element: <Comments/>,
			}
		]
	}
])


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<GlobalStyles/>
		<QueryClientProvider client={ queryClient }>
			<RouterProvider router={router}/>
		</QueryClientProvider>
	</React.StrictMode>,
)
