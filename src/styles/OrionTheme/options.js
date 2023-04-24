export const themeOptions = (theme) => {
   return {
      palette: {
         primary: {
            main: '#F18200',
            contrastText: '#FFFFFF'
         },
         secondary: {
            main: '#FFFFFF',
            contrastText: '#F18200'
         },
         info: {
            main: '#1B1B1B'
         }
      },
      typography: {
         fontFamily: "'GT Walsheim Pro', sans-serif",
         h1: {
            fontSize: 64,
            color: "#FFFFFF",
            fontWeight: "bold",
            [theme.breakpoints.down("lg")]: {fontSize: 56}
         },
         h2: {
            fontSize: 45,
            color: "#1B1B1B",
            fontWeight: "bold",
            [theme.breakpoints.down("lg")]: {fontSize: 38}
         },
         h3: {
            fontSize: 35,
            fontWeight: "bold",
            [theme.breakpoints.down("lg")]: {fontSize: 30}
         },
         h4: {
            fontSize: 30,
            fontWeight: "bold",
            [theme.breakpoints.down("lg")]: {fontSize: 26}
         },
         h5: {
            fontSize: 24,
            [theme.breakpoints.down("lg")]: {fontSize: 22}
         },
         subtitle1: {
            fontSize: 20,
            fontWeight: "300",
            [theme.breakpoints.down("lg")]: {fontSize: 18}
         },
         subtitle2: {
            fontSize: 18,
            fontWeight: "300",
            [theme.breakpoints.down("lg")]: {fontSize: 16}
         },
         body1: {
            fontSize: 16,
            fontWeight: "300",
            [theme.breakpoints.down("lg")]: {fontSize: 15}
         },
         body2: {
            fontSize: 13,
            fontWeight: "300",
            [theme.breakpoints.down("lg")]: {fontSize: 12}
         }
      }
   }
}