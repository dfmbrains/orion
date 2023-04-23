import React from 'react';
import {Grid, styled, Tab, Tabs, Typography} from "@mui/material";
import OrionContainer from "../../../components/OrionContainer";
import {FlexBox, FlexGap10} from "../../../components/FlexBox";
import SocialMediaButtons from "../../../components/SocialMediaButtons";
import ContactForm from "../components/ContactForm";
import {useRecoilState} from "recoil";
import {companyRecoil} from "../../../recoil";
import {Styled50vhLoadingBox} from "../../../components/StyledComponents";
import MatxLoading from "../../../components/MatxLoading";
import CreateReviewForm from "../../../components/CreateReviewForm";
import {useSearchParams} from "react-router-dom";

const StyledSection = styled('section')(() => ({
   padding: "50px 0 120px",
   backgroundColor: "#F7F7F7"
}));

const StyledFlexGap10 = styled(FlexGap10)(() => ({
   columnGap: "20px",
   alignItems: "flex-start"
}));

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   };
}

const ContactContentSection = () => {
   const [company] = useRecoilState(companyRecoil)

   const [formVariant, setFormVariant] = useSearchParams();

   const handleChange = (event, newValue) => setFormVariant({form: newValue})

   return (
       <StyledSection id="getInTouch">
          <OrionContainer>
             {company
                 ? <Grid container spacing={8}>
                    <Grid item xs={6}>
                       <Typography variant="h2">Get in touch with us</Typography>
                       <Typography mt={3} mb={6} variant="subtitle2">We are professional logistics specialists with a
                          passion for quality and efficiency. We believe in integrity, trust, and continuous
                          improvement. We promise to listen and provide You with reliable freight forwarding services
                          over the globe.</Typography>
                       <Typography variant="body1" color={"#9EADB4"}>Support Center 24 / 7</Typography>

                       <StyledFlexGap10 my={3}>
                          <a href={`tel:${company.about.phoneNumber1}`}>
                             <Typography variant="h4" color="#1B1B1B">{company.about.phoneNumber1}</Typography>
                          </a>
                          <a href={`tel:${company.about.phoneNumber2}`}>
                             <Typography variant="h4" color="#1B1B1B">{company.about.phoneNumber2}</Typography>
                          </a>
                       </StyledFlexGap10>

                       <StyledFlexGap10 my={3}>
                          <div>
                             <Typography variant="body1" color={"#9EADB4"}>Our Location</Typography>
                             <Typography variant="subtitle2">{company.about.address}</Typography>
                          </div>
                          <div>
                             <Typography variant="body1" color={"#9EADB4"}>Write to us</Typography>
                             <a href="mailto:office.oriontrans@gmail.com">
                                <Typography variant="subtitle2" color="#1B1B1B">{company.about.email}</Typography>
                             </a>
                          </div>
                       </StyledFlexGap10>

                       <Typography variant="body1" color={"#9EADB4"}>We are on social media</Typography>
                       <SocialMediaButtons color={"info"}/>
                    </Grid>
                    <Grid item xs={6}>
                       <FlexBox sx={{justifyContent: "flex-end"}}>
                          <Tabs sx={{mb: 3}} value={+formVariant.get('form')} onChange={handleChange}>
                             <Tab label="Contact" {...a11yProps(0)} />
                             <Tab label="Leave a review" {...a11yProps(1)} />
                          </Tabs>
                       </FlexBox>

                       {+formVariant.get('form') === 0
                           ? <ContactForm/>
                           : <CreateReviewForm/>
                       }
                    </Grid>
                 </Grid>
                 : <Styled50vhLoadingBox>
                    <MatxLoading/>
                 </Styled50vhLoadingBox>
             }
          </OrionContainer>
       </StyledSection>
   );
};

export default ContactContentSection;