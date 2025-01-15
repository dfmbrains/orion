import { Box, Grid, styled, Typography } from '@mui/material';
import { FlexBetweenAlignCenter, FlexGap10 } from 'components/FlexBox';
import LanguageLink from 'components/LanguageLink';
import { Logo } from 'components/Logo';
import OrionContainer from 'components/OrionContainer';
import SocialMediaButtons from 'components/SocialMediaButtons';
import React from 'react';
import { useTranslation } from 'react-i18next';

const StyledFooter = styled('footer')(({ theme }) => ({
  padding: '60px 0 15px',
  backgroundColor: '#1B1B1B',

  [theme.breakpoints.down('lg')]: { padding: '40px 0 10px' },
  [theme.breakpoints.down('md')]: { padding: '30px 0 10px' },
  [theme.breakpoints.down('sm')]: { padding: '30px 0 20px' },
}));

const StyledColumn = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '10px',
}));

const StyledLink = styled(FlexGap10)(() => ({
  '& .activeText': {
    background: '#fff017',
    borderRadius: '6px',
    padding: '2px 8px 3px',
    fontWeight: '500',
    userSelect: 'none',
  },

  '& .link': {
    transition: '0.15s',
    cursor: 'pointer',

    '&:hover': {
      color: '#FFFFFF',
    },
  },
}));

const StyledBottomBox = styled('div')(({ theme }) => ({
  padding: '15px 20px 0 0',
  borderTop: '1px solid #2F2F2F',
  margin: '32px 0 0',

  [theme.breakpoints.down('lg')]: {
    margin: '24px 0 0',
    padding: '10px 20px 0 0',
  },
  [theme.breakpoints.down('md')]: {
    margin: '16px 0 0',
    padding: '8px 20px 0 0',
  },
}));

const Footer = () => {
  const { t } = useTranslation();

  const footerMenu = [
    {
      title: t('footer.menu.column1'),
      elements: [
        { title: t('menu.home'), link: '/#header' },
        { title: t('menu.services'), link: '/services#header' },
        { title: t('menu.company'), link: '/about#header' },
        {
          title: t('menu.clientsAndPartners'),
          link: '/clients-&-partners#header',
        },
        { title: t('menu.blogs'), link: '/blog#header' },
        { title: t('menu.contacts'), link: '/contact#header' },
        // {
        //   title: t('menu.career'),
        //   link: '/career#header',
        //   active: t('footer.activeText.career'),
        // },
      ],
    },
    // {
    //   title: t('footer.menu.column3'),
    //   elements: filterArrByLanguage(services, language).map(service => ({
    //     title: service.title,
    //     link: '/services',
    //     hash: 'header',
    //   })),
    // },
    {
      title: t('footer.menu.column2'),
      elements: [
        {
          title: t('menu.getInTouch'),
          link: '/contact?form=0#contactContentSection',
        },
        {
          title: t('menu.leaveReview'),
          link: '/contact?form=1#contactContentSection',
        },
      ],
    },
  ];

  return (
    <StyledFooter>
      <OrionContainer>
        <Grid container spacing={{ sm: 12, xs: 4 }}>
          <Grid item sm={3} xs={12}>
            <Logo />
          </Grid>
          <Grid item sm={9} xs={12}>
            <Grid
              container
              spacing={2}
              justifyContent={{ sm: 'flex-end', xs: 'center' }}
            >
              {footerMenu.map((column, idx) => (
                <Grid item md={3} sm={4} key={idx}>
                  <Typography
                    color="#FFFFFF"
                    variant="subtitle2"
                    mb={{ lg: 2, xs: 1 }}
                  >
                    {column.title}
                  </Typography>

                  <StyledColumn>
                    {column.elements.map((item, index) => (
                      <StyledLink key={index}>
                        <LanguageLink to={item.link}>
                          <Typography
                            color="#919191"
                            variant="body1"
                            className="link"
                          >
                            {item.title}
                          </Typography>
                        </LanguageLink>

                        {item?.active && (
                          <Typography variant="body2" className="activeText">
                            {item.active}
                          </Typography>
                        )}
                      </StyledLink>
                    ))}
                  </StyledColumn>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </OrionContainer>

      <StyledBottomBox>
        <OrionContainer>
          <FlexBetweenAlignCenter
            sx={{
              flexWrap: 'wrap',
              justifyContent: { sm: 'space-between', xs: 'center' },
            }}
          >
            <Typography
              sx={{
                width: { xs: '100%', sm: 'unset' },
                mb: { xs: 1, sm: 0 },
                textAlign: { xs: 'center', sm: 'unset' },
              }}
              variant="body2"
              color="#FFFFFF"
            >
              {t('footer.privacy.left')} ©{new Date().getFullYear()}{' '}
              {t('footer.privacy.right')} oriontrans.kg
            </Typography>
            <SocialMediaButtons color="secondary" />
          </FlexBetweenAlignCenter>
        </OrionContainer>
      </StyledBottomBox>
    </StyledFooter>
  );
};

export default Footer;
