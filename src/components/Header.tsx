import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Grid } from "@mui/material";

export function Header() {
  return (
    <header>
      <Grid container justifyContent="space-between">
        <Grid>
          <h1>Vincent Ravanel</h1>
        </Grid>
        <Grid>
          <DarkModeOutlinedIcon />
        </Grid>
      </Grid>
    </header>
  );
}
