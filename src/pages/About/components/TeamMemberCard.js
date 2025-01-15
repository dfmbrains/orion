import { styled, Typography } from '@mui/material';
import { StyledAvatar } from 'components/StyledComponents';
import { formatName } from 'helpers/utils';
import React from 'react';
import { useTranslation } from 'react-i18next';

const StyledBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const TeamMemberCard = ({ member }) => {
  const { i18n } = useTranslation();

  return (
    <StyledBox>
      <StyledAvatar
        src={member.images.file}
        alt={member.images.name}
        imgProps={{ loading: 'lazy' }}
      />

      <Typography mt={1} variant="subtitle1">
        {formatName(
          i18n.language,
          member.lastName,
          member.firstName,
          member.midName,
        )}
      </Typography>

      {/*<Typography my={1} variant="body1">*/}
      {/*  {member.about}*/}
      {/*</Typography>*/}

      <Typography color="#9EADB4" variant="body2">
        {member.position}
      </Typography>
    </StyledBox>
  );
};

export default TeamMemberCard;
