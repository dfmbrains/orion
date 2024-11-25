import React from 'react';
import {
  Drawer,
  Icon,
  IconButton,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import ImageComponent from '../../components/ImageComponent';
import LightLogoCompany from '../../assets/images/logoWhite.png';
import PrimaryLogoCompany from '../../assets/images/logo.png';
import {
  FlexBetweenAlignCenter,
  FlexBox,
  FlexGap10,
} from '../../components/FlexBox';
import ChangeLangButton from '../../components/ChangeLangButton';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { companyRecoil } from '../../recoil';
import OrionContainer from '../../components/OrionContainer';
import EmailFormSection from '../../components/EmailFormSection';
import { LoadingButton } from '@mui/lab';
import { HEADER_BURGER_MENU } from '../../helpers/constants';

const StyledBurger = styled('div')(() => ({
  width: '100vw',
  height: '100vh',

  '& .logo': {
    width: '200px',
  },
}));

const StyledBurgerHeader = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  padding: '16px 0',
  height: '80px',

  '& .closeIcon': {
    fontSize: 32,
  },
}));

const StyledBurgerContact = styled('div')(({ theme }) => ({
  background: theme.palette.primary.light,
  padding: '12px 0',

  '& .logo': {
    width: '200px',
  },
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
  '& .terms': {
    position: 'absolute',
    bottom: 16,
    left: '50%',
    transform: 'translate(-50%)',
    width: 'calc(100% - 32px)',
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
    <Drawer anchor={'left'} open={isOpen}>
      <StyledBurger>
        <StyledBurgerHeader>
          <OrionContainer>
            <FlexBetweenAlignCenter>
              <ImageComponent clx="logo" src={LightLogoCompany} alt="orion" />

              <IconButton onClick={handleClose} color={'secondary'}>
                <Icon className={'closeIcon'}>close</Icon>
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
                color={'primary'}
                variant={'contained'}
                href={`mailto:${company?.about?.email}`}
                startIcon={<Icon>email</Icon>}
              >
                <Typography variant="subtitle1">
                  {t('contact.content.writeUs')}
                </Typography>
              </LoadingButton>
              {/*<Button href={`tel:${phoneNumber}`} fullWidth variant={"contained"} color={"primary"}*/}
              {/*        startIcon={<Icon>phone</Icon>}>*/}
              {/*   <Typography variant="subtitle1">{t('contacts.call')}</Typography>*/}
              {/*</Button>*/}
            </FlexGap10>
          </OrionContainer>
        </StyledBurgerContact>

        <StyledBurgerMain>
          <OrionContainer>
            <FlexBetweenAlignCenter>
              <ImageComponent clx="logo" src={PrimaryLogoCompany} alt="swt" />

              <ChangeLangButton color={'info'} />
            </FlexBetweenAlignCenter>

            <Typography
              mt={3}
              mb={2}
              pb={1}
              sx={{
                borderBottom: `3px solid ${theme.palette.primary.light}`,
              }}
              color={theme.palette.primary.main}
              variant={'h3'}
            >
              {t('words.menu')}
            </Typography>
            <StyledBurgerMenu>
              {HEADER_BURGER_MENU.map((item, idx) => (
                <NavLink
                  key={idx}
                  to={item.link}
                  className="item"
                  onClick={handleClose}
                >
                  <Typography variant={'h5'}>{t(item.title)}</Typography>
                  <Icon>chevron_right</Icon>
                </NavLink>
              ))}
            </StyledBurgerMenu>

            <Typography
              variant={'body2'}
              className={'terms'}
              sx={{ textAlign: 'center' }}
            >
              Copyright © {new Date().getFullYear()} Orion Trans{' '}
              {t('footer.privacy.right')}
            </Typography>
          </OrionContainer>
        </StyledBurgerMain>

        <EmailFormSection background={'#FFF'} />
      </StyledBurger>
    </Drawer>
  );
};

export default Burger;
