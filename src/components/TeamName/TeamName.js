import { Heading, Paragraph, Input, Container, RadioButton } from 'components';
import { string, func } from 'prop-types';

const TeamName = ({ value, selectedOption, onChangeInputHandler, onChangeRadioHandler }) => {
  return (
    <Container>
      <Heading as="h2" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        팀 이름
      </Heading>
      <Paragraph color="#666" fontSize={1.4} lineHeight={28}>
        팀 이름이 있나요?
      </Paragraph>
      <Container>
        <RadioButton
          id="teamNameRadio1"
          name="haveTeamName"
          value="yes"
          onChange={onChangeRadioHandler}
          checked={selectedOption === 'yes'}
          label="네! 멋진 팀 이름이 있습니다 😄"
          margin="0 70px 0 0"
        />
        <RadioButton
          id="teamNameRadio2"
          name="haveTeamName"
          value="no"
          onChange={onChangeRadioHandler}
          checked={selectedOption === 'no'}
          label="아니오! 팀 이름이 없습니다 😭"
        />
      </Container>
      <Input
        id="teamNameInput"
        value={value}
        onChange={onChangeInputHandler}
        mode="hidden"
        label="팀 이름 입력칸"
        width={600}
        height={42}
        border="1px solid #EAEAEA"
        borderRadius={5}
        margin="20px 0 0 0"
        boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
      />
    </Container>
  );
};

TeamName.defaultProps = {
  id: 'teamName',
  value: '',
};

TeamName.propTypes = {
  value: string.isRequired,
  selectedOption: string,
  onChangeInputHandler: func.isRequired,
  onChangeRadioHandler: func.isRequired,
};

export default TeamName;
