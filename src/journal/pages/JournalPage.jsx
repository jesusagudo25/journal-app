import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddCircleOutline } from "@mui/icons-material"

export const JournalPage = () => {
  return (
    <JournalLayout >

      <NothingSelectedView />
      {/*       <NoteView />*/}

      <IconButton
        color="primary"
        size="large"
        sx={{
          color: 'white',
          bgcolor: 'error.main',
          '&:hover': {
            bgcolor: 'error.dark'
          },
          position: 'fixed',
          bottom: 50,
          right: 50
        }}
      >
        <AddCircleOutline sx={{ fontSize: 30 }} />
      </IconButton >

    </JournalLayout>
  )
}
