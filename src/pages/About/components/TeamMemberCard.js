import { styled, Typography } from '@mui/material';
import { StyledAvatar } from 'components/StyledComponents';
import { formatName } from 'helpers/utils';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedLanguageRecoil } from 'store';

const StyledBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const TeamMemberCard = ({ member }) => {
  const language = useRecoilValue(selectedLanguageRecoil);

  return (
    <StyledBox>
      <StyledAvatar src={member.images.file} alt={member.images.name} />

      <Typography mt={1} variant="subtitle1">
        {formatName(
          language,
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
