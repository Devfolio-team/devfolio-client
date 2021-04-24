import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Heading, Paragraph, SVGIcon } from 'components';
import React, { useState } from 'react';
import ko from 'date-fns/locale/ko';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';
import { Field, ErrorMessage } from 'formik';
import { func } from 'prop-types';

registerLocale('ko', ko);

const StyledContainer = styled(Container)`
  justify-self: end;
  ${({ vw }) => css`
    margin: ${vw >= 1280 ? 0 : '0 auto 60px auto'};
    width: ${vw >= 1280 ? '100%' : '80%'};
  `}
`;

const StyledDatePicker = styled(DatePicker).attrs(({ id, style }) => ({
  id,
  style,
}))`
  ${props =>
    css`
      ${applyStyle(props)}
    `}
`;

const StyledLabel = styled.label`
  ${props =>
    css`
      ${applyStyle(props)}
    `}
`;

const ProjectDuration = ({ setFieldValue, vw }) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <StyledContainer vw={vw}>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0" lineHeight="16px">
        프로젝트 기간
      </Heading>
      <Paragraph
        margin="0 0 20px 0"
        fontWeight="500"
        fontSize={1.4}
        lineHeight="16px"
        color="#666666"
      >
        프로젝트를 진행한 기간을 입력해주세요
      </Paragraph>
      <Container
        width="100%"
        display="flex"
        justifyContent="space-between"
        margin="0"
        flexFlow={vw >= 768 ? 'row nowrap' : 'column nowrap'}
      >
        <Container
          width="100%"
          height="70px"
          display="flex"
          flexFlow="column"
          margin="0"
          position="relative"
        >
          <StyledLabel $margin="0 0 10px 0" htmlFor="startDate">
            프로젝트 시작일
          </StyledLabel>
          <StyledLabel
            $position="absolute"
            $top="30px"
            $right="15px"
            $zIndex="1"
            htmlFor="startDate"
          >
            <SVGIcon type="Calendar" width="20" height="20" />
          </StyledLabel>
          <Field
            component={StyledDatePicker}
            id="startDate"
            name="startDate"
            $width="100%"
            $height="40px"
            $background="#FFFFFF"
            $border="1px solid #EAEAEA"
            $boxSizing="border-box"
            $boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
            $borderRadius="5px"
            locale="ko"
            selected={startDate}
            onChange={date => {
              const timezoneOffset = new Date().getTimezoneOffset() * 60000;
              const timezoneDate = new Date(date.getTime() - timezoneOffset);
              const dateFormat = timezoneDate.toISOString();
              setStartDate(date);
              setFieldValue('startDate', dateFormat);
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            maxDate={new Date()}
            dateFormat="yyyy-MM-dd"
            autoComplete="off"
          />
          <ErrorMessage name="startDate" />
        </Container>
        <Container
          width="100%"
          height="70px"
          display="flex"
          flexFlow="column"
          margin={vw >= 768 ? '0 0 0 30px' : '0'}
          position="relative"
        >
          <StyledLabel $margin="0 0 10px 0" htmlFor="endDate">
            프로젝트 종료일
          </StyledLabel>
          <StyledLabel $position="absolute" $top="30px" $right="15px" $zIndex="1" htmlFor="endDate">
            <SVGIcon type="Calendar" width="20" height="20" />
          </StyledLabel>
          <Field
            component={StyledDatePicker}
            id="endDate"
            name="endDate"
            $width="100%"
            $height="40px"
            $background="#FFFFFF"
            $border="1px solid #EAEAEA"
            $boxSizing="border-box"
            $boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
            $borderRadius="5px"
            locale="ko"
            selected={endDate}
            onChange={date => {
              const timezoneOffset = new Date().getTimezoneOffset() * 60000;
              const timezoneDate = new Date(date.getTime() - timezoneOffset);
              const dateFormat = timezoneDate.toISOString();
              setEndDate(date);
              setFieldValue('endDate', dateFormat);
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            maxDate={new Date()}
            minDate={startDate}
            dateFormat="yyyy-MM-dd"
            autoComplete="off"
            style={{ left: '115px' }}
          />
          <ErrorMessage name="endDate" />
        </Container>
      </Container>
    </StyledContainer>
  );
};

ProjectDuration.defaultProps = {};

ProjectDuration.propTypes = {
  /** DatePicker의 인풋의 값을 formik의 values로 설정해주는 함수입니다. */
  setFieldValue: func,
};

export default ProjectDuration;
