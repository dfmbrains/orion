import React from 'react';
import {Button, Divider, Grid, styled, Typography} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import {useNavigate} from "react-router-dom";
import {handleScrollToTop} from "../../../helpers/utils";
import ProvisionImg from '../../../assets/images/provision.png';
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(() => ({
   padding: "100px 0",

   "& .provisionImg": {
      width: "100%"
   }
}));

const HomeSection4 = () => {
   const translationKey = 'home.section4'
   const {t} = useTranslation()

   const navigate = useNavigate()

   return (
       <StyledSection>
          <OrionContainer>
             <Grid container spacing={8}>
                <Grid item xs={5}>
                   <Typography mb={3} pr={6} variant={"h2"}>{t(`${translationKey}.title`)}</Typography>
                   <Typography mb={3} pr={6} variant={"subtitle2"}>{t(`${translationKey}.subtitle`)}</Typography>

                   <Divider/>

                   <Button onClick={() => {
                      handleScrollToTop()
                      navigate('/services')
                   }} variant={"contained"} color={"primary"} sx={{mt: 5, width: "60%"}} size={"large"}>
                      {t('buttons.ourServices')}
                   </Button>
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