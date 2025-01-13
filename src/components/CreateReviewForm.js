import emailjs from '@emailjs/browser';
import { LoadingButton } from '@mui/lab';
import { Grid, TextField } from '@mui/material';
import ReCAPTCHAComponent from 'components/ReCAPTCHA';
import { Formik } from 'formik';
import {
  EMAIL_JS_PUBLIC_KEY,
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID_FOR_REVIEW,
} from 'helpers/constants';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  company: '',
  email: '',
  text: '',
};

const ContactForm = ({ translationKey }) => {
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t(`${translationKey}.errors.nameRequired`)),
    email: Yup.string().required(t(`${translationKey}.errors.emailRequired`)),
    text: Yup.string()
      .required(t(`${translationKey}.errors.messageRequired`))
      .max(400, t(`${translationKey}.errors.messageMaxLength`)),
  });

  const { enqueueSnackbar } = useSnackbar();

  const [loading, setLoading] = useState(false);
  const [CAPTCHAResult, setCAPTCHAResult] = useState(null);

  const handleSubmitForm = async values => {
    if (!CAPTCHAResult) {
      enqueueSnackbar(t('snackbarTexts.robot'), { variant: 'warning' });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID_FOR_REVIEW,
        {
          ...values,
          'g-recaptcha-response': CAPTCHAResult,
        },
        EMAIL_JS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          enqueueSnackbar(t('snackbarTexts.review'), { variant: 'success' });

          setCAPTCHAResult(null);
        },
        error => {
          setLoading(false);
          console.error(error);

          enqueueSnackbar(t('snackbarTexts.error'), { variant: 'error' });
        },
      )
      .catch(error => {
        setLoading(false);
        console.error(error);

        enqueueSnackbar(t('snackbarTexts.error'), { variant: 'error' });
      });
  };

  return (
    <Formik
      onSubmit={handleSubmitForm}
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={validationSchema}
      initialValues={initialValues}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={6}
              justifyContent={'space-between'}
              alignItems="center"
            >
              <Grid item md={4} xs={12}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  name="name"
                  label={t(`${translationKey}.placeholders.name`)}
                  variant="standard"
                  value={values.name}
                  onChange={handleChange}
                  helperText={touched.name && errors.name}
                  error={Boolean(errors.name && touched.name)}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  fullWidth
                  type="text"
                  name="company"
                  label={t(`${translationKey}.placeholders.company`)}
                  variant="standard"
                  value={values.company}
                  onChange={handleChange}
                  helperText={touched.company && errors.company}
                  error={Boolean(errors.company && touched.company)}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  name="email"
                  label={t(`${translationKey}.placeholders.email`)}
                  variant="standard"
                  value={values.email}
                  onChange={handleChange}
                  helperText={touched.email && errors.email}
                  error={Boolean(errors.email && touched.email)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  multiline
                  minRows={5}
                  fullWidth
                  type="text"
                  name="text"
                  label={t(`${translationKey}.placeholders.review`)}
                  variant="standard"
                  value={values.text}
                  onChange={handleChange}
                  helperText={touched.text && errors.text}
                  error={Boolean(errors.text && touched.text)}
                />
              </Grid>
            </Grid>

            <LoadingButton
              sx={{ mt: 7, mb: 1 }}
              fullWidth
              size="large"
              type="submit"
              color="primary"
              loading={loading}
              variant="contained"
              disabled={!CAPTCHAResult}
            >
              {t('buttons.send')}
            </LoadingButton>

            <ReCAPTCHAComponent setResult={setCAPTCHAResult} />
          </form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
