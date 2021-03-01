import {createMuiTheme} from '@material-ui/core/styles';
const ACCENT_COLOR = 'rgb(0, 0, 0)';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: ACCENT_COLOR
    },
    secondary: {
      main: ACCENT_COLOR
    }
  },
  typography: {
    fontFamily: 'Jura'
  },
  shape: {
    borderRadius: 20
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 'bold',
        fontSize: '17px',
        '&:focus': {
          outline: 'none'
        }
      }
    }
  }
});
