import { Button, Container, Heading, Paragraph, Portal } from 'components';
import React from 'react';
import styled from 'styled-components';
import { color } from 'utils';
import ajax from 'apis/ajax';
import { useHistory } from 'react-router';
import { ModalDialog } from 'containers';
import useDetectViewport from 'hooks/useDetectViewport';

const DeleteMessage = styled.span`
  @media (max-width: 479px) {
    display: block;
    margin-top: 5px;
  }
`;

const DeleteModalDialog = ({ setIsDeleteModalOpen, projectId, deleteButtonRef }) => {
  const { type } = useDetectViewport();

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
      <ModalDialog
        beforeRef={deleteButtonRef}
        setIsModalOpen={setIsDeleteModalOpen}
        width={type === 'xs' ? '70%' : '380px'}
        padding={type === 'xs' ? '20px' : '30px'}
      >
        <Heading as="h3" textAlign="center" fontWeight={700} fontSize={2.6} color="#FFFFFF">
          프로젝트 삭제
        </Heading>
        <Paragraph textAlign="center" fontSize={2} color="#FFFFFF" margin="20px 0">
          정말로 프로젝트를 <DeleteMessage>삭제하시겠습니까?</DeleteMessage>
        </Paragraph>
        <Container
          display="flex"
          justifyContent={type === 'xs' ? 'center' : 'flex-end'}
          margin="40px 0 0"
        >
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
      </ModalDialog>
    </Portal>
  );
};

export default DeleteModalDialog;
