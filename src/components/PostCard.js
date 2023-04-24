import React from 'react';
import {Button, styled, Typography, useMediaQuery, useTheme} from "@mui/material";
import {FlexGap10} from "./FlexBox";
import {StyledResponsiveImageBox} from "./StyledComponents";
import {useNavigate} from "react-router-dom";
import {handleScrollToTop} from "../helpers/utils";
import {useRecoilState} from "recoil";
import {blogDetailsRecoil} from "../recoil";
import {useTranslation} from "react-i18next";

const StyledBox = styled('div')(({theme}) => ({
   paddingLeft: "15px",
   borderLeft: "1px solid #A6A6A6",
   [theme.breakpoints.down("md")]: {
      paddingLeft: "0",
      borderLeft: "none",
      paddingTop: "10px",
      borderTop: "1px solid #A6A6A6"
   },
}));

const PostCard = ({post}) => {
   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

   const {t} = useTranslation()
   const navigate = useNavigate()
   const theme = useTheme()

   const date = new Date(post.created.toDate())

   const [_, setBlog] = useRecoilState(blogDetailsRecoil)

   const isTablet = useMediaQuery(theme.breakpoints.down("md"));

   return (
       <div className="postCard">
          <StyledResponsiveImageBox className="postCardImg">
             <img src={post.images[0].file} alt={post.images[0].name}/>
          </StyledResponsiveImageBox>
          <FlexGap10 mt={{lg: 3, sm: 1}} sx={{alignItems: "flex-start", flexDirection: isTablet ? 'column' : "row"}}>
             {isTablet
                 ? <FlexGap10 sx={{alignItems: "flex-end"}}>
                    <Typography variant={"h2"} component={"h5"}>{date.getDate()}</Typography>
                    <Typography variant={"subtitle1"}>{months[date.getMonth()]}</Typography>
                    <Typography variant={"subtitle1"}>{date.getFullYear()}</Typography>
                 </FlexGap10>
                 : <div>
                    <Typography variant={"h2"} component={"h5"}>{date.getDate()}</Typography>
                    <Typography variant={"subtitle1"}>{months[date.getMonth()]}</Typography>
                    <Typography variant={"subtitle1"}>{date.getFullYear()}</Typography>
                 </div>
             }
             <StyledBox>
                <Typography variant={"h5"} fontWeight={"400"} mb={{lg: 1.5, xs: 1}}>{post.title}</Typography>
                <Typography variant={"subtitle2"} color={"##6C6C6C"} mb={{lg: 3, xs: 2}}>{post.subtitle}</Typography>

                <Button onClick={() => {
                   setBlog(post)
                   handleScrollToTop()
                   navigate(`/blog/${post.id}`)
                }} color={"primary"} variant={"contained"}
                        size={isTablet ? "small" : "medium"}>{t('buttons.readMore')}</Button>
             </StyledBox>
          </FlexGap10>
       </div>
   );
};

export default PostCard;