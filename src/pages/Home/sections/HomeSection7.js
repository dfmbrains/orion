import React from 'react';
import {Grid, styled, Typography} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import PostCard from "../../../components/PostCard";

const StyledSection = styled('section')(() => ({
   padding: "45px 0 90px",
}));

const StyledGridItem = styled(Grid)(() => ({
   padding: "45px 0 90px",

   "& .postCardImg": {
      height: "270px"
   }
}));

const HomeSection7 = () => {
   return (
       <StyledSection>
          <OrionContainer>
             <Typography variant={"h2"} mb={5}>Latest blog posts</Typography>

             <Grid container spacing={5}>
                <StyledGridItem item xs={4}>
                   <PostCard/>
                </StyledGridItem>
                <StyledGridItem item xs={4}>
                   <PostCard/>
                </StyledGridItem>
                <StyledGridItem item xs={4}>
                   <PostCard/>
                </StyledGridItem>
             </Grid>
          </OrionContainer>
       </StyledSection>
   );
};

export default HomeSection7;