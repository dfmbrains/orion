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

const StylePromoColumn = styled(FlexAllCenter)(() => ({
   flexDirection: "column",
   position: "relative",
   zIndex: 10
}));

const StyledSwiperButtonsPosition = styled('div')(() => ({
   position: "absolute",
   top: "5%",
   right: "5%"
}));

export {StyledPromoBackgroundBox, StylePromoColumn, StyledSwiperButtonsPosition}