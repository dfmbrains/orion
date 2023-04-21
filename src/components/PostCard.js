import React from 'react';
import {Button, styled, Typography} from "@mui/material";
import Blog from '../assets/images/blog1.png';
import {FlexGap10} from "./FlexBox";
import {StyledResponsiveImageBox} from "./StyledComponents";
import {useNavigate} from "react-router-dom";
import {handleScrollToTop} from "../helpers/utils";

const StyledBox = styled('div')(() => ({
   paddingLeft: "15px",
   borderLeft: "1px solid #A6A6A6"
}));

const PostCard = ({post}) => {
   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

   const navigate = useNavigate()

   const date = new Date(post.created.toDate())

   return (
       <div className="postCard">
          <StyledResponsiveImageBox className="postCardImg">
             <img src={Blog} alt="blog1"/>
          </StyledResponsiveImageBox>
          <FlexGap10 mt={3} sx={{alignItems: "flex-start"}}>
             <div>
                <Typography variant={"h2"} component={"h5"}>{date.getDate()}</Typography>
                <Typography variant={"subtitle1"}>{months[date.getMonth()]}</Typography>
                <Typography variant={"subtitle1"}>{date.getFullYear()}</Typography>
             </div>
             <StyledBox>
                {/*<Typography variant={"body1"} color={"#9EADB4"}>Transportation</Typography>*/}
                <Typography variant={"h5"} fontWeight={"400"} mb={1.5}>{post.title}</Typography>
                <Typography variant={"subtitle2"} color={"##6C6C6C"} mb={3}>{post.subtitle}</Typography>

                <Button onClick={() => {
                   handleScrollToTop()
                   navigate(`/blog/${post.id}`)
                }} color={"primary"} variant={"contained"}>Read More</Button>
             </StyledBox>
          </FlexGap10>
       </div>
   );
};

export default PostCard;