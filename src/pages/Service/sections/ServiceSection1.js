import React from 'react';
import { Grid, styled, Typography, useTheme } from '@mui/material';
import OrionContainer from '../../../components/OrionContainer';
import ServiceCard from '../components/ServiceCard';
import { FlexBox } from '../../../components/FlexBox';
import { useRecoilState } from 'recoil';
import { serviceRecoil } from '../../../recoil';
import { Styled50vhLoadingBox } from '../../../components/StyledComponents';
import MatxLoading from '../../../components/MatxLoading';
import { Trans, useTranslation } from 'react-i18next';

const StyledSection = styled('section')(() => ({
  padding: '120px 0',
}));

const StyledFlexBox = styled(FlexBox)(() => ({
  gap: '60px 30px',
  flexWrap: 'wrap',

  '& .serviceCard': {
    width: 'calc(100% / 4 - 30px * 3 / 4)',
  },
  '& .serviceCardImg': {
    height: '100px',
  },
}));

const ServiceSection1 = () => {
  const translationKey = 'service.section1';
  const { t } = useTranslation();

  const theme = useTheme();

  const [serviceList] = useRecoilState(serviceRecoil);

  return (
    <StyledSection>
      <OrionContainer>
        <Grid container spacing={20} mb={15}>
          <Grid item xs={6}>
            <Typography variant={'h2'}>
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

          <Grid item xs={6}>
            <Typography
              fontWeight={'bold'}
              color={theme.palette.primary.main}
              pb={1}
              sx={{
                borderBottom: `5px solid ${theme.palette.primary.main}`,
                display: 'inline',
              }}
              variant={'subtitle2'}
            >
              {t('orionTrans')}.
            </Typography>
            <Typography variant={'subtitle2'} mt={3}>
              {t(`${translationKey}.subtitle`)}
            </Typography>
          </Grid>
        </Grid>

        <StyledFlexBox>
          {serviceList ? (
            serviceList.map(el => (
              <React.Fragment key={el.id}>
                <ServiceCard data={el} />
              </React.Fragment>
            ))
          ) : (
            <Styled50vhLoadingBox>
              <MatxLoading />
            </Styled50vhLoadingBox>
          )}
        </StyledFlexBox>
      </OrionContainer>
    </StyledSection>
  );
};

export default ServiceSection1;
