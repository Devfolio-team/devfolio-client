import { Heading, Container, RadioButton } from 'components';
import { string, func } from 'prop-types';

const PublicStatus = ({ selectedOption, onChangeRadioHandler }) => {
  return (
    <Container>
      <Heading as="h2" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        공개 여부
      </Heading>
      <Container>
        <RadioButton
          id="publicStatusRadio1"
          name="public"
          value="public"
          onChange={onChangeRadioHandler}
          checked={selectedOption === 'public'}
          label="네! 프로젝트를 사람들과 공유하고싶슾니다 😄"
          margin="0 70px 0 0"
        />
        <RadioButton
          id="publicStatusRadio2"
          name="private"
          value="private"
          onChange={onChangeRadioHandler}
          checked={selectedOption === 'private'}
          label="아니오! 혼자만 보고 싶어요 😭"
        />
      </Container>
    </Container>
  );
};

PublicStatus.propTypes = {
  /** 라디오버튼 둘 중 하나 선택된 옵션을 나타냅니다. */
  selectedOption: string.isRequired,
  /** 라디오버튼 변경된 상태를 제어하는 이벤트핸들러입니다. */
  onChangeRadioHandler: func.isRequired,
};

export default PublicStatus;
