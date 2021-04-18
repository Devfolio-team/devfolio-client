import { Heading, Container, RadioButton, Input } from 'components';
import { string, func } from 'prop-types';

const DeploymentStatus = ({
  value,
  onChangeInputHandler,
  selectedOption,
  onChangeRadioHandler,
}) => {
  return (
    <Container>
      <Heading as="h2" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        배포 여부
      </Heading>
      <Container margin="0 0 20px 0">
        <RadioButton
          id="deploymentStatusRadio1"
          name="deployment"
          value="deployed"
          onChange={onChangeRadioHandler}
          checked={selectedOption === 'deployed'}
          label="네! 프로젝트를 배포하였습니다! 😄"
          margin="0 70px 0 0"
        />
        <RadioButton
          id="deploymentStatusRadio2"
          name="deployment"
          value="undeployed"
          onChange={onChangeRadioHandler}
          checked={selectedOption === 'undeployed'}
          label="아니오! 프로젝트를 배포하지 않았습니다 😭"
        />
      </Container>
      <Input
        id="deploymentStatusInput"
        value={value}
        onChange={onChangeInputHandler}
        mode="hidden"
        label="배포한 프로젝트 URL 입력 칸"
        width={600}
        height={42}
        border="1px solid #EAEAEA"
        borderRadius={5}
        boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
      />
    </Container>
  );
};

DeploymentStatus.propTypes = {
  /** 라디오버튼 둘 중 하나 선택된 옵션을 나타냅니다. */
  selectedOption: string.isRequired,
  /** 라디오버튼 변경된 상태를 제어하는 이벤트핸들러입니다. */
  onChangeRadioHandler: func.isRequired,
  /** 인풋 박스 입력되는 값을 설정합니다. */
  value: string,
  /** 인풋의 변경되는 값을 감지하는 이벤트를 설정합니다. */
  onChangeInputHandler: func.isRequired,
};

export default DeploymentStatus;
