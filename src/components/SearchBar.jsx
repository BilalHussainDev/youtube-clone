import { IconButton, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
	return (
		<Paper
			component="form"
			onSubmit={() => {}}
			sx={{
				borderRadius: 20,
				border: "1px solid #e3e3e3",
				boxShadow: "none",
				pl: 2,
				mr: { sm: 5 },
			}}
		>
			<input
				className="search-bar"
				placeholder="search"
				value=""
				onChange={() => {}}
			/>
			<IconButton sx={{ p: "10px", color: "red" }}>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}

export default SearchBar;
