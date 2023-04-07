import React from 'react';
import LogoWhite from '../assets/images/companies/logoWhite.png';
import {styled} from "@mui/material";

const StyledImg = styled('img')(() => ({width: 196}));

export const Logo = () => <StyledImg src={LogoWhite} alt="Orion Trans"/>