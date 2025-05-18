import 'styled-components';
import { lightTheme } from './themes';

type ThemeType = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}