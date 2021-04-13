import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { color } from 'utils';
import { string } from 'prop-types';
import { A11yHidden, Container, Image } from 'components';

const DNDInput = styled.input`
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
  position: absolute;
  top: 0;
  font-size: 3rem;
  z-index: -2;
`;
const HoverDisplay = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #fff;
  font-size: 3rem;
  border: 2px dashed blue;
  z-index: -1;
`;

const DND = ({ id }) => {
  const [src, setSrc] = useState(null);
  const [alt, setAlt] = useState(null);
  const [isDragged, setIsDragged] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const onDragOverHandler = e => {
    e.preventDefault();
    setIsDragged(true);
    setIsUploaded(true);
  };

  const onDragLeaveHandler = e => {
    setIsDragged(false);
  };

  const onChange = async e => {
    try {
      const { src, alt } = await uploadImage(e.target.files[0]);
      setSrc(src);
      setAlt(alt);
      setIsDragged(false);
    } catch (error) {
      throw new Error(error);
    }
  };

  const uploadImage = async file => {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await axios.post('http://15.165.145.100:3002/image_upload', formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Container
      display="inline-block"
      width={400}
      height={400}
      border="1px dashed #ccc"
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
      />
      <A11yHidden as="label" htmlFor={id}>
        이미지 업로드 드래그 앤 드랍 창
      </A11yHidden>
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          object-fit="cover"
          position="absolute"
          top={0}
          left={0}
          zIndex={-1}
        />
      ) : null}
      {isUploaded ? null : <Display>Upload your Image!</Display>}
      {isDragged ? <HoverDisplay>Drop the Files Here...</HoverDisplay> : null}
    </Container>
  );
};

DND.propTypes = {
  /**드래그앤드랍의 input에 고유한 id값을 설정합니다. */
  id: string.isRequired,
};

export default DND;
