import { LoadingButton } from '@mui/lab';
import {
  Divider,
  Drawer,
  Icon,
  IconButton,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import PrimaryLogoCompany from 'assets/images/logo.webp';
import LightLogoCompany from 'assets/images/logoWhite.webp';
import ChangeLangButton from 'components/ChangeLangButton';
import EmailFormSection from 'components/EmailFormSection';
import { FlexBetweenAlignCenter, FlexBox, FlexGap10 } from 'components/FlexBox';
import LanguageLink from 'components/LanguageLink';
import LazyImage from 'components/LazyImage';
import OrionContainer from 'components/OrionContainer';
import { HEADER_BURGER_MENU } from 'helpers/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { companyRecoil } from 'store';

const StyledBurger = styled('div')(() => ({
  width: '100vw',

  '& .emailFormSection': {
    padding: '10px 0 24px',
  },
}));

const StyledBurgerHeader = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '8px 0 12px',
  height: '68px',

  '& .logo': {
    width: '200px',
  },

  '& .closeIcon': {
    fontSize: 32,
  },
}));

const StyledBurgerContact = styled('div')(({ theme }) => ({
  background: theme.palette.primary.light,
  padding: '12px 0',

  '& .closeIcon': {
    fontSize: 32,
  },
}));

const StyledBurgerMain = styled('div')(() => ({
  background: '#FFFFFF',
  padding: '16px 0',

  '& .logo': {
    width: '60px',
  },
}));

const StyledBurgerMenu = styled(FlexBox)(({ theme }) => ({
  flexDirection: 'column',
  rowGap: '4px',

  '& .item': {
    padding: '8px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    color: theme.palette.info.main,
  },
}));

const Burger = ({ isOpen, handleClose }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const company = useRecoilValue(companyRecoil);

  return (
    <Drawer anchor="left" open={isOpen} variant="persistent">
      <StyledBurger>
        <StyledBurgerHeader>
          <OrionContainer>
            <FlexBetweenAlignCenter>
              <LazyImage className="logo" src={LightLogoCompany} alt="orion" />

              <IconButton onClick={handleClose} color="secondary">
                <Icon className="closeIcon">close</Icon>
              </IconButton>
            </FlexBetweenAlignCenter>
          </OrionContainer>
        </StyledBurgerHeader>

        <StyledBurgerContact>
          <OrionContainer>
            <FlexGap10>
              <LoadingButton
                fullWidth
                loading={!company}
                color="primary"
                variant="contained"
                href={`mailto:${company?.about?.email}`}
                startIcon={<Icon>email</Icon>}
              >
                <Typography variant="subtitle1">
                  {t('contact.content.writeUs')}
                </Typography>
              </LoadingButton>
              {/*<Button href={`tel:${phoneNumber}`} fullWidth variant="contained" color="primary"*/}
              {/*        startIcon={<Icon>phone</Icon>}>*/}
              {/*   <Typography variant="subtitle1">{t('contacts.call')}</Typography>*/}
              {/*</Button>*/}
            </FlexGap10>
          </OrionContainer>
        </StyledBurgerContact>

        <StyledBurgerMain>
          <OrionContainer>
            <FlexBetweenAlignCenter>
              <LazyImage className="logo" src={PrimaryLogoCompany} alt="swt" />

              <ChangeLangButton color="info" />
            </FlexBetweenAlignCenter>

            <Typography
              mt={3}
              mb={2}
              pb={1}
              sx={{
                borderBottom: `3px solid ${theme.palette.primary.light}`,
              }}
              color={theme.palette.primary.main}
              variant="h3"
            >
              {t('words.menu')}
            </Typography>
            <StyledBurgerMenu>
              {HEADER_BURGER_MENU.map((item, idx) => (
                <LanguageLink
                  key={idx}
                  type="navLink"
                  to={item.link}
                  className="item"
                  onClick={handleClose}
                >
                  <Typography variant="h5">{t(item.text)}</Typography>
                  <Icon>chevron_right</Icon>
                </LanguageLink>
              ))}
            </StyledBurgerMenu>
          </OrionContainer>
        </StyledBurgerMain>

        <EmailFormSection background={'#FFF'} />

        <Divider />
        <Typography mt={1} pb={2} variant="body2" sx={{ textAlign: 'center' }}>
          Copyright © {new Date().getFullYear()} Orion-Trans{' '}
          {t('footer.privacy.right')}
        </Typography>
      </StyledBurger>
    </Drawer>
  );
};

export default Burger;
