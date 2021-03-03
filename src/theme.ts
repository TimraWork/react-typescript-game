import {createMuiTheme} from '@material-ui/core/styles';

const Color = {
  PRIMARY: 'rgb(0, 0, 0)',
  SECONDARY: 'rgb(0, 150, 136)'
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: Color.PRIMARY
    },
    secondary: {
      main: Color.SECONDARY
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
