import styled from "styled-components";

const ContainerTitle = styled.div`
  h1 {
    font-size: 32px;
    text-align: center;
    margin-bottom: 20px;
    position: relative;
    color: #333;
    font-weight: 700;
    &::after {
      content: "";
      display: block;
      width: 100px;
      height: 1px;
      background: red;
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
    }
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;

export { ContainerTitle };
