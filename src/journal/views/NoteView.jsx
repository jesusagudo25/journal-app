import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 1 }}
    >
        <Grid
            item
        >
            <Typography fontSize={39} fontWeight="light"  >
                28 de septiembre, 2021
            </Typography>
        </Grid>

        <Grid
            item
        >
            <Button color="primary" sx={{ p: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid
            container  
            gap={2}
            sx={{ mb: 2, border: 'none' }}

            >
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="Ingrese una nota"
                    label="Nota"
                    minRows={4}
                />
        </Grid>

        <ImageGallery />
        
    </Grid>
  )
}
