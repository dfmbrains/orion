import React from 'react';
import {Grid, styled, Typography} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import PostCard from "../../../components/PostCard";

const StyledSection = styled('section')(() => ({
   padding: "45px 0 90px",
}));

const HomeSection8 = () => {
   return (
       <StyledSection>
          <OrionContainer>
             <Typography variant={"h2"} mb={5}>Latest blog posts</Typography>

             <Grid container spacing={5}>
                <Grid item xs={4}>
                   <PostCard/>
                </Grid>
                <Grid item xs={4}>
                   <PostCard/>
                </Grid>
                <Grid item xs={4}>
                   <PostCard/>
                </Grid>
             </Grid>
          </OrionContainer>
       </StyledSection>
   );
};

export default HomeSection8;