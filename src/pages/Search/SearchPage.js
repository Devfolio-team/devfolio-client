import styled, { css } from 'styled-components';
import { SearchBox, Paragraph, Container, ProjectItem } from 'components';
import { useEffect, useState } from 'react';
import ajax from 'apis/ajax';
import { applyStyle } from 'utils';
import useDetectViewport from 'hooks/useDetectViewport';

const StyledSearchPage = styled.main``;

const ProjectList = styled.ul`
  ${props => css`
    ${applyStyle(props)}
    display: flex;
    flex-flow: row wrap;
  `}
`;

const SearchedProjectItem = styled(ProjectItem)`
  width: 100%;
  margin: 25px auto;
`;

let debounce;

const SearchPage = () => {
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [projects, setProjects] = useState(null);
  const viewport = useDetectViewport();
  const { vw } = viewport;

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
      <Container width="65%">
        <SearchBox margin="120px 0 0 0" value={inputValue} onChange={onSearchChangeHandler} />
        {projects &&
          (projects.length ? (
            <>
              <Paragraph margin="35px 0 100px 0" fontSize={2}>
                총 {projects.length}개의 프로젝트를 찾았습니다.
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
                    planIntention={project.project_intention}
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
            <Paragraph margin="35px 0 100px 0" fontSize={2}>
              검색결과가 없습니다
            </Paragraph>
          ))}
      </Container>
    </StyledSearchPage>
  );
};

export default SearchPage;
