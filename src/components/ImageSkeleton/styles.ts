import styled, { keyframes } from 'styled-components';

const keyFrameLoading = keyframes`
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
}
`;

const LoadingSkeleton = styled.div<{ width: number; height: number }>`
  background-color: gray;
  border-radius: 6px;
  margin-bottom: 10px;
  min-width: ${({ width }) => width};
  height: ${({ height }) => height};

  animation: ${keyFrameLoading} 500ms infinite alternate;
`;

export default LoadingSkeleton;
