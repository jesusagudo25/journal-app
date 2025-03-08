import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Grid, Typography, TextField, Button, Link } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
   
        <AuthLayout title="Register">

        <form>
          <Grid
            container
          >

            <Grid
              item xs={12}
              sx={{ mt: 2 }}
            >
              <TextField
                fullWidth
                required
                label="Name"
                type="text"
                placeholder="Enter your name"
              />
            </Grid>
            <Grid
              item xs={12}
              sx={{ mt: 2 }}
            >
              <TextField
                fullWidth
                required
                label="Email"
                type="email"
                placeholder="Enter your email"
              />
            </Grid>
            <Grid
              item xs={12}
              sx={{ mt: 2 }}
            >
              <TextField
                fullWidth
                required
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
            </Grid>

            <Grid
              container
              sx={{ mb: 2, mt: 2 }}
            >
              <Grid
                item
                xs={12}

              >
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Register
                </Button>
              </Grid>

            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="end"
            >
                <Typography sx = {{ mr: 2 }}>
                  Already have an account?
                </Typography>
                <Link
                  color="inherit"
                  to="/auth/login"
                  component={RouterLink}
                >
                  Login
                </Link>
            </Grid>

          </Grid>
        </form>

      </AuthLayout>

  )
}
