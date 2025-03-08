import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import {  TurnedInNot } from '@mui/icons-material'

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
                }}
                open
            >
                {/* Toolbar permite que el contenido no se oculte por el drawer, es decir, que el drawer no tape el contenido */}
                <Toolbar >
                    <Typography variant="h6" noWrap>
                        Jesus Agudo
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {['Inbox', 'Starred'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary="lorem ipsum dolor sit amet" />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    )
}
