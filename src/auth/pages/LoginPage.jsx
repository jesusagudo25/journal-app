import { Link as RouterLink } from 'react-router-dom'
import { Google } from '@mui/icons-material'
import { Grid, Typography, TextField, Button, Link } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (
   
        <AuthLayout title="Login">

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
              spacing={2}
              sx={{ mb: 2, mt: 2 }}
            >
              <Grid
                item
                xs={12}
                sm={6}
              >
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Login
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
              >
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  <Google />
                  <Typography
                    sx={{ ml: 1 }}
                  >
                    Google
                  </Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="end"
              alignItems="center"
              spacing={2}
            >
              <Grid
                item
              >
                <Link
                  color="inherit"
                  to="#"
                >
                  Forgot Password?
                </Link>
              </Grid>
              <Grid
                item
              >
                <Link
                  color="inherit"
                  to="/auth/register"
                  component={RouterLink}
                >
                  Register
                </Link>
                </Grid>
            </Grid>

          </Grid>
        </form>

      </AuthLayout>

  )
}
