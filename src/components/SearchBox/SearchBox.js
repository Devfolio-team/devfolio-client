import { Container, SVGIcon, Input } from 'components';
import styled from 'styled-components';
import { string, func } from 'prop-types';

const SearchContainer = styled(Container)`
  width: 70%;
  height: 60px;
  padding-left: 20px;
  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
    padding-left: 10px;
  }
`;

const SearchInput = styled(Input)`
  font-size: 2.4rem;
  padding: 0 20px 0 10px;

  &:focus {
    box-shadow: none;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const SearchIcon = styled(SVGIcon)`
  width: 30px;
  height: 30px;
  margin-right: 5px;

  path {
    fill: #ccc;
  }
  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

const SearchBox = ({ onChange, value }) => {
  return (
    <SearchContainer
      border="1px solid #ccc"
      background="#fff"
      margin="50px auto 0"
      display="flex"
      alignItems="center"
    >
      <label aria-label="검색" htmlFor="searchInput">
        <SearchIcon type="Search" />
      </label>
      <SearchInput
        width="100%"
        height="100%"
        border="none"
        mode="hidden"
        label="검색어 입력"
        title="검색어를 입력하세요."
        id="searchInput"
        placeholder="검색어를 입력하세요."
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
