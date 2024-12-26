import emailjs from '@emailjs/browser';
import {
  Grid,
  Icon,
  styled,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import DefaultButton from 'components/DefaultButton';
import { FlexBox } from 'components/FlexBox';
import { Formik } from 'formik';
import {
  EMAIL_JS_PUBLIC_KEY,
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID_FOR_CALCULATION,
} from 'helpers/constants';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const StyledIconBox = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'center',
  '& .icon': {
    [theme.breakpoints.down('lg')]: { fontSize: '14px' },
  },
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
  email: '',
};

const CalculateForm = ({ translationKey }) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const theme = useTheme();

  const isLaptop = useMediaQuery(theme.breakpoints.down('lg'));

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('validation.requiredName')),
    phoneNumber: Yup.string().required(t('validation.requiredPhoneNumber')),
    email: Yup.string().required(t('validation.requiredEmail')),
  });

  const [loading, setLoading] = useState(false);

  const handleSubmitForm = values => {
    setLoading(true);

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID_FOR_CALCULATION,
        values,
        EMAIL_JS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          enqueueSnackbar(t('snackbarTexts.letter'), { variant: 'success' });
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
        const placeholdersKey = `${translationKey}.calculation.formPlaceholders`;
        return (
          <form onSubmit={handleSubmit}>
            <Grid
              container
              rowSpacing={{ sm: 3, xs: 2 }}
              justifyContent={'space-between'}
              alignItems="center"
            >
              <Grid item xs={5.5}>
                <TextField
                  size={isLaptop ? 'small' : 'medium'}
                  fullWidth
                  type="text"
                  name="departureStation"
                  label={t(`${placeholdersKey}.placeholder1`)}
                  variant="outlined"
                  value={values.departureStation}
                  onChange={handleChange}
                  helperText={
                    touched.departureStation && errors.departureStation
                  }
                  error={Boolean(
                    errors.departureStation && touched.departureStation,
                  )}
                />
              </Grid>
              <Grid item xs={1}>
                <StyledIconBox>
                  <Icon className="icon" fontSize="small">
                    west
                  </Icon>
                  <Icon className="icon" fontSize="small">
                    east
                  </Icon>
                </StyledIconBox>
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  size={isLaptop ? 'small' : 'medium'}
                  fullWidth
                  type="text"
                  name="destinationStation"
                  label={t(`${placeholdersKey}.placeholder2`)}
                  variant="outlined"
                  value={values.destinationStation}
                  onChange={handleChange}
                  helperText={
                    touched.destinationStation && errors.destinationStation
                  }
                  error={Boolean(
                    errors.destinationStation && touched.destinationStation,
                  )}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  size={isLaptop ? 'small' : 'medium'}
                  fullWidth
                  type="text"
                  name="etsngCode"
                  label={t(`${placeholdersKey}.placeholder3`)}
                  variant="outlined"
                  value={values.etsngCode}
                  onChange={handleChange}
                  helperText={touched.etsngCode && errors.etsngCode}
                  error={Boolean(errors.etsngCode && touched.etsngCode)}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  size={isLaptop ? 'small' : 'medium'}
                  fullWidth
                  type="text"
                  name="gngCode"
                  label={t(`${placeholdersKey}.placeholder4`)}
                  variant="outlined"
                  value={values.gngCode}
                  onChange={handleChange}
                  helperText={touched.gngCode && errors.gngCode}
                  error={Boolean(errors.gngCode && touched.gngCode)}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  size={isLaptop ? 'small' : 'medium'}
                  fullWidth
                  type="text"
                  name="cargoWeight"
                  label={t(`${placeholdersKey}.placeholder5`)}
                  variant="outlined"
                  value={values.cargoWeight}
                  onChange={handleChange}
                  helperText={touched.cargoWeight && errors.cargoWeight}
                  error={Boolean(errors.cargoWeight && touched.cargoWeight)}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  size={isLaptop ? 'small' : 'medium'}
                  fullWidth
                  type="text"
                  name="numberOfWagons"
                  label={t(`${placeholdersKey}.placeholder6`)}
                  variant="outlined"
                  value={values.numberOfWagons}
                  onChange={handleChange}
                  helperText={touched.numberOfWagons && errors.numberOfWagons}
                  error={Boolean(
                    errors.numberOfWagons && touched.numberOfWagons,
                  )}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  size={isLaptop ? 'small' : 'medium'}
                  fullWidth
                  type="text"
                  name="name"
                  label={t(`${placeholdersKey}.placeholder7`)}
                  variant="outlined"
                  value={values.name}
                  onChange={handleChange}
                  helperText={touched.name && errors.name}
                  error={Boolean(errors.name && touched.name)}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  size={isLaptop ? 'small' : 'medium'}
                  fullWidth
                  type="text"
                  name="typeOfWagon"
                  label={t(`${placeholdersKey}.placeholder8`)}
                  variant="outlined"
                  value={values.typeOfWagon}
                  onChange={handleChange}
                  helperText={touched.typeOfWagon && errors.typeOfWagon}
                  error={Boolean(errors.typeOfWagon && touched.typeOfWagon)}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  size={isLaptop ? 'small' : 'medium'}
                  fullWidth
                  type="text"
                  name="phoneNumber"
                  label={t(`${placeholdersKey}.placeholder9`)}
                  variant="outlined"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  error={Boolean(errors.phoneNumber && touched.phoneNumber)}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  size={isLaptop ? 'small' : 'medium'}
                  fullWidth
                  type="text"
                  name="email"
                  label={t(`${placeholdersKey}.placeholder10`)}
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  helperText={touched.email && errors.email}
                  error={Boolean(errors.email && touched.email)}
                />
              </Grid>
            </Grid>

            <DefaultButton
              sx={{ mt: { sm: 4, xs: 3 } }}
              fullWidth
              type="submit"
              color="primary"
              isLoadingButton
              loading={loading}
              variant="contained"
            >
              {t('buttons.calculate')}
            </DefaultButton>
          </form>
        );
      }}
    </Formik>
  );
};

export default CalculateForm;
