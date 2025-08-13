import { addDoc, collection, deleteDoc, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  setSaving,
  setActiveNote,
  setNotes,
  updateNote,
  setPhotosToActiveNote,
  deleteNoteById,
} from "./journalSlice";
import { loadNotes, fileUpload } from "../../helpers";

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

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);

    await setDoc(docRef, noteToFirestore, { merge: true });

    dispatch(updateNote(activeNote));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving());

   // await fileUpload(files[0]);
    const fileUploadPromises = Array.from(files).map(file => fileUpload(file));
    
    try {
      const uploadedFiles = await Promise.all(fileUploadPromises);
      console.log("Files uploaded successfully:", uploadedFiles);
      
      // Here you can dispatch an action to update the note with the new image URLs
      // For example, you might want to add these URLs to the active note's imageUrls array
      dispatch(setPhotosToActiveNote(uploadedFiles));
    } catch (error) {
      console.error("Error uploading files:", error);
      // Handle error appropriately, e.g., show a notification
    }
    console.log("Files to upload:", files);
    console.log("Files uploaded:", files.length);
  };
};

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: activeNote } = getState().journal;

    if (!activeNote) throw new Error("No active note to delete");

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);
    
    await deleteDoc(docRef);

    dispatch(deleteNoteById(activeNote.id));
  };
}