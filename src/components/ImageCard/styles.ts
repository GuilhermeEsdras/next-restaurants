import styled from 'styled-components';

const Card = styled.div<{ photo: string }>`
  min-width: 90px;
  height: 90px;
  border-radius: 8px;
  background-image: url(${({ photo }) => photo});
  background-size: cover;
  p {
    margin-left: 6px;
    margin-top: 10px;
  }
`;

export default Card;
