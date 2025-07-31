import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { setActiveNote, startSavingNote } from "../../store/journal";

export const NoteView = () => {
  const dispatch = useDispatch();

  const { isSaving, active } = useSelector((state) => state.journal);

  const { body, title, date, handleInputChange, formState } = useForm(active);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);


  const onSaveNote = () => {
    if (isSaving) return; // Prevent creating a new note if already saving
    dispatch(startSavingNote(formState));
  }

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <Button 
            color="primary" 
            sx={{ p: 2 }}
            onClick={onSaveNote}
            disabled={isSaving}
          >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container gap={2} sx={{ mb: 2, border: "none" }}>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Ingrese una nota"
          label="Nota"
          minRows={4}
          name="body"
          value={body}
          onChange={handleInputChange}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
