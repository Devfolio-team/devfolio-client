import styled from 'styled-components';
import { Button, Container, Heading, Input, SVGIcon, Modal, Dialog } from 'components';

const DivisionLine = styled.div`
  border-bottom: 1px solid #454b58;
  width: 100%;
  height: 44px;
  margin-bottom: 42px;
`;

const DivisionDiv = styled.div`
  color: #ffffff;
  background-color: #2c3035;
  width: 146px;
  height: 86px;
  line-height: 86px;
  text-align: center;
  margin: 0 auto;
  font-size: 16px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const DialogForm = styled.form`
  width: 650px;
  height: 448px;
`;

const LoginModalDialog = ({ onModalClickHandler }) => {
  return (
    <>
      <Modal>
        <Dialog role="dialog" width={710} height={500} margin="21rem auto 0 auto" borderRadius={8}>
          <Heading
            as={'h2'}
            fontSize={3.5}
            color={'#FFFFFF'}
            margin="10px 0 35px 0"
            textAlign="center"
          >
            시작하기
          </Heading>
          <Container width={550} display="flex" justifyContent="space-between">
            <Button width={260} height={66} borderRadius={30} bgColor={'#ffffff'}>
              <SVGIcon type={'Google'} width={16} height={16}></SVGIcon>
              <span>Google</span>
            </Button>
            <Button width={260} height={66} borderRadius={30} bgColor={'#ffffff'}>
              <SVGIcon type={'Github'} width={16} height={16}></SVGIcon>
              <span>Github</span>
            </Button>
          </Container>
          <Container display="flex" position="relactive">
            <DivisionDiv>또는</DivisionDiv>
            <DivisionLine></DivisionLine>
          </Container>
          <DialogForm>
            <Input
              id={'dialogInput'}
              label={'다이얼로그 인풋'}
              mode="hidden"
              width={550}
              height={65}
              borderRadius={30}
              margin={'0 auto'}
              display="block"
            />
            <Button
              width={260}
              height={65}
              background={'#2c3035'}
              border={'1px solid #ffffff'}
              borderRadius={30}
              color={'#ffffff'}
              display="block"
              margin="55px auto 0 auto"
            >
              로그인 / 회원가입
            </Button>
          </DialogForm>
          <Button
            width={22}
            height={22}
            background={'transparent'}
            color={'#ffffff'}
            border={0}
            fontSize={2}
            position="absolute"
            top={20}
            right={20}
            onClick={onModalClickHandler}
          >
            X
          </Button>
        </Dialog>
      </Modal>
    </>
  );
};

export default LoginModalDialog;
