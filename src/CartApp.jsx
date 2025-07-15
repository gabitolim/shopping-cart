import { Navigate, Route, Routes } from "react-router-dom";
import { NavbarComponent } from "./components/NavbarComponent";
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductProvider } from "./context/ProductProvider";
import { CartProvider } from "./context/CartProvider";
import { PrankPage } from "./pages/PrankPage";
import { FooterComponent } from "./components/FooterComponent";
import { Box } from "@mui/material";
import "./styles/CartApp.css";

export const CartApp = () => {
	return (
		<Box className="app-wrapper">
			<ProductProvider>
				<CartProvider>
					<NavbarComponent />
					<div className="container">
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/cart" element={<CartPage />} />
							<Route path="/*" element={<Navigate to="/" />} />
							<Route path="/products" element={<ProductsPage />} />
							<Route path="/prank" element={<PrankPage />} />
						</Routes>
					</div>
					<FooterComponent />
				</CartProvider>
			</ProductProvider>
		</Box>
	);
};
