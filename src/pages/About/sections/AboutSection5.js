import React from 'react';
import {Divider, Grid, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import TeamImg from '../../../assets/images/team.png';
import {FlexBox} from "../../../components/FlexBox";
import {Trans, useTranslation} from "react-i18next";

const StyledSection = styled('section')(({theme}) => ({
   padding: "50px 0",

   "& .aboutSection5Img": {
      width: "80%",
      marginTop: "28px",
      [theme.breakpoints.down("lg")]: {width: "95%", marginTop: "20px"},
   },
   "& .aboutSection5Objectives": {
      backgroundColor: "#F7F7F7",
      padding: "15px 30px",
      "&:not(:last-child)": {
         marginBottom: "10px"
      },
      [theme.breakpoints.down("lg")]: {padding: "10px 15px"},
   }
}));

const AboutSection5 = () => {
   const translationKey = 'about.section5'
   const {t} = useTranslation()

   const theme = useTheme()

   const objectives = t(`${translationKey}.objectives`, {returnObjects: true}) || []

   return (
       <StyledSection>
          <OrionContainer>
             <Grid container spacing={{lg: 5, xs: 3}}>
                <Grid item xs={6}>
                   <FlexBox sx={{height: "100%"}}>
                      <div>
                         <Typography mb={{lg: 3, xs: 2}} variant={"h3"}>
                            <Trans i18nKey={`${translationKey}.title1`}
                                   components={{span: <span style={{color: theme.palette.primary.main}}>Goal</span>}}/>
                         </Typography>
                         <Typography pb={{lg: 3, xs: 2}} width={"80%"}
                                     variant={"subtitle2"}>{t(`${translationKey}.subtitle`)}</Typography>
                         <Divider/>
                         <img className="aboutSection5Img" src={TeamImg} alt="team"/>
                      </div>
                      <Divider orientation={"vertical"} flexItem/>
                   </FlexBox>
                </Grid>
                <Grid item xs={6}>
                   <Typography mb={{lg: 3, xs: 2}} variant={"h3"}>
                      <Trans i18nKey={`${translationKey}.title2`}
                             components={{span: <span style={{color: theme.palette.primary.main}}>Objectives</span>}}/>
                   </Typography>

                   {objectives.map((el, ind) => (
                       <Typography className={"aboutSection5Objectives"} variant={"subtitle1"}
                                   key={ind}>{el}</Typography>
                   ))}
                </Grid>
             </Grid>
          </OrionContainer>
       </StyledSection>
   );
};

export default AboutSection5;