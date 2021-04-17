import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { color } from 'utils';
import { string, func } from 'prop-types';
import { Container, Image, SVGIcon, Input } from 'components';

const DNDInput = styled(Input)`
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 9999;
`;

const Display = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  background: ${color.mainColor};
  border-radius: 5px;
  position: absolute;
  top: 0;
  font-size: 3rem;
  z-index: -2;
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
`;
const HoverDisplay = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #5db3fd;
  font-size: 3rem;
  border: 1px dashed ${color.mainColor};
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  z-index: -1;
`;

const RoundBackground = styled.div`
  width: 80px;
  height: 80px;
  background: #a9c1ff;
  position: absolute;
  border-radius: 50%;
  z-index: -2;
`;

const HoverDNDMessage = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${color.white};
  margin-top: 30px;
`;

const DND = ({ id, src, alt, onChange, value }) => {
  // TODO: 후에 컨테이너에서 상태 관리
  // const [src, setSrc] = useState(null);
  // const [alt, setAlt] = useState(null);
  const [isDragged, setIsDragged] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const onDragOverHandler = e => {
    e.preventDefault();
    setIsDragged(true);
    setIsUploaded(true);
  };

  const onDragLeaveHandler = e => {
    setIsDragged(false);
    setIsUploaded(false);
  };

  // TODO: 후에 컨테이너에서 핸들러 관리
  // const onChange = async e => {
  //   try {
  //     console.log(e.target.value);
  //     const { src, alt } = await uploadImage(e.target.files[0]);
  //     setSrc(src);
  //     setAlt(alt);
  //     setIsDragged(false);
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  // TODO: 후에 컨테이너에서 관리
  // const uploadImage = async file => {
  //   const formData = new FormData();
  //   formData.append('image', file);
  //   try {
  //     const res = await axios.post('http://15.165.145.100:3002/image_upload', formData, {
  //       headers: {
  //         'Content-type': 'multipart/form-data',
  //       },
  //     });
  //     return res.data;
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // };

  return (
    <Container
      display="inline-block"
      width={400}
      height={400}
      border="1px solid #EAEAEA"
      borderRadius="5px"
      position="relative"
    >
      <DNDInput
        onDragOver={onDragOverHandler}
        onDragLeave={onDragLeaveHandler}
        accept="image/jpeg, image/png, image/jpg, image/webp"
        multiple
        type="file"
        id={id}
        onChange={onChange}
        value={value}
        mode="hidden"
        label="이미지 업로드 드래그 앤 드랍 창"
      />
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          object-fit="cover"
          position="absolute"
          top="0"
          left="0"
          zIndex={-1}
          borderRadius="5px"
        />
      ) : null}
      {isUploaded ? null : (
        <Display>
          <RoundBackground />
          <SVGIcon type="Camera" />
        </Display>
      )}
      {isDragged ? (
        <HoverDisplay>
          <SVGIcon type="Folder" />
          <HoverDNDMessage>Drag &amp; Drop your files here</HoverDNDMessage>
        </HoverDisplay>
      ) : null}
    </Container>
  );
};

DND.defaultProps = {
  id: 'dnd-1',
  alt: '',
};

DND.propTypes = {
  /**드래그앤드랍의 input에 고유한 id값을 설정합니다. */
  id: string.isRequired,
  /** 이미지의 경로를 설정합니다. */
  src: string,
  /** 이미지의 대체 텍스트를 설정합니다. */
  alt: string.isRequired,
  /** 인풋의 변경되는 값을 감지하는 이벤트를 설정합니다. */
  onChange: func,
  /** 인풋 박스에 들어오는 이미지경로 값을 설정합니다. */
  value: string,
};

export default DND;
