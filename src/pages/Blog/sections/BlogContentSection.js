import React from 'react';
import {styled, Pagination} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import PostCard from "../../../components/PostCard";
import {FlexBox} from "../../../components/FlexBox";

const StyledSection = styled('section')(() => ({
   padding: "100px 0 80px"
}));

const StyledFlexBox = styled(FlexBox)(() => ({
   gap: '80px 40px',
   flexWrap: "wrap",

   "& .postCard": {
      width: "calc(100% / 3 - 40px * 2 / 3)"
   },
   "& .postCardImg": {
      height: "270px"
   }
}));

const StyledFlexEnd = styled(FlexBox)(() => ({
   justifyContent: "flex-end",
   margin: "60px 0 0"
}));

const BlogContentSection = () => {
   return (
       <StyledSection>
          <OrionContainer>
             <StyledFlexBox>
                {Array.from(Array(9).keys()).map((el => (
                    <PostCard key={el}/>
                )))}
             </StyledFlexBox>

             <StyledFlexEnd>
                <Pagination count={3} color="primary"/>
             </StyledFlexEnd>
          </OrionContainer>
       </StyledSection>
   );
};

export default BlogContentSection;