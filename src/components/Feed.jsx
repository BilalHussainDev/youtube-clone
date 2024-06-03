import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Sidebar, Videos } from "src/components";
import { fetchFromApi } from "src/utils/fetchFromApi";

function Feed() {
	const [selectedCategory, setSelectedCategory] = useState("New");
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetchFromApi(`/search/?query=${selectedCategory}`).then((data) =>
			setVideos(data.videos)
		);
	}, [selectedCategory]);

	return (
		// It contains two parts, sidebar and videos
		<Stack
			component="section"
			sx={{
				flexDirection: { xs: "column", md: "row" },
				height: "calc(100vh - 80px)",
			}}
		>
			{/* Below is the box for sidebar */}
			<Box
				sx={{
					borderRight: "1px solid #3d3d3d",
					overflowY: "auto",
					px: { xs: 0, md: 2 },
				}}
			>
				<Sidebar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>

				<Typography
					className="copyright"
					variant="body2"
					sx={{
						color: "#fff",
						backgroundColor: "rgba(0, 0, 0, 0.8)",
						mt: 1.5,
						position: "fixed",
						bottom: "0",
					}}
				>
					CopyRight ©{new Date().getFullYear()} Bilal
				</Typography>
			</Box>

			{/* Below is the box for videos */}
			<Box p={2} sx={{ overflowY: "auto", flex: 2 }}>
				<Typography
					variant="h4"
					fontWeight="bold"
					mb={2}
					sx={{ color: "white" }}
				>
					{selectedCategory}{" "}
					<Box component="span" sx={{ color: "#f31503" }}>
						videos
					</Box>
				</Typography>

				<Videos videos={videos} />
			</Box>
		</Stack>
	);
}

export default Feed;
