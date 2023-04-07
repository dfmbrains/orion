import React from 'react';
import {Icon, Typography} from "@mui/material";

const FeatureCard = ({data}) => {
   return (
       <div className="featureCard">
          <Icon fontSize={"large"}>{data.icon}</Icon>

          <Typography mt={2} mb={1} sx={{fontWeight: "bold"}} variant={"subtitle1"}>{data.title}</Typography>
          <Typography variant={"subtitle2"}>{data.subtitle}</Typography>
       </div>
   );
};

export default FeatureCard;