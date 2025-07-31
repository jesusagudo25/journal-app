import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config"; // Ensure this path is correct
import { login, logout } from "../store/auth"; // Ensure this path is correct
import { startLoadingNotes } from "../store/journal"; // Ensure this path is correct

export const useCheckAuth = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // This effect can be used to perform any side effects when the status changes
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) {
        return dispatch(logout());
      }

      const { uid, email, displayName, photoURL } = user;

      dispatch(login({ uid, email, displayName, photoURL }));
      // Optionally, you can dispatch an action to load user-specific data here
      // For example, if you have a thunk to load user notes, you can call it
      dispatch(startLoadingNotes());
    });
  }, []);

  return status;
};
