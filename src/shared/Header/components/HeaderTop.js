import React from 'react';
import {FlexBetweenAlignCenter, FlexGap10} from "../../../components/FlexBox";
import {Box, Icon, styled, Typography} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";

const StyledBox = styled(Box)(() => ({
   backgroundColor: "#252525",
   padding: '6px 0',
   "& .material-icons": {
      color: "#FFFFFF"
   }
}));
const StyledBody2 = styled(Typography)(() => ({
   color: "#FFFFFF"
}));


const HeaderTop = () => {
   return (
       <StyledBox>
          <OrionContainer>
             <FlexBetweenAlignCenter>
                <FlexGap10>
                   <Icon fontSize={"small"}>support_agent</Icon>
                   <StyledBody2 variant='body2'>Support 24 / 7</StyledBody2>
                </FlexGap10>
                <FlexGap10>
                   <Icon fontSize={"small"}>phone</Icon>
                   <a href="tel:+996705006088">
                      <StyledBody2 variant='body2'>+996705006088</StyledBody2>
                   </a>
                   <a href="tel:+996707567676">
                      <StyledBody2 variant='body2'>+996707567676</StyledBody2>
                   </a>
                </FlexGap10>
             </FlexBetweenAlignCenter>
          </OrionContainer>
       </StyledBox>
   );
};

export default HeaderTop;