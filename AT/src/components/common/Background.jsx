import orange from './../../img/OrangeBlur.svg';
import red from './../../img/RedBlur.svg';
import styled from 'styled-components';

export default function Background() {
  return (
    <>
      <Orange src={orange} />
      <Red src={red} />
    </>
  );
}

const Orange = styled.img`
  z-index: -1;

  position: absolute;
  top: 0;
  left: -50rem;
`;
const Red = styled.img`
  z-index: -1;

  width: 80%;
  position: absolute;
  bottom: -130rem;
  right: -45%;
`;
