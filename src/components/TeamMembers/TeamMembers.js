import { Member, ProjectSectionSkeleton, SectionHeading } from 'components';
import React from 'react';
import styled from 'styled-components';
import { array } from 'prop-types';

const StyledTeamMembers = styled.section``;

const MemberList = styled.ul`
  padding: 10px;
`;

const TeamMembers = ({ teamMembers }) => {
  return (
    <>
      {teamMembers.length ? (
        <StyledTeamMembers>
          <SectionHeading id="팀원목록">팀원 목록</SectionHeading>
          <MemberList>
            {teamMembers.map(member => (
              <Member
                key={member.project_team_members_id}
                name={member.member_name}
                githubUrl={member.member_github_url}
              />
            ))}
          </MemberList>
        </StyledTeamMembers>
      ) : (
        <ProjectSectionSkeleton />
      )}
    </>
  );
};

TeamMembers.propTypes = {
  /** 데이터베이스에서 받아온 팀원목록을 배열로 전달해줍니다. */
  teamMembers: array.isRequired,
};

export default TeamMembers;
