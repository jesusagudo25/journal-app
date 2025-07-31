import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    /*
            active: {
                id: 'ABC123',
                title: '',
                body: '',
                date: 123456789,
                imageUrls: [],
            }
        */
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
      state.isSaving = false;
      state.notes.push(action.payload);
      state.messageSaved = "";
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
      state.messageSaved = `${action.payload.title}, updated successfully`;
    },
    deleteNoteById: (state, action) => {
      state.isSaving = false;
      state.active = null;
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.messageSaved = "Note deleted successfully";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;
