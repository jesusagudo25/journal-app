import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";


export const RegisterPage = () => {
  const { email, password, name, handleInputChange, formState } = useForm({
    email: "",
    password: "",
    name: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you would typically handle the registration logic, e.g., dispatching an action or calling an API
    console.log(formState);
    // You can also add validation here if needed
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={handleSubmit} >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              required
              label="Name"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={handleInputChange}
              autoComplete="name"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              required
              label="Email"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={handleInputChange}
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              required
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={handleInputChange}
              autoComplete="current-password"
            />
          </Grid>

          <Grid container sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Register
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 2 }}>Already have an account?</Typography>
            <Link color="inherit" to="/auth/login" component={RouterLink}>
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
