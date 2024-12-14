import React from 'react';
import ImageComponent from '../../../components/ImageComponent';
import { styled, Typography } from '@mui/material';
import { formatName } from '../../../helpers/utils';
import { useRecoilValue } from 'recoil';
import { selectedLanguageRecoil } from '../../../recoil';

const StyledPreviewMemberBox = styled('div')(() => ({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  overflow: 'hidden',
  margin: '0 auto',

  '& img': {
    width: '100%',
    height: '100%',
  },
}));

const TeamMemberCard = ({ member }) => {
  const language = useRecoilValue(selectedLanguageRecoil);

  return (
    <div>
      <StyledPreviewMemberBox>
        <ImageComponent src={member.images.file} alt={member.images.name} />
      </StyledPreviewMemberBox>

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
    </div>
  );
};

export default TeamMemberCard;
