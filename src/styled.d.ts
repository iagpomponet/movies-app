import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    containerSize: string,
    colors: {
      primary: string
    }
  }
}