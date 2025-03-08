import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const NothingSelectedView = () => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={0}
            direction="column"
            bgcolor="primary.main"
            minHeight="calc(100vh - 110px)"
            borderRadius={2}
        >
            <Grid
                item
                xs={12}
            >
                <StarOutline sx={{ fontSize: 100, color: 'white' }} />
            </Grid>
            <Grid
                item
                xs={12}
            >
                <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
                    Select o create an entry
                </Typography>
            </Grid>
        </Grid>
    )
}
