import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { green, blue } from '@material-ui/core/colors';

let theme = createMuiTheme({
	palette: {
		primary: green,
		secondary: blue,
	},
});

theme = responsiveFontSizes(theme, { factor: 7 });

export default theme;
