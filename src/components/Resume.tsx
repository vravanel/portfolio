import { Card, Typography, CardContent, Grid } from "@mui/material";

export function Resume() {
  return (
    <div style={{ margin: "1rem" }}>
      <h1>CV</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h2>Education</h2>
          <Card style={{ backgroundColor: "#FFEBD1" }}>
            <CardContent>
              <Typography variant="body2">2023-2024</Typography>
              <Typography gutterBottom variant="h5" component="div">
                Concepteur Développeur d'Applications
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis magni natus, obcaecati quaerat repudiandae accusamus
                aliquam voluptas nulla minima, dolor, nostrum placeat soluta?
                Eveniet praesentium nemo odit quisquam eaque debitis?
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ backgroundColor: "#FF9C1A", marginTop: "1rem" }}>
            <CardContent>
              <Typography variant="body2">2023-2024</Typography>
              <Typography gutterBottom variant="h5" component="div">
                Concepteur Développeur d'Applications
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis magni natus, obcaecati quaerat repudiandae accusamus
                aliquam voluptas nulla minima, dolor, nostrum placeat soluta?
                Eveniet praesentium nemo odit quisquam eaque debitis?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <h2>Experience</h2>
          <Card style={{ backgroundColor: "#FF9C1A" }}>
            <CardContent>
              <Typography variant="body2">2023-2024</Typography>
              <Typography gutterBottom variant="h5" component="div">
                Concepteur Développeur d'Applications
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis magni natus, obcaecati quaerat repudiandae accusamus
                aliquam voluptas nulla minima, dolor, nostrum placeat soluta?
                Eveniet praesentium nemo odit quisquam eaque debitis?
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ backgroundColor: "#FF9C1A", marginTop: "1rem" }}>
            <CardContent>
              <Typography variant="body2">2023-2024</Typography>
              <Typography gutterBottom variant="h5" component="div">
                Concepteur Développeur d'Applications
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis magni natus, obcaecati quaerat repudiandae accusamus
                aliquam voluptas nulla minima, dolor, nostrum placeat soluta?
                Eveniet praesentium nemo odit quisquam eaque debitis?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
