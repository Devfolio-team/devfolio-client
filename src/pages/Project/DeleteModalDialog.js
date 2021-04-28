import { Button, Container, Dialog, Heading, Modal, Paragraph, Portal } from 'components';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as X } from 'assets/X.svg';
import { color } from 'utils';
import ajax from 'apis/ajax';
import { useHistory } from 'react-router';

const StyledDeleteModalDialog = styled(Dialog)`
  position: relative;
  width: 380px;
  padding: 30px;
  border-radius: 8px;

  @media (max-width: 480px) {
    width: 70%;
    padding: 20px;
  }
`;

const DeleteMessage = styled.span`
  @media (max-width: 480px) {
    display: block;
    margin-top: 5px;
  }
`;

const XButton = styled(X)`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

const DeleteModalDialog = ({ setIsDeleteModalOpen, projectId }) => {
  const history = useHistory();

  const onDeleteModalCloseHandler = () => {
    setIsDeleteModalOpen(false);
  };

  const onDeleteProjectHandler = async () => {
    try {
      await ajax.deleteProject(projectId);
      history.push('/');
    } catch (error) {
      history.push('/page-not-found');
    }
  };

  return (
    <Portal id="modal-root">
      <Modal onClick={onDeleteModalCloseHandler}>
        <StyledDeleteModalDialog>
          <Heading as="h3" textAlign="center" fontWeight={700} fontSize={2.6} color="#FFFFFF">
            프로젝트 삭제
          </Heading>
          <Paragraph textAlign="center" fontSize={2} color="#FFFFFF" margin="20px 0">
            정말로 프로젝트를 <DeleteMessage>삭제하시겠습니까?</DeleteMessage>
          </Paragraph>
          <Container display="flex" justifyContent="flex-end" margin="40px 0 0">
            <Button
              width={80}
              height={40}
              $border="1px solid #FFFFFF"
              $color="#FFFFFF"
              $hoverColor="#2c3035"
              $hoverBackground="#FFFFFF"
              fontWeight={700}
              margin="0 10px 0 0"
              onClick={onDeleteModalCloseHandler}
            >
              취소
            </Button>
            <Button
              width={80}
              height={40}
              $color="#FFFFFF"
              $background={color.mainColor}
              $hoverBackground="#FFFFFF"
              $hoverColor={color.mainColor}
              fontWeight={700}
              onClick={onDeleteProjectHandler}
            >
              확인
            </Button>
          </Container>
          <XButton />
        </StyledDeleteModalDialog>
      </Modal>
    </Portal>
  );
};

export default DeleteModalDialog;
