// Desc: AuthLayout component for login and register pages
//       This component is used to wrap the login and register pages
//       to provide a consistent layout for the pages.
//       The component uses Material-UI Grid and Typography components
//       to create a centered layout with a white background.
//       The children prop is used to render the login and register forms
//       inside the layout.

// Usage: <AuthLayout>
//          <LoginForm />

import { Grid, Typography } from '@mui/material'

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={0}
            direction="column"
            bgcolor="primary.main"
            minHeight="100vh"
            p={4}
        >
            <Grid
                width= {{ xs: '100%', sm: '50%' , md: '40%' }}
                item
                bgcolor="white"
                sx={{ boxShadow: 4, borderRadius: 2 }}
                p={4}
                xs={3}
            >

                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>

                {children}

            </Grid>


        </Grid>

    )
}
