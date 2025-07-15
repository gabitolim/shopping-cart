import Swal from "sweetalert2";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const CartPage = () => {
	const { shopList, removeProduct, incQuant, decQuant } =
		useContext(CartContext);

	const calculateTotal = () => {
		return shopList
			.reduce((total, product) => total + product.price * product.quantity, 0)
			.toFixed(2);
	};

	const handlerPurchase = () => {
		const productsPurchased = shopList
			.map((product) => `${product.title} x ${product.quantity}`)
			.join("\n");
		Swal.fire({
			icon: "success",
			title: "Purchase has been made successfully!",
			html: `<p> Your purchase: </p> <pre>${productsPurchased}</pre> <p> Total: ${calculateTotal()}</p>`,
		});
	};
	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Price</th>
						<th scope="col">Quantity</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					{shopList.map((product) => (
						<tr key={product.key}>
							<th scope="row">{product.title}</th>
							<td>${product.price}</td>
							<td>
								<button
									className="btn btn-outline-primary"
									onClick={() => decQuant(product.id)}
								>
									-
								</button>
								<button className="btn btnprimary">{product.quantity}</button>
								<button
									className="btn btn-outline-primary"
									onClick={() => incQuant(product.id)}
								>
									+
								</button>
							</td>
							<td>
								<button
									className="btn btn-danger"
									onClick={() => removeProduct(product.id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}

					<tr>
						<th>
							<b>TOTAL: </b>
						</th>
						<td></td>
						<td></td>
						<td>${calculateTotal()}</td>
					</tr>
				</tbody>
			</table>
			<div className="d-grid gap-2">
				<button
					className="btn btn-primary"
					type="button"
					onClick={handlerPurchase}
				>
					Check-Out
				</button>
			</div>
		</>
	);
};
