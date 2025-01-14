import {
  Box,
  Button,
  ButtonGroup,
  Card,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import LazyImage from 'components/LazyImage';
import OrionContainer from 'components/OrionContainer';
import OrionLoading from 'components/OrionLoading';
import { Styled50vhLoadingBox } from 'components/StyledComponents';
import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { companiesRecoil } from 'store';

const StyledSection = styled('section')(({ theme }) => ({
  padding: '90px 0 160px',

  [theme.breakpoints.down('lg')]: { padding: '70px 0 130px' },
  [theme.breakpoints.down('md')]: { padding: '50px 0 100px' },
  [theme.breakpoints.down('sm')]: { padding: '40px 0 60px' },
}));

const StyledRow = styled(Box)(({ theme }) => ({
  gap: '24px',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  position: 'relative',
  flexDirection: 'row',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: { gap: '16px' },
}));

const StyledImageBox = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'calc(100% / 5 - 24px * 4 / 5)',
  height: '120px',
  background: '#F7F7F7',
  borderRadius: '16px',

  [theme.breakpoints.down('lg')]: { width: 'calc(100% / 4 - 24px * 3 / 4)' },
  [theme.breakpoints.down('md')]: {
    width: 'calc(100% / 4 - 16px * 3 / 4)',
    height: '110px',
  },
  [theme.breakpoints.down('sm')]: { width: 'calc(100% / 2 - 16px / 2)' ,height: '95px'},

  '& img': {
    maxWidth: '80%',
    maxHeight: '80%',
  },
}));

const ClientsSection1 = () => {
  const translationKey = 'clients.section1';
  const { t } = useTranslation();

  const theme = useTheme();

  const companiesList = useRecoilValue(companiesRecoil);

  const [searchParams] = useSearchParams();
  const [part, setPart] = useState(
    searchParams.has('part') ? searchParams.get('part') : 0,
  );

  useEffect(() => {
    if (searchParams.has('part') && +searchParams.get('part') !== part) {
      setPart(+searchParams.get('part'));
    }
    // eslint-disable-next-line
  }, [searchParams]);

  return (
    <StyledSection>
      <OrionContainer>
        <ButtonGroup>
          <Button
            variant="text"
            onClick={() => setPart(0)}
            color={part === 0 ? 'primary' : 'info'}
          >
            {t(`${translationKey}.clients`)}.
          </Button>
          <Button
            variant="text"
            onClick={() => setPart(1)}
            color={part === 1 ? 'primary' : 'info'}
          >
            {t(`${translationKey}.partners`)}.
          </Button>
          <Button href="#testimonialsSection" color="info" variant="text">
            {t(`${translationKey}.testimonials`)}.
          </Button>
        </ButtonGroup>

        <Typography
          variant="h2"
          mt={{ md: 4, sm: 3, xs: 2 }}
          mb={{ md: 5, sm: 4, xs: 3 }}
        >
          <Trans
            i18nKey={`${translationKey}.title`}
            components={{
              span: (
                <span
                  style={{
                    color: theme.palette.primary.main,
                    textTransform: 'capitalize',
                  }}
                ></span>
              ),
              br: <br />,
              item:
                (part === 0
                  ? t(`${translationKey}.selectedClients.title`)
                  : t(`${translationKey}.selectedPartners.title`)) || '',
            }}
          />
        </Typography>

        <Typography variant="subtitle2">
          {part === 0
            ? t(`${translationKey}.selectedClients.subtitle`)
            : t(`${translationKey}.selectedPartners.subtitle`)}
        </Typography>

        {companiesList ? (
          <StyledRow mt={{ xs: 12 }}>
            {companiesList
              .filter(item =>
                item.type !== 'all'
                  ? part === 0
                    ? item.type === 'client'
                    : item.type === 'partner'
                  : item,
              )
              .map((el, idx) => (
                <StyledImageBox key={idx}>
                  <LazyImage alt={el.name} src={el.images.file} />
                </StyledImageBox>
              ))}
          </StyledRow>
        ) : (
          <Styled50vhLoadingBox>
            <OrionLoading />
          </Styled50vhLoadingBox>
        )}
      </OrionContainer>
    </StyledSection>
  );
};

export default ClientsSection1;
