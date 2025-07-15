import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/FooterComponent.css";

export const FooterComponent = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer-cont">
					<h4 className="footer-title">Thank you for visiting us!</h4>
					<h5 className="abt-us"> ABOUT US</h5>
					<NavLink to="/prank"> Instagram </NavLink>
					<NavLink to="/prank"> Facebook</NavLink>
					<NavLink to="/prank"> WhatsApp</NavLink>
					<div>textyoulater@gmail.com</div>
					<div className="copyr">All Rights Reserved @ Copyright</div>
				</div>
			</footer>
		</>
	);
};
