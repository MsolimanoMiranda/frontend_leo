import {esES} from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";

const MAIN_COLOR = '#00AA80';
const ERROR_ICON = '#EB5757'

const themeConfig = createTheme(
    {
        palette: {
            primary: {
                main: MAIN_COLOR,
                light: MAIN_COLOR,
                dark: MAIN_COLOR,
            },
            secondary: {
                main: '#330033',

            },
            info: {
                main: MAIN_COLOR,
                light: MAIN_COLOR,
                dark: MAIN_COLOR,
            },
            error: {
                main: ERROR_ICON
            }
        }
    },
    esES,
);

export default themeConfig;