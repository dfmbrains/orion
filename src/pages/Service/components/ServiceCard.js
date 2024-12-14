import React from 'react';
import { StyledResponsiveImageBox } from '../../../components/StyledComponents';
import { Box, Card, styled, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { handleScrollToTop } from '../../../helpers/utils';
import { useSetRecoilState } from 'recoil';
import { serviceDetailsRecoil } from '../../../recoil';
import ImageComponent from '../../../components/ImageComponent';

const StyledCard = styled(Card)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  borderRadius: '10px',

  '.serviceCardLine': {
    position: 'absolute',
    height: '20px',
    bottom: '0',
    left: '0',
    transition: '0.3s',
    width: '100%',
  },
  '&:hover': {
    '.serviceCardLine': {
      transition: '0.3s',
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const ServiceCard = ({ data }) => {
  const theme = useTheme();

  const navigate = useNavigate();

  const setServiceDetails = useSetRecoilState(serviceDetailsRecoil);

  return (
    <StyledCard
      theme={theme}
      className="serviceCard"
      onClick={() => {
        setServiceDetails(data);
        handleScrollToTop();
        navigate(`/services/${data.id}`);
      }}
    >
      <StyledResponsiveImageBox className="serviceCardImg">
        <ImageComponent src={data?.images?.file} alt={data?.images?.name} />
      </StyledResponsiveImageBox>
      <Box pt={2} pb={5} px={3}>
        <Typography variant="subtitle1" mb={2}>
          {data.title}
        </Typography>
        <Typography variant="subtitle2" color="#6C6C6C">
          {data.subtitle}
        </Typography>
      </Box>
      <div className="serviceCardLine" />
    </StyledCard>
  );
};

export default ServiceCard;
