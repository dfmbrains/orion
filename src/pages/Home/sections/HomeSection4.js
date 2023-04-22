import React from 'react';
import {Button, Divider, Grid, styled, Typography} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import {useNavigate} from "react-router-dom";
import {handleScrollToTop} from "../../../helpers/utils";
import ProvisionImg from '../../../assets/images/provision.png';

const StyledSection = styled('section')(() => ({
   padding: "100px 0",

   "& .provisionImg": {
      width: "100%"
   }
}));

const HomeSection4 = () => {
   const navigate = useNavigate()

   return (
       <StyledSection>
          <OrionContainer>
             <Grid container spacing={8}>
                <Grid item xs={5}>
                   <Typography mb={3} pr={6} variant={"h2"}>Provision of Rolling Stock</Typography>
                   <Typography mb={3} pr={6} variant={"subtitle2"}>We offer services on provision of rolling stock
                      according to the customer request. Our Logistics Specialists will assign a right rolling stock
                      specifically to your cargo.</Typography>

                   <Divider/>

                   <Button onClick={() => {
                      handleScrollToTop()
                      navigate('/services')
                   }} variant={"contained"} color={"primary"} sx={{mt: 5, width: "60%"}} size={"large"}>Our
                      Services</Button>
                </Grid>

                <Divider flexItem orientation={"vertical"}/>

                <Grid item xs={6}>
                   <img src={ProvisionImg} alt="provision" className="provisionImg"/>
                </Grid>
             </Grid>
          </OrionContainer>
       </StyledSection>
   );
};

export default HomeSection4;