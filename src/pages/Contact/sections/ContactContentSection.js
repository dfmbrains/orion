import { Grid, styled, Tab, Tabs, Typography } from '@mui/material';
import CreateReviewForm from 'components/CreateReviewForm';
import { FlexBox, FlexGap10 } from 'components/FlexBox';
import OrionContainer from 'components/OrionContainer';
import OrionLoading from 'components/OrionLoading';
import SocialMediaButtons from 'components/SocialMediaButtons';
import { Styled50vhLoadingBox } from 'components/StyledComponents';
import { getMapLinkByLocaleAndCoordinates } from 'helpers/utils';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { companyRecoil, selectedLanguageRecoil } from 'store';
import ContactForm from '../components/ContactForm';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '50px 0 120px',
  backgroundColor: '#F7F7F7',

  [theme.breakpoints.down('lg')]: { padding: '40px 0 80px' },
  [theme.breakpoints.down('md')]: { padding: '40px 0' },
}));

const StyledFlexGap10 = styled(FlexGap10)(() => ({
  columnGap: '20px',
  alignItems: 'flex-start',
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ContactContentSection = () => {
  const { t } = useTranslation();
  const translationKey = 'contact.content';

  const company = useRecoilValue(companyRecoil);
  const language = useRecoilValue(selectedLanguageRecoil);

  const [formVariant, setFormVariant] = useSearchParams();

  const handleChange = (event, newValue) => setFormVariant({ form: newValue });

  return (
    <StyledSection id="contactContentSection">
      <OrionContainer>
        {company ? (
          <Grid container spacing={{ md: 8, sm: 6, xs: 4 }}>
            <Grid item md={6} xs={12}>
              <Typography variant="h2">
                {t(`${translationKey}.title`)}
              </Typography>
              <Typography mt={3} mb={6} variant="subtitle2">
                {t(`${translationKey}.subtitle`)}
              </Typography>
              <Typography
                variant="body1"
                color="#9EADB4"
                textTransform="capitalize"
              >
                {t(`${translationKey}.supportCenter`)} 24 / 7
              </Typography>

              <StyledFlexGap10 my={3}>
                <a href={`tel:${company.about.phoneNumber1}`}>
                  <Typography variant="h4" color="#1B1B1B">
                    {company.about.phoneNumber1}
                  </Typography>
                </a>
                <a href={`tel:${company.about.phoneNumber2}`}>
                  <Typography variant="h4" color="#1B1B1B">
                    {company.about.phoneNumber2}
                  </Typography>
                </a>
              </StyledFlexGap10>

              <StyledFlexGap10 my={3}>
                <div>
                  <Typography variant="body1" color="#9EADB4">
                    {t(`${translationKey}.ourLocation`)}:
                  </Typography>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={getMapLinkByLocaleAndCoordinates(
                      language,
                      company.about.coordinates,
                    )}
                  >
                    <Typography variant="subtitle2" color="#1B1B1B">
                      {company.about.address[language]}
                    </Typography>
                  </a>
                </div>
                <div>
                  <Typography variant="body1" color="#9EADB4">
                    {t(`${translationKey}.writeUs`)}:
                  </Typography>
                  <a href="mailto:office.oriontrans@gmail.com">
                    <Typography variant="subtitle2" color="#1B1B1B">
                      {company.about.email}
                    </Typography>
                  </a>
                </div>
              </StyledFlexGap10>

              <Typography variant="body1" color="#9EADB4">
                {t(`${translationKey}.inSocialMedia`)}:
              </Typography>
              <SocialMediaButtons color="info" />
            </Grid>
            <Grid item md={6} xs={12}>
              <FlexBox sx={{ justifyContent: 'flex-end' }}>
                <Tabs
                  sx={{ mb: 3 }}
                  value={+formVariant.get('form')}
                  onChange={handleChange}
                >
                  <Tab
                    label={t(`${translationKey}.forms.contact.title`)}
                    {...a11yProps(0)}
                  />
                  <Tab
                    label={t(`${translationKey}.forms.review.title`)}
                    {...a11yProps(1)}
                  />
                </Tabs>
              </FlexBox>

              {+formVariant.get('form') === 0 ? (
                <ContactForm translationKey={`${translationKey}.forms`} />
              ) : (
                <CreateReviewForm translationKey={`${translationKey}.forms`} />
              )}
            </Grid>
          </Grid>
        ) : (
          <Styled50vhLoadingBox>
            <OrionLoading />
          </Styled50vhLoadingBox>
        )}
      </OrionContainer>
    </StyledSection>
  );
};

export default ContactContentSection;
