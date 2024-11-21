import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ProductDetail from "../../features/pages/DetailsPage";
import CategoryPage from "../../features/pages/CategoryPage";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import AboutUsPage from "../../features/pages/AboutUsPage";
import PaymentHomePage from "../../features/pages/PaymentHomePage";
import CartPage from "../../features/pages/CartPage";
import PaymentSuccessPage from "../../features/pages/PaymentSuccessPage";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            // MainLayout ile sarılan sayfalar
            {
                element: <MainLayout />,
                children: [
                    { path: "", element: <HomePage /> },
                    { path: "kategori", element: <CategoryPage /> },
                    { path: "detay/:id", element: <ProductDetail /> },
                    { path: "hakkimizda", element: <AboutUsPage /> },
                    { path: "sepetim", element: <CartPage /> },
                ],
            },
            // AuthLayout ile sarılan sayfalar
            {
                element: <AuthLayout />,
                children: [
                    { path: "payment", element: <PaymentHomePage /> },
                    { path: "paymentsuccess", element: <PaymentSuccessPage /> },
                ],
            },
        ],
    }
]

export const router = createBrowserRouter(routes);