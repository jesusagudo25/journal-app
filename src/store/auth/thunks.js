import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials,logout, login } from "./authSlice";

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
      dispatch(login({
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL,
      }));
    } else {
      // Handle error during Google sign-in
      return dispatch(logout({
        errorMessage: result.errorMessage || "Google sign-in failed",
      }));
    }
  };
};
