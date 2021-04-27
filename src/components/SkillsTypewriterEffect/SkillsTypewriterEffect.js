import React from 'react';
import styled from 'styled-components';
import Typewiter from 'react-simple-typewriter';

const CustomTypewriter = styled.div`
  @keyframes cursorAnimation {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  & > .typewriterEffectWraper > span:last-of-type {
    animation: cursorAnimation 1s infinite;
  }
  line-height: 3.3rem;
  margin: 60px 0 40px;
  font-size: 3rem;
  font-weight: 700;
  color: #212121;
  @media (max-width: 1024px) {
    font-size: 2.7rem;
  }
  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin: 45px 0 35px;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const TypewriterEffectWraper = styled.div`
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const SkillsTypewriterEffect = ({ skills }) => {
  return (
    <CustomTypewriter aria-label={`저는 ${skills} 할 줄 아는 개발자입니다.`}>
      {skills.length ? '저는 ' : null}
      <TypewriterEffectWraper className="typewriterEffectWraper">
        <Typewiter
          loop
          cursor
          typeSpeed={150}
          deleteSpeed={140}
          delaySpeed={1500}
          words={skills.length ? skills : ['등록된 기술스택이 없습니다 :(']}
        />
      </TypewriterEffectWraper>
      {skills.length ? ' 할 줄 아는 개발자 입니다.' : null}
    </CustomTypewriter>
  );
};

export default SkillsTypewriterEffect;
