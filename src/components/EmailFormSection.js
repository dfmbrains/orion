import React, {useState} from 'react';
import {Button, styled, TextField, Typography} from "@mui/material";
import {FlexAllCenter, FlexGap10} from "./FlexBox";

const StyledSection = styled('section')(() => ({
   padding: "80px 0",
   backgroundColor: "#F7F7F7"
}));

const StyledBox = styled('section')(() => ({
   textAlign: "center"
}));

const EmailFormSection = () => {
   const [email, setEmail] = useState('')

   return (
       <StyledSection>
          <FlexAllCenter>
             <StyledBox>
                <Typography mb={1} variant={"h4"} color={"#1B1B1B"}>All the news straight to your inbox.</Typography>
                <Typography mb={6} variant={"h5"} color={"#8A8A8A"}>signup for Orion-Trans's weekly
                   newsletter.</Typography>

                <form>
                   <FlexGap10 sx={{justifyContent: "center"}}>
                      <TextField
                          fullWidth
                          size={"small"}
                          type="text"
                          name="email"
                          label="Your email "
                          variant="outlined"
                          value={email}
                          required={true}
                          onChange={(e) => setEmail(e.target.value)}
                      />

                      <Button variant={"contained"} color={"primary"} type={"submit"}>Subscribe</Button>
                   </FlexGap10>
                </form>
             </StyledBox>
          </FlexAllCenter>
       </StyledSection>
   );
};

export default EmailFormSection;