import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setSaving, setActiveNote, setNotes, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      imageUrls: [],
    };

    const docRef = await addDoc(
      collection(FirebaseDB, `${uid}/journal/notes`),
      newNote
    );

    newNote.id = docRef.id;
    console.log(`Document written with ID: ${docRef.id}`);

    dispatch(addNewEmptyNote(newNote));

    // Optionally, you can set the new note as active
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!uid) throw new Error("The user UID does not exist");

    console.log("Loading notes...");
    
    const notes = await loadNotes(uid);
    console.log("Notes loaded:", notes);
    
    dispatch(setNotes(notes));
  };
};

export const startSavingNote = (note) => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { uid } = getState().auth;
    const { active: activeNote } = getState().journal;

    const noteToFirestore = { ...activeNote };
    delete noteToFirestore.id;

    const docRef = doc(
      FirebaseDB,
      `${uid}/journal/notes/${activeNote.id}`
    );
    
    await setDoc(docRef, noteToFirestore, { merge: true });

    dispatch(updateNote(activeNote));
    dispatch(setActiveNote(activeNote));
  };
}
