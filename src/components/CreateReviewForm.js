import React, {useState} from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import {Grid, TextField} from "@mui/material";
import {useSnackbar} from "notistack";
import {LoadingButton} from "@mui/lab";
import {v4 as uuidv4} from "uuid";
import {createCollectionDocument} from "../firebase/firestoreFirebase";
import {reviewsFirebasePath} from "../helpers/constants";

const initialValues = {
   name: '',
   company: '',
   text: ''
}

const ContactForm = () => {
   const validationSchema = Yup.object().shape({
      name: Yup.string()
          .required("Обязательно напишите ваше имя"),
      text: Yup.string()
          .max(400, 'Maximum length exceeded')
          .required("Обязательно напишите отзыв")
   });

   const {enqueueSnackbar} = useSnackbar();

   const [loading, setLoading] = useState(false);

   const handleSubmitForm = async (values) => {
      setLoading(true);

      try {
         await createCollectionDocument(reviewsFirebasePath, {
            ...values,
            id: uuidv4(),
            created: new Date(),
            status: false
         })
         enqueueSnackbar("Отзыв отправлен!", {variant: "success"});
      } catch (e) {
         enqueueSnackbar("Произошла ошибка", {variant: "error"});
         console.log(e)
      }
      setLoading(false)
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
                              name="company"
                              label="Ваша компания"
                              variant="standard"
                              value={values.company}
                              onChange={handleChange}
                              helperText={touched.company && errors.company}
                              error={Boolean(errors.company && touched.company)}
                          />
                       </Grid>
                       <Grid item xs={12}>
                          <TextField
                              multiline
                              minRows={5}
                              fullWidth
                              type="text"
                              name="text"
                              label="Отзыв"
                              variant="standard"
                              value={values.text}
                              onChange={handleChange}
                              helperText={touched.text && errors.text}
                              error={Boolean(errors.text && touched.text)}
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