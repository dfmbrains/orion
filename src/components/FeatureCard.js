import { Icon, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const FeatureCard = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="featureCard">
      <Icon fontSize={isMobile ? 'medium' : 'large'}>{data.icon}</Icon>

      <Typography
        mt={{ lg: 2, sm: 1, xs: 0.5 }}
        mb={{ lg: 1, xs: 0.5 }}
        sx={{ fontWeight: 'bold' }}
        variant="subtitle1"
      >
        {data.title}
      </Typography>
      {data?.subtitle && (
        <Typography variant="subtitle2">{data.subtitle}</Typography>
      )}
    </div>
  );
};

export default FeatureCard;
