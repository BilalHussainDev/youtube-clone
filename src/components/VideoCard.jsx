import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
	demoThumbnailUrl,
	demoVideoUrl,
	demoVideoTitle,
	demoChannelUrl,
	demoChannelTitle,
} from "src/utils/constants";

function VideoCard({ video }) {
	// console.log(video);

	return (
		<Card
			sx={{
				width: { xs: "100%", md: "360px" },
				borderRadius: "0",
				boxShadow: "none",
			}}
		>
			<Link
				to={video.video_id ? `/video/${video.video_id}` : demoVideoUrl}
			>
				<CardMedia
					image={video.thumbnails?.at(0)?.url || demoThumbnailUrl}
					alt={video.title}
					sx={{ width: "360px", height: "202px" }}
				/>
			</Link>

			<CardContent sx={{ backgroundColor: "#1e1e1e", height: "120px" }}>
				<Link
					to={
						video.video_id
							? `/video/${video.video_id}`
							: demoVideoUrl
					}
				>
					<Typography
						variant="subtitle1"
						fontWeight="bold"
						color="#fff"
					>
						{video.title.slice(0, 60) ||
							demoVideoTitle.slice(0, 60)}
					</Typography>
				</Link>

				<Link
					to={
						video.channel_id
							? `/channel/${video.channel_id}`
							: demoChannelUrl
					}
				>
					<Typography
						variant="subtitle2"
						fontWeight="bold"
						color="gray"
					>
						{video.author || demoChannelTitle}
						<CheckCircleIcon
							sx={{ fontSize: 12, color: "gray", ml: "5px" }}
						/>
					</Typography>
				</Link>
			</CardContent>
		</Card>
	);
}

export default VideoCard;
