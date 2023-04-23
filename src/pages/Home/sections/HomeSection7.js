import React from 'react';
import {Grid, styled, Typography} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import PostCard from "../../../components/PostCard";
import {useRecoilState} from "recoil";
import {blogRecoil} from "../../../recoil";
import MatxLoading from "../../../components/MatxLoading";
import {Styled50vhLoadingBox} from "../../../components/StyledComponents";
import {useTranslation} from "react-i18next";

const StyledSection = styled('section')(() => ({
   padding: "45px 0 90px",
   position: "relative"
}));

const StyledGridItem = styled(Grid)(() => ({
   padding: "45px 0 90px",

   "& .postCardImg": {
      height: "270px"
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
                 <Typography variant={"h2"} mb={5}>{t(`${translationKey}.title`)}</Typography>

                 <Grid container spacing={5}>
                    {blogList.slice(0, 3).map((el, ind) => (
                        <StyledGridItem key={ind} item xs={4}>
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