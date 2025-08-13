import { FileUploadOutlined, SaveOutlined, DeleteOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";
import {
  setActiveNote,
  startDeletingNote,
  startSavingNote,
  startUploadingFiles,
} from "../../store/journal";

export const NoteView = () => {
  const dispatch = useDispatch();

  const { isSaving, active, messageSaved } = useSelector(
    (state) => state.journal
  );

  const images = active?.imageUrls || [];

  const { body, title, date, handleInputChange, formState } = useForm(active);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [date]);

  const fileInputRef = useRef(null);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    if (isSaving) return; // Prevent creating a new note if already saving
    dispatch(startSavingNote(formState));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    // Handle file upload logic here
    dispatch(startUploadingFiles(event.target.files));
  };

  const onDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡Esta acción no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(startDeletingNote());
        Swal.fire("Nota borrada", "La nota ha sido eliminada correctamente", "success");
      }
    });
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
        <input
          type="file"
          accept="image/*"
          multiple
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
        <Button
          color="primary"
          component="span"
          sx={{ p: 2 }}
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <FileUploadOutlined sx={{ fontSize: 30, mr: 1 }} />
          Subir imagen
        </Button>

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

      <Grid container sx={{ mb: 2 }} >
        <Button
          onClick={onDelete}
          color="error"
          disabled={isSaving}
          sx={{ p: 2 }}
          >
          <DeleteOutlined sx={{ fontSize: 30, mr: 1 }} />
          Borrar
        </Button>
      </Grid>
        

      <ImageGallery images={images} />
    </Grid>
  );
};
