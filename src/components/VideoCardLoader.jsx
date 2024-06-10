import { Skeleton, Card, CardContent } from "@mui/material";

function VideoCardLoader() {
  return (
    <Card
      sx={{
        borderRadius: "0",
        boxShadow: "none",
      }}
    >
      <Skeleton
        variant="rectangular"
        animation="wave"
        width="100%"
        height={190}
        sx={{ background: "#8f8f8f" }}
      />

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "120px" }}>
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ fontSize: "20px", lineHeight: "28px", bgcolor: "#8f8f8f" }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ fontSize: "20px", lineHeight: "28px", bgcolor: "#8f8f8f" }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            fontSize: "16px",
            lineHeight: "24px",
            bgcolor: "#8f8f8f",
            width: "30%",
          }}
        />
      </CardContent>
    </Card>
  );
}

export default VideoCardLoader;
