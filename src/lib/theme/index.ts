'use client'

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: () => ({
          ['& .MuiPagination-ul']: {
            justifyContent: 'center'
          }
        }
        )
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: () => ({
          marginTop: 100
        }
        )
      }
    },
    MuiCard: {
      styleOverrides: {
        root: () => ({
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }
        )
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: () => ({
          objectFit: 'contain'
        }
        )
      }
    }
  },
})

export { theme }