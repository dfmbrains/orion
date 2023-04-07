import React from 'react';
import {Button, Card, Divider, Grid, styled, Typography} from "@mui/material";
import FreightTriangleBg from '../../../assets/images/freightTriangle.png';
import ContainerFreight from '../../../assets/images/containerFreight.png';
import EllipseBg from '../../../assets/images/ellipse.png';
import OrionContainer from "../../../components/OrionContainer";

const StyledSection = styled('section')(() => ({
   position: "relative",
   padding: "120px 0 0",
   overflow: "hidden",

   "& .freightTriangleBg": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -2
   },
   "& .ellipseBg": {
      position: "absolute",
      top: '100px',
      left: "50%",
      transform: 'translate(-50%)',
      width: "90%",
      height: "120%",
      zIndex: -1
   },
   "& .containerFreightImg": {
      width: "100%",
   }
}));

const HomeSection2 = () => {
   return (
       <StyledSection>
          <OrionContainer>
             <Grid container spacing={8}>
                <Grid item xs={3.5}>
                   <img className="containerFreightImg" src={ContainerFreight} alt="containerFreight"/>
                </Grid>
                <Grid item xs={5}>
                   <Typography mb={6} variant="h2">Container Freight <br/> Transport</Typography>
                   <Typography mb={3} color={"primary"} variant="h4">Fast & Convenient</Typography>
                   <Typography mb={3} variant="body1">We create an effective transport chain monitoring of Container
                      Freight to China and other countries. While your cargo is on its way, our logistic specialists
                      will keep updating you whenever you need.</Typography>

                   <Divider/>

                   <Button sx={{mt: 3}} size={"large"} variant={"contained"} color={"primary"}>Learn more</Button>
                </Grid>
                <Grid item xs={3.5} alignSelf={"center"}>
                   <Card sx={{p: 6}}>
                      <Typography mb={2} sx={{fontWeight: "bold"}} variant="h5">Our Other Services</Typography>

                      <Typography mb={1} variant="body1">Provision of Rolling Stock</Typography>
                      <Typography mb={1} variant="body1">Multimodal Freight Transport</Typography>
                      <Typography mb={1} variant="body1">Container Freight Transport</Typography>
                      <Typography mb={1} variant="body1">Rail freight</Typography>
                      <Typography variant="body1">And way more</Typography>
                   </Card>
                </Grid>
             </Grid>
          </OrionContainer>
          <img className="freightTriangleBg" src={FreightTriangleBg} alt="triangle"/>
          <img className="ellipseBg" src={EllipseBg} alt="ellipse"/>
       </StyledSection>
   );
};

export default HomeSection2;