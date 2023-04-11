import React from 'react';
import {Button, styled, Typography} from "@mui/material";
import Blog from '../assets/images/blog1.png';
import {FlexGap10} from "./FlexBox";
import {StyledResponsiveImageBox} from "./StyledComponents";

const StyledBox = styled('div')(() => ({
   paddingLeft: "15px",
   borderLeft: "1px solid #A6A6A6"
}));

const PostCard = () => {
   return (
       <div className="postCard">
          <StyledResponsiveImageBox className="postCardImg">
             <img src={Blog} alt="blog1"/>
          </StyledResponsiveImageBox>
          <FlexGap10 mt={3} sx={{alignItems: "flex-start"}}>
             <div>
                <Typography variant={"h2"} component={"h5"}>01</Typography>
                <Typography variant={"subtitle1"}>Dec</Typography>
             </div>
             <StyledBox>
                <Typography variant={"body1"} color={"#9EADB4"}>Transportation</Typography>
                <Typography variant={"h5"} fontWeight={"400"} mb={1.5}>Everything About Freight
                   Transportation</Typography>
                <Typography variant={"subtitle2"} color={"##6C6C6C"} mb={3}>International Rail Freight: Everything you
                   need to know about Rail Freight</Typography>

                <Button color={"primary"} variant={"contained"}>Read More</Button>
             </StyledBox>
          </FlexGap10>
       </div>
   );
};

export default PostCard;