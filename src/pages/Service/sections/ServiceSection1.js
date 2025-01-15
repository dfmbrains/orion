import { Grid, styled, Typography, useTheme } from '@mui/material';
import { FlexBox } from 'components/FlexBox';
import OrionContainer from 'components/OrionContainer';
import OrionLoading from 'components/OrionLoading';
import { Styled50vhLoadingBox } from 'components/StyledComponents';
import { filterArrByLanguage } from 'helpers/utils';
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { serviceRecoil } from 'store';
import ServiceCard from '../components/ServiceCard';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '120px 0',

  [theme.breakpoints.down('lg')]: { padding: '100px 0 0' },
  [theme.breakpoints.down('md')]: { padding: '80px 0 60px' },
  [theme.breakpoints.down('sm')]: { padding: '50px 0' },
}));

const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  gap: '60px 30px',
  flexWrap: 'wrap',

  [theme.breakpoints.down('md')]: { gap: '40px 20px' },
  [theme.breakpoints.down('sm')]: { gap: '30px 10px' },

  '& .serviceCard': {
    width: 'calc(100% / 4 - 30px * 3 / 4)',

    [theme.breakpoints.down('md')]: { width: 'calc(100% / 3 - 30px * 2 / 3)' },
    [theme.breakpoints.down('sm')]: { width: '100%' },
  },
}));

const ServiceSection1 = () => {
  const translationKey = 'service.section1';
  const { t, i18n } = useTranslation();

  const theme = useTheme();

  const serviceList = useRecoilValue(serviceRecoil);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (serviceList) {
      const filtered = filterArrByLanguage(serviceList, i18n.language);
      setData(filtered);
    }
  }, [serviceList, i18n.language]);

  return (
    <StyledSection>
      <OrionContainer>
        <Grid
          container
          spacing={{ md: 20, xs: 5 }}
          mb={{ md: 15, sm: 10, xs: 5 }}
        >
          <Grid item md={6} xs={12}>
            <Typography variant="h2">
              <Trans
                i18nKey={`${translationKey}.title`}
                components={{
                  span: (
                    <span style={{ color: theme.palette.primary.main }}>
                      Business
                    </span>
                  ),
                }}
              />
            </Typography>
          </Grid>

          <Grid item md={6} xs={12}>
            <Typography
              fontWeight={'bold'}
              color={theme.palette.primary.main}
              pb={1}
              sx={{
                borderBottom: `5px solid ${theme.palette.primary.main}`,
                display: 'inline',
              }}
              variant="subtitle2"
            >
              {t('orionTrans')}.
            </Typography>
            <Typography variant="subtitle2" mt={3}>
              {t(`${translationKey}.subtitle`)}
            </Typography>
          </Grid>
        </Grid>

        <StyledFlexBox>
          {serviceList ? (
            data.map((service, idx) => <ServiceCard key={idx} data={service} />)
          ) : (
            <Styled50vhLoadingBox>
              <OrionLoading />
            </Styled50vhLoadingBox>
          )}
        </StyledFlexBox>
      </OrionContainer>
    </StyledSection>
  );
};

export default ServiceSection1;
