import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { color } from 'utils';

// TODO: 컨테이너 컴포넌트로 수정필요
const DNDContainer = styled.div`
  display: inline-block;
  width: 400px;
  height: 400px;
  border: 1px dashed #ccc;
  position: relative;
`;
const DNDInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 9999;
`;

// TODO: a11y-hidden 컴포넌트로 수정필요
const Label = styled.label``;

// TODO: 이미지 컴포넌트로 수정필요
const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
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

const DND = () => {
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
      console.error(error);
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
      console.error(error);
    }
  };

  return (
    <DNDContainer>
      <DNDInput
        onDragOver={onDragOverHandler}
        onDragLeave={onDragLeaveHandler}
        accept="image/jpeg, image/png, image/jpg, image/webp"
        multiple
        type="file"
        id="dummy"
        onChange={onChange}
      />
      <Label htmlFor="dummy"></Label>
      {src ? <Image src={src} alt={alt} /> : null}
      {isUploaded ? null : <Display>Upload your Image!</Display>}
      {isDragged ? <HoverDisplay>Drop the Files Here...</HoverDisplay> : null}
    </DNDContainer>
  );
};

export default DND;
