import React, {useState} from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import {Grid, TextField} from "@mui/material";
import {useSnackbar} from "notistack";
import emailjs from "@emailjs/browser";
import {EMAIL_JS_PUBLIC_KEY, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID_FOR_EMAIL} from "../../../helpers/constants";
import {LoadingButton} from "@mui/lab";

const initialValues = {
   name: '',
   email: '',
   website: '',
   phoneNumber: '',
   message: ''
}

const ContactForm = () => {
   const validationSchema = Yup.object().shape({
      name: Yup.string()
          .required("Name is required!"),
      phoneNumber: Yup.string()
          .required("Phone number is required!"),
      email: Yup.string()
          .required("Email is required!"),
      message: Yup.string()
          .max(400, 'Maximum length exceeded')
   });

   const {enqueueSnackbar} = useSnackbar();

   const [loading, setLoading] = useState(false);

   const handleSubmitForm = (values) => {
      setLoading(true);

      emailjs
          .send(
              EMAIL_JS_SERVICE_ID,
              EMAIL_JS_TEMPLATE_ID_FOR_EMAIL,
              values,
              EMAIL_JS_PUBLIC_KEY
          )
          .then(
              () => {
                 setLoading(false);
                 enqueueSnackbar("Письмо отправлено", {variant: 'success'})
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
       <Formik onSubmit={handleSubmitForm}
               validateOnChange={false} validateOnBlur={false}
               validationSchema={validationSchema}
               initialValues={initialValues}
       >
          {({values, errors, touched, handleChange, handleSubmit}) => {
             return (
                 <form onSubmit={handleSubmit}>
                    <Grid container spacing={6} justifyContent={"space-between"} alignItems={"center"}>
                       <Grid item xs={6}>
                          <TextField
                              fullWidth
                              type="text"
                              name="name"
                              label="Name"
                              variant="standard"
                              value={values.name}
                              onChange={handleChange}
                              helperText={touched.name && errors.name}
                              error={Boolean(errors.name && touched.name)}
                          />
                       </Grid>
                       <Grid item xs={6}>
                          <TextField
                              fullWidth
                              type="text"
                              name="email"
                              label="Email"
                              variant="standard"
                              value={values.email}
                              onChange={handleChange}
                              helperText={touched.email && errors.email}
                              error={Boolean(errors.email && touched.email)}
                          />
                       </Grid>
                       <Grid item xs={6}>
                          <TextField
                              fullWidth
                              type="text"
                              name="website"
                              label="Company Website"
                              variant="standard"
                              value={values.website}
                              onChange={handleChange}
                              helperText={touched.website && errors.website}
                              error={Boolean(errors.website && touched.website)}
                          />
                       </Grid>
                       <Grid item xs={6}>
                          <TextField
                              fullWidth
                              type="text"
                              name="phoneNumber"
                              label="Phone Number"
                              variant="standard"
                              value={values.phoneNumber}
                              onChange={handleChange}
                              helperText={touched.phoneNumber && errors.phoneNumber}
                              error={Boolean(errors.phoneNumber && touched.phoneNumber)}
                          />
                       </Grid>
                       <Grid item xs={12}>
                          <TextField
                              multiline
                              minRows={5}
                              fullWidth
                              type="text"
                              name="message"
                              label="Message"
                              variant="standard"
                              value={values.message}
                              onChange={handleChange}
                              helperText={touched.message && errors.message}
                              error={Boolean(errors.message && touched.message)}
                          />
                       </Grid>
                    </Grid>

                    <LoadingButton sx={{mt: 7, mb: 1}} size={"large"} color={"primary"} variant={"contained"}
                                   fullWidth loading={loading} type={"submit"}>Send</LoadingButton>
                 </form>
             )
          }}
       </Formik>
   );
};

export default ContactForm;