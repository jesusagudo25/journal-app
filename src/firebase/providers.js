import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    const  user = result.user;

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
