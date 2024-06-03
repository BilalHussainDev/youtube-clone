import { Box, Stack } from "@mui/material";
import { VideoCard } from "src/components";

function Videos({ videos }) {
	console.log(videos);
	return (
		<Stack direction="row" flexWrap="wrap" gap={2}>
			{videos.map((video, index) => (
				<Box key={index + 1}>
					<VideoCard video={video} />
				</Box>
			))}
		</Stack>
	);
}

export default Videos;
