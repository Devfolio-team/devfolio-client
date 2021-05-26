import { Container, SkeletonUI, Time } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { dateFormMaker } from 'utils';

const StyledProjectRegistInfo = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 30px;
  justify-content: space-between;
  position: relative;
  @media (max-width: 768px) {
    margin-bottom: 0;
  } ;
`;

const ProjectRegistTime = styled(Time)`
  margin-right: 43px;
  font-size: 1.6rem;
  @media (max-width: 480px) {
    margin-right: 10px;
  } ;
`;

const ProjectAuthor = styled(Link)`
  white-space: nowrap;
  font-size: 1.6rem;
`;

const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 0 8px 0 0;
`;

const ProjectRegistInfo = ({
  projectData: {
    created,
    authorInfo: { nickname, profile_photo },
    user_user_id,
  },
}) => {
  const dateTime = dateFormMaker(created);
  return (
    <StyledProjectRegistInfo>
      <Container display="flex" alignItems="center" width="215px" margin="0">
        {created ? (
          <>
            <ProjectRegistTime dateTime={dateTime} children={dateTime} />

            <ProjectAuthor to={`/portfolio/${user_user_id}`}>
              <ProfileImage src={profile_photo} alt="프로필 사진" />
              {nickname}
            </ProjectAuthor>
          </>
        ) : (
          <SkeletonUI $display="inline-block" $width="200px" $height="16px" />
        )}
      </Container>
    </StyledProjectRegistInfo>
  );
};

export default ProjectRegistInfo;
