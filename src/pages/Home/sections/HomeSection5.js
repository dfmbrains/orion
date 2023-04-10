import React from 'react';
import {styled} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import FeatureCard from "../../../components/FeatureCard";
import {FlexBox} from "../../../components/FlexBox";

const StyledSection = styled('section')(() => ({
   padding: "100px 0",
   backgroundColor: "#F7F7F7"
}));

const StyledFlexBox = styled(FlexBox)(() => ({
   justifyContent: "space-between",
   alignItems: "flex-start",

   "& .featureCard": {
      width: "calc(100% / 4 - 60px * 3 / 4)"
   }
}));

const HomeSection5 = () => {
   const cards = [
      {
         title: 'Cost Effective Solutions',
         subtitle: 'You will get our safe rail forwarding services at a minimum cost compared to our competitors',
         icon: 'credit_score'
      },
      {
         title: 'Trusted Partners',
         subtitle: 'We have a direct agreement with the railways of CIS countries, and we work with the official representatives of the other countries Railways',
         icon: 'health_and_safety'
      },
      {
         title: 'Just In Time Shipments',
         subtitle: 'You will achieve your desired shipment times with our rail freight services',
         icon: 'access_time'
      },
      {
         title: 'Financial Protection',
         subtitle: 'Opportunity of the Rail rates payment, when there is a long-term engagement',
         icon: 'monetization_on'
      }
   ]

   return (
       <StyledSection>
          <OrionContainer>
             <StyledFlexBox>
                {cards.map((el, idx) => (
                    <React.Fragment key={idx}>
                       <FeatureCard data={el}/>
                    </React.Fragment>
                ))}
             </StyledFlexBox>
          </OrionContainer>
       </StyledSection>
   );
};

export default HomeSection5;