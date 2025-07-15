import { ShoppingCart } from "@mui/icons-material";
import { Badge, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const NavbarComponent = () => {
	const { shopList } = useContext(CartContext);

	return (
		<AppBar position="static" sx={{ backgroundColor: "transparent" }}>
			{/* Toolbar handles padding and is a flex container by default */}
			<Toolbar>
				{/* 1. Logo/Brand on the left */}
				<Typography
					variant="h6"
					component={NavLink}
					to="/"
					sx={{ flexGrow: 1, color: "white", textDecoration: "none" }}
				>
					text you later.
				</Typography>

				{/* 2. Navigation Links in the middle/right */}
				<Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
					<Button component={NavLink} to="/" sx={{ color: "white" }}>
						Home
					</Button>
					<Button component={NavLink} to="/products" sx={{ color: "white" }}>
						Products
					</Button>
					{/* You can create a dropdown with MUI's <Menu> component */}
				</Box>

				{/* 3. Cart Icon on the far right */}
				<NavLink to="/cart" style={{ color: "white", marginLeft: "16px" }}>
					<Badge badgeContent={shopList.length} color="primary">
						<ShoppingCart />
					</Badge>
				</NavLink>
			</Toolbar>
		</AppBar>
	);
};
