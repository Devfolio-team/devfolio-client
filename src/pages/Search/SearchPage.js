import styled, { css } from 'styled-components';
import { SearchBox, Paragraph, ProjectItem, Span } from 'components';
import { useEffect, useState } from 'react';
import ajax from 'apis/ajax';
import { applyStyle } from 'utils';
import useDetectViewport from 'hooks/useDetectViewport';

const StyledSearchPage = styled.main``;

const SearchSection = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 30px 54px;
  width: 1440px;
  @media (max-width: 1440px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const ProjectList = styled.ul`
  ${props => css`
    ${applyStyle(props)}
    display: flex;
    flex-flow: row wrap;
  `}
`;

const SearchedProjectItem = styled(ProjectItem)`
  width: 70%;
  margin: 25px auto;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

let debounce;

const SearchPage = () => {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [projects, setProjects] = useState(null);
  const viewport = useDetectViewport();
  const { vw, type } = viewport;

  useEffect(() => {
    const searchProjects = async () => {
      try {
        const response = await ajax.searchProjectByTitle(value);
        const { projectsData } = response.data;
        setProjects(projectsData);
      } catch (e) {
        throw new Error(e);
      }
    };

    searchProjects();
  }, [value]);

  const onSearchChangeHandler = e => {
    if (debounce) clearTimeout(debounce);
    debounce = setTimeout(() => {
      setValue(e.target.value);
    }, 500);
    setInputValue(e.target.value);
  };

  return (
    <StyledSearchPage>
      <SearchSection>
        <SearchBox value={inputValue} onChange={onSearchChangeHandler} />
        {projects &&
          (projects.length ? (
            <>
              <Paragraph width={type === 'xs' ? '100%' : '70%'} margin="35px auto" fontSize={2}>
                총 <Span fontWeight={700}>{projects.length}개</Span>의 프로젝트를 찾았습니다.
              </Paragraph>
              <ProjectList>
                {projects.map(project => (
                  <SearchedProjectItem
                    key={project.project_id}
                    containerMinHeight={'28.15vw'}
                    imageMaxHeight={vw >= 768 ? '28.15vw' : '49.4vw'}
                    viewport={viewport}
                    projectId={project.project_id}
                    thumbnail={project.thumbnail}
                    subject={project.subject}
                    planIntention={project.plan_intention}
                    created={project.created}
                    authorId={project.user_user_id}
                    author={project.nickname}
                    authorProfile={project.profile_photo}
                    likeCount={project.likeCount}
                    commentCount={project.commentCount}
                  />
                ))}
              </ProjectList>
            </>
          ) : (
            <Paragraph width={type === 'xs' ? '100%' : '70%'} margin="35px auto 100px" fontSize={2}>
              검색결과가 없습니다
            </Paragraph>
          ))}
      </SearchSection>
    </StyledSearchPage>
  );
};

export default SearchPage;
