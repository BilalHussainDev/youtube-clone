import { Box, Typography } from "@mui/material";
import { VideoCard, VideoCardLoader } from "src/components";

function Videos({ videos }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(268px, 1fr))",
        gap: "16px",
      }}
    >
      {videos?.length > 0
        ? videos?.map((video, index) => (
            <Box key={index + 1}>
              <VideoCard video={video} />
            </Box>
          ))
        : Array.from({ length: 6 }).map((_, index) => (
            <Box key={index + 1}>
              <VideoCardLoader />
            </Box>
          ))}
    </Box>
  );
}

export default Videos;
