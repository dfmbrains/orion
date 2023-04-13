import React from 'react';
import ServiceImg from '../../../assets/images/service1.png';
import {StyledResponsiveImageBox} from "../../../components/StyledComponents";
import {Box, Card, styled, Typography, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {handleScrollToTop} from "../../../helpers/utils";

const StyledCard = styled(Card)(({theme}) => ({
   overflow: "hidden",
   position: "relative",
   cursor: "pointer",
   borderRadius: "10px",

   ".serviceCardLine": {
      position: "absolute",
      height: "20px",
      bottom: "0",
      left: "0",
      transition: "0.3s",
      width: "100%",
   },
   "&:hover": {
      ".serviceCardLine": {
         transition: "0.3s",
         backgroundColor: theme.palette.primary.main,
      }
   }
}));

const ServiceCard = () => {
   const theme = useTheme()

   const navigate = useNavigate()

   return (
       <StyledCard onClick={() => {
          handleScrollToTop()
          navigate('/services/1')
       }} theme={theme} className={"serviceCard"}>
          <StyledResponsiveImageBox className="serviceCardImg">
             <img src={ServiceImg} alt="service"/>
          </StyledResponsiveImageBox>
          <Box pt={2} pb={5} px={3}>
             <Typography variant={"subtitle1"} mb={2}>Rail Freight Transport</Typography>
             <Typography variant={"subtitle2"} color={"#6C6C6C"}>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Curabitur ac quam tellus. Etiam commodo diam nec tempus sagittis.</Typography>
          </Box>
          <div className="serviceCardLine"/>
       </StyledCard>
   );
};

export default ServiceCard;