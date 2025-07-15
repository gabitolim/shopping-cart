import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { CardComponent } from "../components/CardComponent";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const ProductsPage = () => {
	const { products } = useContext(ProductContext);
	const { removeProduct, addProduct } = useContext(CartContext);
	return (
		<>
			<Box>
				<div className="hcontainer">
					<h1 className="header">CHOOSE YOUR STYLE</h1>
				</div>
			</Box>
			<Typography variant="h3" sx={{ color: "white" }}>
				Products
			</Typography>
			<hr />
			{products.map((product) => (
				<CardComponent
					key={product.id}
					id={product.id}
					image={product.image}
					title={product.title}
					description={product.description}
					price={product.price}
					handlerAdd={() => addProduct(product)}
					handlerRemove={() => removeProduct(product.id)}
				/>
			))}
		</>
	);
};
