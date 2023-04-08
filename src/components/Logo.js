import React from 'react';
import LogoWhite from '../assets/images/companies/logoWhite.png';
import {styled} from "@mui/material";
import {Link} from "react-router-dom";

const StyledLink = styled(Link)(() => ({
   display: "flex"
}));
const StyledImg = styled('img')(() => ({width: 196}));

export const Logo = () => {
   return (
       <StyledLink to={"/"}>
          <StyledImg src={LogoWhite} alt="Orion Trans"/>
       </StyledLink>
   )
}