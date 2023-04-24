import React from 'react';
import {Grid, styled, Typography} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import PostCard from "../../../components/PostCard";
import {useRecoilState} from "recoil";
import {blogRecoil} from "../../../recoil";
import MatxLoading from "../../../components/MatxLoading";
import {Styled50vhLoadingBox} from "../../../components/StyledComponents";
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(({theme}) => ({
   padding: "45px 0 90px",
   position: "relative",
   [theme.breakpoints.down("lg")]: {padding: "35px 0"},
}));

const StyledGridItem = styled(Grid)(({theme}) => ({
   padding: "45px 0 90px",

   "& .postCardImg": {
      height: "270px",
      [theme.breakpoints.down("lg")]: {height: "240px"},
   }
}));

const HomeSection7 = () => {
   const translationKey = 'home.section7'
   const {t} = useTranslation()

   const [blogList] = useRecoilState(blogRecoil)

   return (
       <StyledSection>
          {blogList
              ? <OrionContainer>
                 <Typography variant={"h2"} mb={{lg: 5, md: 4}}>{t(`${translationKey}.title`)}</Typography>

                 <Grid container spacing={5}>
                    {blogList.slice(0, 3).map((el, ind) => (
                        <StyledGridItem key={ind} item lg={4} sm={6}>
                           <PostCard post={el}/>
                        </StyledGridItem>
                    ))}
                 </Grid>
              </OrionContainer>
              : <Styled50vhLoadingBox>
                 <MatxLoading/>
              </Styled50vhLoadingBox>
          }
       </StyledSection>
   );
};

export default HomeSection7;