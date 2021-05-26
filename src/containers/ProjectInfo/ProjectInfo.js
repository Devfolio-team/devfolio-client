import { Container, Image, LikeButton, SkeletonUI, SVGIcon } from 'components';
import React, { forwardRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LoadingSpinner } from 'assets/LoadingSpinner.svg';

const StyledProjectInfo = styled.section`
  position: relative;
  margin-bottom: 32px;
`;

const Subject = styled.h2`
  font-size: 4rem;
  color: #212121;
  line-height: 5rem;
  margin: 20px 0;
  padding-top: 80px;

  @media (max-width: 480px) {
    font-size: 2.7rem;
    line-height: 3.5rem;
    margin: 0;
    padding-top: 30px;
  }
`;

const TeamName = styled.span`
  display: inline-block;
  font-size: 2rem;
  color: 212121;
  @media (max-width: 480px) {
    font-size: 1.8rem;
    line-height: 10px;
    margin-top: 15px;
  }
`;

const ModifyDeleteContainer = styled.div`
  position: absolute;
  top: -50px;
  right: 0;
  @media (max-width: 1024px) {
    top: 0;
  }
  @media (max-width: 480px) {
    top: -50px;
  }
`;

const ToEditPageLink = styled(Link)`
  color: #868e96;
  font-size: 1.6rem;
  background: transparent;

  &:hover {
    color: #212121;
    font-weight: 700;
  }
`;

const StyledDeleteButton = styled.button`
  color: #868e96;
  font-size: 1.6rem;
  background: transparent;

  &:hover {
    color: #212121;
    font-weight: 700;
  }
`;

const ModileLikeButton = styled(LikeButton)`
  @media (min-width: 1024px) {
    display: none;
  }
`;

const DesktopLikeButton = styled(LikeButton)`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 22px 0;

  @media (max-width: 480px) {
    display: block;
  }
`;

const LinkToWebSiteContainer = styled.div`
  cursor: ${({ url }) => (url ? 'pointer' : 'not-allowed')};
`;

const LinkToWebSite = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  border-radius: 5px;
  height: 44px;
  text-align: center;
  line-height: 40px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ href }) => (href ? '1px solid #428BCA' : '1px solid rgba(66, 139, 202, 0.3)')};
  width: ${({ $width }) => `${$width}px`};
  color: ${({ href }) => (href ? '#428BCA' : 'rgba(66, 139, 202, 0.3)')};
  pointer-events: ${({ href }) => !href && 'none'};
  cursor: 'pointer';

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 5px;
  }

  &:hover {
    background: #428bca;
    color: #fff;

    path {
      fill: #fff;
    }
  }
`;

const WebSiteIcon = styled(SVGIcon)`
  margin-right: 7px;
  width: 20px;
  height: 20px;
`;

const WepSiteSkeleton = styled(SkeletonUI)`
  width: 200px;
  height: 44px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Spinner = styled(LoadingSpinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProjectInfo = forwardRef(
  (
    {
      subject,
      team_name,
      onDeleteModalOpenHandler,
      projectData,
      onLikeCountPlusHandler,
      isLike,
      likeCount,
      deploy_url,
      github_url,
      thumbnail,
    },
    deleteButtonRef
  ) => {
    const currentUser = useSelector(({ auth }) => auth.currentUser);

    const [isIMGLoading, setIsIMGLoading] = useState(true);

    const onIsIMGLoadingHandler = () => {
      setIsIMGLoading(false);
    };

    return (
      <StyledProjectInfo>
        {!subject ? (
          <SkeletonUI $width="300px" $height="50px" $margin="120px 0 0 0" />
        ) : (
          <Subject>{subject}</Subject>
        )}

        {subject ? (
          <TeamName>{team_name}</TeamName>
        ) : (
          <SkeletonUI $width="150px" $height="30px" $margin="10px 0 0 0" />
        )}

        {currentUser && projectData && currentUser.user_id === projectData.user_user_id && (
          <ModifyDeleteContainer>
            <ToEditPageLink to={`/edit/project/${projectData.project_id}`}>수정</ToEditPageLink>
            <StyledDeleteButton onClick={onDeleteModalOpenHandler} ref={deleteButtonRef}>
              삭제
            </StyledDeleteButton>
          </ModifyDeleteContainer>
        )}

        <Container position="absolute" left="-100px" top="0px">
          {subject ? (
            <DesktopLikeButton
              onLikeCountPlusHandler={onLikeCountPlusHandler}
              isLike={isLike}
              likeCount={likeCount}
            />
          ) : (
            <SkeletonUI circle $width="44px" $height="44px" />
          )}
        </Container>

        {subject && (
          <ModileLikeButton
            onLikeCountPlusHandler={onLikeCountPlusHandler}
            isLike={isLike}
            likeCount={likeCount}
          />
        )}

        <LinkContainer>
          {subject ? (
            <LinkToWebSiteContainer
              url={deploy_url}
              title={`배포된 사이트${deploy_url ? '로 이동' : '가 없습니다.'}`}
            >
              <LinkToWebSite target="_blank" rel="noopener" href={deploy_url} $width={200}>
                <WebSiteIcon type={deploy_url ? 'WebSite' : 'WebSiteDisable'} />
                Visit the Website
              </LinkToWebSite>
            </LinkToWebSiteContainer>
          ) : (
            <WepSiteSkeleton />
          )}

          {subject ? (
            <LinkToWebSiteContainer
              url={github_url}
              title={`깃허브${github_url ? '로 이동' : ' 주소가 없습니다.'}`}
            >
              <LinkToWebSite target="_blank" rel="noopener" href={github_url} $width={140}>
                <WebSiteIcon type={github_url ? 'GithubBlue' : 'GithubBlueDisable'} />
                GitHub
              </LinkToWebSite>
            </LinkToWebSiteContainer>
          ) : (
            <WepSiteSkeleton />
          )}
        </LinkContainer>

        <Container position="relative">
          {subject ? (
            <>
              {isIMGLoading && <Spinner />}
              <Image
                src={thumbnail}
                alt={`${subject} 썸네일`}
                onLoad={onIsIMGLoadingHandler}
                width="100%"
                borderRadius="10px"
              />
            </>
          ) : (
            <SkeletonUI width="100%" height="300px" />
          )}
        </Container>
      </StyledProjectInfo>
    );
  }
);

export default ProjectInfo;
