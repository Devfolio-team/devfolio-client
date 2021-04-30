import Skeleton from '@yisheng90/react-loading';
import useDetectViewport from 'hooks/useDetectViewport';
import React from 'react';
import styled from 'styled-components';

const TypeWriterSkeletonWraper = styled.div`
  margin: 60px 0 36px;
  @media (max-width: 768px) {
    margin: 45px 0 31px;
  }
`;

const TypeWriterSkeleton = styled(Skeleton)`
  &&&& {
    width: 700px;
    height: 36px;
    @media (max-width: 1024px) {
      width: 600px;
    }
    @media (max-width: 768px) {
      width: 250px;
      height: 33px;
    }
  }
`;

function SkillsTypewriterEffectSkeleton() {
  const { isMobile } = useDetectViewport();
  return (
    <TypeWriterSkeletonWraper>
      <TypeWriterSkeleton rows={isMobile ? 3 : 1} color="#cccccc" translucent />
    </TypeWriterSkeletonWraper>
  );
}

export default SkillsTypewriterEffectSkeleton;
