import { string, func, array } from 'prop-types';
import { Container, Heading, ChipInputSearch } from 'components';

const TechStacks = ({ chipLabels, onKeyUpHandler, value, onChangeHandler }) => {
  return (
    <Container>
      <Heading as="h2" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        사용 기술 스택
      </Heading>
      <ChipInputSearch
        id="techStacks"
        chipLabels={chipLabels}
        onKeyUpHandler={onKeyUpHandler}
        value={value}
        onChange={onChangeHandler}
      />
    </Container>
  );
};

TechStacks.defaultProps = {
  chipLabels: [],
  value: '',
};

TechStacks.propTypes = {
  /** Chip Item(말풍선 태그)안에 들어갈 text를 가지고있는 배열입니다. */
  chipLabels: array,
  /** ChipInputSearch에 키보드로 입력된 키를 핸들링 하는 이벤트 핸들러 입니다. */
  onKeyUpHandler: func,
  /** ChipInputSearch의 인풋 박스에 입력되는 값을 설정합니다. */
  value: string,
  /** ChipInputSearch의 인풋의 변경되는 값을 감지하는 이벤트를 설정합니다. */
  onChangeHandler: func,
};

export default TechStacks;
