import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";
import { useMemo } from "react";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.auth);

  const { email, password, handleInputChange } = useForm({
    email: "abc@google.com",
    password: "123456",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const handleSubmit = (event) => {
    event.preventDefault();

    handleValidation();

    dispatch(checkingAuthentication(email, password));

    console.log({ email, password });
    // Here you would typically handle the login logic, e.g., dispatching an action or calling an API
  };

  const handleGoogleLogin = () => {
    console.log("Google login initiated");

    handleValidation();

    dispatch(startGoogleSignIn(email, password));

    // Here you would typically handle the Google login logic, e.g., dispatching an action or calling an API
  };

  const handleValidation = () => {
    // Here you would typically handle form validation, e.g., checking if fields are empty or valid
    if (!email || !password) {
      window.alert("Please fill in all fields.");
      return false;
    }
    // Additional validation logic can be added here
    return true;
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit} noValidate>
        <Grid container>
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

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                disabled={isAuthenticating}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleGoogleLogin}
                disabled={isAuthenticating}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="end"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Link color="inherit" to="#">
                Forgot Password?
              </Link>
            </Grid>
            <Grid item>
              <Link color="inherit" to="/auth/register" component={RouterLink}>
                Register
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
