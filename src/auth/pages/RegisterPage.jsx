import { Link as RouterLink } from "react-router-dom";
import { useState, useMemo } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { startRegisterWithEmailPassword } from "../../store/auth";

const formData = {
  email: "",
  password: "",
  name: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "The email must contain an '@'"],
  password: [
    (value) => value.length >= 6,
    "The password must be at least 6 characters long",
  ],
  name: [(value) => value.length >= 1, "The name is required"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthenticating = useMemo(
    () => status === "checking",
    [status]
  );

  const [formSubmitted, setformSubmitted] = useState(false);

  const {
    formState,
    email,
    password,
    name,
    handleInputChange,
    isFormValid,
    emailValid,
    passwordValid,
    nameValid,
  } = useForm(formData, formValidations);

  const handleSubmit = (event) => {
    event.preventDefault();

    //isCheckingAuthenticating is used to disable the button while checking authentication
    if (isCheckingAuthenticating) {
      return;
    }

    setformSubmitted(true);

    if (!isFormValid) {
      // If the form is not valid, you can handle it here, e.g., show an error message
      console.error("Form is invalid");
      return;
    }

    // Dispatch the registration action with the form data
    dispatch(startRegisterWithEmailPassword(email, password, name));
  };

  return (
    <AuthLayout title="Register">
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
              label="Name"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={handleInputChange}
              autoComplete="name"
              error={!!nameValid && formSubmitted}
              helperText={nameValid}
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
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
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
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Alert
                severity="error"
                sx={{ display: errorMessage ? "flex" : "none" }}
              >
                {errorMessage}
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                disabled={isCheckingAuthenticating}
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
