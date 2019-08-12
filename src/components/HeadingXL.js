import styled from 'styled-components';

export default styled.h1`
  display: block;
  margin: 0 auto 10vh auto;
  font-size: 80px;
  line-height: 1.2;
  text-align: center;
  font-weight: 700;
  letter-spacing: -4px;
  background: -webkit-linear-gradient(
    240deg,
    #6a74a0,
    #AE5D8E,
    #FF9E8E,
    #AE5D8E,
    #6a74a0
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 849px) {
    font-size: 45px;
  }
`;
