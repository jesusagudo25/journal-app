import { Grid, CircularProgress } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={0}
      direction="column"
      bgcolor="primary.main"
      minHeight="100vh"
      p={4}
    >
      <CircularProgress size={50} color="error" />
    </Grid>
  );
};
