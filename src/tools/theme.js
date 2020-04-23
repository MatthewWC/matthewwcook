import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  paddings: {
    xSmall: '5px',
    small: '10px',
    medium: '20px'
  },
  margins: {
    xSmall: '5px',
    small: '10px',
    medium: '20px',
    large: '50px'
  },
  backgroundImage: {
    clickable: 'linear-gradient(#868f96, #596164)',
    project: 'linear-gradient(#2c3e50, #000000)',
  },
  colors: {
    white: 'white',
    black: 'black'
  },
  fontFamily: {
    title: 'Girassol',
    clickable: 'Manrope',
    text: 'Roboto'
  },
  size: {
    button: {
      height: '40px',
      width: '120px'
    }
  }
})

export default theme