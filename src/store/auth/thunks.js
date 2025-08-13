import {
  signInWithGoogle,
  signInWithEmailPassword,
  registerUserWithEmailPassword,
  logoutFirebase
} from "../../firebase/providers";
import { clearNotesLogout } from "../journal";
import { checkingCredentials, logout, login } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    // Simulate an API call
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    // Simulate an API call for Google Sign-In
    const result = await signInWithGoogle();
    if (result.ok) {
      // Handle successful Google sign-in
      console.log("Google sign-in successful:", result);
      dispatch(
        login({
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        })
      );
    } else {
      // Handle error during Google sign-in
      return dispatch(
        logout({
          errorMessage: result.errorMessage || "Google sign-in failed",
        })
      );
    }
  };
};

export const startLoginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    // Simulate an API call for email/password login
    // Here you would typically call your authentication service
    const result = await signInWithEmailPassword(email, password);
    if (result.ok) {
      // Handle successful login
      console.log("Login successful:", result);
      dispatch(
        login({
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        })
      );
    } else {
      // Handle error during login
      return dispatch(
        logout({
          errorMessage: result.errorMessage || "Login failed",
        })
      );
    }
  };
};

export const startRegisterWithEmailPassword = (
  email,
  password,
  displayName
) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    // Simulate an API call for registration
    // Here you would typically call your authentication service
    const result = await registerUserWithEmailPassword(
      email,
      password,
      displayName
    );
    if (result.ok) {
      // Handle successful registration
      console.log("Registration successful:", result);
      dispatch(
        login({
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        })
      );
    } else {
      // Handle error during registration
      return dispatch(
        logout({
          errorMessage: result.errorMessage || "Registration failed",
        })
      );
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    // Simulate an API call for logout
    const result = await logoutFirebase();
    if (result.ok) {
      // Handle successful logout
      console.log("Logout successful");
      dispatch(clearNotesLogout());
      dispatch(logout());
    } else {
      // Handle error during logout
      return dispatch(
        logout({
          errorMessage: result.errorMessage || "Logout failed",
        })
      );
    }
  };
}