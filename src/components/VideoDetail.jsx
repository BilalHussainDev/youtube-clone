import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import { Videos } from "src/components";
import { fetchFromApi } from "src/utils/fetchFromApi";
import { CheckCircle } from "@mui/icons-material";

function VideoDetail() {
  const [videoDetails, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const videosData = await fetchFromApi(
        `/video/recommendations?video_id=${id}`
      );
      const videosDetailsData = await fetchFromApi(
        `/video/details?video_id=${id}`
      );
      setVideos(videosData.videos);
      setVideoDetails(videosDetailsData);
    })();
  }, [id]);

  return (
    <Box sx={{ minHeight: "calc(100vh - 80px)" }}>
      {!(videos || videoDetails) ? (
        <Typography variant="h5" color="#fff" sx={{ p: 2 }}>
          Loading...
        </Typography>
      ) : (
        <>
          <Stack direction={{ md: "row" }}>
            <Box flex={1}>
              <Box
                sx={{
                  width: "100%",
                  position: "sticky",
                  top: "80px",
                }}
              >
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  className="react-player"
                  controls
                />
                <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                  {videoDetails?.title}
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ color: "#fff", py: 1, px: 2 }}
                >
                  <Typography variant="subtitle1" color="#fff">
                    {videoDetails?.author}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                    />
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#fff"
                    sx={{ opacity: "0.7" }}
                  >
                    {parseInt(videoDetails?.number_of_views).toLocaleString()}{" "}
                    views
                  </Typography>
                </Stack>
              </Box>
            </Box>

            <Box
              px={2}
              py={{ xs: 5, md: 1 }}
              justifyContent="center"
              alignItems="center"
            >
              <Videos videos={videos} />
            </Box>
          </Stack>
        </>
      )}
    </Box>
  );
}

export default VideoDetail;
