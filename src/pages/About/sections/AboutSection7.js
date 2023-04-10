import React from 'react';
import {styled, Typography} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import {FlexBox} from "../../../components/FlexBox";
import FeatureCard from "../../../components/FeatureCard";

const StyledSection = styled('section')(() => ({
   padding: "80px 0",
   backgroundColor: "#F7F7F7",
}));

const StyledFlexBox = styled(FlexBox)(() => ({
   justifyContent: "space-between",
   alignItems: "flex-start",
   flexWrap: "wrap",
   rowGap: "40px",

   "& .featureCard": {
      width: "calc(100% / 3 - 80px * 2 / 3)"
   }
}));

const AboutSection7 = () => {
   const cards = [
      {
         title: 'Cost Effective Solutions',
         subtitle: 'Competitive and cost-effective rail tariffs amongst freight-forwarding organizations.',
         icon: 'credit_score'
      },
      {
         title: 'Quick Response',
         subtitle: 'Our team processes service requests in less than 10 minutes',
         icon: 'quickreply'
      },
      {
         title: 'Professional Specialists',
         subtitle: 'Orion-Trans has a high-qualified logistics specialists with more than 8 - 10 years of experience in providing freight-forwarding services.',
         icon: 'badge'
      },
      {
         title: 'We Are With You 24/7',
         subtitle: 'Quick response from our logistics specialists on any issue - 24/7',
         icon: 'support_agent'
      },
      {
         title: 'Efficiency',
         subtitle: 'Our team’s professionalism will ensure a fast and reliable transport organization.',
         icon: 'group_work'
      },
      {
         title: 'Direct Agreements With Railways',
         subtitle: 'We cooperate directly with railways of Kyrgyz Republic and the official railways representatives of Kazakhstan, Uzbekistan, Tadjikistan, Turkmenistan, Russia, Afghanistan and Iran.',
         icon: 'gavel'
      }
   ]

   return (
       <StyledSection>
          <OrionContainer>
             <Typography mb={10} variant={"h2"} textAlign={"center"}>Our Benefits</Typography>

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

export default AboutSection7;