
import { collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config"; // Ensure this path is correct

export const loadNotes = async (uid) => {
  if (!uid) throw new Error("The user UID does not exist");

  const notes = [];
  // Assuming you have a function to get the collection reference
  const notesCollection = collection(FirebaseDB, `${uid}/journal/notes`);

  const querySnapshot = await getDocs(notesCollection);
  querySnapshot.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });

  return notes;
};
