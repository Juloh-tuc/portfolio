import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import "./App.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />, // App est le conteneur global avec le Header et Footer
		children: [
			{
				index: true, // Route par défaut ("/")
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "projets",
				element: <Projets />,
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
