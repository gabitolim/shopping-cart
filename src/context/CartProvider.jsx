import React, { useReducer } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
	const initialState = [];

	const addProduct = (product) => {
		product.quantity = 1;
		const action = {
			type: "[CART] Add Product",
			payload: product,
		};
		dispatch(action);
	};
	const removeProduct = (id) => {
		const action = {
			type: "[CART] Remove Product",
			payload: id,
		};
		dispatch(action);
	};
	const incQuant = (id) => {
		const action = {
			type: "[CART] Increment Quantity",
			payload: id,
		};
		dispatch(action);
	};
	const decQuant = (id) => {
		const action = {
			type: "[CART] Decrement Quantity",
			payload: id,
		};
		dispatch(action);
	};

	const shoppingReducer = (state = initialState, action = {}) => {
		switch (action.type) {
			case "[CART] Add Product":
				return [...state, action.payload];
			case "[CART] Remove Product":
				return state.filter((product) => product.id !== action.payload);
			case "[CART] Increment Quantity":
				return state.map((product) => {
					const quant = product.quantity + 1;
					if (product.id === action.payload)
						return { ...product, quantity: quant };
					return product;
				});
			case "[CART] Decrement Quantity":
				return state.map((product) => {
					const quant = product.quantity - 1;
					if (product.id === action.payload && product.quantity > 1)
						return { ...product, quantity: quant };
					return product;
				});
		}
	};

	const [shopList, dispatch] = useReducer(shoppingReducer, initialState);

	return (
		<CartContext.Provider
			value={{
				shopList,
				addProduct,
				removeProduct,
				incQuant,
				decQuant,
				shoppingReducer,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
