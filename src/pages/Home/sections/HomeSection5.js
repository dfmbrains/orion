import React, {useState} from 'react';
import {Box, Button, ButtonGroup, Icon, IconButton, styled, Typography, useTheme} from "@mui/material";
import ReviewsBg from '../../../assets/images/backgrounds/reviews.png';
import OrionContainer from "../../../components/OrionContainer";
import {useNavigate} from "react-router-dom";
import {anchorLinkHandler} from "../../../helpers/utils";
import {useTranslation} from "react-i18next";
import {useRecoilState} from "recoil";
import {reviewsRecoil} from "../../../recoil";
import {Styled50vhLoadingBox} from "../../../components/StyledComponents";
import MatxLoading from "../../../components/MatxLoading";

const StyledSection = styled('section')(({theme}) => ({
   padding: "80px 0",
   background: `url(${ReviewsBg})`,
   backgroundPosition: "center",
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",
   [theme.breakpoints.down("lg")]: {padding: "60px 0"},
   [theme.breakpoints.down("md")]: {padding: "50px 0"},
   [theme.breakpoints.down("sm")]: {padding: "50px 0 40px"},

   "& .MuiTypography-root": {
      color: "#FFFFFF"
   },
   "& h5": {
      fontWeight: "500",
      width: "50%",
      [theme.breakpoints.down("md")]: {width: "100%"},
   }
}));

const HomeSection5 = () => {
   const translationKey = 'home.section5'
   const {t} = useTranslation()

   const theme = useTheme()
   const navigate = useNavigate()

   const [counter, setCounter] = useState(0)
   const [reviews] = useRecoilState(reviewsRecoil)

   const navigateToClientsTestimonials = async () => {
      await navigate('/clients-&-partners')
      await anchorLinkHandler('testimonialsSection')
   }
   console.log(reviews)
   return (
       <StyledSection>
          <OrionContainer>
             <Typography variant={"h3"}>{t(`${translationKey}.title`)}</Typography>

             {reviews && reviews?.length > 0
                 ? <>
                    <Typography my={{lg: 2, xs: 1}} variant={"h5"}>{reviews[counter].text}</Typography>
                    <Typography variant={"subtitle2"}>{reviews[counter].name}</Typography>
                    <Typography variant={"h5"}>{reviews[counter].company}</Typography>

                    {reviews.length > 1 && (
                        <Box mt={{lg: 3, sm: 2, xs: 1}}>
                           <ButtonGroup>
                              {reviews.slice(0, 3).map((el, ind) => (
                                  <IconButton sx={{color: counter === el ? theme.palette.primary.main : '#D6D6D6'}}
                                              key={el.id} size={"small"} onClick={() => setCounter(ind)}
                                  >
                                     <Icon sx={{fontSize: "12px"}}>fiber_manual_record</Icon>
                                  </IconButton>
                              ))}
                           </ButtonGroup>
                        </Box>
                    )}

                    <Button onClick={navigateToClientsTestimonials} sx={{mt: {lg: 5, md: 4, sm: 3, xs: 2}}}
                            variant={"contained"}
                            color={"secondary"}>
                       {t('buttons.readOthers')}
                    </Button>
                 </>
                 : <Styled50vhLoadingBox>
                    <MatxLoading/>
                 </Styled50vhLoadingBox>
             }
          </OrionContainer>
       </StyledSection>
   );
};

export default HomeSection5;