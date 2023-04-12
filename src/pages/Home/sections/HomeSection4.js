import React, {useState} from 'react';
import {Button, ButtonGroup, Divider, Grid, Icon, IconButton, styled, Typography, useTheme} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import ProvisionImg from '../../../assets/images/provision.png';
import {Link} from "react-router-dom";

const StyledSection = styled('section')(() => ({
   padding: "100px 0",

   "& .provisionImg": {
      width: "100%"
   }
}));

const HomeSection4 = () => {
   const theme = useTheme()

   const data = [
      {
         title: 'Provision of Rolling Stock',
         subtitle: 'We offer services on provision of rolling stock according to the customer request. Our Logistics Specialists will assign a right rolling stock specifically to your cargo.',
         img: ProvisionImg
      },
      {
         title: 'Provision of Rolling Stock 2',
         subtitle: 'We offer services on provision of rolling stock according to the customer request. Our Logistics Specialists will assign a right rolling stock specifically to your cargo.',
         img: ProvisionImg
      }
   ]

   const [counter, setCounter] = useState(0)


   return (
       <StyledSection>
          <OrionContainer>
             <Grid container spacing={8}>
                <Grid item xs={5}>
                   <Typography mb={3} pr={6} variant={"h2"}>{data[counter].title}</Typography>
                   <Typography mb={3} pr={6} variant={"subtitle2"}>{data[counter].subtitle}</Typography>

                   <Divider/>

                   <Link to={"/services"}>
                      <Button variant={"contained"} color={"primary"} sx={{mt: 5, mb: 3, width: "60%"}} size={"large"}>Our
                         Services </Button>
                   </Link>

                   <br/>

                   <ButtonGroup>
                      {Array.from(Array(data.length).keys()).map(el => (
                          <IconButton sx={{color: counter === el ? theme.palette.primary.main : '#D6D6D6'}}
                                      key={el} size={"small"} onClick={() => setCounter(el)}
                          >
                             <Icon sx={{fontSize: "12px"}}>fiber_manual_record</Icon>
                          </IconButton>
                      ))}
                   </ButtonGroup>
                </Grid>

                <Divider flexItem orientation={"vertical"}/>

                <Grid item xs={6}>
                   <img src={data[counter].img} alt="provision" className="provisionImg"/>
                </Grid>
             </Grid>
          </OrionContainer>
       </StyledSection>
   );
};

export default HomeSection4;