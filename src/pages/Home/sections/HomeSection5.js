import React, {useState} from 'react';
import {Button, ButtonGroup, Icon, IconButton, styled, Typography, useTheme} from "@mui/material";
import ReviewsBg from '../../../assets/images/backgrounds/reviews.png';
import OrionContainer from "../../../components/OrionContainer";
import GreenLightsLogo from '../../../assets/images/companies/greenlights.png';
import {FlexAllCenter, FlexGap10} from "../../../components/FlexBox";

const StyledSection = styled('section')(() => ({
   padding: "80px 0",
   background: `url(${ReviewsBg})`,
   backgroundPosition: "center",
   backgroundSize: "cover",
   backgroundRepeat: "no-repeat",

   "& .MuiTypography-root": {
      color: "#FFFFFF"
   },
   "& h5": {
      fontWeight: "500",
      width: "50%"
   }
}));

const StyledImageBox = styled(FlexAllCenter)(() => ({
   backgroundColor: "#FFFFFF",
   borderRadius: "50%",
   overflow: "hidden",
   width: "100px",
   height: "100px",

   "& img": {
      width: "90%",
   }
}));

const HomeSection5 = () => {
   const data = [
      {
         text: '“We highly appreciate our well-established partner relationships and our mutual understanding with your company. We would like to highlight the professionalism level of your specialists and are grateful for your timeliness in all issues.”',
         company: 'Greenlights LLP',
         logo: GreenLightsLogo
      },
      {
         text: '“We highly appreciate our well-established partner relationships and our mutual understanding with your company. We would like to highlight the professionalism level of your specialists and are grateful for your timeliness in all issues.”',
         company: 'Greenlights LLP 2',
         logo: GreenLightsLogo
      }
   ]

   const theme = useTheme()

   const [counter, setCounter] = useState(0)

   return (
       <StyledSection>
          <OrionContainer>
             <Typography mt={5} variant={"h3"}>Our Clients Say</Typography>

             <Typography my={4} variant={"h5"}>{data[counter].text}</Typography>
             <FlexGap10 mb={3}>
                <StyledImageBox>
                   <img src={data[counter].logo} alt={data[counter].company}/>
                </StyledImageBox>
                <div>
                   <Typography color={'secodanry'} variant={"body1"}>Satisfied Client</Typography>
                   <Typography color={'secodanry'} variant={"h5"}>{data[counter].company}</Typography>
                </div>
             </FlexGap10>

             <ButtonGroup>
                {Array.from(Array(data.length).keys()).map(el => (
                    <IconButton sx={{color: counter === el ? theme.palette.primary.main : '#D6D6D6'}}
                                key={el} size={"small"} onClick={() => setCounter(el)}
                    >
                       <Icon sx={{fontSize: "12px"}}>fiber_manual_record</Icon>
                    </IconButton>
                ))}
             </ButtonGroup>

             <br/>

             <Button sx={{mt: 4}} variant={"contained"} color={"secondary"}>Read Others</Button>
          </OrionContainer>
       </StyledSection>
   );
};

export default HomeSection5;