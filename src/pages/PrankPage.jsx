import { Box } from "@mui/material";
import React from "react";
import "../styles/PrankPage.css";

export const PrankPage = () => {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: 0,
					flexDirection: "column",
				}}
			>
				<h1 className="pranked">
					Congratulations! Your bank account has been vaccumed!
				</h1>
				<hr
					style={{
						border: "none",
						height: "3px",
						backgroundColor: "white",
						margin: "24px 0",
						width: "100%",
						borderRadius: "2px",
					}}
				/>
			</Box>
		</>
	);
};
