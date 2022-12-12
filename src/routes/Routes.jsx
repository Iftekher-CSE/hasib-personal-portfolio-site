import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/project/:name",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) => fetch(`https://hasib-portfolio-server.vercel.app/projectDetails/${params.name}`),
    },
]);

export default router;
