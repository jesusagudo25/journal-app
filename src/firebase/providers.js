import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    const user = result.user;

    return {
      ok: true,
      user,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      errorMessage: error.message || "An error occurred during Google sign-in.",
    };
  }
};

export const signInWithEmailPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const user = result.user;

    return {
      ok: true,
      user,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      errorMessage:
        error.message || "An error occurred during email/password sign-in.",
    };
  }
};

export const registerUserWithEmailPassword = async (email, password, name) => {
  try {
    const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const user = result.user;
    
    await updateProfile(FirebaseAuth.currentUser, {
      displayName: name,
    });

    return {
      ok: true,
      user,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      errorMessage:
        error.message || "An error occurred during user registration.",
    };
  }
};

export const logoutFirebase = async () => {
  try {
    await FirebaseAuth.signOut();
    return { ok: true };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message || "An error occurred during logout.",
    };
  }
}