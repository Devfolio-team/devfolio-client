import { Container, SVGIcon, Input } from 'components';
import styled from 'styled-components';
import { string, func } from 'prop-types';

const SearchContainer = styled(Container)`
  @media (max-width: 768px) {
    height: 40px;
  }
`;

const SearchInput = styled(Input)`
  &:focus {
    box-shadow: none;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SearchIcon = styled(SVGIcon)`
  path {
    fill: #ccc;
  }
`;

const SearchBox = ({ margin, onChange, value }) => {
  return (
    <SearchContainer
      width="100%"
      height="60px"
      border="1px solid #ccc"
      background="#fff"
      margin={margin}
      display="flex"
      alignItems="center"
      padding="0 0 0 20px"
    >
      <SearchIcon type="Search" />
      <SearchInput
        width="100%"
        height="100%"
        margin="0 0 0 20px"
        padding="0"
        inputFontSize={3}
        border="none"
        mode="hidden"
        label="검색어 입력 칸"
        id="searchInput"
        placeholder="검색어를 입력하세요"
        value={value}
        onChange={onChange}
      />
    </SearchContainer>
  );
};

SearchBox.defaultProps = {};

SearchBox.propTypes = {
  /** 서치박스의 바깥쪽 여백을 설정합니다 */
  margin: string,
  /** 서치박스의 인풋의 값을 조정하는 함수입니다. */
  onChange: func,
  /** 서치박스의 인풋의 값입니다. */
  value: string,
};

export default SearchBox;
