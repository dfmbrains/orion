import {styled} from "@mui/material";
import {FlexAllCenter} from "./FlexBox";

const StyledPromoBackgroundBox = styled(FlexAllCenter)(({bgimage}) => ({
   height: "100%",
   background: `url(${bgimage})`,
   backgroundPosition: "center",
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   zIndex: 1,

   "&:before": {
      content: "''",
      position: "absolute",
      top: "0",
      left: "0",
      backgroundColor: "#00000090",
      height: "100%",
      width: "100%",
      zIndex: 2,
   }
}));

const StylePromoColumn = styled(FlexAllCenter)(({theme}) => ({
   flexDirection: "column",
   position: "relative",
   zIndex: 10,
   width: "100%",

   "& h1": {
      width: "80%",
      textAlign: "center",
      [theme.breakpoints.down("lg")]: {width: "90%"},
      [theme.breakpoints.down("md")]: {width: "95%"},
   }
}));

const StyledSwiperButtonsPosition = styled('div')(({theme}) => ({
   position: "absolute",
   top: "5%",
   right: "5%",
   "& .swiperButtonPrev, & .swiperButtonNext": {
      [theme.breakpoints.down("md")]: {minWidth: "auto", width: "28px", height: "28px"}
   },
   [theme.breakpoints.down("md")]: {
      top: "auto",
      right: "0",
      bottom: "-40px"
   },
   [theme.breakpoints.down("sm")]: {
      bottom: "-35px"
   },
}));

const StyledResponsiveImageBox = styled('div')(() => ({
   position: "relative",
   width: "100%",
   overflow: "hidden",
   borderRadius: "10px",

   "& img": {
      maxWidth: "120%",
      maxHeight: "120%",
      minWidth: "100%",
      minHeight: "100%",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)"
   }
}));

const Styled100vhLoadingBox = styled('div')(() => ({
   position: "relative",
   height: "100vh"
}));

const Styled50vhLoadingBox = styled('div')(() => ({
   position: "relative",
   height: "50vh",
   width: "100%"
}));

export {
   StyledPromoBackgroundBox,
   StylePromoColumn,
   StyledSwiperButtonsPosition,
   StyledResponsiveImageBox,
   Styled100vhLoadingBox,
   Styled50vhLoadingBox
}