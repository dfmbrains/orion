import React, {useState} from 'react';
import {styled, TextField, Typography} from "@mui/material";
import {FlexAllCenter, FlexGap10} from "./FlexBox";
import {
   EMAIL_JS_PUBLIC_KEY,
   EMAIL_JS_SERVICE_ID,
   EMAIL_JS_TEMPLATE_ID_FOR_EMAIL
} from "../helpers/constants";
import emailjs from "@emailjs/browser";
import {LoadingButton} from "@mui/lab";
import {useSnackbar} from "notistack";

const StyledSection = styled('section')(() => ({
   padding: "80px 0",
   backgroundColor: "#F7F7F7"
}));

const StyledBox = styled('section')(() => ({
   textAlign: "center"
}));

const EmailFormSection = () => {
   const {enqueueSnackbar} = useSnackbar();

   const [email, setEmail] = useState('')
   const [loading, setLoading] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs
          .send(
              EMAIL_JS_SERVICE_ID,
              EMAIL_JS_TEMPLATE_ID_FOR_EMAIL,
              {
                 email: email
              },
              EMAIL_JS_PUBLIC_KEY
          )
          .then(
              () => {
                 setLoading(false);
                 enqueueSnackbar("Ваша почта отправлена", {variant: 'success'})

                 setEmail('');
              },
              (error) => {
                 setLoading(false);
                 console.error(error);

                 enqueueSnackbar("Попробуйте позже", {variant: 'error'})
              }
          )
          .catch((error) => {
             setLoading(false);
             console.error(error);

             enqueueSnackbar("Попробуйте позже", {variant: 'error'})
          })
   }

   return (
       <StyledSection>
          <FlexAllCenter>
             <StyledBox>
                <Typography mb={1} variant={"h4"} color={"#1B1B1B"}>All the news straight to your inbox.</Typography>
                <Typography mb={6} variant={"h5"} color={"#8A8A8A"}>signup for Orion-Trans's weekly
                   newsletter.</Typography>

                <form onSubmit={handleSubmit}>
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

                      <LoadingButton loading={loading} variant={"contained"} color={"primary"}
                                     type={"submit"}>Subscribe</LoadingButton>
                   </FlexGap10>
                </form>
             </StyledBox>
          </FlexAllCenter>
       </StyledSection>
   );
};

export default EmailFormSection;