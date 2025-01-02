import { Box, Card, styled, Typography } from '@mui/material';
import ImageComponent from 'components/ImageComponent';
import { StyledResponsiveImageBox } from 'components/StyledComponents';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { serviceDetailsRecoil } from 'store';

const StyledCard = styled(Card)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
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

const StyledLink = styled(Link)(() => ({
  display: 'block',
  width: '100%',
  height: '100%',
}));

const ServiceCard = ({ data }) => {
  const setServiceDetails = useSetRecoilState(serviceDetailsRecoil);

  return (
    <StyledCard className="serviceCard" onClick={() => setServiceDetails(data)}>
      <StyledLink to={`/services/${data.id}`}>
        <StyledResponsiveImageBox className="serviceCardImg">
          <ImageComponent src={data?.images?.file} alt={data?.images?.name} />
        </StyledResponsiveImageBox>

        <Box pt={2} pb={5} px={3}>
          <Typography mb={2} color="#1B1B1B" variant="subtitle1">
            {data.title}
          </Typography>

          <Typography variant="subtitle2" color="#6C6C6C">
            {data.subtitle}
          </Typography>
        </Box>

        <div className="serviceCardLine" />
      </StyledLink>
    </StyledCard>
  );
};

export default ServiceCard;
