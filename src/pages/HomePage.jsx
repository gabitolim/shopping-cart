import { Box, Typography } from "@mui/material";
import "./HomePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Assume you have an array of image URLs for the carousel
const carouselImages = [
	"/src/remera1.jpg",
	"/src/short1.jpg",
	"/src/remera2.jpg",
	"/src/pants.jpg",
	"/src/hoodie2.jpg",
	"/src/cap.jpg",
	"/src/hoodie.jpg",
	// Add more image paths as needed for your carousel
];

export const HomePage = () => {
	const settings = {
		dots: true, // Show navigation dots
		infinite: true, // Loop the carousel
		speed: 600, // Transition speed
		slidesToShow: 5, // Number of slides to show at once
		slidesToScroll: 1, // Number of slides to scroll per action
		autoplay: true, // Autoplay the carousel
		autoplaySpeed: 3500, // Autoplay speed in ms
		arrows: true, // Show navigation arrows
		responsive: [
			// Responsive settings for different screen sizes
			{
				breakpoint: 1024, // Desktop
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768, // Tablet
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480, // Mobile
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false, // Maybe no dots on very small screens
				},
			},
		],
	};

	return (
		<>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					margin: 0,
					padding: 0,
				}}
			>
				<div className="hcontainer">
					<h1 className="header">WELCOME TO THE CLUB</h1>
				</div>

				<img
					src="/src/assets/homepage.jpg"
					style={{
						maxWidth: "100%",
						height: "auto",
						margin: 0,
						padding: 0,
					}}
				/>
				<Typography
					variant="h1"
					sx={{
						color: "white",
						textDecoration: "none",
						fontSize: "80px",
						opacity: "70%",
					}}
				>
					SUMMER HOT SALE
				</Typography>
			</Box>

			{/* Photo Carousel Section */}
			<Box
				sx={{
					width: "100%",
					maxWidth: "3000px", // Set a max-width for the carousel content if desired
					margin: "40px auto", // Center the carousel horizontally and add vertical spacing
					padding: "0 20px", // Add some horizontal padding inside the carousel box
					boxSizing: "border-box", // Include padding in the width calculation
				}}
			>
				<Typography variant="h4" component="h2" align="center" mb={3}>
					Latest Arrivals
				</Typography>
				<Slider {...settings}>
					{carouselImages.map((imageSrc, index) => (
						<Box key={index} sx={{ padding: "0 10px" }}>
							{" "}
							{/* Add padding around each slide image for spacing */}
							<img
								src={imageSrc}
								alt={`Product image ${index + 1}`}
								style={{
									width: "100%",
									height: "100%", // Or 'auto' if you prefer variable heights
									objectFit: "cover", // Cover the defined height, cropping if necessary
									display: "block",
								}}
							/>
						</Box>
					))}
				</Slider>
			</Box>
		</>
	);
};
