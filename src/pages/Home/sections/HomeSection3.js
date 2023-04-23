import React from 'react';
import OrionContainer from "../../../components/OrionContainer";
import {Card, Divider, styled, Typography} from "@mui/material";
import {FlexBox} from "../../../components/FlexBox";
import CalculateForm from "../components/CalculateForm";
import MapBg from '../../../assets/images/map.png';
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(() => ({
   padding: "0 0 120px",
   background: "#EEF8FF",
}));

const StyledContentBox = styled('div')(() => ({
   position: "relative",
   display: "flex",
   alignItems: "center",
   padding: "0 50px",
   width: "100%",

   "& .mapBg": {
      position: "absolute",
      left: "50%",
      transform: "translate(-50%)",
      top: 0,
      width: "100%",
      height: "100%",
      zIndex: "0"
   }
}));

const StyledCountryBox = styled(FlexBox)(() => ({
   alignItems: "center",
   flexWrap: "wrap",
   gap: "15px"
}));

const StyledCountryItem = styled('div')(() => ({
   background: "#e8f1fd",
   textAlign: "center",
   width: "calc(100% / 3 - 15px * 2 / 3)",
   padding: "15px",
   borderRadius: "15px"
}));

const StyledIntroBox = styled('div')(() => ({
   position: "relative",
   padding: "150px 0",
   zIndex: 1,
   width: "45%"
}));

const StyledCalculateCard = styled(Card)(() => ({
   position: "absolute",
   right: '5%',
   top: '50%',
   transform: "translate(0, -50%)",
   borderRadius: "15px",
   zIndex: 1,
   width: "40%"
}));

const StyledCalculateItem = styled('div')(() => ({
   paddingLeft: "32px",
   paddingRight: "32px"
}));

const HomeSection3 = () => {
   const translationKey = 'home.section3'
   const {t} = useTranslation()

   const countries = t('countries', {returnObjects: true}) || []

   return (
       <StyledSection id={"homeSection3"}>
          <OrionContainer>
             <StyledContentBox>
                <StyledIntroBox>
                   <Typography mb={3} variant={"h3"}>{t(`${translationKey}.title`)}</Typography>
                   <Typography mb={3} variant={"subtitle2"}>{t(`${translationKey}.subtitle`)}</Typography>
                   <Typography mb={2} variant={"subtitle2"}>{t(`${translationKey}.description`)}</Typography>

                   <StyledCountryBox sx={{flexWrap: "wrap"}}>
                      {countries.map((el, idx) => (
                          <StyledCountryItem key={idx}>
                             <Typography variant={"subtitle2"}>{el}</Typography>
                          </StyledCountryItem>
                      ))}
                   </StyledCountryBox>
                </StyledIntroBox>

                <StyledCalculateCard>
                   <StyledCalculateItem sx={{pt: 6, mb: 4}}>
                      <Typography variant={"h5"}>{t(`${translationKey}.calculation.title`)}</Typography>
                   </StyledCalculateItem>

                   <Divider color={"#F18200"}/>

                   <StyledCalculateItem sx={{pb: 6, mt: 4}}>
                      <CalculateForm translationKey={translationKey}/>
                   </StyledCalculateItem>
                </StyledCalculateCard>

                <img src={MapBg} alt="map" className="mapBg"/>
             </StyledContentBox>
          </OrionContainer>
       </StyledSection>
   )
       ;
};

export default HomeSection3;