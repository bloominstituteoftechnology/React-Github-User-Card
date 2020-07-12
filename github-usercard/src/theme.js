import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { deepPurple, amber } from '@material-ui/core/colors';

let theme = createMuiTheme({
	palette: {
		primary: amber,
		secondary: deepPurple,
	},
});

theme = responsiveFontSizes(theme, { factor: 7 });

export default theme;
