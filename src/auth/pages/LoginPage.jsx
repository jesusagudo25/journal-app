import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  startLoginWithEmailPassword,
  startGoogleSignIn,
} from "../../store/auth/thunks";
import { useMemo } from "react";

const formData = {
    email: "",
    password: "",
};

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector((state) => state.auth);

  const { email, password, handleInputChange } = useForm(
    formData
  );

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isAuthenticating) {
      return; // Prevent form submission if already authenticating
    }

    if (!handleValidation()) {
      return; // If validation fails, do not proceed with login
    }

    //dispatch(checkingAuthentication(email, password));
    dispatch(startLoginWithEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    console.log("Google login initiated");
    if (isAuthenticating) {
      return; // Prevent Google login if already authenticating
    }

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
      <form
        onSubmit={handleSubmit}
        noValidate
        className="animate__animated animate__fadeIn animate__faster"
      >
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
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Alert
              severity="error"
              sx={{ display: errorMessage ? "flex" : "none" }}
            >
              {errorMessage}
            </Alert>
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
