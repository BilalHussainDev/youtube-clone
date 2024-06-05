import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Videos } from "src/components";
import { fetchFromApi } from "src/utils/fetchFromApi";

function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`/search/?query=${searchTerm}`).then((data) =>
      setVideos(data.videos)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for:{" "}
        <Box component="span" sx={{ color: "#f31503" }}>
          {searchTerm}
        </Box>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
