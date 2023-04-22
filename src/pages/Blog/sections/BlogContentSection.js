import React from 'react';
import {styled} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import PostCard from "../../../components/PostCard";
import {FlexBox} from "../../../components/FlexBox";
import {useRecoilState} from "recoil";
import {blogRecoil} from "../../../recoil";
import MatxLoading from "../../../components/MatxLoading";

const StyledSection = styled('section')(() => ({
   padding: "100px 0 80px",
   position: "relative"
}));

const StyledFlexBox = styled(FlexBox)(() => ({
   gap: '80px 60px',
   flexWrap: "wrap",

   "& .postCard": {
      width: "calc(100% / 3 - 40px * 2 / 3)"
   },
   "& .postCardImg": {
      height: "270px"
   }
}));

const BlogContentSection = () => {
   const [blogList] = useRecoilState(blogRecoil)

   return (
       <StyledSection>
          {blogList
              ? <OrionContainer>
                 <StyledFlexBox>
                    {blogList.map(((el, ind) => (
                        <PostCard key={ind} post={el}/>
                    )))}
                 </StyledFlexBox>
              </OrionContainer>
              : <MatxLoading/>
          }
       </StyledSection>
   );
};

export default BlogContentSection;