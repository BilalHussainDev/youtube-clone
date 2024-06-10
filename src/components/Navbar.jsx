import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "src/utils/constants";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <Stack
      component="nav"
      direction="row"
      alignItems="center"
      gap="16px"
      p={2}
      sx={{
        height: "80px",
        background: "#000",
        position: "sticky",
        top: "0",
        zIndex: "100",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="Logo" height={45} />
      </Link>

      <SearchBar />
    </Stack>
  );
}

export default Navbar;
