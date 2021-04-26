import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from 'utils';
import { func } from 'prop-types';
import { Container, Image, SVGIcon, FormErrorMessage } from 'components';
import { Field, ErrorMessage } from 'formik';
import ajax from 'apis/ajax';
import useDetectViewport from 'hooks/useDetectViewport';

const DNDInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 9999;
  cursor: pointer;
  &:focus + div {
    outline: none;
    box-shadow: 0 0 0 10px rgb(156, 194, 226);
  }
  &:focus:not(:focus-visible) + div {
    box-shadow: none;
  }
  &:focus + img {
    outline: none;
    box-shadow: 0 0 0 10px rgb(156, 194, 226);
  }
  &:focus:not(:focus-visible) + img {
    box-shadow: none;
  }
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

const DND = ({ setFieldValue, errors }) => {
  const [src, setSrc] = useState(null);
  const [alt, setAlt] = useState(null);
  const [isDragged, setIsDragged] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const viewport = useDetectViewport();
  const { vw } = viewport;

  const onDragOverHandler = e => {
    e.preventDefault();
    setIsDragged(true);
    setIsUploaded(true);
  };

  const onDragLeaveHandler = e => {
    setIsDragged(false);
    setIsUploaded(false);
  };

  const onChange = async e => {
    if (e.target.files[0]) {
      try {
        const imageFile = await uploadImage(e.target.files[0]);
        const { src, alt } = imageFile;
        setSrc(src);
        setAlt(alt);
        setIsDragged(false);
        setIsUploaded(false);
        setFieldValue('thumbnail', imageFile);
      } catch (error) {
        throw new Error(error);
      }
    }
    return;
  };

  // TODO: 후에 컨테이너에서 관리, axios를 ajax로도 변경
  const uploadImage = async file => {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await ajax.postImage(formData);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Container
      display="inline-block"
      width={vw > 560 ? 400 : '67vw'}
      height={vw > 560 ? 400 : '67vw'}
      borderRadius="5px"
      position="relative"
    >
      <Field
        type="file"
        name="thumbnail"
        component={DNDInput}
        onChange={onChange}
        id="thumbnail"
        onDragOver={onDragOverHandler}
        onDragLeave={onDragLeaveHandler}
        accept="image/jpeg, image/png, image/jpg, image/webp, image/gif"
        multiple
        required
      />

      {src && !errors.thumbnail ? (
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
          <SVGIcon type="Camera" width="50" height="50" />
        </Display>
      )}
      {isDragged ? (
        <HoverDisplay>
          <SVGIcon type="Folder" width="70" height="70" />
          <HoverDNDMessage>Drag &amp; Drop your files here</HoverDNDMessage>
        </HoverDisplay>
      ) : null}
      <ErrorMessage name="thumbnail" component={FormErrorMessage} />
    </Container>
  );
};

DND.defaultProps = {};

DND.propTypes = {
  /** file input의 값을 formik의 values로 설정해주는 함수입니다. */
  setFieldValue: func,
};

export default DND;
