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
import ReCAPTCHAComponent from 'components/ReCAPTCHA';
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
  const [CAPTCHAResult, setCAPTCHAResult] = useState(null);

  const handleSubmitForm = values => {
    if (!CAPTCHAResult) {
      enqueueSnackbar(t('snackbarTexts.robot'), { variant: 'warning' });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID_FOR_CALCULATION,
        {
          ...values,
          'g-recaptcha-response': CAPTCHAResult,
        },
        EMAIL_JS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          enqueueSnackbar(t('snackbarTexts.letter'), { variant: 'success' });

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
                  fullWidth
                  type="text"
                  variant="outlined"
                  onChange={handleChange}
                  name="departureStation"
                  id="departureStationInput"
                  value={values.departureStation}
                  aria-label="Departure Station input"
                  size={isLaptop ? 'small' : 'medium'}
                  label={t(`${placeholdersKey}.placeholder1`)}
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
                  fullWidth
                  type="text"
                  variant="outlined"
                  onChange={handleChange}
                  name="destinationStation"
                  id="destinationStationInput"
                  value={values.destinationStation}
                  size={isLaptop ? 'small' : 'medium'}
                  aria-label="Destination Station input"
                  label={t(`${placeholdersKey}.placeholder2`)}
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
                  fullWidth
                  type="text"
                  name="etsngCode"
                  variant="outlined"
                  id="etsngCodeInput"
                  onChange={handleChange}
                  value={values.etsngCode}
                  aria-label="ETSNG Code input"
                  size={isLaptop ? 'small' : 'medium'}
                  label={t(`${placeholdersKey}.placeholder3`)}
                  helperText={touched.etsngCode && errors.etsngCode}
                  error={Boolean(errors.etsngCode && touched.etsngCode)}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  fullWidth
                  type="text"
                  name="gngCode"
                  id="gngCodeInput"
                  variant="outlined"
                  value={values.gngCode}
                  onChange={handleChange}
                  aria-label="GNG Code input"
                  size={isLaptop ? 'small' : 'medium'}
                  label={t(`${placeholdersKey}.placeholder4`)}
                  helperText={touched.gngCode && errors.gngCode}
                  error={Boolean(errors.gngCode && touched.gngCode)}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  fullWidth
                  type="text"
                  name="cargoWeight"
                  variant="outlined"
                  id="cargoWeightInput"
                  onChange={handleChange}
                  value={values.cargoWeight}
                  aria-label="Cargo Weight input"
                  size={isLaptop ? 'small' : 'medium'}
                  label={t(`${placeholdersKey}.placeholder5`)}
                  helperText={touched.cargoWeight && errors.cargoWeight}
                  error={Boolean(errors.cargoWeight && touched.cargoWeight)}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  fullWidth
                  type="text"
                  variant="outlined"
                  name="numberOfWagons"
                  onChange={handleChange}
                  id="numberOfWagonsInput"
                  value={values.numberOfWagons}
                  aria-label="Number Of Wagons input"
                  size={isLaptop ? 'small' : 'medium'}
                  label={t(`${placeholdersKey}.placeholder6`)}
                  helperText={touched.numberOfWagons && errors.numberOfWagons}
                  error={Boolean(
                    errors.numberOfWagons && touched.numberOfWagons,
                  )}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  fullWidth
                  type="text"
                  name="name"
                  id="nameInput"
                  variant="outlined"
                  value={values.name}
                  aria-label="Name input"
                  onChange={handleChange}
                  size={isLaptop ? 'small' : 'medium'}
                  helperText={touched.name && errors.name}
                  label={t(`${placeholdersKey}.placeholder7`)}
                  error={Boolean(errors.name && touched.name)}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  fullWidth
                  type="text"
                  name="typeOfWagon"
                  variant="outlined"
                  id="typeOfWagonInput"
                  onChange={handleChange}
                  value={values.typeOfWagon}
                  aria-label="Type Of Wagon input"
                  size={isLaptop ? 'small' : 'medium'}
                  label={t(`${placeholdersKey}.placeholder8`)}
                  helperText={touched.typeOfWagon && errors.typeOfWagon}
                  error={Boolean(errors.typeOfWagon && touched.typeOfWagon)}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  fullWidth
                  type="text"
                  name="phoneNumber"
                  variant="outlined"
                  id="phoneNumberInput"
                  onChange={handleChange}
                  value={values.phoneNumber}
                  aria-label="PhoneNumber input"
                  size={isLaptop ? 'small' : 'medium'}
                  label={t(`${placeholdersKey}.placeholder9`)}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                  error={Boolean(errors.phoneNumber && touched.phoneNumber)}
                />
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  fullWidth
                  type="text"
                  name="email"
                  id="emailInput"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  aria-label="Email input"
                  size={isLaptop ? 'small' : 'medium'}
                  helperText={touched.email && errors.email}
                  label={t(`${placeholdersKey}.placeholder10`)}
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
              disabled={!CAPTCHAResult}
            >
              {t('buttons.calculate')}
            </DefaultButton>

            <ReCAPTCHAComponent setResult={setCAPTCHAResult} />
          </form>
        );
      }}
    </Formik>
  );
};

export default CalculateForm;
