import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

function sidebar({ selectedCategory, setSelectedCategory }) {
	return (
		<Stack
			direction="row"
			sx={{
				overflowY: "auto",
				flexDirection: { md: "column" },
				mb: 5,
			}}
		>
			{categories.map((category) => (
				<button
					key={category.name}
					onClick={() => setSelectedCategory(category.name)}
					className="category-btn"
					style={{
						background:
							category.name === selectedCategory && "#fc1503",
						color: "white",
					}}
				>
					<span
						style={{
							marginRight: "15px",
							color:
								category.name === selectedCategory
									? "white"
									: "red",
						}}
					>
						{category.icon}
					</span>
					<span
						style={{
							opacity:
								category.name === selectedCategory
									? "1"
									: "0.8",
						}}
					>
						{category.name}
					</span>
				</button>
			))}
		</Stack>
	);
}

export default sidebar;
