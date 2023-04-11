import React from 'react';
import OrionContainer from "../../../components/OrionContainer";
import {styled, Typography, useTheme} from "@mui/material";
import {FlexBox} from "../../../components/FlexBox";
import FeatureCard from "../../../components/FeatureCard";

const StyledSection = styled('section')(() => ({
   padding: "80px 0",
   backgroundColor: "#F7F7F7"
}));

const StyledFlexBox = styled(FlexBox)(() => ({
   width: "80%",
   margin: "0 auto",
   alignItems: "flex-start",
   gap: "80px 60px",
   flexWrap: "wrap",
   "& .featureCard": {
      width: "calc(100% / 3 - 60px * 2 / 3)"
   }
}));

const ServiceSection2 = () => {
   const theme = useTheme()

   const cardsData = [
      {
         title: "Logistics Companies",
         subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         icon: 'business'
      },
      {
         title: "Construction Companies",
         subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         icon: 'construction'
      },
      {
         title: "Industrial And Manufacturing Enterprises",
         subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         icon: 'work_outline'
      },
      {
         title: "Individual Entrepreneurs",
         subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         icon: 'hail'
      },
      {
         title: "Importers And Exporters",
         subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         icon: 'local_shipping'
      },
      {
         title: "Car Shippers",
         subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         icon: 'directions_car'
      }
   ]

   return (
       <StyledSection>
          <OrionContainer>
             <Typography variant={"h3"} mb={8} textAlign={"center"}>For whom are our <span
                 style={{color: theme.palette.primary.main}}>services?</span></Typography>

             <StyledFlexBox>
                {cardsData.map((el, idx) => (
                    <FeatureCard data={el} key={idx}/>
                ))}
             </StyledFlexBox>
          </OrionContainer>
       </StyledSection>
   );
};

export default ServiceSection2;