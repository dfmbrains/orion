import React from 'react';
import {Grid, styled, Typography} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import {FlexGap10} from "../../../components/FlexBox";
import SocialMediaButtons from "../../../components/SocialMediaButtons";
import ContactForm from "../components/ContactForm";

const StyledSection = styled('section')(() => ({
   padding: "50px 0 120px",
   backgroundColor: "#F7F7F7"
}));

const StyledFlexGap10 = styled(FlexGap10)(() => ({
   columnGap: "20px",
   alignItems: "flex-start"
}));

const ContactContentSection = () => {
   return (
       <StyledSection>
          <OrionContainer>
             <Grid container spacing={8}>
                <Grid item xs={6}>
                   <Typography variant="h2">Get in touch with us</Typography>
                   <Typography mt={3} mb={6} variant="subtitle2">We are professional logistics specialists with a
                      passion for quality and efficiency. We believe in integrity, trust, and continuous improvement. We
                      promise to listen and provide You with reliable freight forwarding services over the
                      globe.</Typography>
                   <Typography variant="body1" color={"#9EADB4"}>Support Center 24 / 7</Typography>

                   <StyledFlexGap10 my={3}>
                      <a href="tel:+996707567676">
                         <Typography variant="h4" color="#1B1B1B">+996707567676</Typography>
                      </a>
                      <a href="tel:+996705006088">
                         <Typography variant="h4" color="#1B1B1B">+996705006088</Typography>
                      </a>
                   </StyledFlexGap10>

                   <StyledFlexGap10 my={3}>
                      <div>
                         <Typography variant="body1" color={"#9EADB4"}>Our Location</Typography>
                         <Typography variant="subtitle2">Turusbekova 109/3, Maximum Business Center Bishkek,
                            Kyrgyzstan</Typography>
                      </div>
                      <div>
                         <Typography variant="body1" color={"#9EADB4"}>Write to us</Typography>
                         <a href="mailto:office.oriontrans@gmail.com">
                            <Typography variant="subtitle2" color="#1B1B1B">office.oriontrans@gmail.com</Typography>
                         </a>
                      </div>
                   </StyledFlexGap10>

                   <Typography variant="body1" color={"#9EADB4"}>We are on social media</Typography>
                   <SocialMediaButtons color={"info"}/>
                </Grid>
                <Grid item xs={6}>
                   <ContactForm/>
                </Grid>
             </Grid>
          </OrionContainer>
       </StyledSection>
   );
};

export default ContactContentSection;