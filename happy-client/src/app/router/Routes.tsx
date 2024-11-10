import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ProductDetail from "../../features/activities/details/DetailsPage";
import PaymentHome from "../../features/activities/payment/PaymentHome";
import CategoryPage from "../../features/activities/categories/CategoryPage";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element:<HomePage />},
            {path: "category", element:<CategoryPage />},
            {path: "detail", element:<ProductDetail/>},
            {path: "payment", element:<PaymentHome />},
        ]
    }
]

export const router = createBrowserRouter(routes);