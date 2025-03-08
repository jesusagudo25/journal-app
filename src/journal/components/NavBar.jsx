import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({ drawerWidth= 240 }) => {
  return (
    <AppBar 
        position="fixed" 
        sx={{ 
            width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` },
            ml: { sm: `${drawerWidth}px` },
        }}
    >
        {/* Toolbar */}
        <Toolbar>
            {/* IconButton */}
            <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}

            >
                <MenuOutlined />
            </IconButton>

            <Grid 
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h6" noWrap>
                    JournalApp
                </Typography>

                <IconButton
                    color="inherit"
                >
                    <LogoutOutlined />
                </IconButton>
            </Grid>

        </Toolbar>

    </AppBar>
  )
}
