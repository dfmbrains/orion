import React, {useState} from 'react';
import {Formik} from "formik";
import {Grid, Icon, styled, TextField, Typography} from "@mui/material";
import {FlexBox} from "../../../components/FlexBox";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import {
   EMAIL_JS_PUBLIC_KEY,
   EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID_FOR_EMAIL,
} from "../../../utils/constants";
import {LoadingButton} from "@mui/lab";
import {useSnackbar} from "notistack";

const StyledIconBox = styled(FlexBox)(() => ({
   flexDirection: "column",
   alignItems: "center"
}));

const initialValues = {
   departureStation: '',
   destinationStation: '',
   etsngCode: '',
   gngCode: '',
   cargoWeight: '',
   numberOfWagons: '',
   name: '',
   typeOfWagon: '',
   phoneNumber: '',
   email: ''
}

const CalculateForm = () => {
   const validationSchema = Yup.object().shape({
      name: Yup.string()
          .required("Name is required!"),
      phoneNumber: Yup.string()
          .required("Phone number is required!"),
      email: Yup.string()
          .required("Email is required!")
   });

   const {enqueueSnackbar} = useSnackbar();

   const [loading, setLoading] = useState(false);

   const handleSubmitForm = (values) => {
      setLoading(true);
      console.log(values)

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
                    <Grid container rowSpacing={3} justifyContent={"space-between"} alignItems={"center"}>
                       <Grid item xs={5.5}>
                          <TextField
                              fullWidth
                              type="text"
                              name="departureStation"
                              label="Departure Station"
                              variant="outlined"
                              value={values.departureStation}
                              onChange={handleChange}
                              helperText={touched.departureStation && errors.departureStation}
                              error={Boolean(errors.departureStation && touched.departureStation)}
                          />
                       </Grid>
                       <Grid item xs={1}>
                          <StyledIconBox>
                             <Icon fontSize={"small"}>west</Icon>
                             <Icon fontSize={"small"}>east</Icon>
                          </StyledIconBox>
                       </Grid>
                       <Grid item xs={5.5}>
                          <TextField
                              fullWidth
                              type="text"
                              name="destinationStation"
                              label="Destination Station"
                              variant="outlined"
                              value={values.destinationStation}
                              onChange={handleChange}
                              helperText={touched.destinationStation && errors.destinationStation}
                              error={Boolean(errors.destinationStation && touched.destinationStation)}
                          />
                       </Grid>
                       <Grid item xs={5.5}>
                          <TextField
                              fullWidth
                              type="text"
                              name="etsngCode"
                              label="Cargo Name/ ETSNG Code"
                              variant="outlined"
                              value={values.etsngCode}
                              onChange={handleChange}
                              helperText={touched.etsngCode && errors.etsngCode}
                              error={Boolean(errors.etsngCode && touched.etsngCode)}
                          />
                       </Grid>
                       <Grid item xs={5.5}>
                          <TextField
                              fullWidth
                              type="text"
                              name="gngCode"
                              label="Cargo Name /GNG Code"
                              variant="outlined"
                              value={values.gngCode}
                              onChange={handleChange}
                              helperText={touched.gngCode && errors.gngCode}
                              error={Boolean(errors.gngCode && touched.gngCode)}
                          />
                       </Grid>
                       <Grid item xs={5.5}>
                          <TextField
                              fullWidth
                              type="text"
                              name="cargoWeight"
                              label="Cargo Weight"
                              variant="outlined"
                              value={values.cargoWeight}
                              onChange={handleChange}
                              helperText={touched.cargoWeight && errors.cargoWeight}
                              error={Boolean(errors.cargoWeight && touched.cargoWeight)}
                          />
                       </Grid>
                       <Grid item xs={5.5}>
                          <TextField
                              fullWidth
                              type="text"
                              name="numberOfWagons"
                              label="Number Of Wagons"
                              variant="outlined"
                              value={values.numberOfWagons}
                              onChange={handleChange}
                              helperText={touched.numberOfWagons && errors.numberOfWagons}
                              error={Boolean(errors.numberOfWagons && touched.numberOfWagons)}
                          />
                       </Grid>
                       <Grid item xs={5.5}>
                          <TextField
                              fullWidth
                              type="text"
                              name="name"
                              label="Your name"
                              variant="outlined"
                              value={values.name}
                              onChange={handleChange}
                              helperText={touched.name && errors.name}
                              error={Boolean(errors.name && touched.name)}
                          />
                       </Grid>
                       <Grid item xs={5.5}>
                          <TextField
                              fullWidth
                              type="text"
                              name="typeOfWagon"
                              label="Type Of Wagon"
                              variant="outlined"
                              value={values.typeOfWagon}
                              onChange={handleChange}
                              helperText={touched.typeOfWagon && errors.typeOfWagon}
                              error={Boolean(errors.typeOfWagon && touched.typeOfWagon)}
                          />
                       </Grid>
                       <Grid item xs={5.5}>
                          <TextField
                              fullWidth
                              type="text"
                              name="phoneNumber"
                              label="Your Phone Number"
                              variant="outlined"
                              value={values.phoneNumber}
                              onChange={handleChange}
                              helperText={touched.phoneNumber && errors.phoneNumber}
                              error={Boolean(errors.phoneNumber && touched.phoneNumber)}
                          />
                       </Grid>
                       <Grid item xs={5.5}>
                          <TextField
                              fullWidth
                              type="text"
                              name="email"
                              label="Your Email"
                              variant="outlined"
                              value={values.email}
                              onChange={handleChange}
                              helperText={touched.email && errors.email}
                              error={Boolean(errors.email && touched.email)}
                          />
                       </Grid>
                    </Grid>
                    <LoadingButton sx={{mt: 4, mb: 3}} size={"large"} variant={"contained"} color={"primary"}
                                   type={"submit"} fullWidth loading={loading}>Calculate</LoadingButton>
                    <Typography variant={"body1"} sx={{textAlign: "center", color: "#828282"}}>You Will Get Your
                       Transportation Cost Within 10 Minutes To Your Email</Typography>
                 </form>
             )
          }}
       </Formik>
   );
};

export default CalculateForm;