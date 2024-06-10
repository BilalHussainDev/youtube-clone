import { Link } from "react-router-dom";
import { Typography, Card, CardContent, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "src/utils/constants";

function VideoCard({ video }) {
  return (
    <Card
      sx={{
        borderRadius: "0",
        boxShadow: "none",
      }}
    >
      <Link to={video.video_id ? `/video/${video.video_id}` : demoVideoUrl}>
        <Box
          component="img"
          src={video.thumbnails?.at(0)?.url || demoThumbnailUrl}
          alt={video.title}
          sx={{
            width: "100%",
            objectFit: "cover",
            display: "flex",
          }}
        />

        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "120px" }}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {video.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>

          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {video.author || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
}

export default VideoCard;
