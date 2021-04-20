import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Heading, Paragraph, SVGIcon } from 'components';
import React, { useState } from 'react';
import ko from 'date-fns/locale/ko';
import styled, { css } from 'styled-components';
import { applyStyle } from 'utils';
registerLocale('ko', ko);

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

const ProjectDuration = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  return (
    <div>
      <Heading as="h2" color="#212121" fontSize={1.6} margin="0 0 20px 0" lineHeight="16px">
        프로젝트 기간
      </Heading>
      <Paragraph
        margin="0 0 20px 0"
        fontWeight="500"
        fontSize="14px"
        lineHeight="16px"
        color="#666666"
      >
        프로젝트를 진행한 기간을 입력해주세요
      </Paragraph>
      <Container width="600px" display="flex" justifyContent="space-between" margin="0">
        <Container height="70px" display="flex" flexFlow="column" margin="0" position="relative">
          <StyledLabel $margin="0 0 10px 0" for="startDate">
            프로젝트 시작일
          </StyledLabel>
          <StyledLabel $position="absolute" $top="30px" $right="15px" $zIndex="1" for="startDate">
            <SVGIcon type="Calendar" />
          </StyledLabel>
          <StyledDatePicker
            id="startDate"
            $width="270px"
            $height="40px"
            $background="#FFFFFF"
            $border="1px solid #EAEAEA"
            $boxSizing="border-box"
            $boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
            $borderRadius="5px"
            locale="ko"
            selected={startDate}
            onChange={data => setStartDate(data)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            maxDate={new Date()}
            dateFormat="yyyy-MM-dd"
          />
        </Container>
        <Container
          height="70px"
          display="flex"
          flexFlow="column"
          margin="0 0 0 30px"
          position="relative"
        >
          <StyledLabel $margin="0 0 10px 0" for="endDate">
            프로젝트 종료일
          </StyledLabel>
          <StyledLabel $position="absolute" $top="30px" $right="15px" $zIndex="1" for="endDate">
            <SVGIcon type="Calendar" />
          </StyledLabel>
          <StyledDatePicker
            id="endDate"
            $width="270px"
            $height="40px"
            $background="#FFFFFF"
            $border="1px solid #EAEAEA"
            $boxSizing="border-box"
            $boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
            $borderRadius="5px"
            locale="ko"
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            maxDate={new Date()}
            dateFormat="yyyy-MM-dd"
            style={{ left: '115px' }}
          />
        </Container>
      </Container>
    </div>
  );
};

export default ProjectDuration;
