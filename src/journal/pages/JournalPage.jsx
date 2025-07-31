import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddCircleOutline } from "@mui/icons-material";
import { startNewNote } from "../../store/journal/thunks";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);

  const onClickNewNote = () => {
    if (isSaving) return; // Prevent creating a new note if already saving
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
        aria-label="add"
        color="primary"
        size="large"
        sx={{
          color: "white",
          bgcolor: "error.main",
          "&:hover": {
            bgcolor: "error.dark",
          },
          position: "fixed",
          bottom: 50,
          right: 50,
        }}
      >
        <AddCircleOutline sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
