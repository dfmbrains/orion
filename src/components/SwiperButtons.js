import React from 'react';
import {Icon, IconButton, styled} from "@mui/material";
import {FlexBox} from "./FlexBox";
import {useSwiper} from "swiper/react";

const StyledSwiperButtonsBox = styled(FlexBox)(() => ({
   alignItems: "center",
   columnGap: "24px"
}));

const StyledIconButton = styled(IconButton)(() => ({
   backgroundColor: '#D6D6D6',

   "&:hover": {
      backgroundColor: '#bdbbbb'
   },

   "& .material-icons": {
      color: '#1B1B1B'
   }
}));

const SwiperButtons = () => {
   const swiper = useSwiper();

   return (
       <StyledSwiperButtonsBox>
          <StyledIconButton onClick={() => swiper.slidePrev()} size={"small"}>
             <Icon>keyboard_arrow_left</Icon>
          </StyledIconButton>
          <StyledIconButton onClick={() => swiper.slideNext()} size={"small"}>
             <Icon>keyboard_arrow_right</Icon>
          </StyledIconButton>
       </StyledSwiperButtonsBox>
   );
};

export default SwiperButtons;